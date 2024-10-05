"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import BuptHeader from "@/app/main/_component/Header";
import BuMeetLogo from "../../../../public/icon-192x192.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { seoleimFont } from "@/font/seoleimFont";
import { useQaListStorage } from "@/app/main/_store/useQaListStorage";
import { useShallow } from "zustand/react/shallow";
import { TQuestionOption } from "@/type/bupt";
import { questionOptionList } from "@/data/bupt";
import SideChatListScreen from "@/app/main/(bupt)/_component/SideChatListScreen";
import useModal from "@/app/_hook/useModal";
import { postChatQuery } from "@/service/chat";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CgProfile } from "react-icons/cg";
import { IoMdWarning } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function BuptPage() {
  const [searchInput, setSearchInput] = useState("");
  const {
    questionOption,
    setQuestionOption,
    qaList,
    setQaList,
    addQaList,
    reset,
  } = useQaListStorage(useShallow((state) => state));
  const {
    isModalOpen: isScreenOpen,
    openModal: openScreen,
    closeModal: closeScreen,
  } = useModal();
  const [buptStatus, setBuptStatus] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");

  const selectQuestionOption = (value: TQuestionOption) => {
    setQuestionOption(value);
    setQaList([
      {
        description:
          questionOptionList.find((item) => item.value === value)?.question ??
          questionOptionList[0].question,
        type: "bupt",
      },
    ]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!questionOption || !searchInput) return;

    setTimeout(() => {
      setBuptStatus("loading");
    }, 500);

    addQaList({
      description: searchInput,
      type: "me",
    });
    setSearchInput("");
    try {
      const res = await postChatQuery({
        question: searchInput,
      });
      if (res.data.result) {
        setBuptStatus("done");
        console.log(res.data.data);
        addQaList({
          description: res.data.data.results.generate.generation,
          type: "bupt",
        });
      } else {
        setBuptStatus("error");
        alert(res.data.message ?? "AI 응답 중 서버 오류가 발생했습니다!");
      }
    } catch (error) {
      setBuptStatus("error");
      console.error(error);
    }
  };

  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  // qaList가 업데이트될 때마다 마지막 아이템으로 스크롤
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qaList]);

  const handleReset = () => {
    if (!confirm("새 채팅을 시작하시겠나요? \n Are you adding a new chat?"))
      return;
    reset();
  };

  return (
    <main className={"h-screen"}>
      <SideChatListScreen
        isScreenOpen={isScreenOpen}
        closeScreen={closeScreen}
      />
      <BuptHeader onAddChat={handleReset} openScreen={openScreen} />
      <section
        className={
          "w-full h-full flex flex-col gap-y-24 pt-72 pb-132 bg-white overflow-y-scroll p-12 py-16 scroll-hidden"
        }>
        <BuptQuestionStart
          disabled={questionOption !== null}
          questionOption={questionOption}
          selectQuestionOption={selectQuestionOption}
        />
        {qaList.map((item, index) =>
          item.type === "me" ? (
            <UserQuestionTemplate key={index} userQuestion={item.description} />
          ) : (
            <BuptAnswerTemplate
              key={index}
              buptAnswer={item.description}
              isLatest={index === qaList.length - 1}
            />
          ),
        )}

        {buptStatus === "error" && (
          <BuptAnswerTemplate
            buptAnswer={
              <span
                className={"text-red-500 text-16 flex items-center gap-x-4"}>
                <IoMdWarning size={16} color={"red"} />
                AI 응답 중 서버 오류가 발생했습니다!
              </span>
            }
          />
        )}
        <div>
          {buptStatus === "loading" && <BuptLoadingTemplate />}
          <div ref={lastMessageRef} />
        </div>
      </section>
      <SearchBar
        disabled={questionOption === null}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

function SearchBar({
  searchInput,
  setSearchInput,
  onSubmit,
  disabled,
}: {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
}) {
  return (
    <form
      id={"search-bar"}
      onSubmit={onSubmit}
      className={
        "px-12 fixed bottom-60 w-full h-72 flex gap-x-8 items-center bg-white"
      }>
      <input
        className={
          "w-full h-fit min-h-48 px-24 text-16 text-black bg-bg-default rounded-full focus:outline-none disabled:opacity-50"
        }
        disabled={disabled}
        placeholder={
          disabled
            ? "Please select the above option."
            : "Ask me anything you're curious about."
        }
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        disabled={disabled || searchInput?.length < 5}
        type={"submit"}
        className={
          "bg-bg-sea p-16 rounded-full flex items-center justify-center disabled:opacity-50"
        }>
        <FaMagnifyingGlass color={"white"} size={16} />
      </button>
    </form>
  );
}

function BuptQuestionStart({
  disabled,
  questionOption,
  selectQuestionOption,
}: {
  disabled: boolean;
  questionOption: TQuestionOption | null;
  selectQuestionOption: (value: TQuestionOption) => void;
}) {
  return (
    <BuptAnswerTemplate
      buptAnswer={
        <div className={"w-full"}>
          Hello! I'm here to help you find information around Busan. What would
          you like to explore? Please select one of the options below!
          <div className={"grid grid-cols-2 w-full gap-8 mt-16 text-16"}>
            {questionOptionList.map((item) => (
              <button
                key={item.value}
                disabled={disabled}
                className={`w-full h-106 rounded-12 flex px-8 items-center justify-center py-16 border-1 disabled:opacity-50 ${questionOption === item.value ? "bg-bg-sea text-white" : "bg-white text-black"}`}
                onClick={() => selectQuestionOption(item.value)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
}

function BuptLoadingTemplate() {
  return <BuptAnswerTemplate buptAnswer={<Skeleton count={2} />} />;
}

function BuptAnswerTemplate({
  buptAnswer,
  isLatest = false,
}: {
  buptAnswer: string | JSX.Element;
  isLatest?: boolean;
}) {
  return (
    <article className={"flex flex-col gap-y-16"}>
      <div className={"flex items-center gap-x-8"}>
        <Image
          src={BuMeetLogo}
          width={48}
          height={48}
          className={"rounded-16"}
          alt={"bupt-profile"}
        />
        <label className={`text-20 ${seoleimFont.className}`}>BuMeet</label>
      </div>
      <div id={"paragraph"} className={"w-full px-12 text-20"}>
        {typeof buptAnswer === "string" && isLatest ? (
          <TypeAnimation
            sequence={[buptAnswer]}
            wrapper={"div"}
            cursor={false}
            className={"w-full"}
          />
        ) : (
          buptAnswer
        )}
      </div>
    </article>
  );
}

function UserQuestionTemplate({ userQuestion }: { userQuestion: string }) {
  return (
    <article className={"flex flex-col gap-y-16"}>
      <div className={"flex items-center gap-x-8"}>
        <div
          className={
            "border-1 w-48 h-48 rounded-16 flex items-center justify-center"
          }>
          <CgProfile size={36} />
        </div>
        <label className={`text-20 ${seoleimFont.className}`}>Me</label>
      </div>
      <div id={"answer-paragraph"} className={"w-full px-12 text-20"}>
        {userQuestion}
      </div>
    </article>
  );
}

"use client";

import { IMentoringDetail } from "@/type/mentoring";
import Modal from "@/app/_component/Modal";
import { seoleimFont } from "@/font/seoleimFont";
import { patchMentoringApplication } from "@/service/mentoring";
import { useUserInfoStore } from "@/app/_store/useUserInfoStore";
import { useShallow } from "zustand/react/shallow";
import { useRouter } from "next/navigation";

export default function MentoringDetailModal({
  mentoringId,
  mentoringDetail,
  isModalOpen,
  closeModal,
}: {
  mentoringId: number | null;
  mentoringDetail: IMentoringDetail | null;
  isModalOpen: boolean;
  closeModal: () => void;
}) {
  const router = useRouter();
  const { userInfo } = useUserInfoStore(
    useShallow((state) => ({ userInfo: state.userInfo })),
  );

  const handleRegisterMentoring = async () => {
    console.log(mentoringId, userInfo?.username);
    if (!userInfo?.username || !mentoringId) {
      alert(
        "[Error] An error has occurred with your information. Return to the login page.",
      );
      router.push("/");
      return;
    }

    const res = await patchMentoringApplication({
      pk: mentoringId,
      mentoring_request: true,
      mentee_username: userInfo?.username,
    });
    console.log(res.data);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <article
        className={
          "w-300 h-600 bg-white rounded-12 py-24 flex flex-col gap-y-16 items-center"
        }>
        <h4 id={"mentoring-title"} className={"text-20 text-text-title px-24"}>
          Title: {mentoringDetail?.title}
        </h4>
        <div
          id="detail-info-list"
          className={"flex flex-col w-full items-center px-24"}>
          <InfoItem label={"Mento"} value={mentoringDetail?.mento_username} />
          <InfoItem label={"Mentee"} value={mentoringDetail?.mentee_username} />
          <InfoItem label={"Location"} value={mentoringDetail?.location} />
          <InfoItem
            label={"Language"}
            value={mentoringDetail?.mento_language}
          />
          <InfoItem
            label={"Match"}
            value={mentoringDetail?.match ? "Yes" : "No"}
          />
        </div>
        <hr className={"w-full h-1"} />
        <div
          id={"comment-list"}
          className={"flex flex-col h-fit w-full overflow-hidden px-24"}>
          <h3 className={"text-16 mb-16"}>Comments</h3>
          <ul
            className={
              "flex flex-col h-400 overflow-y-auto scroll-hidden border-1 rounded-12 p-8"
            }>
            {mentoringDetail?.comments &&
            mentoringDetail.comments.length > 0 ? (
              mentoringDetail?.comments.map((comment, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-x-4 text-14 text-text-sub py-4 ${mentoringDetail?.comments.length - 1 === index ? "" : "border-b-1"}`}>
                  {comment}
                </li>
              ))
            ) : (
              <p
                className={
                  "text-14 text-text-sub flex w-full h-full items-center justify-center"
                }>
                No comments
              </p>
            )}
          </ul>
        </div>
        <button
          onClick={handleRegisterMentoring}
          className={`w-[calc(100%-48px)] rounded-12 border-1 py-8 text-20 bg-bg-sea text-white ${seoleimFont.className}`}>
          Register
        </button>
      </article>
    </Modal>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string | undefined | null;
}) {
  if (value === undefined) return null;

  return (
    <div className={"flex items-center w-full"}>
      <label className={"text-14 text-text-sub"}>{label}</label>
      <span className={"ml-auto"}>
        {value === null ? (
          <span className={"text-text-sub text-14"}>-</span>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

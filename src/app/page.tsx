"use client";

import { seoleimFont } from "@/font/seoleimFont";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/images/landing-bg.jpg";
import WaveAnimationText from "@/app/_component/WaveAnimationText";
import { useEffect, useState } from "react";
import LandingLoginForm from "@/app/_component/LandingLoginForm";
import useModal from "@/app/_hook/useModal";
import Modal from "@/app/_component/Modal";
import { IoMdClose } from "react-icons/io";

type TStep = "landing" | "login";

export default function LandingHome({
  searchParams,
}: {
  searchParams: { step?: "login" };
}) {
  const [step, setStep] = useState<TStep>(searchParams?.step || "landing");

  const { isModalOpen, openModal, closeModal } = useModal();
  useEffect(() => {
    openModal();
  }, []);

  return (
    <main className={"w-full h-full flex flex-col items-center bg-bg-sea"}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div
          className={
            "w-340 h-380 p-24 flex flex-col gap-y-8 bg-white rounded-12 relative"
          }>
          <button onClick={closeModal} className={"absolute right-12 top-12"}>
            <IoMdClose size={24} />
          </button>
          <h2 className={"text-20 text-title"}>
            Hello, <span className={"text-24 font-bold "}>DIVE 2024</span>
          </h2>
          <p className={"text-14 text-text-sub"}>
            저희는 트랙 2 "부산시 산하공사 협의체"에 참여한 "블루진누들"
            팀입니다! "BuMeet"은 유학하기 좋은 부산, 다양한 외국인들의 부산
            정착을 좀 더 쉽고 편하고 빠르게 도와주는 서비스입니다. 한 번
            체험해보시고 후기 남겨주시면 감사하겠습니다 :) 외국인을 타겟한
            서비스이니만큼, "부산시청년" 계정보다는 "유학생" 계정으로 접속하는
            것을 추천드립니다!
          </p>
          <span className={""}>유학생 계정: qqq, 비번: 1234</span>
          <span className={""}>부산시 청년 계정: bbb, 비번: 1234</span>
          <p className={"text-14 text-text-sub"}>
            IOS 유저분들은 "공유" 버튼 누르고 메뉴 하단에 "홈 화면에 추가"를
            눌러주시기 바랍니다!
          </p>
          <p className={"text-14 text-text-sub"}>
            갤럭시 유저분들은 우상단의 설정 버튼 누르고 "홈 화면에 추가"를
            눌러주시기 바랍니다!
          </p>
        </div>
      </Modal>
      <h1
        className={`z-10 font-bold text-white text-124 fonts-bold leading-124 ${seoleimFont.className} mt-48`}>
        <WaveAnimationText text={"Bu"} delay={0} />
        <WaveAnimationText text={"Meet"} delay={2} />
      </h1>
      <Image
        alt={"background-image"}
        src={BackgroundImage}
        width={400}
        height={360}
        className={"w-screen absolute top-0 bottom-0 m-auto p-24"}
      />
      <div className="overflow-hidden w-full mt-auto">
        {/* 캐러셀을 감싸는 컨테이너 */}
        <div
          className={`flex w-full justify-center transition-transform duration-500 ease-in-out transform ${
            step === "landing" ? "translate-x-0" : "-translate-x-1/2"
          }`}
          style={{ width: "200%" }}>
          <LandingForm setStep={setStep} />
          <LandingLoginForm />
        </div>
      </div>
    </main>
  );
}

function LandingForm({ setStep }: { setStep: (step: TStep) => void }) {
  return (
    <div
      className={
        "flex gap-x-16 items-center p-24 w-[100vw] justify-end mt-auto"
      }>
      <button
        onClick={() => setStep("login")}
        className={`w-full h-48 rounded-12 flex items-center justify-center text-24 text-white font-hsan-tokki`}>
        Login
      </button>
      <Link
        href={"/signup/select"}
        className={`w-full h-48 rounded-12 flex items-center justify-center text-24 text-white font-hsan-tokki`}>
        Signup
      </Link>
    </div>
  );
}

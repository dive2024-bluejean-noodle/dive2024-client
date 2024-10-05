"use client";

import { seoleimFont } from "@/font/seoleimFont";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/images/landing-bg.jpg";
import WaveAnimationText from "@/app/_component/WaveAnimationText";
import { useState } from "react";
import LandingLoginForm from "@/app/_component/LandingLoginForm";

type TStep = "landing" | "login";

export default function LandingHome() {
  const [step, setStep] = useState<TStep>("landing");

  return (
    <main className={"w-full h-full flex flex-col items-center bg-bg-sea"}>
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
          <LandingForm setStep={setStep} isVisible={step === "landing"} />
          <LandingLoginForm />
        </div>
      </div>
    </main>
  );
}

function LandingForm({
  setStep,
  isVisible,
}: {
  setStep: (step: TStep) => void;
  isVisible: boolean;
}) {
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

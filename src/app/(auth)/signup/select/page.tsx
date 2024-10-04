"use client";

import { seoleimFont } from "@/font/seoleimFont";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

type TStudentStatus = "none" | "international" | "local";

export default function SignupSelectPage() {
  const [tempStatus, setTempStatus] = useState<TStudentStatus>("none");

  const toggleStatus = (status: TStudentStatus) => {
    if (tempStatus !== status) {
      setTempStatus(status);
    }
  };

  const router = useRouter();
  const hendleNextStep = () => {
    router.push("/signup/register?status=" + tempStatus);
  };

  return (
    <main className={"flex flex-col h-full relative"}>
      <div className={"flex flex-col h-full"}>
        <button
          className={`z-10 w-full flex justify-center items-center text-center font-bold text-white  ${seoleimFont.className} transition-all duration-500 ${tempStatus === "international" ? "h-3/4 text-60" : tempStatus === "none" ? "h-full text-48 " : "h-1/4 text-48 text-gray-400"}`}
          onClick={() => toggleStatus("international")}
        >
          {tempStatus === "international" ? (
            <span>
              You're an international student,
              <br />
              aren't you?
              <br />
              <FaArrowRight
                className={"ml-auto mt-12 mr-24 cursor-pointer"}
                onClick={hendleNextStep}
              />
            </span>
          ) : (
            "International Student"
          )}
        </button>
        <hr className={"h-12 bg-bg-sand w-full"} />
        <p
          className={`absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full flex justify-start items-center text-bg-sand font-bold text-72 ${tempStatus === "none" ? "" : "hidden"}`}
        >
          Who are
          <br />
          you?
        </p>
        <button
          className={`z-10 w-full flex justify-center items-center text-center font-bold text-white text-48 ${seoleimFont.className} transition-all duration-500 ${tempStatus === "local" ? "h-3/4 text-60" : tempStatus === "none" ? "h-full text-48 " : "h-1/4 text-48 text-gray-400"}`}
          onClick={() => toggleStatus("local")}
        >
          {tempStatus === "local" ? (
            <span>
              부산 대학생
              <br />
              이시군요?
              <br />
              <FaArrowRight
                className={"ml-auto mt-12 cursor-pointer"}
                onClick={hendleNextStep}
              />
            </span>
          ) : (
            "부산 대학생"
          )}
        </button>
      </div>
    </main>
  );
}

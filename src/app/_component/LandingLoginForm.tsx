"use client";

import { useUserInfoStore } from "@/app/_store/useUserInfoStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserInfo, postLoginUser } from "@/service/user";

export default function LandingLoginForm() {
  const { setUserInfo } = useUserInfoStore();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPw, setInputPw] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputUsername || !inputPw) {
      alert(
        "닉네임 또는 비밀번호를 입력해주세요. \n Please input username or password.",
      );
      return;
    }

    const res = await postLoginUser({
      username: inputUsername,
      password: inputPw,
    });

    if (res.data.result) {
      alert("로그인 성공! \n Success Login");
      const res2 = await getUserInfo();
      if (res2.data.result) {
        setUserInfo(res2.data.data);
        if (res2.data.data.mento) {
          router.push("/busan");
        } else {
          router.push("/main");
        }
      } else {
        alert(res2.data.message ?? "로그인 중 서버 오류가 발생했습니다!");
      }
    } else {
      alert(res.data.message ?? "로그인에서 서버 오류가 발생했습니다!");
    }

    // if (
    //   inputUsername === mockBusanStudent.username &&
    //   inputPw === mockBusanStudent.password
    // ) {
    //   setUserInfo(mockBusanStudent);
    //   alert("부산 대학생 로그인 성공! \n Success Login");
    //   router.push("/busan");
    // } else if (
    //   inputUsername === mockInternationalStudent.username &&
    //   inputPw === mockInternationalStudent.password
    // ) {
    //   setUserInfo(mockInternationalStudent);
    //   alert("유학생 로그인 성공! \n Success Login");
    //   router.push("/main");
    // } else {
    //   alert(
    //     `부산 대학생 테스트 계정/비번: ${mockBusanStudent.username}, ${mockBusanStudent.password} \n 유학생 테스트 계정/비번: ${mockInternationalStudent.username}, ${mockInternationalStudent.password}`,
    //   );
    // }
  };

  return (
    <form
      className={"flex flex-col gap-y-8 items-center p-24 w-[100vw]"}
      onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
        placeholder={"nickname"}
        className={
          "border-2 border-white w-full h-48 rounded-12 px-12 text-18 focus:outline-none"
        }
      />
      <input
        type={"password"}
        value={inputPw}
        onChange={(e) => setInputPw(e.target.value)}
        placeholder={"password"}
        className={
          "border-2 border-white w-full h-48 rounded-12 px-12 text-18 focus:outline-none"
        }
      />
      <button
        type={"submit"}
        className={`font-hsan-tokki w-full h-48 rounded-12 flex items-center justify-center text-24 text-white font-bold`}>
        Login
      </button>
    </form>
  );
}

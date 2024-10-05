"use client";

import { useUserInfoStore } from "@/app/_store/useUserInfoStore";
import { useState } from "react";
import { mockBusanStudent, mockInternationalStudent } from "@/data/user";
import { useRouter } from "next/navigation";
import { postLoginUser } from "@/service/user";

export default function LandingLoginForm() {
  const { userInfo, setUserInfo } = useUserInfoStore();
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
      setUserInfo({
        first_name: "Min4",
        last_name: "Kim4",
        username: inputUsername,
        password: "1234",
        email: "kim3@example.com",
        local: null,
        id_photo: null,
        language: "English",
        nationality: "Korea",
        is_active: true,
        visa_number: "000000000",
        mento: true,
        age: 26,
        sex: "Male",
      });
    } else {
      alert(res.data.message ?? "서버 오류가 발생했습니다!");
    }
    console.log(res.data);

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

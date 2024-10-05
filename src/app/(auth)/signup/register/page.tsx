"use client";

import { TStudentStatus } from "@/type/user";
import { postSignupUser } from "@/service/user";
import { mockBusanStudent, mockInternationalStudent } from "@/data/user";

export default function SignupRegisterPage({
  searchParams,
}: {
  searchParams: { status: TStudentStatus };
}) {
  const signupBusanUser = async () => {
    const res = await postSignupUser(mockBusanStudent);
    console.log(res.data);
  };
  const signupInternationalUser = async () => {
    const res = await postSignupUser(mockInternationalStudent);
    console.log(res.data);
  };
  return (
    <main className={"text-white text-48 font-bold"}>
      여기는 회원가입 페이지입니다! 공사중
      <button onClick={signupBusanUser}>부산 대학생 회원가입버튼</button>
      <button onClick={signupInternationalUser}>유학생 회원가입버튼</button>
    </main>
  );
}

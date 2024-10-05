"use client";

import { CiLogout } from "react-icons/ci";
import { postLogout } from "@/service/user";

export default function LogoutFAB() {
  const handleLogout = async () => {
    if (!confirm("로그아웃하시나요? \n Do you want to log out?")) return;
    const res = await postLogout();
    if (res.data.result) {
      location.href = "/";
    } else {
      alert(res.data.message ?? "로그아웃 중 서버 오류가 발생했습니다!");
    }
  };

  return (
    <div id={"logout-fab"} className={"fixed bottom-72 right-72"}>
      <button
        className={"p-12 rounded-full bg-white border-1 border-black"}
        onClick={handleLogout}>
        <CiLogout size={24} />
      </button>
    </div>
  );
}

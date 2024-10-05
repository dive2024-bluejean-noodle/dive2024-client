"use client";

import { CiLogout } from "react-icons/ci";
import Link from "next/link";

export default function LogoutFAB() {
  return (
    <div id={"logout-fab"} className={"fixed bottom-72 right-72"}>
      <Link href={"/"} onClick={() => alert("로그아웃하시나요?")}>
        <button className={"p-12 rounded-full bg-white border-1 border-black"}>
          <CiLogout size={24} />
        </button>
      </Link>
    </div>
  );
}

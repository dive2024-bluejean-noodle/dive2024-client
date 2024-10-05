"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SubHeader({ title }: { title: string }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className={"fixed top-0 left-0 right-0"}>
      <div
        className={
          "border-b-1 relative flex items-center justify-center w-full h-60 bg-white"
        }>
        <FaArrowLeft
          size={24}
          className={"absolute left-24 top-0 bottom-0 m-auto cursor-pointer"}
          onClick={goBack}
        />
        <h3 className={"font-bold text-24"}>{title}</h3>
      </div>
    </header>
  );
}

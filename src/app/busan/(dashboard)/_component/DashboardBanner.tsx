import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function DashboardBanner() {
  return (
    <section
      id="banner"
      className={
        "w-full h-180 p-24 flex flex-col text-white relative bg-bg-sand"
      }>
      <div className={"w-full flex items-center"}>
        <h2 className={"font-bold text-24"}>Dashboard</h2>
        <span
          className={
            "ml-auto rounded-full text-14 px-8 py-1 bg-[#FDC94A] text-white"
          }>
          부산 대학생
        </span>
      </div>
      <p className={"text-15 font-bold"}>멘티를 모아보세요!</p>
      <div className={"flex w-full items-center mt-24"}>
        <div className={"flex flex-col gap-y-4"}>
          <Link
            href={"/guide"}
            className={
              "underline text-blue-500 text-16 flex gap-x-0 items-center"
            }>
            멘토링이 무엇인가요?
            <HiOutlineChevronRight size={20} />
          </Link>
          <Link
            href={"/busan/write"}
            className={
              "underline text-blue-500 text-16 flex gap-x-0 items-center"
            }>
            멘티 모집글을 작성해봐요!
            <HiOutlineChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

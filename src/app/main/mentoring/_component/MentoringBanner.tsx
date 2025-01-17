import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";
import BuMeetLogo from "../../../../../public/icon-192x192.png";

export default function MentoringBanner() {
  return (
    <section
      id="banner"
      className={
        "w-full h-180 p-24 flex flex-col text-white relative bg-[#B5D9FE]"
      }>
      <h2 className={"font-bold text-24"}>Mentoring</h2>
      <p className={"text-15"}>Find the right mentor for you.</p>
      <div className={"flex w-full items-center mt-24"}>
        <div className={"flex flex-col gap-y-4"}>
          <Link
            href={"/guide"}
            className={
              "underline text-blue-600 text-16 flex gap-x-0 items-center"
            }>
            What is mentoring?
            <HiOutlineChevronRight size={20} />
          </Link>
          <Link
            href={"/main/mentoring/review"}
            className={
              "underline text-blue-600 text-16 flex gap-x-0 items-center"
            }>
            Go to review
            <HiOutlineChevronRight size={20} />
          </Link>
        </div>
      </div>
      <Image
        src={BuMeetLogo}
        alt={"logo"}
        width={60}
        height={60}
        className={"absolute right-24 bottom-24"}
      />
    </section>
  );
}

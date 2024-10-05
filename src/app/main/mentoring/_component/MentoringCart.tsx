import { IMentoringInfo } from "@/type/mentoring";
import { CiStar } from "react-icons/ci";

export default function MentoringCard({
  mentoringInfo,
  onClick,
}: {
  mentoringInfo: IMentoringInfo;
  onClick: (mentoringId: number) => void;
}) {
  return (
    <article
      onClick={() => onClick(mentoringInfo.id)}
      className={
        "w-full h-160 flex flex-col items-center rounded-8 border-1 p-12 bg-white"
      }>
      <div className={"flex flex-col w-full"}>
        <h4 id={"mentoring-title"} className={"text-15 text-text-title"}>
          {mentoringInfo.title}
        </h4>
        <span className={"text-14 text-text-sub"}>
          {mentoringInfo.location}
        </span>
        <p id={"mentoring-description"} className={"text-14 text-text-sub"}>
          {mentoringInfo.mento_language} Able!
        </p>
      </div>
      <div className={"border-t-1 pt-12 flex w-full items-center mt-auto"}>
        <label className={"text-16"}>{mentoringInfo.mento_username}</label>
        <span
          id={"star-rating"}
          className={"flex items-center gap-x-4 text-star-rating ml-auto"}>
          <CiStar /> 5.0
        </span>
      </div>
    </article>
  );
}

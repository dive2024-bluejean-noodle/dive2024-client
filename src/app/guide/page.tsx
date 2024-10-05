import { buMeetGuideList } from "@/data/guide";
import { IGuide } from "@/type/guide";
import Link from "next/link";

export default function GuidePage() {
  return (
    <main
      className={
        "w-full flex flex-col px-24 overflow-y-auto scroll-hidden mt-60"
      }>
      {buMeetGuideList.map((guide, index) => (
        <GuideItem guide={guide} key={index} />
      ))}
    </main>
  );
}

function GuideItem({ guide }: { guide: IGuide }) {
  const truncateText = (text: string) => {
    const MAX_LENGTH = 50;
    return text.length > MAX_LENGTH ? `${text.slice(0, MAX_LENGTH)}...` : text;
  };

  return (
    <Link
      href={`/guide/${guide.id}`}
      className={"w-full flex flex-col py-12 border-b-1"}>
      <h3 className={"text-18"}>{guide.title}</h3>
      <p className={"text-16 mt-8"}>{truncateText(guide.content)}</p>
      <span className={"ml-auto text-text-sub text-14"}>{guide.createdAt}</span>
    </Link>
  );
}

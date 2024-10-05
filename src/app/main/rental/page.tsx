import { mockRecruitInfoList } from "@/data/recruit";
import { IRecruitInfo } from "@/type/recruit";

export default function RentalPage() {
  return (
    <main className={"min-h-[calc(100%-240px)]"}>
      <section
        id={"recruit-list-section"}
        className={
          "grid grid-cols-2 w-full p-12 gap-8 overflow-y-auto scroll-hidden"
        }>
        {mockRecruitInfoList.map((recruitInfo, index) => (
          <RecruitCard key={index} recruitInfo={recruitInfo} />
        ))}
      </section>
    </main>
  );
}

function RecruitCard({ recruitInfo }: { recruitInfo: IRecruitInfo }) {
  return (
    <article className={"w-full flex flex-col"}>
      <div
        className={"w-full h-120 bg-gray-300 rounded-12"}
        id={"recruit-default-thumbnail"}
      />
      <div className={"flex flex-col p-8"}>
        <h3 className={"text-18"}>{recruitInfo.title}</h3>
        <span className={"text-16 text-text-sub"}>{recruitInfo.company}</span>
        <span className={"text-16 text-text-sub"}>{recruitInfo.location}</span>
        <span className={"text-16 text-text-sub ml-auto"}>
          {recruitInfo.posted_date}
        </span>
      </div>
    </article>
  );
}

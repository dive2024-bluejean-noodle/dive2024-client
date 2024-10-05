"use client";

import FilterListBar from "@/app/main/recruit/_component/FilterListBar";
import { IRecruitInfo } from "@/type/recruit";
import { useEffect, useState } from "react";
import { getRecruitInfoList } from "@/service/recruit";
import Image from "next/image";
import RecruitThumbnail1 from "../../../../public/images/recruit-thumbnail-1.jpg";
import RecruitThumbnail2 from "../../../../public/images/recruit-thumbnail-2.png";
import RecruitThumbnail3 from "../../../../public/images/recruit-thumbnail-3.jpeg";
import RecruitThumbnail4 from "../../../../public/images/recruit-thumbnail-4.webp";

const thumbnailList = [
  RecruitThumbnail1,
  RecruitThumbnail2,
  RecruitThumbnail3,
  RecruitThumbnail4,
];

export default function RecruitPage() {
  const [recruitInfoList, setRecruitInfoList] = useState<Array<IRecruitInfo>>(
    [],
  );

  useEffect(() => {
    (async () => {
      const res = await getRecruitInfoList();
      if (res.data.result) {
        setRecruitInfoList(res.data.data);
      } else {
        alert(res.data.message ?? "데이터 조회 중 서버 오류가 발생했습니다!");
      }
    })();
  }, []);

  return (
    <main className={"min-h-[calc(100%-240px)]"}>
      <FilterListBar />
      <section
        id={"recruit-list-section"}
        className={
          "grid grid-cols-2 w-full p-12 gap-8 overflow-y-auto scroll-hidden"
        }>
        {recruitInfoList.map((recruitInfo, index) => (
          <RecruitCard key={index} recruitInfo={recruitInfo} index={index} />
        ))}
      </section>
    </main>
  );
}

function RecruitCard({
  recruitInfo,
  index,
}: {
  recruitInfo: IRecruitInfo;
  index: number;
}) {
  return (
    <article className={"w-full flex flex-col"}>
      <Image
        alt={"thumbnail"}
        src={thumbnailList[index % 4]}
        className={"w-full h-120 bg-gray-300 rounded-12 overflow-clip"}
      />
      <div className={"flex flex-col p-8"}>
        <h3 className={"text-18"}>{recruitInfo.title}</h3>
        <span className={"text-16 text-text-sub"}>{recruitInfo.company}</span>
        {/*<span className={"text-16 text-text-sub"}>{recruitInfo.location}</span>*/}
        {/*<span className={"text-16 text-text-sub ml-auto"}>*/}
        {/*  {recruitInfo.posted_date}*/}
        {/*</span>*/}
      </div>
    </article>
  );
}

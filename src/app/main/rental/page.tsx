"use client";

import { useEffect, useState } from "react";
import { getRentalHouseList } from "@/service/rental";
import { IRentalInfo } from "@/type/rental";
import Image from "next/image";
import RentalHouseImage1 from "../../../../public/images/rental-house-1.jpg";
import RentalHouseImage2 from "../../../../public/images/rental-house-2.jpeg";
import RentalHouseImage3 from "../../../../public/images/rental-house-3.jpeg";

const thumbnailList = [RentalHouseImage1, RentalHouseImage2, RentalHouseImage3];

export default function RentalPage() {
  const [rentalHouseList, setRentalHouseList] = useState<Array<IRentalInfo>>(
    [],
  );

  useEffect(() => {
    (async () => {
      const res = await getRentalHouseList(10);
      if (res.data.result) {
        setRentalHouseList(res.data.data.data.response.body.items.item);
      } else {
        alert(res.data.message ?? "데이터 조회 중 서버 오류가 발생했습니다!");
      }
    })();
  }, []);

  return (
    <main className={"min-h-[calc(100%-240px)]"}>
      <section
        id={"rental-list-section"}
        className={
          "grid grid-cols-2 w-full p-12 gap-8 overflow-y-auto scroll-hidden"
        }>
        {rentalHouseList.map((rentalInfo, index) => (
          <RentalHouseCard
            key={rentalInfo.CNT}
            rentalInfo={rentalInfo}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}

function RentalHouseCard({
  rentalInfo,
  index,
}: {
  rentalInfo: IRentalInfo;
  index: number;
}) {
  return (
    <article className={"w-full flex flex-col"}>
      <Image
        alt={"thumbnail"}
        src={thumbnailList[index % 3]}
        className={"w-full h-120 bg-gray-300 rounded-12 overflow-clip"}
      />
      <div className={"flex flex-col p-8"}>
        <h3 className={"text-18"}>{rentalInfo["MGMT_NM"]}</h3>
        <span className={"text-16 text-text-sub"}>{rentalInfo["GB"]}</span>
        <span className={"text-16 text-text-sub"}>{rentalInfo["LOCATE"]}</span>
      </div>
    </article>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getMentoringDetail, getMentoringList } from "@/service/mentoring";
import { IMentoringDetail, IMentoringInfo } from "@/type/mentoring";
import useModal from "@/app/_hook/useModal";
import MentoringDetailModal from "@/app/main/mentoring/_component/MentoringDetailModal";
import FilteringHeader from "@/app/main/mentoring/_component/FilteringHeader";
import MentoringCard from "@/app/main/mentoring/_component/MentoringCart";

export default function MentoringPage() {
  const [language, setLanguage] = useState("English");
  const [selectedMentoringId, setSelectedMentoringId] = useState<number | null>(
    null,
  );
  const [selectedMontoringDetail, setSelectedMentoringDetail] =
    useState<IMentoringDetail | null>(null);
  const [mentoringList, setMentoringList] = useState<Array<IMentoringInfo>>([]);
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    (async () => {
      const res = await getMentoringList();
      setMentoringList(res.data.data);
    })();
  }, []);

  const handleClickMentoringCard = async (mentoringId: number) => {
    const res = await getMentoringDetail(mentoringId);
    if (res.data.result) {
      setSelectedMentoringId(mentoringId);
      setSelectedMentoringDetail(res.data.data);
      openModal();
    } else {
      alert(res.data.message ?? "서버 오류가 발생했습니다!");
    }
  };

  return (
    <main className={"min-h-[calc(100%-240px)] h-fit bg-bg-default"}>
      <MentoringDetailModal
        mentoringId={selectedMentoringId}
        mentoringDetail={selectedMontoringDetail}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <FilteringHeader language={language} setLanguage={setLanguage} />
      <section
        id={"mentor-list-section"}
        className={
          "grid grid-cols-2 w-full p-12 gap-8 overflow-y-auto scroll-hidden pb-72"
        }>
        {mentoringList
          .filter((_mentoringInfo) =>
            language === "All"
              ? true
              : _mentoringInfo.mento_language === language,
          )
          .map((_mentoringInfo, index) => (
            <MentoringCard
              key={index}
              mentoringInfo={_mentoringInfo}
              onClick={handleClickMentoringCard}
            />
          ))}
      </section>
    </main>
  );
}

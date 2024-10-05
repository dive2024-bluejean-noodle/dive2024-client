"use client";

import { FaPlus } from "react-icons/fa6";
import useModal from "@/app/_hook/useModal";
import CreateMentoringModal from "@/app/busan/(dashboard)/CreateMentoringModal";

export default function CreateMentoringFAB() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div id={"add-fab"} className={"fixed bottom-72 right-12"}>
      <CreateMentoringModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <button
        onClick={openModal}
        className={"p-12 rounded-full border-[#FDC94A] border-1 bg-bg-sand"}>
        <FaPlus size={24} color={"white"} />
      </button>
    </div>
  );
}

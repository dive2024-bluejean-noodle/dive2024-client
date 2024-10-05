"use client";

import Modal from "@/app/_component/Modal";
import { postCreateMentoring } from "@/service/mentoring";
import { useState } from "react";

export default function CreateMentoringModal({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    match: false,
  });

  const createMentoring = async () => {
    const res = await postCreateMentoring(formData);

    if (res.data.result) {
      alert("멘토링이 생성되었습니다.");
      closeModal();
    } else {
      if (res.data.data.title[0].includes("이미")) {
        alert(res.data.data.title[0]);
        return;
      } else {
        alert(res.data.message ?? "서버 오류가 발생했습니다!");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createMentoring();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <article className={"flex flex-col gap-y-16 bg-white rounded-12 p-24"}>
        <h4 className={"text-20 font-bold"}>멘토링 모집하기</h4>
        <form className={"flex flex-col gap-y-8"} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="게시물 제목을 입력하세요!"
            className="w-full border-1 rounded-8 h-40 px-12 text-16 focus:outline-none"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="자주 만날 동네를 입력하세요!"
            className="w-full border-1 rounded-8 h-40 px-12 text-16 focus:outline-none"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <button
            type="submit"
            className="w-full h-40 bg-blue-600 text-white rounded-8">
            만들기
          </button>
        </form>
      </article>
    </Modal>
  );
}

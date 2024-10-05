import { FaPlus } from "react-icons/fa6";
import { postCreateMentoring } from "@/service/mentoring";

export default function CreateMentoringFAB() {
  const createMentoring = async () => {
    const res = await postCreateMentoring({
      title: "멘토링 테스트2",
      location: "Busan",
      match: false,
    });
    if (res.data.result) {
      alert("멘토링이 생성되었습니다.");
    }
  };

  return (
    <div id={"add-fab"} className={"fixed bottom-72 right-12"}>
      <button
        onClick={createMentoring}
        className={"p-12 rounded-full border-[#FDC94A] border-1 bg-bg-sand"}>
        <FaPlus size={24} color={"white"} />
      </button>
    </div>
  );
}

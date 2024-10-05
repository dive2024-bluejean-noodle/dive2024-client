"use client";

import Modal from "@/app/_component/Modal";
import { IoMdClose } from "react-icons/io";
import { seoleimFont } from "@/font/seoleimFont";

export default function SideChatListScreen({
  isScreenOpen,
  closeScreen,
}: {
  isScreenOpen: boolean;
  closeScreen: () => void;
}) {
  const tmpelist = [
    "Tell me how to get to Pusan National University from here.",
    "I want to swim~!!",
    "I need a hambuger.",
    "Is there a bathroom in the nearby station?",
  ];
  return (
    <Modal isOpen={isScreenOpen} onClose={closeScreen}>
      <section
        id="side-chat-list"
        className={`fixed left-0 top-0 bottom-0 z-[100] w-240 min-h-screen bg-white flex p-24 gap-y-16 flex-col overflow-hidden transition-all duration-500 ease-in-out ${isScreenOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
        <div
          id="side-chat-list-header"
          className={"w-full flex items-center justify-between"}>
          <h3 className={`font-bold text-24 ${seoleimFont.className}`}>
            Chatting
          </h3>
          <button className={"ml-auto"} onClick={closeScreen}>
            <IoMdClose size={24} />
          </button>
        </div>
        <div
          id={"side-chat-list-content"}
          className={"w-full h-full overflow-y-auto"}>
          <h4 className={"text-14 mb-24"}>History</h4>
          <ul className={"flex flex-col w-full border-t-1"}>
            {tmpelist.map((item, index) => (
              <li key={index} className={"text-14 border-b-1 py-8"}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Modal>
  );
}

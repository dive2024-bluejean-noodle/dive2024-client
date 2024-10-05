"use client";

import { useOpenSideScreenStore } from "@/app/main/(bupt)/_store/useOpenSideScreenStore";
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBookmark } from "react-icons/fa";

export default function SideChatListScreen() {
  const { isOpenSideScreen } = useOpenSideScreenStore();

  return (
    <div className={"fixed left-0 top-0 bottom-0 z-[100] w-240"}>
      <section
        id="side-chat-list"
        className={`h-full flex flex-col w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpenSideScreen ? "translate-x-0" : "translate-x-[-100%]"}`}>
        <div
          id="side-chat-list-header"
          className={
            "w-full h-60 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-[10]"
          }>
          <button
            className={"p-16"}
            onClick={() =>
              useOpenSideScreenStore.getState().setIsOpenSideScreen(false)
            }>
            <GiHamburgerMenu size={24} />
          </button>
          <h3 className={"font-bold text-24"}>Search for AI</h3>
          <div className={"flex items-center"}>
            <button className={"p-16"}>
              <FaBookmark size={24} />
            </button>
            <button className={"p-16"}>
              <FaPlus size={24} />
            </button>
          </div>
        </div>
        <div id={"side-chat-list-content"} className={"w-full h-full"}>
          SideChatListScreen
        </div>
      </section>
    </div>
  );
}

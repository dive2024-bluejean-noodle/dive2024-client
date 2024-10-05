import { IMenu } from "@/type/menu";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHouseUser, FaUserFriends } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";
import { IoChatboxOutline } from "react-icons/io5";

export const mainMenuItemList: Array<IMenu> = [
  {
    label: "Home",
    href: "/main",
    icon: MdOutlineDashboard,
  },
  {
    label: "Mentoring",
    href: "/main/mentoring",
    icon: FaUserFriends,
  },
  {
    label: "Recruit",
    href: "/main/recruit",
    icon: GiHumanTarget,
  },
  {
    label: "Rental",
    href: "/main/rental",
    icon: FaHouseUser,
  },
];

export const busanMenuItemList: Array<IMenu> = [
  {
    label: "대시보드",
    href: "/busan",
    icon: MdOutlineDashboard,
  },
  {
    label: "채팅",
    href: "/busan/chat",
    icon: GiHumanTarget,
  },
];

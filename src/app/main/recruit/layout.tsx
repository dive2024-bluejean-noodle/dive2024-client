import { Metadata } from "next";
import RecruitBanner from "@/app/main/recruit/_component/RecruitBanner";

export const metadata: Metadata = {
  title: "BuMeet - Recruit",
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecruitBanner />
      {children}
    </>
  );
}

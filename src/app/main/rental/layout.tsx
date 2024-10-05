import { Metadata } from "next";
import RecruitBanner from "@/app/main/recruit/_component/RecruitBanner";
import RentalBanner from "@/app/main/rental/_component/RentalBanner";

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
      <RentalBanner />
      {children}
    </>
  );
}

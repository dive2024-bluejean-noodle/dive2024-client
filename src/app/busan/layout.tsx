import BottomNavigationBar from "@/app/_component/BottomNavigationBar";
import CheckLoginManager from "@/app/main/_manager/CheckLoginManager";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "부밋 - 부산청년",
};

export default function BusanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CheckLoginManager />
      {children}
      <BottomNavigationBar />
    </>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuMeet - Signup",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"bg-bg-sea w-screen h-screen"}>{children}</div>;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuMeet",
  description: "낯선 땅 부산에 온 것을 환영하네.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div
          className={
            "max-w-440 w-full h-screen mx-auto relative bg-bg-default"
          }>
          {children}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}

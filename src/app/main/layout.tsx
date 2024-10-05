import BottomNavigationBar from "@/app/_component/BottomNavigationBar";
import CheckLoginManager from "@/app/main/_manager/CheckLoginManager";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/*<CheckLoginManager />*/}
      {children}
      <BottomNavigationBar />
    </>
  );
}

import BottomNavigationBar from '@/app/_component/BottomNavigationBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNavigationBar />
    </>
  );
}

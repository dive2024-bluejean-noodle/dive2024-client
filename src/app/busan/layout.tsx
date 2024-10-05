import BottomNavigationBar from '@/app/_component/BottomNavigationBar';

export default function BusanLayout({
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

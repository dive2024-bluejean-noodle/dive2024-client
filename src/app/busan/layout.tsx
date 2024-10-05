import { IMenu } from '@/type/menu';
import BottomNavigationBar from '@/app/_component/BottomNavigationBar';

export default function BusanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItemList: Array<IMenu> = [
    {
      label: '대시보드',
      href: '/busan',
    },
    {
      label: '채팅',
      href: '/busan/chat',
    },
  ];

  return (
    <>
      {children}
      <BottomNavigationBar menuItemList={menuItemList} />
    </>
  );
}

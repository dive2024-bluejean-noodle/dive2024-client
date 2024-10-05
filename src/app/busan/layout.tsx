import { IMenu } from '@/type/menu';
import BottomNavigationBar from '@/app/_component/BottomNavigationBar';

export default function BusanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItemList: Array<IMenu> = [
    {
      label: '멘토링',
      href: '/busan/mentoring',
    },
    {
      label: '워케이션',
      href: '/main/workation',
    },
  ];

  return (
    <>
      {children}
      <BottomNavigationBar menuItemList={menuItemList} />
    </>
  );
}

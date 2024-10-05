import { IMenu } from '@/type/menu';
import BottomNavigationBar from '@/app/_component/BottomNavigationBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItemList: Array<IMenu> = [
    {
      label: 'Home',
      href: '/main',
    },
    {
      label: 'Mentoring',
      href: '/main/mentoring',
    },
    {
      label: 'Recruit',
      href: '/main/recruit',
    },
    {
      label: 'Workation',
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

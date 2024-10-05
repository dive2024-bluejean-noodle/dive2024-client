'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { busanMenuItemList, mainMenuItemList } from '@/data/menu';

export default function BottomNavigationBar() {
  const pathname = usePathname();
  const menuItemList = pathname.startsWith('/main')
    ? mainMenuItemList
    : busanMenuItemList;

  return (
    <nav
      className={
        'fixed bottom-0 left-0 right-0 h-60 w-screen border-t-2 bg-bg-default'
      }>
      <div className={'flex justify-around w-full h-full'}>
        {menuItemList.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-col justify-center items-center text-12 w-full h-full ${pathname === item.href ? 'font-bold bg-bg-default shadow-inner' : ''} `}>
            <item.icon size={16} />
            <label>{item.label}</label>
          </Link>
        ))}
      </div>
    </nav>
  );
}

import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <NaviBar />
    </>
  );
}

const menuItemList = [
  {
    label: 'Home',
    href: '/main',
  },
  {
    label: 'Mentoring',
    href: '/main/mentoring',
  },
  {
    label: 'BUPT',
    href: '/main/bupt',
  },
  {
    label: 'Recruit',
    href: '/main/recruit',
  },
];

function NaviBar() {
  return (
    <nav className={'fixed bottom-0 left-0 right-0 h-60 w-screen border-t-1'}>
      <div className={'flex justify-around w-full h-full'}>
        {menuItemList.map((item) => (
          <Link
            href={item.href}
            className={
              'flex justify-center items-center text-12 w-full h-full border-r-1'
            }>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

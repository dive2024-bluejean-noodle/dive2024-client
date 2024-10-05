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
    label: 'Recruit',
    href: '/main/recruit',
  },
  {
    label: 'Workation',
    href: '/main/workation',
  },
];

function NaviBar() {
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

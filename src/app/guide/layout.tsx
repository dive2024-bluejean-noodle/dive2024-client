import SubHeader from '@/app/_component/SubHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuMeet - Guide',
  description: 'BuMeet - Guide',
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubHeader title={'Guide'} />
      {children}
    </>
  );
}

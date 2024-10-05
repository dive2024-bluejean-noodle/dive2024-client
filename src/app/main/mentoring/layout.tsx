import MentoringBanner from '@/app/main/mentoring/_component/MentoringBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BuMeet - Mentoring',
};

export default function MentoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MentoringBanner />
      {children}
    </>
  );
}

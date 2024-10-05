import { Metadata } from 'next';
import DashboardBanner from '@/app/busan/(dashboard)/_component/DashboardBanner';

export const metadata: Metadata = {
  title: 'BuMeet - Mentoring',
};

export default function BusanDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardBanner />
      {children}
    </>
  );
}

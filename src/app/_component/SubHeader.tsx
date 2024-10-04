'use client';

import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function SubHeader({ title }: { title: string }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header
      className={
        'w-full h-60 flex items-center relative justify-center border-b-1'
      }>
      <FaArrowLeft
        size={24}
        className={'absolute left-24 top-0 bottom-0 m-auto cursor-pointer'}
        onClick={goBack}
      />
      <h3 className={'font-bold text-24'}>{title}</h3>
    </header>
  );
}

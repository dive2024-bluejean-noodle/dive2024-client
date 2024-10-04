import SubHeader from '@/app/_component/SubHeader';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import BuptHeader from '@/app/main/bupt/_component/Header';

export default function BuptPage() {
  return (
    <main className={''}>
      <BuptHeader />
      <div
        id={'search-bar'}
        className={
          'px-12 fixed bottom-60 w-full h-60 flex gap-x-8 items-center'
        }>
        <input
          className={
            'w-full h-48 px-24 text-20 text-white bg-gray-100 rounded-full'
          }
          placeholder={'궁금한 것을 무엇이든 물어보세요'}
        />
        <button
          className={
            'bg-bg-sea p-16 rounded-full flex items-center justify-center'
          }>
          <FaMagnifyingGlass color={'white'} size={16} />
        </button>
      </div>
    </main>
  );
}

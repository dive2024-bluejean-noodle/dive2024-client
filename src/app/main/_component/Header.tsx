import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa';

export default function BuptHeader() {
  return (
    <header
      className={
        'w-full h-60 flex items-center justify-between fixed top-0 left-0 right-0 bg-white'
      }>
      <button className={'p-16'}>
        <GiHamburgerMenu size={24} />
      </button>
      <h3 className={'font-bold text-24'}>Search for AI</h3>
      <div className={'flex items-center'}>
        <button className={'p-16'}>
          <FaBookmark size={24} />
        </button>
        <button className={'p-16'}>
          <FaPlus size={24} />
        </button>
      </div>
    </header>
  );
}

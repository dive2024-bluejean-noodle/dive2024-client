'use client';

import { PiMagnifyingGlass } from 'react-icons/pi';
import { PiBell } from 'react-icons/pi';
import { IUserInfo } from '@/type/user';
import { mockBusanStudent } from '@/data/user';
import { CiStar } from 'react-icons/ci';
import { useState } from 'react';

export default function MentoringPage() {
  const [language, setLanguage] = useState('English');

  return (
    <main className={'bg-bg-default h-full'}>
      <FilteringHeader language={language} setLanguage={setLanguage} />
      <section
        id={'mentor-list-section'}
        className={'grid grid-cols-2 w-full p-12 gap-8 h-full'}>
        {mockBusanStudent
          .filter((userInfo) =>
            language === 'All' ? true : userInfo.language === language,
          )
          .map((userInfo, index) => (
            <MentorItem userInfo={userInfo} key={index} />
          ))}
      </section>
    </main>
  );
}

function MentorItem({ userInfo }: { userInfo: IUserInfo }) {
  return (
    <article
      className={
        'w-full h-160 flex flex-col items-center rounded-8 border-1 p-12 bg-white'
      }>
      <div className={'flex flex-col w-full'}>
        <h4 id={'post-title'} className={'text-15 text-text-title'}>
          모집글 제목
        </h4>
        <p id={'post-description'} className={'text-14 text-text-sub'}>
          {userInfo.language} Able!
        </p>
      </div>
      <div className={'border-t-1 pt-12 flex w-full items-center mt-auto'}>
        <label className={'text-16'}>
          {userInfo.first_name} {userInfo.last_name}
        </label>
        <span
          id={'star-rating'}
          className={'flex items-center gap-x-4 text-star-rating ml-auto'}>
          <CiStar /> 5.0
        </span>
      </div>
    </article>
  );
}

const languageList = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Chinese',
    value: 'zh',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
  },
  {
    label: 'Indian',
    value: 'hi',
  },
] as const;

function FilteringHeader({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (value: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };
  return (
    <header
      className={
        'w-full h-60 flex items-center justify-between border-b-1 bg-white'
      }>
      <select
        className={'px-16 py-8 focus:outline-none text-20 w-fit bg-white'}
        value={language}
        onChange={handleChange}>
        {languageList.map((item) => (
          <option key={item.value} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>

      <div className={'flex items-center'}>
        <button className={'p-16'}>
          <PiMagnifyingGlass size={24} />
        </button>
        <button className={'p-16'}>
          <PiBell size={24} />
        </button>
      </div>
    </header>
  );
}

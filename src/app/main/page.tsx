'use client';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import BuptHeader from '@/app/main/_component/Header';
import BuMeetLogo from '../../../public/icon-192x192.png';
import Image from 'next/image';
import { useState } from 'react';

const questionOptionList = [
  {
    label: 'Nearby Restaurant Recommendations',
    value: 'restaurant',
  },
  {
    label: 'Busan Tourist Spots',
    value: 'tourist',
  },
  {
    label: 'Metro Line Information',
    value: 'metro',
  },
  {
    label: 'Metro Convenience Facilities',
    value: 'convenience',
  },
  {
    label: 'Job Information',
    value: 'job',
  },
] as const;

type TQuestionOption = (typeof questionOptionList)[number]['value'];

interface IQuestionAnswer {
  description: string;
  type: 'bupt' | 'me';
}

export default function BuptPage() {
  const [questionOption, setQuestionOption] = useState<TQuestionOption | null>(
    null,
  );
  const [qaList, setQaList] = useState<Array<IQuestionAnswer>>([]);
  const [searchInput, setSearchInput] = useState('');

  const selectQuestionOption = (value: TQuestionOption) => {
    setQuestionOption(value);
    setQaList([
      {
        description: 'Great! What type of restaurant are you looking for?',
        type: 'bupt',
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQaList((prev) => [
      ...prev,
      {
        description: searchInput,
        type: 'me',
      },
    ]);
    setSearchInput('');
  };

  return (
    <main className={'h-full'}>
      <BuptHeader />
      <section
        className={
          'w-full h-full flex flex-col gap-y-36 pt-72 pb-132 bg-gray-100 overflow-y-scroll p-12 py-16 scroll-hidden'
        }>
        <BuptQuestionStart
          questionOption={questionOption}
          selectQuestionOption={selectQuestionOption}
        />
        {qaList.map((item, index) =>
          item.type === 'me' ? (
            <UserQuestionTemplate key={index} userQuestion={item.description} />
          ) : (
            <BuptAnswerTemplate key={index} buptAnswer={item.description} />
          ),
        )}
      </section>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

function SearchBar({
  searchInput,
  setSearchInput,
  onSubmit,
}: {
  searchInput: string;
  setSearchInput: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      id={'search-bar'}
      onSubmit={onSubmit}
      className={'px-12 fixed bottom-60 w-full h-60 flex gap-x-8 items-center'}>
      <input
        className={
          'w-full h-48 px-24 text-18 text-black bg-white rounded-full focus:outline-none'
        }
        placeholder={"Ask me anything you're curious about."}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        type={'submit'}
        className={
          'bg-bg-sea p-16 rounded-full flex items-center justify-center'
        }>
        <FaMagnifyingGlass color={'white'} size={16} />
      </button>
    </form>
  );
}

function BuptQuestionStart({
  questionOption,
  selectQuestionOption,
}: {
  questionOption: TQuestionOption | null;
  selectQuestionOption: (value: TQuestionOption) => void;
}) {
  return (
    <BuptAnswerTemplate
      buptAnswer={
        <div className={'w-full'}>
          Hello! I'm here to help you find information around Busan. What would
          you like to explore? Please select one of the options below!
          <div className={'grid grid-cols-2 w-full gap-8 mt-16 text-16'}>
            {questionOptionList.map((item) => (
              <button
                key={item.value}
                className={`w-full rounded-12 flex items-center justify-center py-16 border-1 ${questionOption === item.value ? 'bg-bg-sea text-white' : 'bg-white text-black'}`}
                onClick={() => selectQuestionOption(item.value)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      }
    />
  );
}

function BuptAnswerTemplate({
  buptAnswer,
}: {
  buptAnswer: string | JSX.Element;
}) {
  return (
    <article className={'flex flex-col gap-y-16'}>
      <div className={'flex items-center gap-x-8'}>
        <Image
          src={BuMeetLogo}
          width={48}
          height={48}
          className={'rounded-12'}
          alt={'bupt-profile'}
        />
        <label className={'text-24'}>BuMeet</label>
      </div>
      <div id={'paragraph'} className={'w-full px-12 text-20'}>
        {buptAnswer}
      </div>
    </article>
  );
}

function UserQuestionTemplate({ userQuestion }: { userQuestion: string }) {
  return (
    <article className={'flex flex-col gap-y-16'}>
      <div className={'flex items-center gap-x-8'}>
        <div className={'border-1 w-48 h-48 rounded-12'} />
        <label className={'text-24'}>Me</label>
      </div>
      <div id={'answer-paragraph'} className={'w-full px-12 text-20'}>
        {userQuestion}
      </div>
    </article>
  );
}

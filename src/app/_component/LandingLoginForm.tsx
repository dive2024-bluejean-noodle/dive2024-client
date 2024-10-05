'use client';

import { useUserInfoStore } from '@/app/_store/useUserInfoStore';
import { useState } from 'react';
import { mockBusanStudent, mockInternationalStudent } from '@/data/user';
import { useRouter } from 'next/navigation';

export default function LandingLoginForm() {
  const { setUserInfo } = useUserInfoStore();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      inputEmail === mockBusanStudent.email &&
      inputPw === mockBusanStudent.password
    ) {
      setUserInfo(mockBusanStudent);
      alert('부산 대학생 로그인 성공! \n Success Login');
      router.push('/busan');
    } else if (
      inputEmail === mockInternationalStudent.email &&
      inputPw === mockInternationalStudent.password
    ) {
      setUserInfo(mockInternationalStudent);
      alert('유학생 로그인 성공! \n Success Login');
      router.push('/main');
    } else {
      alert(
        `부산 대학생 테스트 계정/비번: ${mockBusanStudent.email}, ${mockBusanStudent.password} \n 유학생 테스트 계정/비번: ${mockInternationalStudent.email}, ${mockInternationalStudent.password}`,
      );
    }
  };

  return (
    <form
      className={'flex flex-col gap-y-8 items-center p-24 w-[100vw]'}
      onSubmit={handleSubmit}>
      <input
        type={'text'}
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        placeholder={'email'}
        className={
          'border-2 border-white w-full h-48 rounded-12 px-12 text-18 focus:outline-none'
        }
      />
      <input
        type={'password'}
        value={inputPw}
        onChange={(e) => setInputPw(e.target.value)}
        placeholder={'password'}
        className={
          'border-2 border-white w-full h-48 rounded-12 px-12 text-18 focus:outline-none'
        }
      />
      <button
        type={'submit'}
        className={`font-lotteriachab w-full h-48 rounded-12 flex items-center justify-center text-24 text-white font-bold`}>
        Login
      </button>
    </form>
  );
}

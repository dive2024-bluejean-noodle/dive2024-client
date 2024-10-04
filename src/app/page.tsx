import { seoleimFont } from '@/font/seoleimFont';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundImage from '../../public/images/landing-bg.jpg';
import WaveAnimationText from '@/app/_component/WaveAnimationText';

export default function LandingHome() {
  return (
    <main className={'w-full h-full flex flex-col items-center bg-bg-sea'}>
      <h1
        className={`z-10 font-bold text-white text-144 fonts-bold leading-144 ${seoleimFont.className} mt-48`}>
        <WaveAnimationText text={'Bu'} delay={0} />
        <br />
        <WaveAnimationText text={'Meet'} delay={2} />
      </h1>
      <Image
        alt={'background-image'}
        src={BackgroundImage}
        width={400}
        height={400}
        className={'w-screen'}
      />
      <div
        className={
          'flex flex-col gap-y-8 items-center mt-auto px-48 w-full pb-48'
        }>
        <Link
          href={'/login'}
          className={`border-2 border-white w-full h-48 rounded-12 flex items-center justify-center text-24 text-white font-bold ${seoleimFont.className}`}>
          Login
        </Link>
        <Link
          href={'/signup/select'}
          className={`w-full h-48 rounded-12 flex items-center justify-center text-24 bg-bg-sand text-white font-bold ${seoleimFont.className}`}>
          Signup
        </Link>
      </div>
    </main>
  );
}

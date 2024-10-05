import { IUserInfo } from '@/type/user';
import { mockInternationalStudentList } from '@/data/user';
import { CiStar } from 'react-icons/ci';
import { seoleimFont } from '@/font/seoleimFont';
import { FaPlus } from 'react-icons/fa6';

export default function BusanDashboardPage() {
  return (
    <main className={'flex flex-col gap-y-24 p-24 w-full'}>
      <section className={'flex flex-col gap-y-16 w-full'}>
        <h2 className={'text-20 text-title'}>나의 멘토링 평점</h2>
        <div className="w-full overflow-x-auto flex border-1 rounded-12 h-120 bg-white items-center p-24 overflow-hidden">
          <div
            className={`text-78 font-bold ${seoleimFont.className} text-bg-sea`}>
            4.5
          </div>
          <p className={'ml-auto'}>
            굉장해요!
            <br /> 부산 대학생 중에서
            <br /> 상위 5%에 속해요!
          </p>
        </div>
      </section>
      <section className={'flex flex-col gap-y-16 w-full'}>
        <h2 className={'text-20 text-title'}>지금까지 만난 친구들</h2>
        <div className="w-full overflow-x-auto flex gap-x-8">
          {mockInternationalStudentList.map((stu, index) => (
            <MentiCard key={index} userInfo={stu} />
          ))}
        </div>
      </section>
      <div id={'add-fab'} className={'fixed bottom-72 right-12'}>
        <button
          className={'p-12 rounded-full border-[#FDC94A] border-1 bg-bg-sand'}>
          <FaPlus size={24} color={'white'} />
        </button>
      </div>
    </main>
  );
}

function MentiCard({ userInfo }: { userInfo: IUserInfo }) {
  return (
    <article
      className={
        'min-w-160 w-160 h-160 flex flex-col items-center rounded-8 border-1 p-12 bg-white'
      }>
      <div className={'flex flex-col w-full'}>
        <p id={'post-description'} className={'text-15 text-text-title'}>
          짱이에요. 멋있어요!
        </p>
        <div className={'flex flex-col text-text-sub text-14'}>
          <span>{userInfo.nationality}</span>
          <span>
            {userInfo.sex}, {userInfo.age}세
          </span>
        </div>
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

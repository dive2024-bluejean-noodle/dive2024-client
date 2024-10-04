import { TStudentStatus } from '@/type/user';

export default function SignupRegisterPage({
  searchParams,
}: {
  searchParams: { status: TStudentStatus };
}) {
  return (
    <main className={'text-white text-48 font-bold'}>
      여기는 회원가입 페이지입니다! 공사중
    </main>
  );
}

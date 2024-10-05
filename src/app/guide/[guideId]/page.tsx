import { buMeetGuideList } from '@/data/guide';

export async function generateStaticParams() {
  return buMeetGuideList.map((guide) => ({
    guideId: String(guide.id),
  }));
}

export default function GuideDetailPage({
  params,
}: {
  params: { guideId: string };
}) {
  const guideId = Number(params?.guideId || '0');
  const guideInfo = buMeetGuideList.find((item) => item.id === guideId);

  return (
    <main className={'p-24 flex flex-col mt-60 gap-y-16'}>
      <h1 className={'text-24'}>{guideInfo?.title}</h1>
      <p className={'text-16'}>{guideInfo?.content}</p>
      <span className={'ml-auto text-text-sub text-14'}>
        {guideInfo?.createdAt}
      </span>
    </main>
  );
}

import withErrorHandling from "@/lib/withErrorHandling";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";
import serverFetch from "@/lib/serverFetch";

// 게시글 잿글 작성
export const POST = withErrorHandling(async (req) => {
  const { matchingId, writer, contents } = await req.json();
  const { token } = await getIronSessionData();
  const response = await serverFetch.post(
    `/Mentoring/${matchingId}/comment`,
    {
      contents,
      writer,
    },
    {
      Authorization: `Bearer ${token}`,
    },
  );

  return NextResponse.json(response);
});

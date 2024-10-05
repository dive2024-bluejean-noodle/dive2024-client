import withErrorHandling from "@/lib/withErrorHandling";
import { serverAxios } from "@/lib/serverAxios";
import { NextResponse } from "next/server";

// 게시글 잿글 작성
export const POST = withErrorHandling(async (req) => {
  const { matchingId, writer, contents } = await req.json();
  const response = await serverAxios.post(`/Mentoring/${matchingId}/comment`, {
    contents,
    writer,
  });

  return NextResponse.json(response);
});

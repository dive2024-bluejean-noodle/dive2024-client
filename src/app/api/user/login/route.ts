import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";

// 로그인
export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post(`/User/api/token/`, data);

  return NextResponse.json(response);
});

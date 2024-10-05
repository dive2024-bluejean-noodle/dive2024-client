import withErrorHandling from "@/lib/withErrorHandling";
import { serverAxios } from "@/lib/serverAxios";
import { NextResponse } from "next/server";
import serverFetch from "@/lib/serverFetch";

// 유저 생성
export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post(`/User/register/`, data);

  return NextResponse.json(response);
});

// 계정 정보 업데이트
export const PUT = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverAxios.put(`/User/update`, data);

  return NextResponse.json(response);
});

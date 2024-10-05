import withErrorHandling from "@/lib/withErrorHandling";
import { NextResponse } from "next/server";
import serverFetch from "@/lib/serverFetch";
import { getIronSessionData } from "@/lib/ironSession";

// 유저 생성
export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post(`/User/register/`, data);

  return NextResponse.json(response);
});

// 계정 정보 업데이트
export const PUT = withErrorHandling(async (req) => {
  const data = await req.json();
  const { token } = await getIronSessionData();
  const response = await serverFetch.put(`/User/update`, data, {
    Authorization: `Bearer ${token}`,
  });

  return NextResponse.json(response);
});

export const GET = withErrorHandling(async (req) => {
  const { token } = await getIronSessionData();
  const response = await serverFetch.get(`/User/detail`, {
    Authorization: `Bearer ${token}`,
  });

  return NextResponse.json(response);
});

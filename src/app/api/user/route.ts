import withErrorHandling from "@/lib/withErrorHandling";
import { NextResponse } from "next/server";
import serverFetch from "@/lib/serverFetch";
import { getIronSessionData } from "@/lib/ironSession";
import { IUserInfo } from "@/type/user";

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

// 유저 정보 가져오기
export const GET = withErrorHandling(async (req) => {
  const { token } = await getIronSessionData();
  const response = await serverFetch.get<IUserInfo>(`/User/detail`, {
    Authorization: `Bearer ${token}`,
  });

  if (response.result) {
    const session = await getIronSessionData();
    session.userInfo = response.data;
    await session.save();
  }

  return NextResponse.json(response);
});

import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";
import { ILogin } from "@/type/user";

// 로그인
export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post<ILogin>(`/User/api/token/`, data);

  if (response.result) {
    const session = await getIronSessionData();
    session.token = response.data.access;
    await session.save();
  }

  return NextResponse.json(response);
});

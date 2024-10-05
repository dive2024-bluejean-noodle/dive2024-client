import withErrorHandling from "@/lib/withErrorHandling";
import { getIronSessionData } from "@/lib/ironSession";
import { NextResponse } from "next/server";

// 로그아웃
export const POST = withErrorHandling(async (req) => {
  const session = await getIronSessionData();
  session.destroy();

  return NextResponse.json({ result: true });
});

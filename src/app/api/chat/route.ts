import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";

export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const { token } = await getIronSessionData();
  const response = await serverFetch.post(`/chat/query/`, data, {
    Authorization: `Bearer ${token}`,
  });

  return NextResponse.json(response);
});

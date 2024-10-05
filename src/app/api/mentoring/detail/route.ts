import { NextResponse } from "next/server";
import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { getIronSessionData } from "@/lib/ironSession";

export const GET = withErrorHandling(async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const pk = searchParams.get("pk");
  console.log(pk);
  if (!pk) {
    throw new Error("No pk provided");
  }
  const { token } = await getIronSessionData();
  const response = await serverFetch.get(`/Mentoring/match/${pk}`, {
    Authorization: `Bearer ${token}`,
  });
  console.log(response.data);
  return NextResponse.json(response);
});

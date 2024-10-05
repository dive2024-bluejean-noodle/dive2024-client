import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";

export const GET = withErrorHandling(async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const recruitId = searchParams.get("recruitId");
  if (!recruitId) {
    throw new Error("No recruitId provided");
  }

  const { token } = await getIronSessionData();
  const response = await serverFetch.get("/JobList/job/" + recruitId, {
    Authorization: `Bearer ${token}`,
  });
  return NextResponse.json(response);
});

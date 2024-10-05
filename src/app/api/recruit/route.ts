import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";

export const GET = withErrorHandling(async (req) => {
  const { token } = await getIronSessionData();
  const response = await serverFetch.get("/JobList/joblist/", {
    Authorization: `Bearer ${token}`,
  });
  return NextResponse.json(response);
});

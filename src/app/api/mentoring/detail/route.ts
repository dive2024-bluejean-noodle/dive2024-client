import { NextResponse } from "next/server";
import withErrorHandling from "@/lib/withErrorHandling";
import { serverAxios } from "@/lib/serverAxios";
import serverFetch from "@/lib/serverFetch";

export const GET = withErrorHandling(async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const pk = searchParams.get("pk");
  console.log(pk);
  if (!pk) {
    throw new Error("No pk provided");
  }
  const response = await serverFetch.get(`/Mentoring/match/${pk}`);
  console.log(response.data);
  return NextResponse.json(response);
});

import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";

export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post(`/chat/query/`, data);

  return NextResponse.json(response);
});

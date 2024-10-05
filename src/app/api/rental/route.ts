import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";

export const GET = withErrorHandling(async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const num = searchParams.get("num");
  if (!num) {
    throw new Error("No num provided");
  }
  const response = await serverFetch.get(
    `/RentalHousing/rental_api/${num}/${num}/`,
  );
  return NextResponse.json(response);
});

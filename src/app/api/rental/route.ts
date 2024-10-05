import withErrorHandling from "@/lib/withErrorHandling";
import serverFetch from "@/lib/serverFetch";
import { NextResponse } from "next/server";
import { getIronSessionData } from "@/lib/ironSession";

export const GET = withErrorHandling(async (req) => {
  const searchParams = req.nextUrl.searchParams;
  const num = searchParams.get("num");
  if (!num) {
    throw new Error("No num provided");
  }
  const { token } = await getIronSessionData();
  const response = await serverFetch.get(
    `/RentalHousing/rental_api/${num}/${num}/`,
    {
      Authorization: `Bearer ${token}`,
    },
  );
  return NextResponse.json(response);
});

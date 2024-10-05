import { NextRequest, NextResponse } from "next/server";

export default function withErrorHandling(
  fn: (
    req: NextRequest,
    res: NextResponse,
  ) => Promise<void | Response | NextResponse>,
) {
  return (req: NextRequest, res: NextResponse) => {
    try {
      return fn(req, res);
    } catch (error: any) {
      // console.error(error.response.data);
      console.log("[[Error statuscode]]", error.statusCode);
      return NextResponse.json(error.message, {
        status: error.statusCode || 409,
      });
    }
  };
}

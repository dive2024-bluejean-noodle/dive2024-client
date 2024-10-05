import withErrorHandling from "@/lib/withErrorHandling";
import { serverAxios } from "@/lib/serverAxios";
import { NextResponse } from "next/server";
import serverFetch from "@/lib/serverFetch";

// 멘토링 생성
export const POST = withErrorHandling(async (req) => {
  const data = await req.json();
  const response = await serverFetch.post(`/Mentoring/create/`, data);
  return NextResponse.json(response);
});

// 멘토링 목록
export const GET = withErrorHandling(async () => {
  const response = await serverFetch.get(`/Mentoring/list`);
  return NextResponse.json(response);
});

// 멘토링 신청
export const PATCH = withErrorHandling(async (req) => {
  const { pk, mentee_username, mentoring_request } = await req.json();
  const response = await serverFetch.patch(`/Mentoring/application/${pk}/`, {
    mentee_username,
    mentoring_request,
  });
  return NextResponse.json(response);
});

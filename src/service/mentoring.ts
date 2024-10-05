import { clientAxios } from "@/lib/clientAxios";
import { IMentoringDetail, IMentoringInfo } from "@/type/mentoring";
import { IAxiosResponse } from "@/type/axios";

// 멘토링 생성
export async function postCreateMentoring(data: {
  title: string;
  location: string;
  match: boolean;
}) {
  return clientAxios.post("/mentoring", data);
}

// 멘토링 목록
export async function getMentoringList() {
  return clientAxios.get<IAxiosResponse<Array<IMentoringInfo>>>("/mentoring");
}

// 멘토링 신청
export async function patchMentoringApplication(data: {
  pk: number;
  mentee_username: string;
  mentoring_request: boolean;
}) {
  return clientAxios.patch("/mentoring", data);
}

// 멘토링 정보
export async function getMentoringDetail(id: number) {
  return clientAxios.get<IAxiosResponse<IMentoringDetail>>(
    `/mentoring/detail?pk=${id}`,
  );
}

// 게시글 댓글 작성
export async function postMentoringComment(data: {
  matchingId: number;
  contents: string;
  writer: number;
}) {
  return clientAxios.post("/mentoring/comment", data);
}

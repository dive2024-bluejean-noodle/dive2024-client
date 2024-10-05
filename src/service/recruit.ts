import { IRecruitDetailInfo, IRecruitInfo } from "@/type/recruit";
import { clientAxios } from "@/lib/clientAxios";
import { IAxiosResponse } from "@/type/axios";

export async function getRecruitInfoList() {
  return clientAxios.get<IAxiosResponse<Array<IRecruitInfo>>>("/recruit");
}

export async function getRecruitInfoDetail(id: number) {
  return clientAxios.get<IAxiosResponse<IRecruitDetailInfo>>(
    `/recruit/detail?recruitId=${id}`,
  );
}

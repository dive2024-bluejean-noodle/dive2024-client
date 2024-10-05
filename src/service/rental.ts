import { IAxiosResponse } from "@/type/axios";
import { clientAxios } from "@/lib/clientAxios";
import { IRentalListResponse } from "@/type/rental";

export async function getRentalHouseList(num: number) {
  return clientAxios.get<IAxiosResponse<IRentalListResponse>>("/rental", {
    params: {
      num,
    },
  });
}

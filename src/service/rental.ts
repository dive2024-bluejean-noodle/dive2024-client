import { IAxiosResponse } from "@/type/axios";
import { clientAxios } from "@/lib/clientAxios";

export async function getRentalHouseList() {
  return clientAxios.get<IAxiosResponse<any>>("/rental");
}

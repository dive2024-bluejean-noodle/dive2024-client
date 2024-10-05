import { IAxiosResponse } from "@/type/axios";
import { clientAxios } from "@/lib/clientAxios";
import { IChatQueryInfo } from "@/type/bupt";

export async function postChatQuery(data: { question: string }) {
  return clientAxios.post<IAxiosResponse<IChatQueryInfo>>("/chat", data);
}

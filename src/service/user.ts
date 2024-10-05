import { IUserInfo } from "@/type/user";
import { clientAxios } from "@/lib/clientAxios";

export async function postLoginUser(data: {
  username: string;
  password: string;
}) {
  return clientAxios.post("/user/login", data);
}

export async function postSignupUser(data: IUserInfo) {
  return clientAxios.post("/user", data);
}

export async function putUpdateUser(data: {
  username: string;
  email: string;
  local: string;
  id_photo: string;
  language: string;
  mento: boolean;
  password?: string;
}) {
  return clientAxios.put("/user", data);
}

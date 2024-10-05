import axios from "axios";

export const serverAxios = axios.create({
  baseURL: process.env.NEXT_PRIVATE_API_URL,
  withCredentials: true,
});

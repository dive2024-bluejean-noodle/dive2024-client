export interface IAxiosResponse<T extends any> {
  result: boolean;
  data: T;
  message?: string;
}

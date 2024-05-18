export interface IApiResponse<T = null> {
  data: T;
  message: string;
  status: string;
}

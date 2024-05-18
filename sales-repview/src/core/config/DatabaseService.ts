import { rejects } from 'assert';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { resolve } from 'path';
import ApiServiceInstance from './ApiService';

const DatabaseService = {
  fetchData<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>
  ) {
    return new Promise<AxiosResponse<Response>>((resolve, reject) => {
      ApiServiceInstance(param)
        .then((response: AxiosResponse<Response>) => {
          resolve(response);
        })
        .catch((errors: AxiosError) => {
          reject(errors);
        });
    });
  },
};
export default DatabaseService;

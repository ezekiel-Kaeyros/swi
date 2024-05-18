import axios from 'axios';
import {
  BASE_URL,
  REQUEST_HEADER_KEY,
  TIMEOUT_FOR_REQUEST,
  TOKEN_TYPE_KEY,
  unAuthorizeCode,
} from './contantes';
import { getTokenCookies } from '@/core/cookies/cookies';
import { useRouter } from 'next/router';

const ApiServiceInstance = axios.create({
  timeout: TIMEOUT_FOR_REQUEST,
  baseURL: BASE_URL,
});

ApiServiceInstance.interceptors.request.use(
  (config) => {
    const token = getTokenCookies();
    const currentURL = window.location.href;

    if (token !== undefined && !currentURL.includes('login')) {
      config.headers[REQUEST_HEADER_KEY] = `${TOKEN_TYPE_KEY}${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ApiServiceInstance.interceptors.request.use(
//   (response) => response,
//   (error) => {
//     const { response } = error;
//     if (response && unAuthorizeCode.includes(response.status)) {
//       //   store.dispatch(signOut);
//       // logout
//     }
//   }
// );

export default ApiServiceInstance;

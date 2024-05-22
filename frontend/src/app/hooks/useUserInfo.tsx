'use client';
import { getUserCookies } from '@/cookies/cookies';
import { TokenType } from '@/redux/features/types';
import { jwtDecode } from 'jwt-decode';

// export const useUserInfo = (): TokenType => {
//   const gettoken = getUserCookies();
//   const decodeToken: TokenType = jwtDecode (gettoken)
//   return decodeToken;
// };

export const useUserInfo = (): {decodeToken: TokenType} => {
  const gettoken = getUserCookies();
  const decodeToken: TokenType = jwtDecode (gettoken)
  return {
    decodeToken
  };
};

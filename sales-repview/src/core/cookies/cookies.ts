import cookies from 'js-cookie';
import { TOKEN_DATA, USER_DATA } from '../constante';

export const setUserCookies = (data: any) => {
  cookies.set(USER_DATA, JSON.stringify(data));
};

export const getUserCookies = () => {
  const data = cookies.get(USER_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const removeUserCookies = () => {
  cookies.remove(USER_DATA);
};

/********************************
 * Handle token in cookies
 */

export const getTokenCookies = () => {
  const data = cookies.get(TOKEN_DATA);
  return data ? JSON.parse(data) : undefined;
};

export const setTokenCookies = (data: string) => {
  cookies.set(TOKEN_DATA, JSON.stringify(data));
};

export const removeTokenCookies = () => {
  cookies.remove(TOKEN_DATA);
};

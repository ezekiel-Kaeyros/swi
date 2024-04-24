import cookies from 'js-cookie';
import { TOGGLE_SIDEBAR } from './toggleSidebar.d';

export const setToggleSidebarCookies = (data: any) => {
  cookies.set(TOGGLE_SIDEBAR, JSON.stringify(data));
};

export const getToggleSidebarkies = () => {
  const data = cookies.get(TOGGLE_SIDEBAR);
  return data == 'true' ? true : data == 'false' ? false : false;
};

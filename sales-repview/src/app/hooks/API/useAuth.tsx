import { IUser } from '@/core/models/User';
import { AppDispatch, RootState } from '@/redux/store';
import authService from '@/core/services/authService';
import AuthService from '@/core/services/authService';
import { BASE_URL } from '@/core/utils/constants';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

type IUserCredentials = {
  email: string;
  password: string;
};

export const useManageUserInStore = () => {
  const user: IUser = useSelector((state: RootState) => state.AuthReducer.user);
  const dispatch = useDispatch<AppDispatch>();
  return {
    user,
    dispatch,
  };
};

export function useAuth() {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: IUserCredentials) => {
      // return await makePostReques(`${BASE_URL}/login`, data);
      return authService.login(data).then((c) => {
        console.log(c);
        return c.data;
      });
    },
  });
}

// export function useAuth() {
//   return useQuery({
//     ['gfldgjdfg'],
//     async (data: IUserCredentials) => {
//       // return await makePostReques(`${BASE_URL}/login`, data);
//         return (await authService.getUserInfos(data)).data.data;
//     }
//   });
// }

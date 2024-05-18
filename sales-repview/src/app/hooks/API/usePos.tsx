import { IUser } from '@/core/models/User';
import { AppDispatch, RootState } from '@/redux/store';
import authService from '@/core/services/authService';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import roadService from '@/core/services/roadService';

export const useManagePosInStore = () => {
  const road = useSelector(
    (state: RootState) => state.RoadManagementReducer.roard
  );
  const dispatch = useDispatch<AppDispatch>();
  return {
    road,
    dispatch,
  };
};

export function useGetRoads(id: string) {
  return useQuery({
    queryKey: ['road-list'],
    queryFn: async () => (await roadService.get(id)).data,
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

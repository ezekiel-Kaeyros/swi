import { AppDispatch, RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useHeaderTitle = () => {
  const headerTitleState = useSelector(
    (state: RootState) => state?.HeaderReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  return { dispatch, headerTitleState };
};

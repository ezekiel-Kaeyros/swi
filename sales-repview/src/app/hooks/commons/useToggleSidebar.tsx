import { AppDispatch, RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useToggleSidebar = () => {
  const toggleSideBarState = useSelector(
    (state: RootState) => state?.ToggleSideBarReducer.toggleSibar
  );
  const dispatch = useDispatch<AppDispatch>();

  return { dispatch, toggleSideBarState };
};

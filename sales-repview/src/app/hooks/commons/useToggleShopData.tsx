import { AppDispatch, RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useToggleShopBarState = () => {
  const toggleShopDataState = useSelector(
    (state: RootState) => state.ShopActions.openShopActions
  );
  const dispatch = useDispatch<AppDispatch>();
  console.log(toggleShopDataState);
  return { dispatch, toggleShopDataState };
};

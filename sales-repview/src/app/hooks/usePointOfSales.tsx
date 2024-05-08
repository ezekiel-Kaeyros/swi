import { PointOfSaleViewState } from '@/redux/features/create-point-of-sale-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const usePointOfSales = () => {
  const pointOfSales: any = useSelector(
    (state: RootState) => state?.pointOfSaleViewReducer.pointOfSales
  );

  const dispatch = useDispatch<AppDispatch>();

  return {
    pointOfSales,
    dispatch,
  };
};

import {
  PointOfSaleViewState,
  loadAllPointOfSale,
} from '@/redux/features/create-point-of-sale-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { BASE_URL, POS_USEQUERY_KEY } from '@/utils/constants';

export const usePointOfSales = () => {
  const dispatch = useDispatch<AppDispatch>();

  // FORMATING CHANNEL CLUSTERS FOR SELECT FIELDS
  const { data: newData } = useMakeGetRequestRevalidate(
    `${BASE_URL}/pos`,
    POS_USEQUERY_KEY
  );
  console.log(newData, '+++++++++++++++');
  // LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  dispatch(
    loadAllPointOfSale({
      allPointOfSales: newData,
    })
  );

  const pointOfSales: any = useSelector(
    (state: RootState) => state?.pointOfSaleViewReducer.pointOfSales
  );

  return {
    pointOfSales,
    dispatch,
  };
};

import { PointOfSaleViewState, loadAllPointOfSale } from '@/redux/features/create-point-of-sale-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMakeGetRequestRevalidate from './useMakeGetRequestRevalidate';
import { BASE_URL } from '@/utils/constants';

export const usePointOfSales = () => {
  const dispatch = useDispatch<AppDispatch>();

  const pointOfSales: any = useSelector(
    (state: RootState) => state?.pointOfSaleViewReducer.pointOfSales
  );

  // const { data } = useMakeGetRequestRevalidate (`${ BASE_URL }/pos`); 

  // console.log(data, "let let...")

  // // LOAD ALL CHANNEL CLUSTERS FROM REQUEST
  // dispatch(loadAllPointOfSale({
  //   allPointOfSales: data, 
  // }));

  

  return {
    pointOfSales,
    dispatch,
  };
};

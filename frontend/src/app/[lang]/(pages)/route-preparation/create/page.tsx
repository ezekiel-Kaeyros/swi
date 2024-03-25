'use client';
import PointOfSalesList from '@/app/common/components/route-planning/point-of-sales-list/PointOfSalesList';
import HeaderRoutePreparation from '@/app/common/components/route-planning/header/HeaderRoutePreparation';
import HeaderRouteCreation from '@/app/common/components/route-planning/header/HeaderRouteCreation';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import BackButton from '@/app/common/components/back-button/BackButton';
import { displayAllRoutes } from '@/redux/features/route-planning-slice';

export default function PointOfSale({}) {
  const { dispatch } = useRoutePlanning();
  return (
    <div className="h-full pr-8 py-8 2xl:w-11/12 mx-auto">
      <div className="flex items-center">
        <div
          onClick={() => {
            dispatch(displayAllRoutes({ showAllRoutes: true }));
          }}
        >
          <BackButton href="route-preparation" />
        </div>
        <h1 className="ml-16 font-bold">Edit a route</h1>
      </div>

      <HeaderRoutePreparation />

      {/* Add point of sales form */}
      <div className="my-12">
        <PointOfSalesList />
      </div>
    </div>
  );
}

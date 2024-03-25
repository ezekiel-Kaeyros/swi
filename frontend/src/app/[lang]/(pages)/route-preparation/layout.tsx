'use client';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import PosMap from '@/app/common/components/maps/PosMap';
import AllDirections from '@/app/common/components/maps/AllDirections';
import Directions from '@/app/common/components/maps/Directions';
import ReactDirectionsMap from '@/app/common/components/maps/ReactDirectionsMap';
import { useEffect } from 'react';
import { selectedRoute } from '@/redux/features/route-planning-slice';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toggleMapsValue, showAllRoutes, dispatch } = useRoutePlanning();

  useEffect(() => {
    showAllRoutes && dispatch(selectedRoute({ selectedRouteId: 0 }));
  });

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-8/12 overflow-y-scroll h-screen">{children}</div>
      <div className="w-full">
        {showAllRoutes ? (
          <AllDirections />
        ) : toggleMapsValue ? (
          <ReactDirectionsMap />
        ) : (
          <PosMap />
        )}
      </div>
    </main>
  );
}

'use client';
import AllDirections from '@/app/common/components/maps/AllDirections';
import Directions from '@/app/common/components/maps/Directions';
import PosMap from '@/app/common/components/maps/PosMap';
import MapTabNavigation from '@/app/common/components/realtime-tracking/map-tab-navigation/MapTabNavigation';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { toggleMapsValue, showAllRoutes } = useRoutePlanning();

  console.log('show all routes', showAllRoutes);

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-7/12 overflow-y-scroll h-screen">{children}</div>
      <div className="w-9/12 ">
        <div className="m-8">
          <MapTabNavigation />
        </div>
        <AllDirections />
      </div>
    </main>
  );
}

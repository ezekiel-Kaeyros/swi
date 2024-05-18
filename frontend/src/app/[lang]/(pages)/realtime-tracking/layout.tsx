'use client';
import { setTitle } from '@/app/common/components/header/slice/header-title-slice';
import AllDirections from '@/app/common/components/maps/AllDirections';
import Directions from '@/app/common/components/maps/Directions';
import PosMap from '@/app/common/components/maps/PosMap';
import MapTabNavigation from '@/app/common/components/realtime-tracking/map-tab-navigation/MapTabNavigation';
import { useHeaderTitle } from '@/app/hooks/useHeaderTitle';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  /** Set Header Title Depending on the Module you are */
  const { dispatch, headerTitleState } = useHeaderTitle();
  useEffect(() => {
    dispatch(setTitle('Realtime tracking'));

    return () => {
      dispatch(
        setTitle('')
      ); /** Just set the name of header to empty to remote if went changing page  */
    };
  }, [dispatch]);

  const { toggleMapsValue, showAllRoutes } = useRoutePlanning();

  console.log('show all routes', showAllRoutes);

  return (
    <main className="flex w-full h-[calc(100vh-80px)] bg-newPrimaryDark">
      <div className="w-7/12 overflow-y-auto ">{children}</div>
      <div className="w-7/12 overflow-y-hidden">
        <AllDirections />
      </div>
    </main>
  );
}

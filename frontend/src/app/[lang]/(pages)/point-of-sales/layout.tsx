'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import PosMap from '@/app/common/components/maps/PosMap';

export default function Layout({ children }: { children: React.ReactNode }) {
  const addClick = useSelector(
    (state: RootState) => state.pointOfSaleViewReducer.toggleMap
  );
  console.log('should the map be clicked', addClick);

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="w-7/12 overflow-y-scroll h-[90vh]">{children}</div>
      <div className="w-9/12 h-[90vh]">
        {/* <ShopPointOfSalesMap address="Bonnamoussadi, Douala" onMapClick={addClick}/> */}
        <PosMap />
      </div>
    </main>
  );
}

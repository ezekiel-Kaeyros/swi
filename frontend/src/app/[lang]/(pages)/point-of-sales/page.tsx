import PointOfSales from '@/app/modules/point-of-sales/pointOfSales';

export default function Home({}) {
  return (
    <div className="h-full flex content-center py-8 2xl:w-11/12 mx-auto bg-newPrimaryDark">
      <PointOfSales />
    </div>
  );
}

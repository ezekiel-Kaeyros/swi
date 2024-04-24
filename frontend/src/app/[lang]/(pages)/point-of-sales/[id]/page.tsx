import Card from '@/app/common/components/card/Card';
import PointOfSalesDetails from '@/app/common/components/point-of-sales/point-of-sales-details/PointOfSalesDetails';
import BackButton from '@/app/common/components/back-button/BackButton';
import { pointOfSales } from '@/utils/pointOfSalesData';

const PointOfSale = async ({ params: { id } }: { params: { id: string } }) => {
  const posDetails = pointOfSales.find((pos) => pos?.id?.toString() === id);
  console.log('id', id);

  console.log('pos details', posDetails);
  return (
    <div className="h-full pr-8 py-8 2xl:w-11/12 mx-auto">
      <Card>
        <BackButton href="point-of-sales" />
        <PointOfSalesDetails posDetails={posDetails} />
      </Card>
    </div>
  );
};

export default PointOfSale;

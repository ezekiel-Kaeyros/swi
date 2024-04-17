import Image from 'next/image';
import Link from 'next/link';

import Card from '@/app/common/components/card/Card';
import LeftIcon from '../../../../../../public/icons/arrowLeftIcon.svg';
import AnimateClick from '@/app/common/components/animate-click/AnimateClick';
import AddPointOfSalesForm from '@/app/common/components/forms/add-point-of-sales-form/AddPointOfSalesForm';
import BackButton from '@/app/common/components/back-button/BackButton';

export default function PointOfSale({}) {
  return (
    <div className="h-full pr-8 py-8 2xl:w-11/12 mx-auto">
      <Card>
        <div className="flex items-center">
          <div>
            <BackButton href="point-of-sales" />
          </div>

          <h1 className="ml-16 font-bold">Create Point of sales</h1>
        </div>

        {/* Add point of sales form */}
        <div className="my-16">
          <AddPointOfSalesForm />
        </div>
      </Card>
    </div>
  );
}

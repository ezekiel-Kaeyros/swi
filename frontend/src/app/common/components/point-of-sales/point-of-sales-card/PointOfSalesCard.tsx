import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { PointOfSalesCardProps } from './pointOfSalesCard';
import MoneyIcon from '../../../../../../public/icons/moneyIcon.svg';
import AnimateClick from '../../animate-click/AnimateClick';

const PointOfSalesCard: React.FC<PointOfSalesCardProps> = ({
  icon,
  salesAmout,
  owner,
  subtitle,
  title,
  id,
}) => {
  return (
    <AnimateClick>
      <Link
        href={`/point-of-sales/${id}`}
        className=" cursor-pointer hover:dark:opacity-80 dark:bg-cardDark rounded-xl  flex p-4 justify-between items-center"
      >
        <div className="flex items-center">
          {icon && <Image src={icon} alt="Point of Sales icon" />}
          <div className="ml-4">
            <h1 className="font-bold">{title}</h1>
            <h2 className="text-sm my-1">{subtitle}</h2>
            <h3 className="opacity-80">{owner}</h3>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-sm">Sales amount</h1>
          <div className="py-2 flex items-center space-x-2  opacity-80">
            <h1>{salesAmout}</h1>
            <Image src={MoneyIcon} alt="Money icon" />
          </div>
        </div>
      </Link>
    </AnimateClick>
  );
};

export default PointOfSalesCard;

"use client"
import BackButton from '@/app/common/components/back-button/BackButton';
import Card from '@/app/common/components/card/Card';
import PointOfSalesDetails from '@/app/common/components/point-of-sales/point-of-sales-details/PointOfSalesDetails';
import { usePointOfSales } from '@/app/hooks/usePointOfSales';
import { IPointOfSalesType } from '@/utils/types';
import { usePathname } from 'next/navigation';
import React from 'react'

const PosDetailModule = () => {
    const pathName = usePathname()
    const posID = pathName?.split("/")[pathName?.split("/").length - 1]
    const { pointOfSales } = usePointOfSales();
    const posDetails = pointOfSales.find((pos: IPointOfSalesType) => pos?._id?.toString() === posID);
    console.log('id', posID);
  
    console.log('pos details', posDetails);
    return (
      <div className="h-full pr-8 py-8 2xl:w-11/12 mx-auto">
        <Card>
          <BackButton href="point-of-sales" />
          <PointOfSalesDetails posDetails={posDetails} />
        </Card>
      </div>
    );
}

export default PosDetailModule
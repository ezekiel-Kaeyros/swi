import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { UserCardProps } from './userCard';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';

const UserCard: React.FC<UserCardProps> = ({
  email,
  handleSelect,
  id,
  image,
  name,
}) => {
  const { routes, selectedRouteId } = useRoutePlanning();

  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [selectedSalesRep, setSelectedSalesRep] = useState<any>([]);

  useEffect(() => {
    let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

    let salesRep = currentRoute?.salesRepresentative;

    setSelectedSalesRep(salesRep);

    if (salesRep?.includes(name)) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes, selectedSalesRep, name]);

  return (
    <div
      onClick={() => {
        handleSelect && handleSelect(id), setIsSelected((prev) => !prev);
      }}
      className={`p-4 rounded-xl cursor-pointer ${
        !isSelected ? 'bg-buttonPrimary' : 'dark:bg-cardDark'
      } `}
    >
      <div className="flex cursor-pointer">
        {image ? (
          <Image src={image} alt="User profile" />
        ) : (
          <div className="w-8 h-8 rounded-full mr-4 bg-slate-600 flex items-center justify-center">
            {name?.charAt(0)}
          </div>
        )}
        <div className="text-xs">
          <h1>{name}</h1>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

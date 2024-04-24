'use client';
import { pointOfSales, pointOfSalesSearch } from '@/utils/pointOfSalesData';
import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { SearchbarProps, Item } from './searchbar';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { IPointOfSalesType } from '@/utils/types';

const SearchBar: React.FC<SearchbarProps> = ({
  handleOnFocus,
  handleOnHover,
  handleOnSearch,
}) => {
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();

  // Formatting the text
  const formatResult = (item: IPointOfSalesType) => {
    return (
      <>
        <span
          style={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          {item?.name} - {item?.shopLocation} - {item?.shopOwner}
        </span>
      </>
    );
  };

  const handleOnSelect = (item: { id: number }) => {
    dispatch(
      addPointOfSalesToRoute({
        routeId: selectedRouteId,
        posId: item?.id,
      })
    );
  };

  return (
    <ReactSearchAutocomplete<IPointOfSalesType>
      items={pointOfSales}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      showItemsOnFocus={false}
      onSelect={handleOnSelect as any}
      onFocus={handleOnFocus}
      inputSearchString={''}
      placeholder="Search POS by name"
      // autoFocus
      formatResult={formatResult}
      styling={{
        height: '50px',
        border: '1px solid #414C50',

        zIndex: 20,
        boxShadow: 'rgba(32, 33, 36, 0) 0px 1px 6px 0px',
        hoverBackgroundColor: '#414C50',
        backgroundColor: '#414C50',
        color: 'white',
        fontSize: '16px',
        fontFamily: '',
        iconColor: 'white',
        lineColor: 'rgb(232, 234, 237)',
        placeholderColor: 'grey',
        clearIconMargin: '3px 14px 0 0',
        searchIconMargin: '0 0 0 .4rem',
      }}
    />
  );
};

export default SearchBar;

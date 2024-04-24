'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';
import {
  toggleMaps,
  updatePointOfSalesOrder,
} from '@/redux/features/route-planning-slice';
import { Button } from '../../button/Button';
import POSFilter from '../../pos-filter/POSFilter';
import Shop from '../../../../../../public/icons/shop.svg';
import Box from '../../../../../../public/icons/posBox.svg';
import FolderConnection from '../../../../../../public/icons/folder-connection.svg';
import Coffee from '../../../../../../public/icons/coffee.svg';

const PointOfSalesList = () => {
  const { routes, toggleMapsValue, dispatch, selectedRouteId } =
    useRoutePlanning();

  const [items, setItems] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false);

  // Handling drag and drop
  const onDragEnd = (result: any) => {
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    // Updating point of sales order
    dispatch(
      updatePointOfSalesOrder({
        routeId: selectedRouteId,
        newOrder: newItems,
      })
    );
    setItems(newItems);
  };

  // Saving route

  const handleOnSave = () => {
    dispatch(
      toggleMaps({
        toggle: !toggleMapsValue,
      })
    );
  };

  console.log('selected id', selectedRouteId);

  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true);

      setItems(currentRoute?.pointOfSales);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRouteId, currentRoute, items, routes]);

  const dateNow = new Date();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isBrowser ? (
        <Droppable droppableId={`droppable-${dateNow}`}>
          {(provided: any, snapshot: any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items?.map((item: any, index: number) => (
                <Draggable
                  key={item.id}
                  draggableId={`${item.id}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <ListItem
                      provided={provided}
                      snapshot={snapshot}
                      item={item}
                    />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      ) : null}
      {/* Create route button */}

      {/*⚠️ This is POS fileter compenent. Please do not delete excepte already used */}
      {/* <div className="rounded-full bg-[#242424] flex items-center p-4 justify-between w-[60%]">
        <POSFilter icon={Shop} bgColor="#323232" col={`#fff`} stat="All" />
        <POSFilter
          icon={Box}
          bgColor="#5F05D1"
          col={`#DFCDF6`}
          stat="Wholesalling"
        />
        <POSFilter
          icon={FolderConnection}
          bgColor="#D99125"
          col={`#F7E9D3`}
          stat="Modern trade"
        />
        <POSFilter
          icon={Coffee}
          bgColor="#28666E"
          col={`#AED0D4`}
          stat="General trade"
        />
        <POSFilter
          icon={Coffee}
          bgColor="#BD2D87"
          col={`#F2D5E7`}
          stat="E-commerce"
        />
      </div> */}
      {/* <div className="ml-auto w-full py-8">
        <Button
          variant={
            currentRoute?.pointOfSales?.length < 2 ? 'disabled' : 'default'
          }
          disabled={currentRoute?.pointOfSales?.length < 2 ? true : false}
          onClick={() => handleOnSave()}
          className="w-full py-4"
        >
          {!toggleMapsValue ? 'Save route' : 'Edit route'}
        </Button>
      </div> */}
    </DragDropContext>
  );
};

export default PointOfSalesList;

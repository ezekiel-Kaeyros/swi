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
  console.log(routes, '>>>>');
  const [items, setItems] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false);

  // HANDLING REORDRING USING DRAG AND DROP
  const onDragEnd = (result: any) => {
    const newItems = Array.from(items);
    console.log(newItems, 'ooo>>');
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    // UPDATING POINT OF SALES ORDER FOR THE SELECTED ROUTE
    dispatch(
      updatePointOfSalesOrder({
        routeId: selectedRouteId,
        newOrder: newItems,
      })
    );
    setItems(newItems);
  }; 

  console.log('itemsitemsitems', items);

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

  console.log(currentRoute, 'currentRoute,,,');

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
              {items && items?.length > 0 ? (
                items?.map((item: any, index: number) => {
                  console.log('insidemap', item);
                  return (
                    <Draggable
                      key={item._id}
                      draggableId={`${item._id}`}
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
                  );
                })
              ) : (
                <div className="w-full flex place-content-center h-[80vh] ">
                  <div className=" flex flex-col mx-auto place-content-center justify-center items-center max-w-[350px] gap-4">
                    <svg
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.1802 12.2667C22.0469 3.04001 8.15356 3.01334 6.02023 12.2667C4.7669 17.68 8.2069 22.2667 11.1936 25.12C13.3802 27.1733 16.8202 27.1733 19.0069 25.12C21.9936 22.2667 25.4069 17.68 24.1802 12.2667ZM15.1936 16.5333C13.7269 16.5333 12.5269 15.3333 12.5269 13.8667C12.5269 12.4 13.7002 11.2 15.1669 11.2H15.1936C16.6869 11.2 17.8602 12.4 17.8602 13.8667C17.8602 15.3333 16.6869 16.5333 15.1936 16.5333Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M58.9267 44.2667C56.7933 35.04 42.8467 35.0133 40.6867 44.2667C39.4333 49.68 42.8733 54.2667 45.8867 57.12C48.0733 59.1733 51.54 59.1733 53.7267 57.12C56.74 54.2667 60.18 49.68 58.9267 44.2667ZM49.9133 48.5333C48.4467 48.5333 47.2467 47.3333 47.2467 45.8667C47.2467 44.4 48.42 43.2 49.8867 43.2H49.9133C51.38 43.2 52.58 44.4 52.58 45.8667C52.58 47.3333 51.38 48.5333 49.9133 48.5333Z"
                        fill="#BABABA"
                      />
                      <path
                        d="M32.5 52.6666H25.3533C22.26 52.6666 19.5667 50.7999 18.5 47.9199C17.4067 45.0399 18.2067 41.8666 20.5267 39.8133L41.8333 21.1733C43.1133 20.0533 43.14 18.5333 42.7667 17.4933C42.3667 16.4533 41.3533 15.3333 39.6467 15.3333H32.5C31.4067 15.3333 30.5 14.4266 30.5 13.3333C30.5 12.2399 31.4067 11.3333 32.5 11.3333H39.6467C42.74 11.3333 45.4333 13.1999 46.5 16.0799C47.5933 18.9599 46.7933 22.1333 44.4733 24.1866L23.1667 42.8266C21.8867 43.9466 21.86 45.4666 22.2333 46.5066C22.6333 47.5466 23.6467 48.6666 25.3533 48.6666H32.5C33.5933 48.6666 34.5 49.5733 34.5 50.6666C34.5 51.7599 33.5933 52.6666 32.5 52.6666Z"
                        fill="#BABABA"
                      />
                    </svg>
                    <span className="font-semibold text-[20px] leading-[26px] font-articulat">
                      {' '}
                      No Point of sale selected
                    </span>
                    <p className="flex font-normal  text-[16px] leading-[28px] justify-center items-center text-center">
                      No Point Of Sale Selected Yet. Please select desired point
                      of sale on the map
                    </p>
                    <Button
                      className="bg-settingViewBottomBorderColor mx-auto w-fit cursor-pointer h-[35px]  p-2 flex flex-row gap-[3px] justify-center items-center rounded-3xl"
                      href={`/point-of-sales/create`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 65 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.1802 12.2667C22.0469 3.04001 8.15356 3.01334 6.02023 12.2667C4.7669 17.68 8.2069 22.2667 11.1936 25.12C13.3802 27.1733 16.8202 27.1733 19.0069 25.12C21.9936 22.2667 25.4069 17.68 24.1802 12.2667ZM15.1936 16.5333C13.7269 16.5333 12.5269 15.3333 12.5269 13.8667C12.5269 12.4 13.7002 11.2 15.1669 11.2H15.1936C16.6869 11.2 17.8602 12.4 17.8602 13.8667C17.8602 15.3333 16.6869 16.5333 15.1936 16.5333Z"
                          fill="#BABABA"
                        />
                        <path
                          d="M58.9267 44.2667C56.7933 35.04 42.8467 35.0133 40.6867 44.2667C39.4333 49.68 42.8733 54.2667 45.8867 57.12C48.0733 59.1733 51.54 59.1733 53.7267 57.12C56.74 54.2667 60.18 49.68 58.9267 44.2667ZM49.9133 48.5333C48.4467 48.5333 47.2467 47.3333 47.2467 45.8667C47.2467 44.4 48.42 43.2 49.8867 43.2H49.9133C51.38 43.2 52.58 44.4 52.58 45.8667C52.58 47.3333 51.38 48.5333 49.9133 48.5333Z"
                          fill="#BABABA"
                        />
                        <path
                          d="M32.5 52.6666H25.3533C22.26 52.6666 19.5667 50.7999 18.5 47.9199C17.4067 45.0399 18.2067 41.8666 20.5267 39.8133L41.8333 21.1733C43.1133 20.0533 43.14 18.5333 42.7667 17.4933C42.3667 16.4533 41.3533 15.3333 39.6467 15.3333H32.5C31.4067 15.3333 30.5 14.4266 30.5 13.3333C30.5 12.2399 31.4067 11.3333 32.5 11.3333H39.6467C42.74 11.3333 45.4333 13.1999 46.5 16.0799C47.5933 18.9599 46.7933 22.1333 44.4733 24.1866L23.1667 42.8266C21.8867 43.9466 21.86 45.4666 22.2333 46.5066C22.6333 47.5466 23.6467 48.6666 25.3533 48.6666H32.5C33.5933 48.6666 34.5 49.5733 34.5 50.6666C34.5 51.7599 33.5933 52.6666 32.5 52.6666Z"
                          fill="#BABABA"
                        />
                      </svg>
                      Create Routes
                    </Button>
                  </div>
                </div>
              )}
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

'use client';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Input } from '@nextui-org/react';
// import ListItem from './ListItem';
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
import { ActivityFlowBuilderListProps } from './ActivityFlowBuilderList';
import SearchBar from '../../searchbar/SearchBar';
import { SearchIcon } from '../../tables/elements/SearchIcon';
import SearchSvgIcons from '../../SvgCustomIcons/SearchColumsSvg';
import FlowBuilderActivityItem from './FlowBuilderActivityItem';
import flowBuilderActivitList from './data';

const FlowBuilderActivityList: React.FC<ActivityFlowBuilderListProps> = ({
  handleCloseModal,
}) => {

  const [searchValue, setSearchValue] = React.useState('');
  const onSearchChange = (value: string) => {
    console.log(value);
  };
  return (

    <div className="flex flex-col gap-[20px] font-articulat">
      <Input
        isClearable
        classNames={{
          base: 'w-full text-[14px] leading-[20px]  font-articulat font-normal sm:max-w-[100%] bg-bgColorDark rounded-xl my-4 ',
          inputWrapper: 'border-0.5 ',
        }}
        placeholder="Search... (ctrl+f)"
        size="sm"
        startContent={<SearchSvgIcons className="text-default-300" />}
        value={searchValue}
        variant="bordered"
      />
      {/** this lit is a dummy data list even type that is use here is the definitive type  */}
      {(flowBuilderActivitList || []).map((item, key) => (
        <FlowBuilderActivityItem
          key={`FlowBuilderActivity-${key}`}
          data={item as any}
        />
      ))}
    </div>
  );
};

export default FlowBuilderActivityList;

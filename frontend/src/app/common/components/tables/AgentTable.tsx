'use client';
import React, { useState } from 'react';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from '@nextui-org/react';

// import {ChevronDownIcon} from "./elements/ChevronDownIcon";
// import {SearchIcon} from "./elements/SearchIcon";
// // import {columns, users, statusOptions} from "./elements/data";
// import { agentColumns, agentData, statusOptions} from "./elements/data";
// import { capitalize } from "../table/utils/utils";
// import Image from "next/image";
//   SortDescriptor,
// } from '@nextui-org/react';
import { PlusIcon } from './elements/PlusIcon';
import { VerticalDotsIcon } from './elements/VerticalDotsIcon';
import { ChevronDownIcon } from './elements/ChevronDownIcon';
import { SearchIcon } from './elements/SearchIcon';
// import {columns, users, statusOptions} from "./elements/data";
import { agentColumns, agentData, statusOptions } from './elements/data';
import { capitalize } from '../table/utils/utils';
import Image from 'next/image';
// import {capitalize} from "./utils";
// import actionIcon from "../../../../../public/icons/table/region.png";

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

import editIcon from '../../../../../public/icons/table/edit.png';
import blueEyeViewIcon from '../../../../../public/icons/table/blueEyeView.png';
import dustBeenIcon from '../../../../../public/icons/table/dustBeen.png';

import {
  AgentFormValueMainTypeMain,
  AgentFormValuesMainTypeMain,
} from '@/redux/features/types';
import {
  addSalesRepAgents,
  addUser,
  toggleAgentDetailView,
} from '@/redux/features/agent-creation';
import { useClientFormStep } from '@/app/hooks/useClientFormStep';
// import useTogglePopup from "@/app/hooks/useTogglePopup";
import useMakeActions from '@/app/hooks/useMakeActions';
import { BASE_URL } from '@/utils/constants';
import { AgentFormValueType } from '@/redux/features/types';
// import {
//   addUser,
//   toggleAgentDetailView,
// } from '@/redux/features/agent-creation';
// import { useClientFormStep } from '@/app/hooks/useClientFormStep';
import useTogglePopup from '@/app/hooks/useTogglePopup';
import ColumnvgColums from '../SvgCustomIcons/ColumnSvg';
import FilterSvgColums from '../SvgCustomIcons/FilterSvgColums';
import SearchSvgIcons from '../SvgCustomIcons/SearchColumsSvg';

const INITIAL_VISIBLE_COLUMNS = [
  'id',
  'salesName',
  'jobTitle',
  'status',
  'actions',
];

type User = (typeof agentData)[0];

const AgentTable = ({
  agentData,
}: {
  agentData: AgentFormValuesMainTypeMain;
}) => {
  const { salesRepsAgents } = useClientFormStep();
  // console.log(agentData, "it is inside the tables", salesRepsAgents)
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'age',
    direction: 'ascending',
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(agentData.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return agentColumns;

    return agentColumns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const { dispatch } = useClientFormStep();

  const showAgentDetails = (data: AgentFormValueMainTypeMain) => {
    dispatch(
      addUser({
        user: data,
      })
    );
    dispatch(
      toggleAgentDetailView({
        toggleValue: true,
      })
    );
  };

  const { makeDeleteAction } = useMakeActions();

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...agentData];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user: AgentFormValueMainTypeMain) =>
        user.salesName!.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user: AgentFormValueMainTypeMain) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [agentData, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const { toggleAgentCreationModal } = useTogglePopup(true);

  const selectAgentAndOpenModal = (data: AgentFormValueMainTypeMain) => {
    // console.log(data, "inside selectAgentAndOpenModal")
    dispatch(
      addSalesRepAgents({
        salesRepsAgent: data,
      })
    );
    toggleAgentCreationModal();
  };

  const renderCell = React.useCallback(
    (user: AgentFormValueMainTypeMain, columnKey: React.Key) => {
      const cellValue = user[columnKey as keyof AgentFormValueMainTypeMain];

      switch (columnKey) {
        case 'salesName':
          return (
            <User
              avatarProps={{ radius: 'full', size: 'sm', src: user.avatar }}
              classNames={{
                description: 'text-default-500',
              }}
              description={user.emailAddress}
              name={cellValue}
            >
              {user.emailAddress}
            </User>
          );
        case 'jobTitle':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
              <p className="text-bold text-tiny capitalize text-default-500">
                {user.jobTitle}
              </p>
            </div>
          );
        case 'status':
          return (
            <div
              className={`w-[80px] py-[.2rem] px-[.2rem] gap-3 ${
                user.status ? 'bg-activeBgColor' : 'bg-pendingBgcolor'
              } rounded-xl flex flex-row justify-center items-center `}
            >
              <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
              {user.status ? 'Active' : 'Pending'}
            </div>
          );
        case 'reportingManager':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {user?.reportingManager?.name}
              </p>
              <p className="text-bold text-tiny capitalize text-default-500">
                {user?.reportingManager?.extra}
              </p>
            </div>
          );
        case 'gender':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {user?.gender?.name}
              </p>
            </div>
          );
        case 'city':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {user?.city?.extra}
              </p>
            </div>
          );
        case 'region':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {user?.region?.name}
              </p>
            </div>
          );
        case 'actions':
          return (
            <div className="relative flex justify-start items-center gap-3">
              <div
                className="cursor-pointer"
                onClick={() => selectAgentAndOpenModal(user)}
              >
                <Image src={editIcon} width={20} alt="editIcon" />
              </div>
              <div
                onClick={() => showAgentDetails(user)}
                className="cursor-pointer"
              >
                <Image src={blueEyeViewIcon} width={20} alt="blueEyeView" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  let confirmAction = confirm(
                    'Are you sure to execute this action?'
                  );
                  if (confirmAction) {
                    makeDeleteAction(`${BASE_URL}/salesrep/${user?.id}`);
                  } else {
                    console.log('hi');
                  }
                }}
              >
                <Image src={dustBeenIcon} width={20} alt="dustBeen" />
              </div>
              {/* <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            </div>
          );

        default:
          return cellValue;
      }
    },
    []
  );

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col ">
        <div className="flex justify-between gap-3 items-end py-8">
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%] bg-bgColorDark rounded-xl',
              inputWrapper: 'border-0.5 ',
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchSvgIcons className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button size="md" variant="flat">
                  <FilterSvgColums />
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status: any) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button size="md" variant="flat">
                  <FilterSvgColums />
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {agentColumns.map((column: any) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <span className="text-default-400 text-small">
            Total {agentData.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    agentData.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background',
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl', 'border-2'],

      th: [
        'bg-bgColorDark',
        'text-default-500',
        'border-b',
        'border-divider',
        'p-3',
      ],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-foreground after:text-background text-background',
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader
        columns={headerColumns}
        className="flex flex-row !rounded-t-xl"
      >
        {(column: any) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
          >
            <div className="flex justify-items-center text-center gap-2 items-center h-full w-full ">
              <Image src={column.img} width={20} alt="titleIcon" />
              {column.name}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item: AgentFormValueMainTypeMain) => (
          <TableRow
            key={item._id}
            onClick={() => {
              console.log('item.id', item._id);
              // showAgentDetails (item)
            }}
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AgentTable;

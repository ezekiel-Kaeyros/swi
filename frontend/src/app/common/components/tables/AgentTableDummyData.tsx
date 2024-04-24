"use client"
import React from "react";
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
  SortDescriptor
} from "@nextui-org/react";
import {PlusIcon} from "./elements/PlusIcon";
import {VerticalDotsIcon} from "./elements/VerticalDotsIcon";
import {ChevronDownIcon} from "./elements/ChevronDownIcon";
import {SearchIcon} from "./elements/SearchIcon";
// import {columns, users, statusOptions} from "./elements/data";
import { agentColumns, agentData, statusOptions} from "./elements/data";
import { capitalize } from "../table/utils/utils";
import Image from "next/image";
// import {capitalize} from "./utils";
// import actionIcon from "../../../../../public/icons/table/region.png"; 

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

import editIcon from "../../../../../public/icons/table/edit.png"; 
import blueEyeViewIcon from "../../../../../public/icons/table/blueEyeView.png"
import dustBeenIcon from "../../../../../public/icons/table/dustBeen.png"

import { AgentFormValueType } from "@/redux/features/types";
import { addUser, toggleAgentDetailView } from "@/redux/features/agent-creation";
import { useClientFormStep } from "@/app/hooks/useClientFormStep";
import useTogglePopup from "@/app/hooks/useTogglePopup";

const INITIAL_VISIBLE_COLUMNS = ["id", "salesName", "jobTitle", "status", "actions"];

type User = typeof agentData[0];

export default function AgentTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(agentData.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return agentColumns;

    return agentColumns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const {  
    dispatch, 
  } = useClientFormStep (); 

  // let objUrl = "/"
  // if (agentData.length > 0) {

  //     let final_value = []; 
  //     // if(incrementalFiltering === true) {
  //     //     final_value = agentData
  //     // } else {
  //     //     final_value = attendances
  //     // }
      
  //     const titleKeys = Object.keys(agentData[0])
  //     // console.log("titleKeys: ", titleKeys)
  
  //     const refinedData = []
  //     refinedData.push(titleKeys)
  
  //     agentData.forEach(item => {
  //         refinedData.push(Object.values(item))  
  //         // console.log("refinedData: ", refinedData)
  //     })

  //     let csvContent = ''
  
  //     refinedData.forEach(row => {
  //         csvContent += row.join(',') + '\n'; 
  //         // console.log("refinedData: ", csvContent)
  //     })
  
  //     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
  //     // console.log("blob: ", blob)
  
  //     objUrl = URL.createObjectURL(blob)
  //     // console.log("objUrl: ", objUrl)
  // }

  const showAgentDetails = (data: AgentFormValueType) => {
    dispatch(addUser({
      user: data
    }))
    dispatch(toggleAgentDetailView ({
      toggleValue: true
    }))
  }

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...agentData];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user: AgentFormValueType) =>
        user.salesName.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user: AgentFormValueType) =>
        Array.from(statusFilter).includes(user.status),
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
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const { toggleAgentCreationModal } = useTogglePopup (true)

  const renderCell = React.useCallback((user: AgentFormValueType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof AgentFormValueType]; 

    console.log(">>>>", cellValue)

    switch (columnKey) {
      case "salesName":
        return (
          <User
            avatarProps={{radius: "full", size: "sm", src: user.avatar}}
            classNames={{
              description: "text-default-500",
            }}
            description={user.emailAddress}
            name={cellValue}
          >
            {user.emailAddress}
          </User>
        );
      case "jobTitle":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">{user.jobTitle}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            // className="capitalize border-none gap-1 text-default-600"
            className={` ${user.status ? "text-activeTextColor bg-activeBgColor" : "bg-pendingBgcolor text-pendingTextColor"} `}
            // color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            { user.status ? "Active" : "Pending" }
           {cellValue} 
          </Chip>
            // <div className={` ${user.status ? "text-activeTextColor bg-activeBgColor" : "bg-pendingBgcolor text-pendingTextColor"} `}>
            //   {cellValue}
            // </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-start items-center gap-3">
            <div className="cursor-pointer" onClick={ toggleAgentCreationModal }>
              <Image src={ editIcon } width={ 20 } alt="editIcon" />
            </div>
            <div className="cursor-pointer">
              <Image src={ blueEyeViewIcon } width={ 20 } alt="blueEyeView" />
            </div>
            <div className="cursor-pointer">
              <Image src={ dustBeenIcon } width={ 20 } alt="dustBeen" />
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
  }, []);
  

  const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
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
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
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
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {agentData.length} users</span>
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
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
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
          wrapper: "after:bg-foreground after:text-background text-background",
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
      <TableHeader columns={headerColumns} className="flex flex-row">
        {(column: any) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            <div className="flex flex-row items-center justify-start justify-items-center gap-2">
              <Image src={ column.img } width={ 20 } alt="titleIcon" /> 
              { column.name }
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id} onClick={() => {
            console.log("item.id", item.id)
            showAgentDetails (item)
          }}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}




















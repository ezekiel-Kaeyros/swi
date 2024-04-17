import React from "react";



// const users = [
//   {
//     id: 1,
//     name: "Tony Reichert",
//     role: "CEO",
//     team: "Management",
//     status: "active",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     email: "tony.reichert@example.com",
//   },
//   {
//     id: 2,
//     name: "Zoey Lang",
//     role: "Tech Lead",
//     team: "Development",
//     status: "paused",
//     age: "25",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//     email: "zoey.lang@example.com",
//   },
//   {
//     id: 3,
//     name: "Jane Fisher",
//     role: "Sr. Dev",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//     email: "jane.fisher@example.com",
//   },
//   {
//     id: 4,
//     name: "William Howard",
//     role: "C.M.",
//     team: "Marketing",
//     status: "vacation",
//     age: "28",
//     avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//     email: "william.howard@example.com",
//   },
//   {
//     id: 5,
//     name: "Kristen Copper",
//     role: "S. Manager",
//     team: "Sales",
//     status: "active",
//     age: "24",
//     avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//     email: "kristen.cooper@example.com",
//   },
//   {
//     id: 6,
//     name: "Brian Kim",
//     role: "P. Manager",
//     team: "Management",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     email: "brian.kim@example.com",
//     status: "Active",
//   },
//   {
//     id: 7,
//     name: "Michael Hunt",
//     role: "Designer",
//     team: "Design",
//     status: "paused",
//     age: "27",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
//     email: "michael.hunt@example.com",
//   },
//   {
//     id: 8,
//     name: "Samantha Brooks",
//     role: "HR Manager",
//     team: "HR",
//     status: "active",
//     age: "31",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
//     email: "samantha.brooks@example.com",
//   },
//   {
//     id: 9,
//     name: "Frank Harrison",
//     role: "F. Manager",
//     team: "Finance",
//     status: "vacation",
//     age: "33",
//     avatar: "https://i.pravatar.cc/150?img=4",
//     email: "frank.harrison@example.com",
//   },
//   {
//     id: 10,
//     name: "Emma Adams",
//     role: "Ops Manager",
//     team: "Operations",
//     status: "active",
//     age: "35",
//     avatar: "https://i.pravatar.cc/150?img=5",
//     email: "emma.adams@example.com",
//   },
//   {
//     id: 11,
//     name: "Brandon Stevens",
//     role: "Jr. Dev",
//     team: "Development",
//     status: "active",
//     age: "22",
//     avatar: "https://i.pravatar.cc/150?img=8",
//     email: "brandon.stevens@example.com",
//   },
//   {
//     id: 12,
//     name: "Megan Richards",
//     role: "P. Manager",
//     team: "Product",
//     status: "paused",
//     age: "28",
//     avatar: "https://i.pravatar.cc/150?img=10",
//     email: "megan.richards@example.com",
//   },
//   {
//     id: 13,
//     name: "Oliver Scott",
//     role: "S. Manager",
//     team: "Security",
//     status: "active",
//     age: "37",
//     avatar: "https://i.pravatar.cc/150?img=12",
//     email: "oliver.scott@example.com",
//   },
//   {
//     id: 14,
//     name: "Grace Allen",
//     role: "M. Specialist",
//     team: "Marketing",
//     status: "active",
//     age: "30",
//     avatar: "https://i.pravatar.cc/150?img=16",
//     email: "grace.allen@example.com",
//   },
//   {
//     id: 15,
//     name: "Noah Carter",
//     role: "IT Specialist",
//     team: "I. Technology",
//     status: "paused",
//     age: "31",
//     avatar: "https://i.pravatar.cc/150?img=15",
//     email: "noah.carter@example.com",
//   },
//   {
//     id: 16,
//     name: "Ava Perez",
//     role: "Manager",
//     team: "Sales",
//     status: "active",
//     age: "29",
//     avatar: "https://i.pravatar.cc/150?img=20",
//     email: "ava.perez@example.com",
//   },
//   {
//     id: 17,
//     name: "Liam Johnson",
//     role: "Data Analyst",
//     team: "Analysis",
//     status: "active",
//     age: "28",
//     avatar: "https://i.pravatar.cc/150?img=33",
//     email: "liam.johnson@example.com",
//   },
//   {
//     id: 18,
//     name: "Sophia Taylor",
//     role: "QA Analyst",
//     team: "Testing",
//     status: "active",
//     age: "27",
//     avatar: "https://i.pravatar.cc/150?img=29",
//     email: "sophia.taylor@example.com",
//   },
//   {
//     id: 19,
//     name: "Lucas Harris",
//     role: "Administrator",
//     team: "Information Technology",
//     status: "paused",
//     age: "32",
//     avatar: "https://i.pravatar.cc/150?img=50",
//     email: "lucas.harris@example.com",
//   },
//   {
//     id: 20,
//     name: "Mia Robinson",
//     role: "Coordinator",
//     team: "Operations",
//     status: "active",
//     age: "26",
//     avatar: "https://i.pravatar.cc/150?img=45",
//     email: "mia.robinson@example.com",
//   },
// ];

// export {columns, users, statusOptions};

import statusIcon from "../../../../../../public/icons/stepPassed.png"; 
import serialNumberIcon from "../../../../../../public/icons/table/serialNumber.png"; 
import nameIcon from "../../../../../../public/icons/table/name.png"; 
import calendarIcon from "../../../../../../public/icons/calendar.png"; 
import userPositionIcon from "../../../../../../public/icons/table/userPosition.png"; 
import regionIcon from "../../../../../../public/icons/table/region.png"; 
import stepPassedIcon from "../../../../../../public/icons/stepPassed.png"; 
import actionIcon from "../../../../../../public/icons/table/action.png"; 
import { departmentData, genderData, provincesData } from '@/services/selectFieldsData';

const agentColumns = [
  { img: serialNumberIcon, name: 'Serial Number', uid: 'id', sortable: true },
  { img: nameIcon, name: 'Sales Name', uid: 'salesName', sortable: true },
  { img: calendarIcon, name: 'Date Of Birth', uid: 'dateOfBirth', sortable: true },
  { img: regionIcon, name: 'Gender', uid: 'contactDetails', sortable: true }, // 
  { img: regionIcon, name: 'Contact', uid: 'contactDetails' }, // 
  { img: regionIcon, name: 'Email', uid: 'emailAddress' }, // 
  { img: regionIcon, name: 'Country', uid: 'country' }, // 
  { img: regionIcon, name: 'City', uid: 'city' }, // 
  { img: regionIcon, name: 'Region', uid: 'region' }, // 
  { img: regionIcon, name: 'Street Address', uid: 'streetAddress' }, 
  { img: userPositionIcon, name: 'Job Title', uid: 'jobTitle' }, 
  { img: regionIcon, name: 'Department', uid: 'departement' }, // 
  { img: regionIcon, name: 'Reporting Mnger', uid: 'reportingManager' }, // 
  { img: regionIcon, name: 'Street Address', uid: 'streetAddress' }, // 
  { img: calendarIcon, name: 'Start Date', uid: 'startDate' }, 
  { img: stepPassedIcon, name: 'Status', uid: 'status', sortable: true },
  { img: actionIcon, name: 'ACTIONS', uid: 'actions' },
];


const agentData = [
  {
    id: 1, 
    salesName: "Thierry Monthé",
    dateOfBirth: "12/03/2024",
    gender: genderData[0].id,
    contactDetails: "527687948",
    emailAddress: "thierry.monthe@kaeyros-analytics.de",
    country: "Cameroon",
    city: provincesData[9].id,
    region: provincesData[9].id, 
    streetAddress: "deido",
    jobTitle: "CEO", 
    departement: departmentData[4].id, 
    reportingManager: departmentData[4].id, 
    startDate: "12/03/2024",
    status: true, 
    avatar: "TM", 
    team: departmentData[0]
  }, 
  {
    id: 2, 
    salesName: "Eric Mballa",
    dateOfBirth: "12/03/2024",
    gender: genderData[0].id,
    contactDetails: "527687948",
    emailAddress: "eric.mballa-analytics.com",
    country: "Cameroon",
    city: provincesData[0].id,
    region: provincesData[0].id, 
    streetAddress: "deido",
    jobTitle: "Sales Manager", 
    departement: departmentData[0].id, 
    reportingManager: departmentData[0].id, 
    startDate: "12/03/2024",
    status: true, 
    avatar: "EM", 
    team: departmentData[0]
  }, 
  {
    id: 3, 
    salesName: "Leslie Fonepi",
    dateOfBirth: "12/03/2024",
    gender: genderData[0].id,
    contactDetails: "527687948",
    emailAddress: "fonepi.leslie@kaeyros-analytics.de",
    country: "Cameroon",
    city: provincesData[1].id,
    region: provincesData[1].id, 
    streetAddress: "deido",
    jobTitle: "Sales Agent", 
    departement: departmentData[1].id, 
    reportingManager: departmentData[1].id, 
    startDate: "12/03/2024",
    status: false, 
    avatar: "FL", 
    team: departmentData[0]
  }, 
  {
    id: 4, 
    salesName: "Ariel Mboma",
    dateOfBirth: "12/03/2024",
    gender: genderData[0].id,
    contactDetails: "527687948",
    emailAddress: "viallymboma1@gmail.com",
    country: "Cameroon",
    city: provincesData[8].id,
    region: provincesData[8].id, 
    streetAddress: "deido",
    jobTitle: "Route planner", 
    departement: departmentData[1].id, 
    reportingManager: departmentData[1].id, 
    startDate: "12/03/2024",
    status: true, 
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d", 
    team: departmentData[0]
  }, 

];

const columns = [
  { img: nameIcon, name: 'ID', uid: 'id', sortable: true },
  { img: nameIcon, name: 'img: , Names', uid: 'img: , name', sortable: true },
  { img: nameIcon, name: 'Start date', uid: 'startDate', sortable: true },
  { img: nameIcon, name: 'Role/Title', uid: 'role', sortable: true },
  { img: nameIcon, name: 'Region', uid: 'region' },
  { img: nameIcon, name: 'Email', uid: 'email' },
  { img: nameIcon, name: 'Status', uid: 'status', sortable: true },
  { img: nameIcon, name: 'ACTIONS', uid: 'actions' },
];

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Inactive', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' },
];

// const columns = [
//   {name: "ID", uid: "id", sortable: true},
//   {name: "NAME", uid: "name", sortable: true},
//   {name: "AGE", uid: "age", sortable: true},
//   {name: "ROLE", uid: "role", sortable: true},
//   {name: "TEAM", uid: "team"},
//   {name: "EMAIL", uid: "email"},
//   {name: "STATUS", uid: "status", sortable: true},
//   {name: "ACTIONS", uid: "actions"},
// ];


// const users = [
//   {
//     id: 1,
//     name: 'Thierry Monthé',
//     role: 'CEO',
//     startDate: '07/12/2023',
//     status: 'active',
//     region: 'Douala',
//     email: 'thierry.monthe@kaeyros-analytics.de',
//     avatar: 'TM',
//   },
//   {
//     id: 2,
//     name: 'Eric Mballa',
//     role: 'Sales Manager',
//     startDate: '07/11/2023',
//     status: 'active',
//     region: 'Douala',
//     email: 'eric.mballa-analytics.com',
//     avatar: 'EM',
//   },
//   {
//     id: 3,
//     name: 'Leslie Fonepi',
//     role: 'Sales Agent',
//     startDate: '07/12/2023',
//     status: 'active',
//     region: 'Yaoundé',
//     email: 'fonepi.leslie@kaeyros-analytics.de',
//     avatar: 'TM',
//   },
//   {
//     id: 4,
//     name: 'Cyrille Sepele',
//     role: 'Route planner',
//     startDate: '01/04/2023',
//     status: 'inactive',
//     region: 'Douala',
//     email: 'cs.sepcy@kaeyros-analytics.com',
//     avatar: 'CS',
//   },
// ];

export { columns, agentColumns, agentData, statusOptions };

import React from 'react';
const columns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'Names', uid: 'name', sortable: true },
  { name: 'Start date', uid: 'startDate', sortable: true },
  { name: 'Role/Title', uid: 'role', sortable: true },
  { name: 'Region', uid: 'region' },
  { name: 'Email', uid: 'email' },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
];

const statusOptions = [
  { name: 'Active', uid: 'active' },
  { name: 'Inactive', uid: 'paused' },
  { name: 'Vacation', uid: 'vacation' },
];

const users = [
  {
    id: 1,
    name: 'Thierry Monthé',
    role: 'CEO',
    startDate: '07/12/2023',
    status: 'active',
    region: 'Douala',
    email: 'thierry.monthe@kaeyros-analytics.de',
    avatar: 'TM',
  },
  {
    id: 2,
    name: 'Eric Mballa',
    role: 'Sales Manager',
    startDate: '07/11/2023',
    status: 'active',
    region: 'Douala',
    email: 'eric.mballa-analytics.com',
    avatar: 'EM',
  },
  {
    id: 3,
    name: 'Leslie Fonepi',
    role: 'Sales Agent',
    startDate: '07/12/2023',
    status: 'active',
    region: 'Yaoundé',
    email: 'fonepi.leslie@kaeyros-analytics.de',
    avatar: 'TM',
  },
  {
    id: 4,
    name: 'Cyrille Sepele',
    role: 'Route planner',
    startDate: '01/04/2023',
    status: 'inactive',
    region: 'Douala',
    email: 'cs.sepcy@kaeyros-analytics.com',
    avatar: 'CS',
  },
];

export { columns, users, statusOptions };

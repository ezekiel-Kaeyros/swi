// import { OptionTypes } from "./selectTypes"

import { OptionTypes } from '@/core/utils/selectType';

// import { OptionTypes } from '@/app/[lang]/(pages)/components/agents-creation/agents-form/select-field/selectTypes';

export const genderData: OptionTypes = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
];

export const provincesData: OptionTypes = [
  {
    id: 1,
    name: 'Littoral',
    extra: 'Douala',
  },
  {
    id: 2,
    name: 'Extreme',
    extra: 'Maroua',
  },
  {
    id: 3,
    name: 'Nord',
    extra: 'Garoua',
  },
  {
    id: 4,
    name: 'Adamaoua',
    extra: 'Ngaounder',
  },
  {
    id: 5,
    name: 'Sud',
    extra: 'Ebolowa',
  },
  {
    id: 6,
    name: 'Sud Ouest',
    extra: 'Buea',
  },
  {
    id: 7,
    name: 'Nord Ouest',
    extra: 'Bamenda',
  },
  {
    id: 8,
    name: 'Est',
    extra: 'Bertoua',
  },
  {
    id: 9,
    name: 'Centre',
    extra: 'Yaounde',
  },
  {
    id: 10,
    name: 'Ouest',
    extra: 'Bafoussam',
  },
];

export const departmentData: OptionTypes = [
  {
    id: 1,
    name: 'Eric Mbala',
    extra: 'Backend',
  },
  {
    id: 2,
    name: 'Fonepi Lesli',
    extra: 'Front End',
  },
  {
    id: 3,
    name: 'Edward Nguimeya',
    extra: 'UI UX',
  },
  {
    id: 4,
    name: 'Ezekiel Dombissi',
    extra: 'DevOps',
  },
  {
    id: 5,
    name: 'Excel Sime',
    extra: 'Data Science',
  },
];

export const formDataObj = {
  id: 1,
  salesName: 'Mboma',
  dateOfBirth: '12/03/2024',
  gender: genderData[0].id,
  contactDetails: '527687948',
  emailAddress: 'viallymboma1@gmail.com',
  country: 'Cameroon',
  city: provincesData[0].id,
  region: provincesData[0].id,
  streetAddress: 'deido',
  jobTitle: 'Developer',
  departement: departmentData[0].id,
  reportingManager: departmentData[0].id,
  startDate: '12/03/2024',
  status: true,
};

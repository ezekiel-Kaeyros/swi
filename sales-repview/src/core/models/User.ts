import { prop } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';

export class User {
  @prop({ default: () => nanoid(9) })
  _id: string;
}

export interface IUser {
  _id: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  country: string;
  region: string;
  city: string;
  streetAddress: string;
  job: string;
  departement: string;
  password: string;
  reportingManager: string[];
  id_company: string[];
  startDate: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

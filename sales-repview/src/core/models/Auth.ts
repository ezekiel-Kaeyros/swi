import { IUser } from './User';

export interface AuthUser {
  salesRep: IUser;
  token: string;
}

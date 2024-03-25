// @ts-nocheck
import { Role } from '../models';


export const getRoleById = async (id: string): Promise<any> => {
  const query = { _id: id };

  const role = await Role.findOne(query)
  return role;
};

export const getRoles = async (): Promise<any> => {
      const roles = Role.find({});
      return roles;
    };

export const addRoleUser = async (
  name: string,
): Promise<any> => {
  const role = await Role.create({
    name,
  });
  return role;
};

export const updateRole = async (id: string, new_name: string): Promise<any> => {
  const role = await Role.findOneAndUpdate({ _id: id }, {name: new_name}, { new: true })
  return role;
};

export const deleteRole = async (id: string): Promise<any> => {
  const role = await Role.findByIdAndRemove(id);
  return role;
};

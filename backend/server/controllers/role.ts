import { Request, Response } from 'express';
import { getRoleById, getRoles,updateRole, addRoleUser, deleteRole} from '../db';

const RoleController = {
  role: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    const role = await getRoleById(id);
    return res.send(role);
  },
  getRoles: async (req: Request, res: Response): Promise<any> => {
    const roles = await getRoles();
    return res.send(roles);
  },

  createRole: async (req: Request, res: Response): Promise<any> => {
    const { name } = req.body;
    const role = await addRoleUser(name);
    return res.send(role);
  },

  updateRole: async (req: Request, res: Response): Promise<any> => {
    const fieldsToUpdate= req.body
    console.log('hello', fieldsToUpdate);
    
    const role = await updateRole(req.params.id, fieldsToUpdate);
    return res.send(role);
  },

  deleteRole: async (req: Request, res: Response): Promise<any> => {
    
    const roleId= req.params.id
    const role = await deleteRole(roleId);
    return res.send(role);
  },

 
};

export default RoleController;

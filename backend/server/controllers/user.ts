import { Request, Response} from 'express';
import { getUserById, getUsers,updateUser, createUser, deleteUser} from '../db';

const UserController = {
  user: async (req: Request, res: Response)=> {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.send(user);
  },
  getUsers: async (req: Request, res: Response)=> {
    const users = await getUsers();
    return res.send(users);
  },

  createUser: async (req: Request, res: Response)=> {
    const user = await createUser(req.body);
    return res.send(user);
  },

  updateUser: async (req: Request, res: Response)=> {
    const fieldsToUpdate= req.body
    const user = await updateUser(req.params.id, fieldsToUpdate);
    return res.send(user);
  },

  deleteUser: async (req: Request, res: Response) => {
    const userId= req.params.id
    const user = await deleteUser(userId);
    return res.send(user);
  },

 
};

export default UserController;

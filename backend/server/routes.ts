import { Request, Response, Router } from 'express';
import {
  UserController,RoleController, AuthController
} from './controllers';
const router = Router();
import { isAuthenticate} from '../server/utils';
import PosController from './controllers/pos';
import TaskController from './controllers/task';
import schemaValidator from './utils/schemaValidator';

router.get('/', (req: Request, res: Response) => res.send('echo'));

/**
 * Auth
 */
router.post(
  '/login',
  schemaValidator('/login'),
  AuthController.login
);
router.post('/logout', AuthController.logout);

/**
 * Roles
 */
router.get('/roles/:id',isAuthenticate, RoleController.role);
router.get('/roles',isAuthenticate, RoleController.getRoles);
router.post(
  '/roles',
  schemaValidator('/roles'),
  isAuthenticate,
  RoleController.createRole
);
router.put(
  '/roles',
  schemaValidator('/roles'),
  isAuthenticate,
  RoleController.updateRole
);
router.delete('/roles', isAuthenticate, RoleController.deleteRole);


/**
 * Users
 */
router.get('/users/:id',isAuthenticate, UserController.user);
router.get('/users',isAuthenticate, UserController.getUsers);
router.post(
  '/users',
  schemaValidator('/users'),
  isAuthenticate,
  UserController.createUser
);
router.put(
  '/users',
  schemaValidator('/users'),
  isAuthenticate,
  UserController.updateUser
);
router.delete('/users',isAuthenticate, UserController.deleteUser);

/**
 * Pos
 */
router.get('/pos', PosController.getPos)
router.get('/pos/:id', PosController.getOnePos)
router.post(
  '/pos',
  schemaValidator('/pos'),
  PosController.savePos
)
router.put(
  '/pos',
  schemaValidator('/pos'),
  PosController.updatePos
)
router.delete('/pos/:id', PosController.deletePos)

/**
 * Task
 */
router.get('/tasks', TaskController.getTask)
router.get('/task/:id', TaskController.getOneTask)
router.post(
  '/task',
  schemaValidator('/task'),
  TaskController.saveTask
)
router.put(
  '/task',
  schemaValidator('/task'),
  TaskController.modifyTask
)
router.delete('/task/:id', TaskController.deleteTask)



export default router;

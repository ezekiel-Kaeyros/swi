import { Request, Response, Router } from 'express';
import {
  UserController,RoleController, AuthController, RoadItemController, RoadController,
  CompanyController,
  CategoryController,
  SaleRepController,
  ActivitiesController
} from './controllers';
const router = Router();
import { isAuthenticate} from './utils';
import PosController from './controllers/pos';
import TaskController from './controllers/task';
import schemaValidator from './utils/schemaValidator';
import TimesController from './controllers/times';
import ChannelClusterController from './controllers/channel_cluster';

import TradeChannelController from './controllers/trade_channel';
//router.get('/', (req: Request, res: Response) => res.send('Hello World!'));
router.get('/', (req: Request, res: Response) => res.sendFile(__dirname + '/index.html'));

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
  '/roles/:id',
  schemaValidator('/roles'),
  isAuthenticate,
  RoleController.updateRole
);
router.delete('/roles/:id', isAuthenticate, RoleController.deleteRole);


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
  '/users/:id',
  schemaValidator('/users'),
  isAuthenticate,
  UserController.updateUser
);
router.delete('/users/:id',isAuthenticate, UserController.deleteUser);


/**
 * SaleRep
 */
router.get('/salesrep/:id',isAuthenticate, SaleRepController.getSaleRep);
router.get('/salesrep',isAuthenticate, SaleRepController.getAllSaleRep);
router.post(
  '/salesrep',
  isAuthenticate,
  SaleRepController.createSaleRep
);
router.put(
  '/salesrep/:id',
  isAuthenticate,
  SaleRepController.updateSaleRep
);
router.delete('/salesrep/:id',isAuthenticate, SaleRepController.deleteSaleRep);


/**
 * road item
 */
router.get('/roadItems', RoadItemController.getAllRoadItems)
router.get('/roadItem/:id', RoadItemController.getOneRoadItem)
router.put('/roadItem/:id', RoadItemController.updateRoadItemHandler)
router.post('/roadItem', RoadItemController.saveRoadItem)

/**
 * road
 */
router.get('/roads', RoadController.getAllRoads)
router.post('/road', RoadController.saveRoad)


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
  '/pos/:id',
  schemaValidator('/pos'),
  PosController.updatePos
)
router.delete('/pos/:id', PosController.deletePos)

/**
 * Task
 */
router.get('/task', TaskController.getTask)
router.get('/task/:id', TaskController.getOneTask)
router.post(
  '/task',
  schemaValidator('/task'),
  TaskController.saveTask
)
router.put(
  '/task/:id',
  schemaValidator('/task'),
  TaskController.modifyTask
)
router.delete('/task/:id', TaskController.deleteTask)
/**
 * TimesTravel
 * 
 */
router.get('/times', TimesController.getTravelTimes)
router.get('/times/:id', TimesController.getOneTravelTime)
router.post(
  '/times',
  schemaValidator('/times'),
  TimesController.saveTravelTime
)
router.put(
  '/times/:id',
  schemaValidator('/times'),
  TimesController.updateTravelTime
)
router.delete('/times/:id', TimesController.deleteTravelTime)

/**
 * Cluster channel
 */

router.get('/channelCluster', ChannelClusterController.getChannelClusters)
router.get('/channelCluster/:id', ChannelClusterController.getOneChannelCluster)
router.post(
  '/channelCluster',
  //schemaValidator('/channelCluster'),
  ChannelClusterController.saveChannelCluster
)
router.put(
  '/channelCluster/:id',
  schemaValidator('/channelCluster'),
  ChannelClusterController.updateChannelCluster
)
router.delete('/channelCluster/:id', ChannelClusterController.deleteChannelCluster)


/**
 * Trade Channel
 */

router.get('/tradeChannel', TradeChannelController.getTradeChannels)
router.get('/tradeChannel/:id', TradeChannelController.getOneTradeChannel)
router.post(
  '/tradeChannel',
  schemaValidator('/tradeChannel'),
  TradeChannelController.saveTradeChannel
)
router.put(
  '/tradeChannel/:id',
  schemaValidator('/tradeChannel'),
  TradeChannelController.updateTradeChannel
)
router.delete('/tradeChannel/:id', TradeChannelController.deleteTradeChannel)


/**
 * Company
 */
router.get('/company', CompanyController.getCompanys)
router.get('/company/:id', CompanyController.companyOne)
router.post(
  '/company',
  schemaValidator('/company'),
  CompanyController.createCompany
)
router.put(
  '/comapany/:id',
  schemaValidator('/company'),
  CompanyController.updateCompany
)
router.delete('/company/:id', CompanyController.deleteCompany)

/**
 * Category
 */

router.get('/category', CategoryController.getCategory)
router.get('/category/:id', CategoryController.getOneCategory)
router.post(
  '/category',
  schemaValidator('/category'),
  CategoryController.saveCategory
)
router.put(
  '/category/:id',
  schemaValidator('/category'),
  CategoryController.updateCategroy
)
router.delete('/category/:id', CategoryController.deleteCategory)


/**
 * Activities
 */

router.get('/activities', ActivitiesController.getActivities)
router.get('/activities/:id', ActivitiesController.getOneActivities)
router.post(
  '/activities',
  // schemaValidator('/category'),
  ActivitiesController.saveActivities
)
router.put(
  '/activities/:id',
  // schemaValidator('/category'),
  ActivitiesController.updateActivitie
)
router.delete('/activities/:id', ActivitiesController.deleteActivity)



export default router;

import { Request, Response, Router } from "express";
import {
  UserController,
  RoleController,
  AuthController,
  RoadItemController,
  RoadController,
  CompanyController,
  CategoryController,
  SaleRepController,
  ActivitiesController,
  ActivitiesItemController,
} from "./controllers";
const router = Router();
import { isAuthenticate } from "./utils";
import PosController from "./controllers/pos";
import TaskController from "./controllers/task";
import schemaValidator from "./utils/schemaValidator";
import TimesController from "./controllers/times";
import ChannelClusterController from "./controllers/channel_cluster";

import TradeChannelController from './controllers/trade_channel';

import SalesRepAuthController from './controllers/salesrep_auth';
//router.get('/', (req: Request, res: Response) => res.send('Hello World!'));
router.get("/", (req: Request, res: Response) =>
  res.sendFile(__dirname + "/index.html")
);

/**
 * Auth
 */
router.post("/login", schemaValidator("/login"), AuthController.login);
router.post("/logout", AuthController.logout);

/**
 * SalesRepAuth
 */
router.post(
  '/signin',
  schemaValidator('/signin'),
  SalesRepAuthController.login
); 
router.post('/signout', SalesRepAuthController.logout);


/**
 * Roles
 */
router.get("/roles/:id", isAuthenticate, RoleController.role);
router.get("/roles", isAuthenticate, RoleController.getRoles);
router.post(
  '/roles',
  schemaValidator('/roles'),
  isAuthenticate, 
  RoleController.createRole
);
router.put(
  "/roles/:id",
  schemaValidator("/roles"),
  isAuthenticate,
  RoleController.updateRole
);
router.delete("/roles/:id", isAuthenticate, RoleController.deleteRole);

/**
 * Users
 */
router.get("/users/:id", isAuthenticate, UserController.user);
router.get("/users", isAuthenticate, UserController.getUsers);

router.post(
  "/users",
  // schemaValidator("/users"),
  // isAuthenticate,
  UserController.createUser
);
router.put(
  "/users/:id",
  schemaValidator("/users"),
  isAuthenticate,
  UserController.updateUser
);
router.delete("/users/:id", isAuthenticate, UserController.deleteUser);
router.delete("/users", isAuthenticate, UserController.deleteAllUser);

/**
 * SaleRep
 */
router.get("/salesrep/:id", isAuthenticate, SaleRepController.getSaleRep);
router.get("/salesrep", isAuthenticate, SaleRepController.getAllSaleRep);
router.post("/salesrep", isAuthenticate, SaleRepController.createSaleRep);
router.put("/salesrep/:id", isAuthenticate, SaleRepController.updateSaleRep);
router.delete("/salesrep/:id", isAuthenticate, SaleRepController.deleteSaleRep);
router.delete("/salesrep/", isAuthenticate, SaleRepController.deleteAllSalesRep);


/**
 * road item
 */
router.get('/roadItems', isAuthenticate, RoadItemController.getAllRoadItems)
router.get('/roadItem/:id', isAuthenticate, RoadItemController.getOneRoadItem)

router.put('/roadItem/:id', isAuthenticate, RoadItemController.updateRoadItemHandler)
router.post('/roadItem', isAuthenticate, RoadItemController.saveRoadItem)
router.delete('/roadItem/:id', isAuthenticate, RoadItemController.deleteRoadItem)

/**
 * road
 */
router.get('/roads', isAuthenticate, RoadController.getAllRoads)
router.get('/roads/:id', isAuthenticate, RoadController.getSaleRepsRoads)
router.get('/road/:id', isAuthenticate, RoadController.getOneRoad)
router.post('/road', isAuthenticate, RoadController.saveRoad)

router.delete('/road/:id', isAuthenticate, RoadController.deleteRoadController)
router.delete('/roads', isAuthenticate, RoadController.deleteAllRoadController)
// router.post('/road', RoadController.updateRoad)


/**
 * Pos
 */
router.get("/pos", isAuthenticate, PosController.getPos);
router.get("/pos/:id", isAuthenticate, PosController.getOnePos);
router.post(
  "/pos", isAuthenticate,
  // schemaValidator('/pos'),
  PosController.savePos
);
router.put(
  "/pos/:id", isAuthenticate,
  // schemaValidator('/pos'),
  PosController.updatePos
);
router.delete("/pos/:id", isAuthenticate, PosController.deletePos);
router.delete("/pos", isAuthenticate, PosController.deleteAllPOS);
// 

/**
 * Task
 */
router.get("/task", TaskController.getTask);
router.get("/task/:id", TaskController.getOneTask);
router.post("/task", schemaValidator("/task"), TaskController.saveTask);
router.put("/task/:id", schemaValidator("/task"), TaskController.modifyTask);
router.delete("/task/:id", TaskController.deleteTask);
/**
 * TimesTravel
 *
 */
router.get("/times", TimesController.getTravelTimes);
router.get("/times/:id", TimesController.getOneTravelTime);
router.post(
  "/times",
  schemaValidator("/times"),
  TimesController.saveTravelTime
);
router.put(
  "/times/:id",
  schemaValidator("/times"),
  TimesController.updateTravelTime
);
router.delete("/times/:id", TimesController.deleteTravelTime);

/**
 * Cluster channel
 */

router.get("/channelCluster", 
  isAuthenticate, 
  ChannelClusterController.getChannelClusters);
router.get(
  "/channelCluster/:id", 
  isAuthenticate, 
  ChannelClusterController.getOneChannelCluster
);
router.post(
  "/channelCluster",
  //schemaValidator('/channelCluster'),
  ChannelClusterController.saveChannelCluster
);
router.put(
  "/channelCluster/:id", 
  isAuthenticate, 
  // schemaValidator('/channelCluster'),
  ChannelClusterController.updateChannelCluster
);
router.delete(
  "/channelCluster/:id",
  ChannelClusterController.deleteChannelCluster
);

router.delete(
  "/channelCluster", 
  isAuthenticate, 
  ChannelClusterController.deleteAllChannelCluster
);

/**
 * Trade Channel
 */

router.get("/tradeChannel", isAuthenticate,  TradeChannelController.getTradeChannels);
router.get("/tradeChannel/:id", isAuthenticate, TradeChannelController.getOneTradeChannel);
router.post(
  "/tradeChannel",
  isAuthenticate, 
  schemaValidator("/tradeChannel"),
  TradeChannelController.saveTradeChannel
);
router.put(
  "/tradeChannel/:id", 
  isAuthenticate, 
  schemaValidator("/tradeChannel"),
  TradeChannelController.updateTradeChannel
);
router.delete("/tradeChannel/:id", isAuthenticate, TradeChannelController.deleteTradeChannel);

router.delete("/tradeChannel", isAuthenticate, TradeChannelController.deleteAllTradeCh);



/**
 * Company
 */
router.get("/company", CompanyController.getCompanys);
router.get("/company/:id", CompanyController.companyOne);
router.post(
  "/company",
  schemaValidator("/company"),
  CompanyController.createCompany
);
router.put(
  "/comapany/:id",
  schemaValidator("/company"),
  CompanyController.updateCompany
);
router.delete("/company/:id", CompanyController.deleteCompany);

/**
 * Category
 */

router.get("/category", isAuthenticate, CategoryController.getCategory);
router.get("/category/:id", isAuthenticate, CategoryController.getOneCategory);
router.post(
  "/category",
  isAuthenticate, 
  schemaValidator("/category"), 
  CategoryController.saveCategory
);
router.put(
  "/category/:id", 
  isAuthenticate, 
  schemaValidator("/category"),
  CategoryController.updateCategroy
);
router.put(
  "/category", 
  isAuthenticate, 
  schemaValidator("/category"),
  CategoryController.updateAllCategories
);
router.delete("/category/:id", isAuthenticate, CategoryController.deleteCategory); 
router.delete("/category", isAuthenticate, CategoryController.deleteAllCategories); 

/**
 * Activities
 */

router.get("/activities", isAuthenticate, ActivitiesController.getActivities);
router.get("/activities/:id", isAuthenticate, ActivitiesController.getOneActivities);
router.post(
  "/activities", 
  isAuthenticate, 
  // schemaValidator('/category'),
  ActivitiesController.saveActivities
);
router.put(
  "/activities/:id", 
  isAuthenticate, 
  // schemaValidator('/category'),
  ActivitiesController.updateActivitie
);
router.delete("/activities/:id", isAuthenticate, ActivitiesController.deleteActivity);
router.delete("/activities", isAuthenticate, ActivitiesController.deleteAllActivities);



/**
 * Activitie Item
 */

router.get("/activitiesItem", isAuthenticate, ActivitiesItemController.getActivitiesItem);
router.get("/activitiesItem/:id", isAuthenticate, ActivitiesItemController.getOneActivitieItem);
router.post(
  "/activitiesItem", 
  isAuthenticate, 
  // schemaValidator('/category'),
  ActivitiesItemController.saveActivitieItem
);
router.put(
  "/activitiesItem/:id", isAuthenticate, 
  // schemaValidator('/category'),
  ActivitiesItemController.updateActivitieItem
);
router.delete(
  "/activitiesItem/:id", isAuthenticate, 
  ActivitiesItemController.deleteActivitieItem
);
router.delete(
  "/activitiesItem", isAuthenticate, 
  ActivitiesItemController.deleteAllActivitieItems
);

export default router;

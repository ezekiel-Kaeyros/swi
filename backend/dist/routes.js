"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = (0, express_1.Router)();
var utils_1 = require("./utils");
var pos_1 = __importDefault(require("./controllers/pos"));
var task_1 = __importDefault(require("./controllers/task"));
var schemaValidator_1 = __importDefault(require("./utils/schemaValidator"));
var times_1 = __importDefault(require("./controllers/times"));
var channel_cluster_1 = __importDefault(require("./controllers/channel_cluster"));
var trade_channel_1 = __importDefault(require("./controllers/trade_channel"));
//router.get('/', (req: Request, res: Response) => res.send('Hello World!'));
router.get('/', function (req, res) { return res.sendFile(__dirname + '/index.html'); });
/**
 * Auth
 */
router.post('/login', (0, schemaValidator_1.default)('/login'), controllers_1.AuthController.login);
router.post('/logout', controllers_1.AuthController.logout);
/**
 * Roles
 */
router.get('/roles/:id', utils_1.isAuthenticate, controllers_1.RoleController.role);
router.get('/roles', utils_1.isAuthenticate, controllers_1.RoleController.getRoles);
router.post('/roles', (0, schemaValidator_1.default)('/roles'), utils_1.isAuthenticate, controllers_1.RoleController.createRole);
router.put('/roles/:id', (0, schemaValidator_1.default)('/roles'), utils_1.isAuthenticate, controllers_1.RoleController.updateRole);
router.delete('/roles/:id', utils_1.isAuthenticate, controllers_1.RoleController.deleteRole);
/**
 * Users
 */
router.get('/users/:id', utils_1.isAuthenticate, controllers_1.UserController.user);
router.get('/users', utils_1.isAuthenticate, controllers_1.UserController.getUsers);
router.post('/users', (0, schemaValidator_1.default)('/users'), utils_1.isAuthenticate, controllers_1.UserController.createUser);
router.put('/users/:id', (0, schemaValidator_1.default)('/users'), utils_1.isAuthenticate, controllers_1.UserController.updateUser);
router.delete('/users/:id', utils_1.isAuthenticate, controllers_1.UserController.deleteUser);
/**
 * SaleRep
 */
router.get('/salesrep/:id', utils_1.isAuthenticate, controllers_1.SaleRepController.getSaleRep);
router.get('/salesrep', utils_1.isAuthenticate, controllers_1.SaleRepController.getAllSaleRep);
router.post('/salesrep', utils_1.isAuthenticate, controllers_1.SaleRepController.createSaleRep);
router.put('/salesrep/:id', utils_1.isAuthenticate, controllers_1.SaleRepController.updateSaleRep);
router.delete('/salesrep/:id', utils_1.isAuthenticate, controllers_1.SaleRepController.deleteSaleRep);
/**
 * road item
 */
router.get('/roadItems', controllers_1.RoadItemController.getAllRoadItems);
router.get('/roadItem/:id', controllers_1.RoadItemController.getOneRoadItem);
router.put('/roadItem/:id', controllers_1.RoadItemController.updateRoadItemHandler);
router.post('/roadItem', controllers_1.RoadItemController.saveRoadItem);
/**
 * road
 */
router.get('/roads', controllers_1.RoadController.getAllRoads);
router.post('/road', controllers_1.RoadController.saveRoad);
/**
 * Pos
 */
router.get('/pos', pos_1.default.getPos);
router.get('/pos/:id', pos_1.default.getOnePos);
router.post('/pos', 
// schemaValidator('/pos'),
pos_1.default.savePos);
router.put('/pos/:id', 
// schemaValidator('/pos'),
pos_1.default.updatePos);
router.delete('/pos/:id', pos_1.default.deletePos);
/**
 * Task
 */
router.get('/task', task_1.default.getTask);
router.get('/task/:id', task_1.default.getOneTask);
router.post('/task', (0, schemaValidator_1.default)('/task'), task_1.default.saveTask);
router.put('/task/:id', (0, schemaValidator_1.default)('/task'), task_1.default.modifyTask);
router.delete('/task/:id', task_1.default.deleteTask);
/**
 * TimesTravel
 *
 */
router.get('/times', times_1.default.getTravelTimes);
router.get('/times/:id', times_1.default.getOneTravelTime);
router.post('/times', (0, schemaValidator_1.default)('/times'), times_1.default.saveTravelTime);
router.put('/times/:id', (0, schemaValidator_1.default)('/times'), times_1.default.updateTravelTime);
router.delete('/times/:id', times_1.default.deleteTravelTime);
/**
 * Cluster channel
 */
router.get('/channelCluster', channel_cluster_1.default.getChannelClusters);
router.get('/channelCluster/:id', channel_cluster_1.default.getOneChannelCluster);
router.post('/channelCluster', 
//schemaValidator('/channelCluster'),
channel_cluster_1.default.saveChannelCluster);
router.put('/channelCluster/:id', 
// schemaValidator('/channelCluster'),
channel_cluster_1.default.updateChannelCluster);
router.delete('/channelCluster/:id', channel_cluster_1.default.deleteChannelCluster);
/**
 * Trade Channel
 */
router.get('/tradeChannel', trade_channel_1.default.getTradeChannels);
router.get('/tradeChannel/:id', trade_channel_1.default.getOneTradeChannel);
router.post('/tradeChannel', (0, schemaValidator_1.default)('/tradeChannel'), trade_channel_1.default.saveTradeChannel);
router.put('/tradeChannel/:id', (0, schemaValidator_1.default)('/tradeChannel'), trade_channel_1.default.updateTradeChannel);
router.delete('/tradeChannel/:id', trade_channel_1.default.deleteTradeChannel);
/**
 * Company
 */
router.get('/company', controllers_1.CompanyController.getCompanys);
router.get('/company/:id', controllers_1.CompanyController.companyOne);
router.post('/company', (0, schemaValidator_1.default)('/company'), controllers_1.CompanyController.createCompany);
router.put('/comapany/:id', (0, schemaValidator_1.default)('/company'), controllers_1.CompanyController.updateCompany);
router.delete('/company/:id', controllers_1.CompanyController.deleteCompany);
/**
 * Category
 */
router.get('/category', controllers_1.CategoryController.getCategory);
router.get('/category/:id', controllers_1.CategoryController.getOneCategory);
router.post('/category', (0, schemaValidator_1.default)('/category'), controllers_1.CategoryController.saveCategory);
router.put('/category/:id', (0, schemaValidator_1.default)('/category'), controllers_1.CategoryController.updateCategroy);
router.delete('/category/:id', controllers_1.CategoryController.deleteCategory);
/**
 * Activities
 */
router.get('/activities', controllers_1.ActivitiesController.getActivities);
router.get('/activities/:id', controllers_1.ActivitiesController.getOneActivities);
router.post('/activities', 
// schemaValidator('/category'),
controllers_1.ActivitiesController.saveActivities);
router.put('/activities/:id', 
// schemaValidator('/category'),
controllers_1.ActivitiesController.updateActivitie);
router.delete('/activities/:id', controllers_1.ActivitiesController.deleteActivity);
/**
 * Activitie Item
 */
router.get('/activitiesItem', controllers_1.ActivitiesItemController.getActivitiesItem);
router.get('/activitiesItem/:id', controllers_1.ActivitiesItemController.getOneActivitieItem);
router.post('/activitiesItem', 
// schemaValidator('/category'),
controllers_1.ActivitiesItemController.saveActivitieItem);
router.put('/activitiesItem/:id', 
// schemaValidator('/category'),
controllers_1.ActivitiesItemController.updateActivitieItem);
router.delete('/activitiesItem/:id', controllers_1.ActivitiesItemController.deleteActivitieItem);
exports.default = router;

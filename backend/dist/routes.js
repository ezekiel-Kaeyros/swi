"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = (0, express_1.Router)();
var utils_1 = require("../server/utils");
var pos_1 = __importDefault(require("./controllers/pos"));
var task_1 = __importDefault(require("./controllers/task"));
var schemaValidator_1 = __importDefault(require("./utils/schemaValidator"));
router.get('/', function (req, res) { return res.send('echo'); });
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
router.put('/roles', (0, schemaValidator_1.default)('/roles'), utils_1.isAuthenticate, controllers_1.RoleController.updateRole);
router.delete('/roles', utils_1.isAuthenticate, controllers_1.RoleController.deleteRole);
/**
 * Users
 */
router.get('/users/:id', utils_1.isAuthenticate, controllers_1.UserController.user);
router.get('/users', utils_1.isAuthenticate, controllers_1.UserController.getUsers);
router.post('/users', (0, schemaValidator_1.default)('/users'), utils_1.isAuthenticate, controllers_1.UserController.createUser);
router.put('/users', (0, schemaValidator_1.default)('/users'), utils_1.isAuthenticate, controllers_1.UserController.updateUser);
router.delete('/users', utils_1.isAuthenticate, controllers_1.UserController.deleteUser);
/**
 * Pos
 */
router.get('/pos', pos_1.default.getPos);
router.get('/pos/:id', pos_1.default.getOnePos);
router.post('/pos', (0, schemaValidator_1.default)('/pos'), pos_1.default.savePos);
router.put('/pos', (0, schemaValidator_1.default)('/pos'), pos_1.default.updatePos);
router.delete('/pos/:id', pos_1.default.deletePos);
/**
 * Task
 */
router.get('/tasks', task_1.default.getTask);
router.get('/task/:id', task_1.default.getOneTask);
router.post('/task', (0, schemaValidator_1.default)('/task'), task_1.default.saveTask);
router.put('/task', (0, schemaValidator_1.default)('/task'), task_1.default.modifyTask);
router.delete('/task/:id', task_1.default.deleteTask);
exports.default = router;

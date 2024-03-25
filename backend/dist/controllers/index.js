"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosController = exports.AuthController = exports.RoleController = exports.UserController = void 0;
var user_1 = require("./user");
Object.defineProperty(exports, "UserController", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
var role_1 = require("./role");
Object.defineProperty(exports, "RoleController", { enumerable: true, get: function () { return __importDefault(role_1).default; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "AuthController", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
var pos_1 = require("./pos");
Object.defineProperty(exports, "PosController", { enumerable: true, get: function () { return __importDefault(pos_1).default; } });

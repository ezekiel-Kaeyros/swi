"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var PASSWORD_REGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!.@#$%^&*])(?=.{8,})");
var loginValidator = joi_1.default.object().keys({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
var roleValidator = joi_1.default.object().keys({
    name: joi_1.default.string().min(4).required(),
});
var userValidator = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).required(),
});
var posValidator = joi_1.default.object().keys({
    longitude: joi_1.default.string().min(4).required(),
    latitude: joi_1.default.string().min(4).required(),
});
var taskValidator = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
});
exports.default = {
    "/login": loginValidator,
    "/roles": roleValidator,
    "/users": userValidator,
    "pos": posValidator,
    "/tasks": taskValidator,
};

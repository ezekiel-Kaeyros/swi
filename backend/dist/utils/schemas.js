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
    password: joi_1.default.string().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"))
        .min(8).required(),
    first_name: joi_1.default.string().min(4).required(),
    last_name: joi_1.default.string().min(4).required(),
    contact: joi_1.default.number().min(7).required(),
    address_id: joi_1.default.string().required(),
    profile_picture: joi_1.default.string().required(),
    role: joi_1.default.string().required(),
});
var posValidator = joi_1.default.object().keys({
    longitude: joi_1.default.string().min(4).required(),
    latitude: joi_1.default.string().min(4).required(),
});
var taskValidator = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
});
var roadItemValidator = joi_1.default.object().keys({
    taskIds: joi_1.default.array().items(joi_1.default.string()).required(),
    posId: joi_1.default.string().required(),
});
var timesValidator = joi_1.default.object().keys({
    time: joi_1.default.string().required(),
    id_company: joi_1.default.string().required(),
});
var channelClusterValidator = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    id_company: joi_1.default.string().required(),
});
var tradeChannelValidator = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    id_company: joi_1.default.string().required(),
    channel_cluster_id: joi_1.default.string().required(),
});
var companyValidator = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
});
var categoryValidator = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    id_company: joi_1.default.string().required(),
    trade_chanel_id: joi_1.default.string().required(),
});
exports.default = {
    "/login": loginValidator,
    "/roles": roleValidator,
    "/users": userValidator,
    "/pos": posValidator,
    "/task": taskValidator,
    "/road-item": roadItemValidator,
    "/times": timesValidator,
    "/channelCluster": channelClusterValidator,
    "/tradeChannel": tradeChannelValidator,
    "/company": companyValidator,
    "/category": categoryValidator
};

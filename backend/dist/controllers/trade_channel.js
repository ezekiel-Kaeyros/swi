"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var trade_channel_1 = require("../db/trade_channel");
var mongoose_1 = __importDefault(require("mongoose"));
var db_1 = require("../db");
var TradeChannelController = {
    getTradeChannels: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var TradeChannel_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, trade_channel_1.findAllTradeChannels)()];
                case 1:
                    TradeChannel_1 = _a.sent();
                    response.send(TradeChannel_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error fetching all trade channel', error_1.message);
                    response.status(500).send(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOneTradeChannel: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, tradeChannel, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    //Check if the provided ID is a valid ObjectId
                    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                        response.status(400).json({ success: false, error: 'Ivalid id format' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, trade_channel_1.findTradeChannelById)(id)];
                case 1:
                    tradeChannel = _a.sent();
                    if (tradeChannel) {
                        response.json(400).json({ success: true, data: tradeChannel });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Trade channel not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log('Error fetching one trade channel: ', error_2.message);
                    response.status(500).json({ succes: false, error: 'Internal Server Error ' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    saveTradeChannel: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, name_1, id_company, channel_cluster_id, channelCluster, newTradeChannel, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = request.body, name_1 = _a.name, id_company = _a.id_company, channel_cluster_id = _a.channel_cluster_id;
                    return [4 /*yield*/, (0, db_1.findChannelClusterById)(channel_cluster_id)];
                case 1:
                    channelCluster = _b.sent();
                    if (!channelCluster) {
                        throw new Error('Channel Cluster not found with the provided ID');
                    }
                    return [4 /*yield*/, (0, trade_channel_1.createTradeChannel)({ name: name_1, channel_cluster_id: channel_cluster_id, id_company: id_company })];
                case 2:
                    newTradeChannel = _b.sent();
                    return [4 /*yield*/, (0, db_1.updateArrayTradeChannels)({ id: channel_cluster_id, trade_channels_id: newTradeChannel._id })];
                case 3:
                    _b.sent();
                    response.status(201).json({ success: true, data: newTradeChannel });
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _b.sent();
                    console.error('Error creating trade channel:', error_3.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); },
    updateTradeChannel: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, name_2, id_company, channel_cluster_id, updatedTradeChannel, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    _a = request.body, name_2 = _a.name, id_company = _a.id_company, channel_cluster_id = _a.channel_cluster_id;
                    if (!id || !name_2 || !id_company || !channel_cluster_id) {
                        response.status(400).json({ success: false, error: 'ID and name are required' });
                        return [2 /*return*/];
                    }
                    // Check if the provided ID is a valid ObjectId
                    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                        response.status(400).json({ success: false, error: 'Invalid ID format' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, trade_channel_1.updateTradeChannel)({ name: name_2, id_company: id_company, channel_cluster_id: channel_cluster_id, id: id })];
                case 1:
                    updatedTradeChannel = _b.sent();
                    if (updatedTradeChannel) {
                        response.json({ success: true, data: updatedTradeChannel });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Trade channel not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error('Error updating trade channel:', error_4.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteTradeChannel: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, deletedTradeChannel, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    if (!id) {
                        response.status(400).json({ success: false, error: 'ID is required' });
                        return [2 /*return*/];
                    }
                    // Check if the provided ID is a valid ObjectId
                    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                        response.status(400).json({ success: false, error: 'Invalid ID format' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, trade_channel_1.deleteTradeChannel)(id)];
                case 1:
                    deletedTradeChannel = _a.sent();
                    if (deletedTradeChannel) {
                        response.json({ success: true, data: deletedTradeChannel });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Trade channel not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error('Error deleting trade channel:', error_5.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports.default = TradeChannelController;

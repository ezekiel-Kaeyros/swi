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
var times_1 = require("../db/times");
var mongoose_1 = __importDefault(require("mongoose"));
var TimesController = {
    getTravelTimes: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var TravelTimes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, times_1.findAllTravelTimes)()];
                case 1:
                    TravelTimes = _a.sent();
                    response.send(TravelTimes);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error fetching all travel times:', error_1.message);
                    response.status(500).send(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getOneTravelTime: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, travelTime, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    // Check if the provided ID is a valid ObjectId
                    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                        response.status(400).json({ success: false, error: 'Invalid ID format' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, times_1.findtravelTimeById)(id)];
                case 1:
                    travelTime = _a.sent();
                    if (travelTime) {
                        response.json({ success: true, data: travelTime });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Travel time not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error fetching one travel time:', error_2.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    saveTravelTime: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, time, id_company, newTravelTime, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = request.body, time = _a.time, id_company = _a.id_company;
                    if (!time || !id_company) {
                        response.status(400).json({ success: false, error: 'All fields are required' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, times_1.createTravelTime)({ time: time, id_company: id_company })];
                case 1:
                    newTravelTime = _b.sent();
                    response.status(201).json({ success: true, data: newTravelTime });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error('Error creating travel time:', error_3.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    updateTravelTime: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, time, id_company, updatedTravelTime, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    id = request.params.id;
                    _a = request.body, time = _a.time, id_company = _a.id_company;
                    if (!id || !time || !id_company) {
                        response.status(400).json({ success: false, error: 'ID and time are required' });
                        return [2 /*return*/];
                    }
                    // Check if the provided ID is a valid ObjectId
                    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                        response.status(400).json({ success: false, error: 'Invalid ID format' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, times_1.updateTravelTime)({ id: id, time: time, id_company: id_company })];
                case 1:
                    updatedTravelTime = _b.sent();
                    if (updatedTravelTime) {
                        response.json({ success: true, data: updatedTravelTime });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Travel time not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    console.error('Error updating travel time:', error_4.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteTravelTime: function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var id, deletedTravelTime, error_5;
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
                    return [4 /*yield*/, (0, times_1.deleteTravelTime)(id)];
                case 1:
                    deletedTravelTime = _a.sent();
                    if (deletedTravelTime) {
                        response.json({ success: true, data: deletedTravelTime });
                    }
                    else {
                        response.status(404).json({ success: false, error: 'Travel time not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error('Error deleting travel time:', error_5.message);
                    response.status(500).json({ success: false, error: 'Internal Server Error' });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports.default = TimesController;

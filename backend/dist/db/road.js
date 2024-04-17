"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoad = exports.findOneRoad = exports.findAllRoad = void 0;
var models_1 = require("../models");
var findAllRoad = function () { return __awaiter(void 0, void 0, void 0, function () {
    var roads, transformedRoads, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Road.find()
                        .populate({
                        path: 'roadItems',
                        model: 'road_items',
                        populate: [
                            {
                                path: 'taskIds.id',
                                model: 'Task',
                            },
                            {
                                path: 'posId',
                                model: 'Pos',
                            },
                        ],
                    })
                        .populate({
                        path: 'saleRep',
                        model: 'User',
                    })
                        .lean()
                        .exec()];
            case 1:
                roads = _a.sent();
                transformedRoads = transformRoads(roads);
                return [2 /*return*/, transformedRoads];
            case 2:
                error_1 = _a.sent();
                console.error('Error finding all road:', error_1.message);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findAllRoad = findAllRoad;
var findOneRoad = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var road, transformedRoad, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Road.findById(id)
                        .populate({
                        path: 'roadItems',
                        model: 'road_items',
                        populate: [
                            {
                                path: 'taskIds.id',
                                model: 'Task',
                            },
                            {
                                path: 'posId',
                                model: 'Pos',
                            },
                        ],
                    })
                        .populate({
                        path: 'saleRep',
                        model: 'User',
                    })
                        .lean()
                        .exec()];
            case 1:
                road = _a.sent();
                transformedRoad = transformRoads([road]);
                return [2 /*return*/, transformedRoad[0]];
            case 2:
                error_2 = _a.sent();
                console.error('Error finding all road:', error_2.message);
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findOneRoad = findOneRoad;
var createRoad = function (roadItemData) { return __awaiter(void 0, void 0, void 0, function () {
    var createdRoad, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Road.create(roadItemData)];
            case 1:
                createdRoad = _a.sent();
                return [2 /*return*/, createdRoad];
            case 2:
                error_3 = _a.sent();
                console.error('Error creating road:', error_3.message);
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createRoad = createRoad;
var transformRoads = function (roads) {
    return roads.map(function (road) {
        return __assign(__assign({}, road), { roadItems: road.roadItems.map(function (roadItem) { return (__assign(__assign({}, roadItem), { tasks: roadItem.taskIds.map(function (_a) {
                    var id = _a.id, status = _a.status, _id = _a._id;
                    return (__assign(__assign({}, id), { status: status, _id: _id, id: undefined }));
                }), pos: roadItem.posId, taskIds: undefined, posId: undefined })); }), saleRep: road.saleRep });
    });
};

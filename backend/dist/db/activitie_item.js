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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivityItem = exports.updateActivityItem = exports.createActivityItem = exports.findActivityItemById = exports.findAllActivitieItem = void 0;
var models_1 = require("../models");
var findAllActivitieItem = function () { return __awaiter(void 0, void 0, void 0, function () {
    var activitiesItems, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.ActivitieItem.find()
                        .populate('channelClusters')
                        .populate('tradeChannels')
                        .populate('categories')
                        .populate('activitie')];
            case 1:
                activitiesItems = _a.sent();
                return [2 /*return*/, activitiesItems];
            case 2:
                error_1 = _a.sent();
                console.log('Error finding all activities Items', error_1.message);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findAllActivitieItem = findAllActivitieItem;
var findActivityItemById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var query, activity, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = { _id: id };
                return [4 /*yield*/, models_1.ActivitieItem.findById(query)
                        .populate('channelClusters')
                        .populate('tradeChannels')
                        .populate('categories')
                        .populate('activitie')];
            case 1:
                activity = _a.sent();
                return [2 /*return*/, activity];
            case 2:
                error_2 = _a.sent();
                console.log('Error finding activity');
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findActivityItemById = findActivityItemById;
var createActivityItem = function (activityData) { return __awaiter(void 0, void 0, void 0, function () {
    var activityItem, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.ActivitieItem.create(activityData)];
            case 1:
                activityItem = _a.sent();
                return [2 /*return*/, activityItem];
            case 2:
                error_3 = _a.sent();
                console.log('Error creating activity', error_3.message);
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createActivityItem = createActivityItem;
var updateActivityItem = function (activityData) { return __awaiter(void 0, void 0, void 0, function () {
    var updateActivity, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.ActivitieItem.findByIdAndUpdate({ _id: activityData.id }, {
                        channelClusters: activityData.channelClusters,
                        tradeChannels: activityData.tradeChannels,
                        categories: activityData.categories
                    }, { new: true })];
            case 1:
                updateActivity = _a.sent();
                if (!updateActivity) {
                    throw new Error('L\'activité  avec l\'ID fourni n\'a pas été trouvée.');
                }
                return [2 /*return*/, updateActivity];
            case 2:
                error_4 = _a.sent();
                console.log('Error updating activity ', error_4.message);
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateActivityItem = updateActivityItem;
var deleteActivityItem = function (activityData) { return __awaiter(void 0, void 0, void 0, function () {
    var deleteActivity, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.ActivitieItem.findByIdAndDelete({ _id: activityData })];
            case 1:
                deleteActivity = _a.sent();
                if (!deleteActivity) {
                    throw new Error('L\'activité  avec l\'ID fourni n\'a pas été trouvée.');
                }
                return [2 /*return*/, deleteActivity];
            case 2:
                error_5 = _a.sent();
                console.log('Error deleting activity ', error_5.message);
                throw error_5;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteActivityItem = deleteActivityItem;

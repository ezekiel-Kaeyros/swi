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
exports.deletePos = exports.updatePos = exports.createPos = exports.findOnePos = exports.findAllPos = void 0;
var models_1 = require("../models");
var findAllPos = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pos, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Pos.find()];
            case 1:
                pos = _a.sent();
                return [2 /*return*/, pos];
            case 2:
                error_1 = _a.sent();
                console.error('Error finding all pos:', error_1.message);
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findAllPos = findAllPos;
var findOnePos = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var query, pos, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = { _id: id };
                return [4 /*yield*/, models_1.Pos.findById(query)];
            case 1:
                pos = _a.sent();
                return [2 /*return*/, pos];
            case 2:
                error_2 = _a.sent();
                console.error('Error finding pos:', error_2.message);
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.findOnePos = findOnePos;
var createPos = function (posData) { return __awaiter(void 0, void 0, void 0, function () {
    var pos, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Pos.create(posData)];
            case 1:
                pos = _a.sent();
                return [2 /*return*/, pos];
            case 2:
                error_3 = _a.sent();
                console.error('Erreur lors de la création de la pos :', error_3.message);
                throw error_3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createPos = createPos;
var updatePos = function (posData) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedPos, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Pos.findOneAndUpdate({ _id: posData.id }, {
                        longitude: posData.longitude,
                        latitude: posData.latitude,
                        name: posData.name,
                        description: posData.description,
                    }, { new: true })];
            case 1:
                updatedPos = _a.sent();
                if (!updatedPos) {
                    throw new Error('La pos avec l\'ID fourni n\'a pas été trouvée.');
                }
                return [2 /*return*/, updatedPos];
            case 2:
                error_4 = _a.sent();
                console.error('Erreur lors de la mise à jour de la pos :', error_4.message);
                throw error_4;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updatePos = updatePos;
var deletePos = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedPos, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.Pos.findByIdAndDelete(id)];
            case 1:
                deletedPos = _a.sent();
                return [2 /*return*/, deletedPos];
            case 2:
                error_5 = _a.sent();
                console.error('Error deleting pos:', error_5.message);
                throw error_5;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deletePos = deletePos;

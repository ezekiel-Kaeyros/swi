"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var RoadSchema = new Schema({
    roadItems: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'road_items' }],
    saleRep: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
exports.default = mongoose_1.default.model('road', RoadSchema);

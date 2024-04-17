"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constence_1 = require("../utils/constence");
var Schema = mongoose_1.default.Schema;
var RoadItemSchema = new Schema({
    taskIds: [
        {
            id: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Task', required: true },
            status: { type: String, required: true, default: constence_1.StatusRoadItem.PENDING },
        },
    ],
    posId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Pos', required: true },
    status: { type: String, required: false },
}, { timestamps: true });
exports.default = mongoose_1.default.model('road_items', RoadItemSchema);

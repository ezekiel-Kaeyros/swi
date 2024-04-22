"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiesSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.activitiesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    activitieItems: [{ type: Schema.Types.ObjectId, ref: 'ActivitieItem' }],
});
exports.default = mongoose_1.default.model('Activities', exports.activitiesSchema);

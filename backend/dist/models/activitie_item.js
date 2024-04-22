"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitieItemSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.activitieItemSchema = new Schema({
    priority: { type: Number, required: true },
    colors: { type: String, required: true },
    channelClusters: [{ type: Schema.Types.ObjectId, ref: 'ChannelCluster' }],
    tradeChannels: [{ type: Schema.Types.ObjectId, ref: 'TradeChannel' }],
    activitie: { type: Schema.Types.ObjectId, ref: 'Activities' },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    time: { type: Number, required: true }, // Peut être calculé dynamiquement
    frequency: { type: Number, required: true }
});
exports.default = mongoose_1.default.model('ActivitieItem', exports.activitieItemSchema);

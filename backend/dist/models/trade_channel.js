"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tradeChannelSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.tradeChannelSchema = new Schema({
    name: { type: String, required: true },
    id_company: { type: mongoose_1.default.Schema.Types.String, ref: 'Company' },
    channel_cluster_id: { type: Schema.Types.ObjectId, ref: 'ChannelCluster' },
    categories_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('TradeChannel', exports.tradeChannelSchema);

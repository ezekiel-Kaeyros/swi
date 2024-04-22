"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelClusterSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.channelClusterSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: false },
    id_company: [{ type: Schema.Types.String,
            ref: 'Company' }],
    trade_channels_id: [{ type: Schema.Types.ObjectId, ref: 'TradeChannel' }],
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('ChannelCluster', exports.channelClusterSchema);

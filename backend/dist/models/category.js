"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.categorySchema = new Schema({
    name: { type: String, required: true },
    id_company: [{ type: mongoose_1.default.Schema.Types.String, ref: 'Company', required: true }],
    trade_chanel_id: { type: Schema.Types.ObjectId, ref: 'TradeChannel', required: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Category', exports.categorySchema);

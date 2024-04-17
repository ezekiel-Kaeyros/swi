"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelTimeSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.travelTimeSchema = new Schema({
    time: { type: String, required: true },
    id_company: { type: mongoose_1.default.Schema.Types.String, ref: 'Company', required: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('TravelTime', exports.travelTimeSchema);

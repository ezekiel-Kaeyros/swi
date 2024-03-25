"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var PosSchema = new Schema({
    longitude: {
        type: String,
        trim: true,
        required: true,
    },
    latitude: {
        type: String,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: false,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Pos', PosSchema);

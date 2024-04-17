"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var PosSchema = new Schema({
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
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
        required: false,
    },
    description: {
        type: String,
        trim: true,
        required: false,
    },
    phone: {
        type: Number,
        trim: true,
        required: false,
    },
    location: {
        type: String,
        trim: true,
        required: false,
    },
    image: {
        type: String,
        trim: true,
        required: false,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Pos', PosSchema);

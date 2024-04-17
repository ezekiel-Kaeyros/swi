"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var UserAddressSchema = new Schema({
    user_id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    street_line_1: {
        type: String,
        trim: true,
    },
    street_line_2: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    zip_code: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('UserAddress', UserAddressSchema);

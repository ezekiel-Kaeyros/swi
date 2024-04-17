"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var SaleRepSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    region: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    streetAddress: {
        type: String,
        trim: true,
    },
    job: {
        type: String,
        trim: true,
    },
    departement: {
        type: String,
        default: false,
    },
    reportingManager: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    startDate: {
        type: Date,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('SaleRep', SaleRepSchema);

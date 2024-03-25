"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var RoadSchema = new Schema({
    task: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
    sale_rep: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Salerep',
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Road', RoadSchema);

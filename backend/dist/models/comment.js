"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var CommentSchema = new Schema({
    task: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Task',
        },
    ],
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Comment', CommentSchema);

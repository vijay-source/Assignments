"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = mongoose_1.default.Schema;
var queschema = new schema({
    text: { type: String },
    category: { type: Array },
    upvote: { type: Number, default: 0 },
    downvote: { type: Number, default: 0 },
    name: {
        type: String
    },
}, { collection: "question" });
exports.default = mongoose_1.default.model("question", queschema);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = mongoose_1.default.Schema;
var anschema = new schema({
    answer: { type: String, required: true },
    questionid: { type: String },
    userid: { type: String },
    Votecount: { type: Number, default: 0 },
}, { collection: "answer" });
exports.default = mongoose_1.default.model("answer", anschema);

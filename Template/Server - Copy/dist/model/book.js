"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = new mongoose_1.default.Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
}, { collection: "books" });
exports.default = mongoose_1.default.model("books", schema);

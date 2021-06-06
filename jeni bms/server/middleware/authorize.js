"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../user"));
function authorize(req, res, next) {
    console.log("req.user.id", req.user.id);
    var user = user_1.default.findById(req.user.id);
    if (user.name !== "admin") {
        console.log("not admin");
        res.status(400).json({ msg: "Authorization access denied to delete" });
    }
    next();
}
module.exports = authorize;

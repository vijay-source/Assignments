"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controller/userController");
exports.routers = express_1.default.Router();
exports.routers.use(express_1.default.json());
exports.routers.route("/register").post(userController_1.addUser);
exports.routers.route("/login").post(userController_1.loginUser);
exports.routers.route("/users").get(userController_1.userDetails);

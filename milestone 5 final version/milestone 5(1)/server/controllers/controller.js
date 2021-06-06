"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registration = void 0;
var express_1 = __importDefault(require("express"));
var User = require("../models/userSchema");
var Book = require("../models/book");
var bcrypt = require("bcryptjs");
var config = require("config");
var jwt = require("jsonwebtoken");
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
var route = express_1.default.Router(); //create a router object we use this to serve all our requests
route.use(express_1.default.json());
var registration = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, newUser;
    return __generator(this, function (_b) {
        _a = req.body, name = _a.name, email = _a.email, password = _a.password;
        console.log("recieved data for registration");
        // validation
        if (!name || !email || !password) {
            return [2 /*return*/, res.status(400).json({ msg: "please enter all fields" })];
        }
        User.findOne({ email: email }).then(function (user) {
            if (user) {
                // console.log(user);
                return res.status(400).json({ msg: "user already exists" });
            }
            newUser = new User({
                name: name,
                email: email,
                password: password,
            });
            //create salt and hash
            console.log(newUser);
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                    if (err)
                        throw err;
                    newUser.password = hash;
                    newUser.save().then(function (user) {
                        // console.log("sending user resposne",user)
                        res.send(user);
                    });
                });
            });
        });
        return [2 /*return*/];
    });
}); };
exports.registration = registration;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password;
    return __generator(this, function (_b) {
        _a = req.body, email = _a.email, password = _a.password;
        console.log("user email", email);
        console.log("user password", password);
        if (!email || !password) {
            return [2 /*return*/, res.status(400).json({ msg: "credential missing" })];
        }
        User.findOne({ email: email }).then(function (user) {
            if (!user)
                return res.status(400).json({ msg: "user doesnot exists" });
            //validate password
            bcrypt.compare(password, user.password).then(function (isMatch) {
                if (!isMatch)
                    return res.status(400).json({ msg: "invalid credentials" });
                jwt.sign({ id: user._id }, "" + process.env.jwtSecret, { expiresIn: 10000 }, function (err, token) {
                    if (err)
                        throw err;
                    console.log("level token", token);
                    res.json({ token: token });
                });
            });
        });
        return [2 /*return*/];
    });
}); };
exports.login = login;
function auth(req, res, next) {
    console.log("auth");
    var authHeader = req.headers.authorization;
    console.log("header", req.headers);
    var token = authHeader && authHeader.split(" ")[1];
    console.log(token);
    //check for token
    if (!token)
        return res.status(401).json({ msg: "no token supplied" });
    jwt.verify(token, "" + process.env.jwtSecret, function (err, user) {
        if (err)
            return res.status(403).send("something went wrong");
        req.user = user;
        next();
    });
}

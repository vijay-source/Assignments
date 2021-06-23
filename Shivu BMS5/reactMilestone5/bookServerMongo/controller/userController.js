"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = exports.authenticate = exports.loginUser = exports.addUser = void 0;
var bcrypt = require("bcryptjs");
var User = require('../models/UserSchema');
var jwt = require("jsonwebtoken");
var addUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, username, password, newUser;
    return __generator(this, function (_b) {
        _a = req.body, name = _a.name, username = _a.username, password = _a.password;
        console.log("recieved data for registration");
        // validation
        if (!name || !username || !password) {
            return [2 /*return*/, res.status(400).json({ msg: "please enter all fields" })];
        }
        User.findOne({ username: username }).then(function (user) {
            if (user) {
                console.log(user);
                return res.status(400).json({ msg: "user already exists" });
            }
            newUser = new User({
                name: name,
                username: username,
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
                        res.send(user);
                    });
                });
            });
        });
        return [2 /*return*/];
    });
}); };
exports.addUser = addUser;
var loginUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password;
    return __generator(this, function (_b) {
        _a = req.body, username = _a.username, password = _a.password;
        console.log("myrequest", req.body);
        console.log("user email", username);
        console.log("user password", password);
        if (!username || !password) {
            return [2 /*return*/, res.status(400).json({ msg: "credential missing" })];
        }
        User.findOne({ username: username }).then(function (user) {
            if (!user)
                return res.status(400).json({ msg: "user doesnot exists" });
            //validate password
            bcrypt.compare(password, user.password).then(function (isMatch) {
                if (!isMatch)
                    return res.status(400).json({ msg: "invalid credentials" });
                jwt.sign({ id: user._id }, "myJwtSecret", { expiresIn: 3600 }, function (err, token) {
                    if (err)
                        throw err;
                    // res.json(token)
                    res.json({ token: token, id: user._id, name: user.name });
                });
            });
        });
        return [2 /*return*/];
    });
}); };
exports.loginUser = loginUser;
function authenticate(req, res, next) {
    var header = req.headers.authorization;
    console.log("header", header);
    var token = header && header.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, "myJwtSecret", function (err, user) {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json("session expired...Please login Again!");
            }
            return res.status(403).json("Something went wrong: " + err.message);
        }
        req.user = user;
        next();
    });
}
exports.authenticate = authenticate;
var userDetails = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, User.find()
                    .then(function (result) {
                    res.send(result);
                })
                    .catch(function (error) { return console.log(error); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.userDetails = userDetails;

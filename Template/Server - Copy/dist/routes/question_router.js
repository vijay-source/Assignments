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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var question_1 = __importDefault(require("../model/question"));
var userRouter_1 = require("../routes/userRouter");
var router = express_1.default.Router();
router.use(express_1.default.json());
// get All questions
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, question_1.default.find()];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
// get questions of logged in user
router.get("/user/:userid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userid, myquestions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userid = req.params.userid;
                return [4 /*yield*/, question_1.default.find({ name: userid })];
            case 1:
                myquestions = _a.sent();
                res.send(myquestions);
                return [2 /*return*/];
        }
    });
}); });
// get  particular question by qid
router.get("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, question_1.default.findById(id)];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
//delete by id
router.route("/delete/:id").delete(userRouter_1.auth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, question_1.default.deleteOne({ _id: id })];
            case 1:
                result = _a.sent();
                res.json({ message: "question has been deleted" });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.send("error" + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/quest/:text", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var search, result, myresult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                search = new RegExp(req.params.text, "i");
                return [4 /*yield*/, question_1.default.find({ text: search })];
            case 1:
                result = _a.sent();
                myresult = (JSON.stringify(result));
                console.log("new resilt", myresult);
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
// post questions
router.post("/:userid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, newQuestion, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.userid;
                newQuestion = new question_1.default({ text: req.body.text, category: req.body.category, name: userId });
                console.log("enterd body", req.body);
                return [4 /*yield*/, question_1.default.create(newQuestion)];
            case 1:
                result = _a.sent();
                console.log("my question", result);
                question_1.default.create(result);
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
router.put("/upvote/question/:userid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userid, myquestions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userid = req.params.userid;
                return [4 /*yield*/, question_1.default.find({ name: userid })
                        .update({ $inc: { upvote: +1 } })
                        .then(function () {
                        res.status(201).json({
                            message: "Book updated successfully",
                        });
                    })
                        .catch(function (error) { return console.log(error); })];
            case 1:
                myquestions = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
router.put("/downvote/question/:userid", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userid, myquestions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userid = req.params.userid;
                return [4 /*yield*/, question_1.default.find({ name: userid })
                        .update({ $inc: { downvote: +1 } })
                        .then(function () {
                        res.status(201).json({
                            message: "Book updated successfully",
                        });
                    })
                        .catch(function (error) { return console.log(error); })];
            case 1:
                myquestions = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;

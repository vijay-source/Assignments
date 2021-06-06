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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + '/.env' });
var cors = require('cors');
var app = express_1.default();
var mongoose = require('mongoose');
var books = require('./routes/books');
var dbURI = "mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD + "@cluster0.r2jbq.mongodb.net/test1?retryWrites=true&w=majority";
app.use(cors());
app.use(express_1.default.json());
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require("twilio")(accountSid, authToken);
app.post("/sendOTP", function (req, res) {
    // console.log("REQ BODY",req.body);
    var phone = req.body.phonenumber;
    var OTP = Math.floor(100000 + Math.random() * 900000);
    var time = 2 * 60 * 1000;
    var expiry = Date.now() + time;
    var data = phone + "." + OTP + "." + expiry;
    client.messages
        .create({
        body: "Your OTP for successful login at Book Management System " + OTP,
        from: "+17068102126",
        to: phone,
    })
        .then(function (message) { return console.log(message.sid, "......"); })
        .catch(function (error) { return console.error(error); });
    res.status(200).send({ phone: phone, OTP: OTP });
});
var port = 3000;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function (_result) {
    app.listen(port, function () {
        console.log("Server Started at port " + port);
    });
    console.log('Connected Successfully to DataBase');
})
    .catch(function (err) { return console.log(err); });
app.use("/books", books);

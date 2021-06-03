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
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors")); // use this in order to send req multiple servers
var routes_1 = __importDefault(require("./routes"));
var port = 5000;
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require("twilio")(accountSid, authToken);
var app = express_1.default();
// app is my server
// where we give all operations
// 
app.use(cors_1.default()); // to accept req from multiple origins
app.use(express_1.default.json());
var mongoose = require('mongoose'); // package helps to comm with mongodb
var Book = require('./book');
var User = require('./userSchema');
var dbURI = "mongodb+srv://" + process.env.db_user + ":" + process.env.db_password + "@cluster0.s3eeb.mongodb.net/" + process.env.db_name + "?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function (_result) {
    app.listen(port, function () {
        console.log("Server Started at port " + port);
        console.log('Connected Successfully to DataBase');
    });
})
    .catch(function (err) { return console.log(err); });
//OTP generation
app.post("/sendOTP", function (req, res) {
    var phone = req.body.phonenumber;
    var OTP = Math.floor(100000 + Math.random() * 900000);
    var time = 2 * 60 * 1000;
    var expiry = Date.now() + time;
    // const data = `${phone}.${OTP}.${expiry}`;
    client.messages
        .create({
        body: "Your OTP for successful login at Book Management System " + OTP,
        from: "+19724356208",
        to: phone,
    })
        .then(function (message) { return console.log(message.sid, "......"); })
        .catch(function (error) { return console.error(error); });
    res.status(200).send({ phone: phone, OTP: OTP });
});
//  to parse request object  
app.use('/', routes_1.default); // server should serve user routes
app.use('/users', routes_1.default);
// function middleWre(req:any,res:any,next:any){
// console.log("my middleware")
// next()
// }
// app.use(middleWre)

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var env = require('dotenv');
/* const path="../bookServerMongo/buildCopy" */
env.config();
var mongoose = require("mongoose");
var bookRoutes_1 = require("./routes/bookRoutes");
var userRoutes_1 = require("./routes/userRoutes");
var dburi = "mongodb+srv://" + process.env.mongodb_user + ":" + process.env.mongodb_password + "@" + process.env.mongodb_server + "/bookManagementSystem?retryWrites=true&w=majority";
mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (result) { return app.listen(port, function () { return console.log("server running on port " + port); }); })
    .catch(function (err) { return console.log(err); });
var port = process.env.PORT;
app.use(cors_1.default());
app.use(express_1.default.json());
/* app.use(express.static(path)) */
app.use('/api/books', bookRoutes_1.router);
app.use('/api/users', userRoutes_1.routers);
/* app.get("/*",(req,res)=>{
    res.sendFile(__dirname +"/buildCopy/index.html")
}) */


import express from "express";
import {addUser,loginUser,userDetails} from "../controller/userController"
export let routers = express.Router();
routers.use(express.json())



routers.route("/register").post(addUser);
routers.route("/login").post(loginUser)
routers.route("/users").get(userDetails)



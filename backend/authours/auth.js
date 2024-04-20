import express from "express";
import { loginController, signupController } from "../controller/controller.js";

const authRoute = express.Router();

authRoute.post("/signup", signupController);
authRoute.post("/login", loginController);

export {authRoute}
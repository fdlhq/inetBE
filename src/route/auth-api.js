import express from "express";
import userController from "../controller/user-controller.js";

const router = new express.Router();
router.post("/user/register", userController.register);
router.get("/user/login", userController.login);
router.post("/user/logout", userController.logout);

export { router as publicRouter };

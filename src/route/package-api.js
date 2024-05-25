import express from "express";
import packageController from "../controller/package-controller.js";

const router = new express.Router();
router.post("/package/create", packageController.createPackage);
router.get("/package/getallpackage", packageController.getAllPackage);
router.get("/package/getallpackagesort", packageController.getAllPackagesSorted);

export { router as publicRouter };

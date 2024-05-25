import express from "express";
import teknisiController from "../controller/teknisi-controller.js";

const router = new express.Router();
router.post("/teknisi/create", teknisiController.createTeknisi);
router.get("/teknisi/getallteknisi", teknisiController.getAllTeknisi);
router.get("/teknisi/allteknisidesc", teknisiController.getAllTeknisiSorted);

export { router as publicRouter };

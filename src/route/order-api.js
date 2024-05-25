import express from "express";
import orderController from "../controller/order-controller.js";

const router = new express.Router();
router.post("/order/create", orderController.createOrder);
router.put("/order/update", orderController.updateOrder);
router.get("/order/getdataorder", orderController.getDataOrder);
router.get("/order/getorderdesc", orderController.getOrderDesc);

export { router as publicRouter };

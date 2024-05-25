import { Router } from "express";
import { publicRouter as authRouter } from "./auth-api.js";
import { publicRouter as packageRouter } from "./package-api.js";
import { publicRouter as teknisiRouter } from "./teknisi-api.js";
import { publicRouter as orderRouter } from "./order-api.js";

const router = Router();

router.use(authRouter);
router.use(packageRouter);
router.use(teknisiRouter);
router.use(orderRouter);

export default router;

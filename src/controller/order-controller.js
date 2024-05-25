import orderService from "../service/order-service.js";

const createOrder = async (req, res, next) => {
  try {
    const result = await orderService.createOrder(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const result = await orderService.updateOrder(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getDataOrder = async (req, res, next) => {
  try {
    const allOrder = await orderService.getDataOrder();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: allOrder,
    });
  } catch (e) {
    next(e);
  }
};

const getOrderDesc = async (req, res, next) => {
  try {
    const orderDesc = await orderService.getOrderDesc();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: orderDesc,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createOrder,
  updateOrder,
  getDataOrder,
  getOrderDesc
};

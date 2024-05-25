import {
  orderValidation,
  updateOrderValidation,
} from "../validation/order-validation.js";
import { prismaClient } from "../application/database.js";
import { responseError } from "../error/responseError.js";

const createOrder = async (orderData) => {
  const { value, error } = orderValidation.validate(orderData);
  if (error) {
    throw new responseError(400, "1", error.details[0].message);
  }
  try {
    const createdOrder = await prismaClient.order.create({
      data: value,
    });

    const getPackage = await prismaClient.package.findUnique({
      where: {
        id: value.package_id,
      },
    });
    const responseData = {
      id: createdOrder.id,
      nama_paket: getPackage.nama,
    };
    return responseData;
  } catch (error) {
    throw new responseError(500, "2", "Internal Server Error");
  }
};

const updateOrder = async (orderData) => {
  const { value, error } = updateOrderValidation.validate(orderData);
  if (error) {
    throw new responseError(400, "1", error.details[0].message);
  }
  try {
    const updatedOrder = await prismaClient.order.update({
      where: {
        id: value.id,
      },
      data: value,
    });
    const getPackage = await prismaClient.package.findUnique({
      where: {
        id: value.package_id,
      },
    });
    const responseData = {
      id: updatedOrder.id,
      nama_paket: getPackage.nama,
    };
    return responseData;
  } catch (error) {
    throw new responseError(500, "2", "Internal Server Error");
  }
};

const getDataOrder = async () => {
  return await prismaClient.order.findMany({
    select: {
      id: true,
      nama: true,
      email: true,
      kota: true,
      kecamatan: true,
      jalan: true,
      user_id: true,
      teknisi_id: true,
      status_id: true,
      package_id: true,
    },
  });
};

const getOrderDesc = async () => {
  try {
    const orderDesc = await prismaClient.order.findMany({
      orderBy: {
        status_id: "desc",
      },
      select: {
        id: true,
        nama: true,
        email: true,
        upload_identity: true,
        kota: true,
        kecamatan: true,
        jalan: true,
        user_id: true,
        teknisi_id: true,
        status_id: true,
        package_id: true,
      },
    });
    return orderDesc;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};

export default { createOrder, updateOrder, getDataOrder, getOrderDesc };

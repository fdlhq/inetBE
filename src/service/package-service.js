import { packageValidation } from "../validation/package-validation.js";
import { prismaClient } from "../application/database.js";
import { responseError } from "../error/responseError.js";

const createPackage = async (packageData) => {
  const { value, error } = packageValidation.validate(packageData);
  if (error) {
    throw new responseError(400, "1", error.details[0].message);
  }
  value.harga = value.harga.toString();

  try {
    // Buat package baru
    const createdPackage = await prismaClient.package.create({
      data: value,
    });

    // Mengembalikan data package yang baru dibuat
    const responseData = {
      id: createdPackage.id,
      nama: createdPackage.nama,
      harga: createdPackage.harga,
      deskripsi: createdPackage.deskripsi,
    };

    return responseData;
  } catch (error) {
    throw new responseError(500, "2", "Internal Server Error");
  }
};

const getAllPackage = async () => {
  return await prismaClient.package.findMany({
    select: {
      id: true,
      nama: true,
      harga: true,
      deskripsi: true,
    },
  });
};

const getAllPackagesSorted = async () => {
  try {
    const packages = await prismaClient.package.findMany({
      include: {
        _count: {
          select: { Orders: true },
        },
      },
    });

    const packagesWithSales = packages.map((pkg) => ({
      id: pkg.id,
      nama: pkg.nama,
      harga: pkg.harga,
      deskripsi: pkg.deskripsi,
      jumlah_penjualan: pkg._count.Orders,
    }));

    packagesWithSales.sort((a, b) => b.jumlah_penjualan - a.jumlah_penjualan);

    return packagesWithSales;
  } catch (error) {
    console.error("Error in getAllPackagesSorted:", error);
    throw new responseError(500, "2", "Internal Server Error");
  }
};

export default { createPackage, getAllPackage, getAllPackagesSorted };

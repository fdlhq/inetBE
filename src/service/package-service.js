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

// const getAllPackagesSorted = async () => {
//   const packages = await prismaClient.order.groupBy({
//     by: ["package_id"],
//     _count: {
//       package_id: true,
//     },
//     orderBy: {
//       _count: {
//         package_id: "desc",
//       },
//     },
//   });
//   return getAllPackage().then((x) => {
//     console.log(x);
//     const packagesCalculation = packages.map((pkg) => {
//       console.log(
//         "ww",
//         x.filter((a) => (a.id = pkg.package_id))
//       );
//       return {
//         id: x.filter((a) => (a.id = pkg.package_id))[0].id,
//         nama: x.filter((a) => (a.id = pkg.package_id))[0].nama,
//         harga: x.filter((a) => (a.id = pkg.package_id))[0].harga,
//         jumlah_penjualan: pkg["_count"].package_id,
//       };
//     });

//     return packagesCalculation;
//   });
// };

// const getAllPackagesSorted = async () => {
//     const packages = await prismaClient.package.findMany({
//       select: {
//         id: true,
//         nama: true,
//         harga: true,
//         deskripsi: true,
//       },
//     });

//     // Menghitung jumlah order untuk setiap package
//     const packagesWithSales = await Promise.all(
//       packages.map(async (pkg) => {
//         const orderCount = await prismaClient.order.count({
//           where: { package_id: pkg.id },
//         });
//         return {
//           ...pkg,
//           jumlah_penjualan: orderCount,
//         };
//       })
//     );

//     // Mengurutkan package berdasarkan jumlah_penjualan secara descending
//     packagesWithSales.sort((a, b) => b.jumlah_penjualan - a.jumlah_penjualan);

//     return packagesWithSales;
//   };

const getAllPackagesSorted = async () => {
  try {
    const packages = await prismaClient.package.findMany({
      include: {
        _count: {
          select: { Orders: true },
        },
      },
    });

    console.log("Packages from database:", packages); // Log data from database

    const packagesWithSales = packages.map((pkg) => ({
      id: pkg.id,
      nama: pkg.nama,
      harga: pkg.harga,
      deskripsi: pkg.deskripsi,
      jumlah_penjualan: pkg._count.Orders,
    }));

    console.log("Packages with sales:", packagesWithSales); // Log transformed data

    packagesWithSales.sort((a, b) => b.jumlah_penjualan - a.jumlah_penjualan);

    return packagesWithSales;
  } catch (error) {
    console.error("Error in getAllPackagesSorted:", error);
    throw new responseError(500, "2", "Internal Server Error");
  }
};

export default { createPackage, getAllPackage, getAllPackagesSorted };

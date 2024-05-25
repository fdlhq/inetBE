import { teknisiValidation } from "../validation/teknisi-validation.js";
import { prismaClient } from "../application/database.js";
import { responseError } from "../error/responseError.js";

const createTeknisi = async (teknisiData) => {
  console.log("ieu", teknisiData);
  const { value, error } = teknisiValidation.validate(teknisiData);
  if (error) {
    throw new responseError(400, "1", error.details[0].message);
  }

  try {
    // Buat teknisi baru
    console.log("ini", value);
    const createdTeknisi = await prismaClient.teknisi.create({
      data: value,
    });
    console.log("jalan");
    // Mengembalikan data teknisi yang baru dibuat
    const responseData = {
      id: createdTeknisi.id,
      nama: createdTeknisi.nama,
      nip: createdTeknisi.nip,
      no_telp: createdTeknisi.no_telp,
    };
    console.log("www", responseData);
    return responseData;
  } catch (error) {
    console.log(error);
    throw new responseError(500, "2", "Internal Server Error");
  }
};

const getAllTeknisi = async () => {
  return await prismaClient.teknisi.findMany({
    select: {
      id: true,
      nama: true,
      nip: true,
      no_telp: true,
    },
  });
};

const getAllTeknisiSorted = async () => {
  try {
    const getTeknisis = await prismaClient.Teknisi.findMany({
      include: {
        _count: {
          select: { Orders: true },
        },
      },
    });

    console.log("teknisi from database:", getTeknisis); // Log data from database

    const teknisisHandling = getTeknisis.map((tkn) => ({
      id: tkn.id,
      nama: tkn.nama,
      nip: tkn.nip,
      no_telp: tkn.no_telp,
      total_handling: tkn._count.Orders,
    }));

    console.log("teknisi with sales:", teknisisHandling); // Log transformed data

    teknisisHandling.sort((a, b) => b.total_handling - a.total_handling);

    return teknisisHandling;
  } catch (error) {
    console.error("Error in getAllPackagesSorted:", error);
    throw new responseError(500, "2", "Internal Server Error");
  }
};

export default { createTeknisi, getAllTeknisi, getAllTeknisiSorted };

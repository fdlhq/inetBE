import packageService from "../service/package-service.js";

const createPackage = async (req, res, next) => {
  try {
    const result = await packageService.createPackage(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllPackage = async (req, res, next) => {
  try {
    const allPackages = await packageService.getAllPackage();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: allPackages,
    });
  } catch (e) {
    next(e);
  }
};

const getAllPackagesSorted = async (req, res, next) => {
  try {
    const result = await packageService.getAllPackagesSorted();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default { createPackage, getAllPackage, getAllPackagesSorted };

import teknisiService from "../service/teknisi-service.js";

const createTeknisi = async (req, res, next) => {
  try {
    const result = await teknisiService.createTeknisi(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getAllTeknisi = async (req, res, next) => {
  try {
    const allTeknisi = await teknisiService.getAllTeknisi();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: allTeknisi,
    });
  } catch (e) {
    next(e);
  }
};

const getAllTeknisiSorted = async (req, res, next) => {
  try {
    const totalHandling = await teknisiService.getAllTeknisiSorted();
    res.status(200).json({
      code: 0,
      info: "OK",
      data: totalHandling,
    });
  } catch (e) {
    next(e);
  }
};

export default { createTeknisi, getAllTeknisi, getAllTeknisiSorted };

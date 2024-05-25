import userService from "../service/user-service.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      code: 0,
      info: "OK",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const logout = async (req, res) => {
  res.status(200).json({
    code: 0,
    info: "Logout successful",
  });
};

export default {
  register,
  login,
  logout,
};

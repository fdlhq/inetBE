import { validate } from "../validation/validation.js";
import {
  registerUserValidation,
  loginUserValidation,
} from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js";
import { responseError } from "../error/responseError.js";
import bcrypt from "bcrypt";
const { compare } = bcrypt;
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new responseError(400, "Username already exist");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      id: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new responseError(401, "Wrong Username or Password");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new responseError(401, "Wrong Username or Password");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    code: "0",
    info: "OK",
    data: {
      id: user.id,
      nama: user.username,
      token: token,
    },
  };
};

export default { register, login };

import Joi from "joi";

const packageValidation = Joi.object({
  nama: Joi.string().max(100).required().messages({
    "string.empty": "Name Cannot be Empty",
    "string.max": "Name Must be at Most 100 Characters",
    "any.required": "Name is Required",
  }),
  harga: Joi.number().integer().required().messages({
    "number.integer": "Harga Must be an Integer",
    "number.empty": "Harga Cannot be Empty",
    "any.required": "Harga is Required",
  }),
  deskripsi: Joi.string().max(100).required().messages({
    "string.empty": "Deskripsi Cannot be Empty",
    "string.max": "Deskripsi Must be at Most 100 Characters",
    "any.required": "Deskripsi is Required",
  }),
});

export { packageValidation };

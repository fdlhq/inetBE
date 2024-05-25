import Joi from "joi";

const teknisiValidation = Joi.object({
  nama: Joi.string().max(100).required().messages({
    "string.empty": "Name Cannot be Empty",
    "string.max": "Name Must be at Most 100 Characters",
    "any.required": "Name is Required",
  }),
  nip: Joi.string().max(100).required().messages({
    "string.empty": "nip Cannot be Empty",
    "string.max": "nip Must be at Most 100 Characters",
    "any.required": "nip is Required",
  }),
  no_telp: Joi.string().max(100).required().messages({
    "string.empty": "no_telp Cannot be Empty",
    "string.max": "no_telp Must be at Most 100 Characters",
    "any.required": "no_telp is Required",
  }),
});

export { teknisiValidation };

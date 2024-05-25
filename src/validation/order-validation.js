import Joi from "joi";

const orderValidation = Joi.object({
  nama: Joi.string().max(100).required().messages({
    "string.empty": "Nama tidak boleh kosong",
    "string.max": "Nama tidak boleh lebih dari 100 karakter",
    "any.required": "Nama diperlukan",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email tidak valid",
    "string.empty": "Email tidak boleh kosong",
    "any.required": "Email diperlukan",
  }),
  upload_identity: Joi.string().required().messages({
    "string.empty": "Identitas tidak boleh kosong",
    "any.required": "Identitas diperlukan",
  }),
  kota: Joi.string().required().messages({
    "string.empty": "Kota tidak boleh kosong",
    "any.required": "Kota diperlukan",
  }),
  kecamatan: Joi.string().required().messages({
    "string.empty": "Kecamatan tidak boleh kosong",
    "any.required": "Kecamatan diperlukan",
  }),
  jalan: Joi.string().required().messages({
    "string.empty": "Jalan tidak boleh kosong",
    "any.required": "Jalan diperlukan",
  }),
  user_id: Joi.number().integer().required().messages({
    "number.base": "user ID harus berupa angka",
    "any.required": "user ID diperlukan",
  }),
  package_id: Joi.number().integer().required().messages({
    "number.base": "Package ID harus berupa angka",
    "any.required": "Package ID diperlukan",
  }),
  status_id: Joi.number().integer().required().messages({
    "number.base": "Status ID harus berupa angka",
    "any.required": "Status ID diperlukan",
  }),
});

const updateOrderValidation = Joi.object({
  id: Joi.number().integer().required().messages({
    "number.base": "Order ID harus berupa angka",
    "any.required": "Order ID diperlukan",
  }),
  nama: Joi.string().max(100).required().messages({
    "string.empty": "Nama tidak boleh kosong",
    "string.max": "Nama tidak boleh lebih dari 100 karakter",
    "any.required": "Nama diperlukan",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email tidak valid",
    "string.empty": "Email tidak boleh kosong",
    "any.required": "Email diperlukan",
  }),
  upload_identity: Joi.string().required().messages({
    "string.empty": "Identitas tidak boleh kosong",
    "any.required": "Identitas diperlukan",
  }),
  kota: Joi.string().required().messages({
    "string.empty": "Kota tidak boleh kosong",
    "any.required": "Kota diperlukan",
  }),
  kecamatan: Joi.string().required().messages({
    "string.empty": "Kecamatan tidak boleh kosong",
    "any.required": "Kecamatan diperlukan",
  }),
  jalan: Joi.string().required().messages({
    "string.empty": "Jalan tidak boleh kosong",
    "any.required": "Jalan diperlukan",
  }),
  status_id: Joi.number().integer().required().messages({
    "number.base": "Status ID harus berupa angka",
    "any.required": "Status ID diperlukan",
  }),
  teknisi_id: Joi.number().integer().required().messages({
    "number.base": "Teknisi ID harus berupa angka",
    "any.required": "Teknisi ID diperlukan",
  }),
  reject_reason: Joi.string().optional().messages({
    "string.base": "Reject reason must be a string",
  }),
  package_id: Joi.number().integer().required().messages({
    "number.base": "Package ID harus berupa angka",
    "any.required": "Package ID diperlukan",
  }),
});

export { orderValidation, updateOrderValidation };

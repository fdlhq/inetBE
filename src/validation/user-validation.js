import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required().messages({
    'string.empty': 'Username Cannot be Empty',
    'string.max': 'Username Must be at Least 100 Characters',
    'any.required': 'Username is Required',
}),
  password: Joi.string().max(100).required().messages({
    'string.empty': 'Password Cannot be Empty',
    'any.required': 'Password is Required',
}),
});

const loginUserValidation = Joi.object({
    username: Joi.string().max(100).required().messages({
        'string.empty': 'Username Cannot be Empty',
        'string.max': 'Username Must be at Least 100 Characters',
        'any.required': 'Username is Required',
    }),
    password: Joi.string().max(100).required().messages({
        'string.empty': 'Password Cannot be Empty',
        'any.required': 'Password is Required',
    }),
});

export { registerUserValidation, loginUserValidation };

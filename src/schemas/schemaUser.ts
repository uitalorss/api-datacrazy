import Joi from "joi";

export const schemaUser = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "o campo nome não pode ficar vazio",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Formato de e-mail inválido",
    "any.required": "O campo e-mail é obrigatório",
    "string.empty": "O campo e-mail não pode ficar vazio",
  }),
  phone: Joi.string()
    .trim()
    .required()
    .min(10)
    .max(11)
    .pattern(/[0-9]{10,11}/)
    .messages({
      "any.required": "O campo phone é obrigatório.",
      "string.empty": "O campo phone não pode ficar vazio.",
      "string.min": "O campo phone precisa de, no minimo, 10 caracteres.",
      "string.max": "O campo phone precisa de, no máximo, 11 caracteres.",
      "string.pattern.base": "Informe um valor válido no campo phone.",
    }),
});

export const schemaNumber = Joi.number().positive().integer().messages({
  "number.base": "Informe um id numérico válido",
  "number.positive": "Informe um id positivo válido",
  "number.integer": "O campo id precisa ser um número inteiro",
});

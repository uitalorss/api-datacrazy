import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateRequestBody =
  (joiSchema: Joi.ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validation = await joiSchema.validateAsync(req.body);
    console.log(validation);
    next();
    try {
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

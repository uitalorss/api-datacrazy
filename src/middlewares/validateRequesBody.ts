import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const validateRequestBody =
  (joiSchema: Joi.ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await joiSchema.validateAsync(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

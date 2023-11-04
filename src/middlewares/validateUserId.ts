import { NextFunction, Request, Response } from "express";
import { schemaNumber } from "../schemas/schemaUser";

export const validateUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await schemaNumber.validateAsync(Number(id));
    next();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

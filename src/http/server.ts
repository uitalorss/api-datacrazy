import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { AppDataSource } from "../data-source";
import { userRoutes } from "../routes/user.routes";
import { AppError } from "../utils/AppError";
import { stat } from "fs";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(userRoutes);

  app.use(
    (
      error: Error & Partial<AppError>,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const statusCode = error.statusCode ?? 500;
      const message = error.statusCode
        ? error.message
        : "Internal Server Error.";
      return res.status(statusCode).json({ message: message });
    }
  );

  return app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`)
  );
});

import express from "express";
import cors from "cors";

import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  return app.listen(process.env.PORT, () =>
    console.log(`rodando na porta ${process.env.PORT}`)
  );
});

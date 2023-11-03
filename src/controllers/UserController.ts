import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class UserController {
  public async CreateUser(req: Request, res: Response) {
    const { name, email, phone } = req.body;
    const createUserService = new CreateUserService();
    await createUserService.execute({ name, email, phone });
    return res.status(201).json("Usuário criado com sucesso.");
  }
}

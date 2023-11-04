import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserService } from "../services/ListUsersService";

export class UserController {
  public async CreateUser(req: Request, res: Response) {
    const { name, email, phone } = req.body;
    const createUserService = new CreateUserService();
    await createUserService.execute({ name, email, phone });
    return res.status(201).json({ message: "Usuário criado com sucesso." });
  }

  public async listUsers(req: Request, res: Response) {
    const listUserService = new ListUserService();
    const users = await listUserService.execute();
    return res.status(201).json(users);
  }
}

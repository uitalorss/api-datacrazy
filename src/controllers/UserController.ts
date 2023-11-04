import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserService } from "../services/ListUsersService";
import { UpdateUserService } from "../services/UpdateUserService";
import { DeleteUserService } from "../services/DeleteUserService";

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

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const updateUserService = new UpdateUserService();

    const userToUpdate = await updateUserService.execute({
      userId: Number(id),
      name,
      email,
      phone,
    });
    return res.status(204).send();
  }

  public async DeleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const deleteUserService = new DeleteUserService();
    await deleteUserService.execute({ userId: Number(id) });
    return res.status(204).send();
  }
}

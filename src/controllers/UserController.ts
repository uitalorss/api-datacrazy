import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { ListUserService } from "../services/ListUsersService";
import { UpdateUserService } from "../services/UpdateUserService";
import { DeleteUserService } from "../services/DeleteUserService";
import { FindUserByNameService } from "../services/findUserByNameService";
import { type } from "os";
import { BadRequestError } from "../utils/AppError";
import { ListYoungerToOlderUsersService } from "../services/ListYoungerToOlderUsersService";
import { ListOlderToYoungerUsersService } from "../services/ListOlderToYoungerUsersService";

interface RequestQuery {
  name: string;
}

export class UserController {
  public async CreateUser(req: Request, res: Response) {
    const { name, email, phone } = req.body;
    const createUserService = new CreateUserService();
    await createUserService.execute({ name, email, phone });
    return res.status(201).json({ message: "Usuário criado com sucesso." });
  }

  public async listUsers(req: Request, res: Response) {
    const { name } = req.query;

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

  public async getUser(req: Request, res: Response) {
    const { name } = req.query;
    const findUserByName = new FindUserByNameService();

    if (typeof name !== "string") {
      throw new BadRequestError("Parâmetro de pesquisa inválido");
    }

    const user = await findUserByName.execute({ name });
    return res.status(200).json(user);
  }

  public async getYoungerToOlderUsers(req: Request, res: Response) {
    const listYoungerToOlderUsersService = new ListYoungerToOlderUsersService();
    const users = await listYoungerToOlderUsersService.execute();
    return res.status(200).json(users);
  }

  public async getOlderToYoungerUsers(req: Request, res: Response) {
    const listOlderToYoungerUsersService = new ListOlderToYoungerUsersService();
    const users = await listOlderToYoungerUsersService.execute();
    return res.status(200).json(users);
  }
}

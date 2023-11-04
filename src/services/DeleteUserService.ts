import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";
import { NotFoundError } from "../utils/AppError";

interface IRequest {
  userId: number;
}

export class DeleteUserService {
  public async execute({ userId }: IRequest) {
    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundError("Usuário não encontrado");
    }
    await AppDataSource.createQueryBuilder()
      .delete()
      .from(User)
      .where({ id: userId })
      .execute();
  }
}

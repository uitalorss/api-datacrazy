import { userRepository } from "../repositories/UserRepository";
import { BadRequestError } from "../utils/AppError";

interface IRequest {
  userId: number;
  name: string;
  email: string;
  phone: string;
}

export class UpdateUserService {
  public async execute({ userId, name, email, phone }: IRequest) {
    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new BadRequestError("Usuário não encontrado");
    }
    user.name = name;
    user.email = email;
    user.phone = phone;
    await userRepository.save(user);
    return user;
  }
}

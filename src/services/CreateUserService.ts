import { userRepository } from "../repositories/UserRepository";
import { BadRequestError } from "../utils/AppError";

interface IRequest {
  name: string;
  email: string;
  phone: string;
}

export class CreateUserService {
  public async execute({ name, email, phone }: IRequest) {
    const newUser = userRepository.create({ name, email, phone });
    const isEmailAlreadyExists = await userRepository.findOne({
      where: {
        email,
      },
    });
    if (isEmailAlreadyExists) {
      throw new BadRequestError(
        "Já existe usuário cadastrado com o e-mail informado."
      );
    }
    await userRepository.save(newUser);
    return newUser;
  }
}

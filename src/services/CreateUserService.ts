import { userRepository } from "../repositories/UserRepository";

interface IRequest {
  name: string;
  email: string;
  phone: string;
}

export class CreateUserService {
  public async execute({ name, email, phone }: IRequest) {
    const newUser = userRepository.create({ name, email, phone });
    await userRepository.save(newUser);
    return newUser;
  }
}

import { userRepository } from "../repositories/UserRepository";

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
    user.name = name;
    user.email = email;
    user.phone = phone;
    await userRepository.save(user);
    return user;
  }
}

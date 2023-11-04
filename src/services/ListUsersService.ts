import { userRepository } from "../repositories/UserRepository";

export class ListUserService {
  public async execute() {
    const users = userRepository.find();
    return users;
  }
}

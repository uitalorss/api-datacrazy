import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";

export class ListYoungerToOlderUsersService {
  public async execute() {
    const users = userRepository.getYoungerToOlder();
    return users;
  }
}

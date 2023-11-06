import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";

export class ListOlderToYoungerUsersService {
  public async execute() {
    const users = userRepository.getOlderToYounger();
    return users;
  }
}

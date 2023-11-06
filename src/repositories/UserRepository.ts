import { User } from "../entities/User";
import { AppDataSource } from "../data-source";
import { Like } from "typeorm";

export const userRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string) {
    const user = this.find({
      where: {
        name: Like(`%${name}%`),
      },
    });
    return user;
  },
  getYoungerToOlder() {
    const users = this.find({ order: { created_at: "DESC" } });
    return users;
  },
  getOlderToYounger() {
    const users = this.find({ order: { created_at: "ASC" } });
    return users;
  },
});

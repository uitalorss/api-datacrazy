import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

export const userRepository = AppDataSource.getRepository(User).extend({
  findByName(name: string) {
    const user = this.findOne({
      where: {
        name,
      },
    });
    return user;
  },
});

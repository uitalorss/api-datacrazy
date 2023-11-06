import { userRepository } from "../repositories/UserRepository";

interface IRequest {
  name: string;
}

export class FindUserByNameService {
  public async execute({ name }: IRequest) {
    const user = await userRepository.findByName(name);
    if (!user) {
      return [];
    }
    const listOfSingleUser = [];
    listOfSingleUser.push(user);
    return listOfSingleUser;
  }
}

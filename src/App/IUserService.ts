import { User } from "./models/User";

export interface IUserService {
  getUsers(): User[];
  getUserById(id: number): User;
}

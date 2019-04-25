import { User } from './User';

export interface IUserService {
  getUsers(): User[];
  getUserById(identifier: number): User;
}

import { IRepository } from "./IRepository";
import { User } from "../App/models/User";

export interface IUserRepository extends IRepository<User> {}

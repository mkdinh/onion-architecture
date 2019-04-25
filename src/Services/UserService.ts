import { IUserService } from "../App/IUserService";
import { User } from "../App/models/User";
import { ILogger } from "../Utils/ILogger";
import { UserRepository } from "../Repositories/UserRepository";

export class UserService implements IUserService {
  private _userRepo: UserRepository;
  private _logger: ILogger;

  constructor(userRepo: UserRepository, logger: ILogger) {
    this._userRepo = userRepo;
    this._logger = logger;
  }

  public getUsers(): User[] {
    return this._userRepo.all();
  }

  public getUserById(id: number): User {
    return this._userRepo.singleOrDefault((u: User) => u.id === id);
  }

  public addUser(user: User) {
    try {
      const userDb = this._userRepo.add(user);
      return userDb.id;
    } catch (ex) {
      this._logger.error(ex.error);
      return false;
    }
  }
}

export default UserService;

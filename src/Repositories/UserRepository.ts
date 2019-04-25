import { IDbContext } from "../Data/IDbContext";
import { IRepository } from "../Services/IRepository";
import { User } from "../App/models/User";

export class UserRepository implements IRepository<User> {
  private _dbContext: IDbContext;

  constructor(dbContext: IDbContext) {
    this._dbContext = dbContext;
  }

  all(): User[] {
    return this._dbContext.get<User>().findAll();
  }

  where(predicate: (u: User) => boolean): User[] {
    return this._dbContext.get<User>().find(predicate);
  }

  singleOrDefault(predicate: (u: User) => boolean): User {
    return this._dbContext.get<User>().find(predicate)[0];
  }

  add(user: User): User {
    const newUser = this._dbContext.get<User>().create(user);
    return newUser;
  }

  remove(user: User): boolean {
    this._dbContext.get<User>().delete(user);
    return true;
  }
}

import { IDbContext } from "../Data/IDbContext";
import { IDbCollection } from "../Data/IDbCollection";
import { IRepository } from "../Services/IRepository";
import { User } from "../App/models/User";

export class UserRepository implements IRepository<User> {
  private _key: string = (User as any).name;
  private _dbContext: IDbContext;

  constructor(dbContext: IDbContext) {
    console.log(this._key);
    this._dbContext = dbContext;
  }

  private get _collections(): IDbCollection<User> {
    return this._dbContext.get<User>(this._key);
  }

  all(): User[] {
    return this._collections.findAll();
  }

  where(predicate: (u: User) => boolean): User[] {
    return this._collections.find(predicate);
  }

  singleOrDefault(predicate: (u: User) => boolean): User {
    return this._collections.find(predicate)[0];
  }

  add(user: User): User {
    const newUser = this._collections.create(user);
    return newUser;
  }

  remove(user: User): boolean {
    this._collections.delete(user);
    return true;
  }
}

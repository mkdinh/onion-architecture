import { IDbContext } from '../Data/IDbContext';
import { IRepository } from '../Services/IRepository';
import { User } from '../App/User';

export class UserRepository implements IRepository<User> {
  private _dbContext: IDbContext;

  constructor(dbContext: IDbContext) {
    this._dbContext = dbContext;
  }

  all() {
    return this._dbContext.findAll();
  }

  where(predicate: (u: User) => boolean): User {
    return this._dbContext.find(predicate);
  }
  add(user: User): User {
    const userModel = this._dbContext.create(user);
    return userModel;
  }

  remove(id: number): boolean {
    this._dbContext.delete(id);
    return true;
  }
}

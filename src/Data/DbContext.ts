import { IDbContext } from './IDbContext';
import { IDbCollection } from './IDbCollection';

export class DbContext implements IDbContext {
  private _collection: { [key: string]: IDbCollection<any> };

  add<T>(key: string, collection: IDbCollection<T>) {
    this._collection[key] = collection;
  }

  get<T>(key: string) {
    return this._collection[key];
  }
}

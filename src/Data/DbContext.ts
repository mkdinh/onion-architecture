import { IDbContext } from "./IDbContext";
import { IDbCollection } from "./IDbCollection";
import { DbCollection } from "./DbCollection";

export class DbContext implements IDbContext {
  [key: string]: any;

  public add<T>(key: string, collection: T[]): void {
    this[key] = new DbCollection(key, collection);
  }

  public get<T>(key: string): IDbCollection<T> {
    return this[key] as DbCollection<T>;
  }
}

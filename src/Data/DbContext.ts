import { IDbContext } from "./IDbContext";
import { IDbCollection } from "./IDbCollection";
import { DbCollection } from "./DbCollection";

export class DbContext implements IDbContext {
  private _collections: IDbCollection<any>[] = [];

  public add<T>(domainType: new () => T, collection: T[]): void {
    this._collections.push(
      new DbCollection<T>((domainType as any).name, collection)
    );
  }

  public get<T>(): IDbCollection<T> {
    const collections = this._collections.filter(
      (col: DbCollection<any>): col is DbCollection<T> => {
        return col.domainTypeName === 
      }
    );
    return collections[0];
  }
}

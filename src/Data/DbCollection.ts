import { IDbCollection } from "./IDbCollection";

export class DbCollection<T> implements IDbCollection<T> {
  private _entities: T[];

  public domainTypeName: string;

  constructor(domainTypeName: string, entities: T[]) {
    this._entities = entities;
    this.domainTypeName = domainTypeName;
  }

  findAll(): T[] {
    return this._entities;
  }

  find(predicate: (x: T) => boolean): T[] {
    return this.findAll().filter(predicate);
  }

  create(entity: T): T {
    this._entities.push(entity);
    return entity;
  }

  delete(entity: T): boolean {
    this._entities = this.findAll().filter((x: T) => x === entity);
    return true;
  }
}

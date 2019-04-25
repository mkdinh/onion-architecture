import { IDbCollection } from './IDbCollection';

export class DbCollection<T extends { id: number }>
  implements IDbCollection<T> {
  private _data: T[];

  constructor(data: T[]) {
    this._data = data;
  }

  findAll(): T[] {
    return this._data;
  }
  find(predicate: (x: T) => boolean): T[] {
    return this._data.filter(predicate);
  }
  create(data: T): T {
    this._data.push(data);
    return data;
  }

  delete(id: number): boolean {
    this._data = this._data.filter((x: T) => x.id !== id);
    return true;
  }
}

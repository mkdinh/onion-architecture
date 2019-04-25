export interface IDbCollection<T> {
  findAll(): T[];
  find(predicate: (x: T) => boolean): T[];
  create(data: T): T;
  delete(id: number): boolean;
}

export interface IDbCollection<T> {
  key: string;
  findAll(): T[];
  find(predicate: (entity: T) => boolean): T[];
  create(entity: T): T;
  delete(entity: T): boolean;
}

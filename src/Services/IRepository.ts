export interface IRepository<T> {
  all(): T[];
  where(predicate: (u: T) => boolean): T[];
  singleOrDefault(predicate: (u: T) => boolean): T;
  add(entity: T): T;
  remove(entity: T): boolean;
}

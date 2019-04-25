export interface IRepository<T> {
  all(): T[];
  where(predicate: (u: T) => boolean): T;
  add(data: T): T;
  remove(id: number): boolean;
}

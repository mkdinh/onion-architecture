import { IDbCollection } from "./IDbCollection";

export interface IDbContext {
  add<T>(key: string, collection: T[]): void;
  get<T>(key: string): IDbCollection<T>;
}

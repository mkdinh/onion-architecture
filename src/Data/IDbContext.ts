import { IDbCollection } from "./IDbCollection";

export interface IDbContext {
  add<T>(domainType: (new () => T) & { name: string }, collection: T[]): void;
  get<T>(): IDbCollection<T>;
}

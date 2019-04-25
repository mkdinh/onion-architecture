export interface ILogger {
  error(str: string): void;
  warn(str: string): void;
  info(str: string): void;
}

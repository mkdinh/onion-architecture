import { IUserService } from './IUserService';
import { ILogger } from '../Utils/ILogger';
import { User } from './User';
import { Status } from './enums';

export class App {
  private _userService: IUserService;
  private _logger: ILogger;

  constructor(userService: IUserService, logger: ILogger) {
    this._userService = userService;
    this._logger = logger;
  }

  main(): void {
    const users = this._userService.getUsers();
    users.forEach((u: User) => {
      const userInfo = `${u.id}. ${u.name} (${u.age})`;
      switch (u.status) {
        case Status.Active:
          this._logger.info(userInfo);
          break;

        case Status.Inactive:
          this._logger.warn(userInfo);
          break;

        case Status.Expired:
          this._logger.error(userInfo);
          break;
        default:
          this._logger.info(`${u.name} has no valid status.`);
      }
    });
  }
}

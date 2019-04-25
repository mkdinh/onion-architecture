import { App } from './App';
import { UserService } from './Services';
import Logger from './Utils/Logger';
import { UserRepository } from './Repositories';
import { DbContext } from './Data/DbContext';
import userData from './Data/users.json';
import { UserModel } from './Repositories/models/UserModel';

const logger = new Logger();
const dbContext = new DbContext();
dbContext.add<UserModel>('users', userData);

const userRepo = new UserRepository(dbContext);
const userService = new UserService(userRepo, logger);

const app = new App(userService, logger);

app.main();

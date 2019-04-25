"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var Services_1 = require("./Services");
var Logger_1 = __importDefault(require("./Utils/Logger"));
var Repositories_1 = require("./Repositories");
var DbContext_1 = require("./Data/DbContext");
var users_json_1 = __importDefault(require("./Data/users.json"));
var logger = new Logger_1.default();
var dbContext = new DbContext_1.DbContext();
dbContext.add('users', users_json_1.default);
var userRepo = new Repositories_1.UserRepository(dbContext);
var userService = new Services_1.UserService(userRepo, logger);
var app = new App_1.App(userService, logger);
app.main();

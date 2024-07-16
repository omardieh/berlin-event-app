import * as express from 'express';
import { Application } from 'express';
import path from 'path';
import cookies from 'cookie-parser';
import { loggerMiddleware } from '@/middleware/logger.middleware';
import dotenv from 'dotenv';

export function environmentConfig(app: Application) {
  configureEnvVars();
  configureExpress();
  configureViews();
  otherConfigs();

  function configureEnvVars(): void {
    dotenv.config({
      path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`),
    });
  }

  function configureExpress(): void {
    // TODO : configure Express
    // Express.js Security Best Practices :
    // https://github.com/goldbergyoni/nodebestpractices
    // https://dev.to/tristankalos/expressjs-security-best-practices-1ja0
    // https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection
    // https://expressjs.com/en/advanced/best-practice-security.html
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '../../public')));
  }
  function configureViews(): void {
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../../views'));
  }

  function otherConfigs(): void {
    app.use(loggerMiddleware());
    app.use(cookies());
  }
}

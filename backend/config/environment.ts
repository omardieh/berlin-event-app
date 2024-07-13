import * as express from "express";
import { Application } from "express";
import path from "path";
import cookies from "cookie-parser";
import { morganMiddleware } from "../src/middleware/morgan.middleware";

class EnvironmentConfig {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
    this.configureExpress();
    this.configureViews();
    this.otherConfigs();
  }

  private configureExpress(): void {
    // TODO : configure Express
    // Express.js Security Best Practices :
    // https://github.com/goldbergyoni/nodebestpractices
    // https://dev.to/tristankalos/expressjs-security-best-practices-1ja0
    // https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection
    // https://expressjs.com/en/advanced/best-practice-security.html
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, "../public")));
  }

  private configureViews(): void {
    this.app.set("view engine", "hbs");
    this.app.set("views", path.join(__dirname, "../views"));
  }

  private otherConfigs(): void {
    this.app.use(morganMiddleware);
    this.app.use(cookies());
  }
}

export const environmentConfig = (app: Application): void => {
  new EnvironmentConfig(app);
};

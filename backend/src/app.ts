import dotenv from "dotenv";
import path from "path";
import express, { Application, Request, Response } from "express";
import { environmentConfig, securityConfig } from "../config";
import colors from "colors";

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.initializeConfigs();
    this.setRoutes();
  }

  private initializeConfigs(): void {
    environmentConfig(this.app);
    securityConfig(this.app);
  }

  private setRoutes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.render("index", { siteTitle: "Hello World" });
    });
  }

  public startServer(): void {
    const port = process.env.PORT || 3001;
    this.app.listen(port, () => {
      console.info(
        [
          "🖥️ ",
          colors.bgBlack.bold(` SERVER `),
          ` App is running, visit: `,
          colors.blue(`http://localhost:${port}`),
        ].join("")
      );
    });
  }
}

export default new App();

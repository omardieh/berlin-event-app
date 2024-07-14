import express, { Application, Request, Response } from "express";
import { environmentConfig, securityConfig } from "@/config";
import colors from "colors";

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

  public runServer(port: number): void {
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

const app = new App();
export default app;

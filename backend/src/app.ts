import express, { Express, Request, Response } from "express";
import { environmentConfig, securityConfig } from "../config";

const app: Express = express();

environmentConfig(app);
securityConfig(app);

app.get("/", (req: Request, res: Response) => {
  res.render("index", { siteTitle: "Hello World" });
});

export default app;

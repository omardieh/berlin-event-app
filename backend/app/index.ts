import express, { Express, Request, Response } from "express";
import { environmentConfig, securityConfig } from "../config";

const port = process.env.PORT || 3001;

const app: Express = express();

environmentConfig(app);
securityConfig(app);

app.get("/", (req: Request, res: Response) => {
  res.render("index", { siteTitle: "Hello World" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

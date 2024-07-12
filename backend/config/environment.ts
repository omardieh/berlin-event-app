import express, { Express } from "express";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import cookies from "cookie-parser";

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});

export const environmentConfig = (app: Express) => {
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );
  app.use(express.static(path.join(__dirname, "../public")));
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookies());
};

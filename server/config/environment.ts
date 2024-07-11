import express, { Express } from "express";
import path from "path";

export const environmentConfig = (app: Express) => {
    app.use(express.static(path.join(__dirname, '../public')));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
}
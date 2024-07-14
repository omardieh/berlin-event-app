import helmet from "helmet";
import cors from "cors";
import { Application } from "express";

class SecurityConfig {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
    this.configureHelmet();
    this.configureCors();
  }

  private configureHelmet(): void {
    // TODO : configure Helmet
    // Using Helmet in Node.js to secure your application :
    // https://blog.logrocket.com/using-helmet-node-js-secure-application/
    this.app.use(helmet());
  }

  private configureCors(): void {
    // TODO : configure Cors
    // Configuring CORS in Node.js with Express :
    // https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h
    // https://www.linkedin.com/pulse/configure-cors-node-js-express-naum-asafov-qs6ce
    this.app.use(
      cors({
        origin: [process.env.CLIENT_URL || `http://localhost:3000`],
      })
    );
  }
}

export const securityConfig = (app: Application): void => {
  new SecurityConfig(app);
};

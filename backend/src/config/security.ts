import helmet from 'helmet';
import cors from 'cors';
import { Application } from 'express';

export const securityConfig = function (app: Application) {
  function configureHelmet(): void {
    // TODO : configure Helmet
    // Using Helmet in Node.js to secure your application :
    // https://blog.logrocket.com/using-helmet-node-js-secure-application/
    app.use(helmet());
  }

  function configureCors(): void {
    // TODO : configure Cors
    // Configuring CORS in Node.js with Express :
    // https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h
    // https://www.linkedin.com/pulse/configure-cors-node-js-express-naum-asafov-qs6ce
    app.use(
      cors({
        origin: [process.env.CLIENT_URL || `http://localhost:3000`],
      }),
    );
  }
  configureCors();
  configureHelmet();
};

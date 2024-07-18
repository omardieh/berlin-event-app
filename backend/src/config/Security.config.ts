import cors from 'cors';
import { Application } from 'express';
import helmet from 'helmet';

export class SecurityConfig {
  constructor(private app: Application) {
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
    const isDevEnv = process.env.NODE_ENV === 'development';
    this.app.use(
      isDevEnv
        ? cors()
        : cors({
            origin: [`${process.env.CLIENT_URL}`],
          }),
    );
  }
}

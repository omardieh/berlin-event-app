import express, { Application, Request, Response } from 'express';
import { environmentConfig, securityConfig } from '@/config';
import colors from 'colors';

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
    this.app.get('/', (req: Request, res: Response) => {
      res.render('index', { siteTitle: 'Hello World' });
    });
  }

  public runServer(port: number): void {
    const messages = {
      server: {
        success: [
          '🖥️ ',
          colors.bgBlack.bold(` SERVER `),
          ` App is running, visit: `,
          colors.blue(`http://localhost:${port}`),
        ].join(''),
      },
      error: {
        portInUse: [
          '❌ ',
          colors.bgRed.bold(` ERROR `),
          ` Port ${port} is already in use. Please choose another port.`,
        ].join(''),
        serverFailure: (error: NodeJS.ErrnoException) =>
          ['❌ ', colors.bgRed.bold(` ERROR `), ` Failed to start the server: `, colors.red(error.message)].join(''),
        unexpected: (error: Error) =>
          ['❌ ', colors.bgRed.bold(` ERROR `), ` An unexpected error occurred: `, colors.red(error.message)].join(''),
        unknown: ['❌ ', colors.bgRed.bold(` ERROR `), ` An unknown error occurred.`].join(''),
      },
    };
    try {
      this.app
        .listen(port, () => {
          console.info(messages.server.success);
        })
        .on('error', (error: NodeJS.ErrnoException) => {
          if (error.code === 'EADDRINUSE') {
            console.error(messages.error.portInUse);
          } else {
            console.error(messages.error.serverFailure(error));
          }
          process.exit(1);
        });
    } catch (error) {
      if (error instanceof Error) {
        console.error(messages.error.unexpected(error));
      } else {
        console.error(messages.error.unknown);
      }
      process.exit(1);
    }
  }
}

const app = new App();
export default app;

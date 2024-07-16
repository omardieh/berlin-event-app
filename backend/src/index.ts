import app from '@/app';
import colors from 'colors';
import { Application } from 'express';

const port = Number(process.env.SERVER_PORT) || 3001;

runServer(app);
function runServer(app: Application) {
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
    app
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
    // if (error instanceof Error) {
    //   console.error(messages.error.unexpected(error));
    // } else {
    //   console.error(messages.error.unknown);
    // }
    // process.exit(1);
  }
}

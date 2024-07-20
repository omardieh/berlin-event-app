import app from '@/app';
import { serverMessages as messages } from '@/constants';
import { DbMiddleware } from '@/middleware';
import { IDbMiddleware } from '@/types';
class Server {
  private db: IDbMiddleware;
  constructor(
    public port: number,
    public host: string,
  ) {
    this.port = port;
    this.host = host;
    this.db = new DbMiddleware();
    this.runServer();
  }

  private async runServer() {
    try {
      await this.db.connectDB();
      app.listen(this.port, this.host, () => {
        console.info(messages.server.success);
      });
    } catch (error) {
      let errorMessage = 'unknown error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
      process.exit(1);
    }
  }
}

const port = Number(process.env.SERVER_PORT) || 3001;
const host = process.env.SERVER_HOST || 'localhost';
new Server(port, host);

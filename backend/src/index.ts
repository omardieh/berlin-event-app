import app from '@/app';
import { serverMessages as messages } from '@/constants';

const port = Number(process.env.SERVER_PORT) || 3001;

try {
  app.listen(port, () => {
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

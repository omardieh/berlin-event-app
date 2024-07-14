import app from "@/app";

app.runServer(Number(process.env.SERVER_PORT) || 3001);

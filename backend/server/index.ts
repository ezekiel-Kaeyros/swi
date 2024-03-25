
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import routes from './routes';
import socket from './sockets';
import { initDb } from './db';

initDb();

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const httpServer = createServer(app);
socket(httpServer);

const PORT = process.env.PORT || 4000;
httpServer.listen({ port: PORT }, () => {
  console.log(`httpServer ready at http://localhost:${PORT}`);
});

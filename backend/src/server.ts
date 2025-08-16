import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import gameRoutes from './routes/gameRoutes.js';
import { PORT, CLIENT_ORIGIN } from './config/env.js';
import { registerSocketHandlers } from './socket/handlers.js';
import { resetGame } from './services/gameService.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', gameRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: CLIENT_ORIGIN, methods: ['GET','POST'] } });

registerSocketHandlers(io);
resetGame();

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

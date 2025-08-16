import { Server, Socket } from 'socket.io';
import { gameState, leaderboard } from '../models/gameState.js';
import { resetGame, buildValidCombos, applyMove } from '../services/gameService.js';

export function registerSocketHandlers(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`👤 NEW PLAYER: ${socket.id.substring(0,8)} connected`);
    socket.emit('game-state-updated', gameState);

    socket.on('cell-click', ({ row, col }) => {
      console.log(`🎯 Cell clicked: ${row},${col}`);
      if (gameState.gameOver) return socket.emit('error', 'Game is over');
      if (row < 0 || col < 0 || row >= gameState.grid.length || col >= gameState.grid[0].length) return;
      if (gameState.cooldowns[row][col] > 0) {
        console.log(`❄️ Cell ${row},${col} is in cooldown: ${gameState.cooldowns[row][col]} turns remaining`);
        return socket.emit('error', 'Cell is in cooldown');
      }
      
      const combos = buildValidCombos(row, col);
      console.log(`🎲 Found ${combos.length} valid combinations for cell ${row},${col}`);
      if (combos.length === 0) {
        console.log(`💀 GAME OVER: No valid combinations for cell ${row},${col}`);
        // Game ends when player clicks on a cell with no valid combinations
        gameState.gameOver = true;
        io.emit('game-over', { finalScore: gameState.score, reason: 'No valid combination exists for the clicked cell' });
        io.emit('game-state-updated', gameState);
        return;
      }
      
      const chosen = combos[Math.floor(Math.random() * combos.length)];
      console.log(`✅ Applying move: ${chosen.shape}, ${chosen.color} to cell ${row},${col}`);
      applyMove(row, col, chosen);
      
      io.emit('game-state-updated', gameState);
      socket.emit('valid-move', { row, col, score: gameState.score });
    });

    socket.on('reset-game', () => {
      resetGame();
      io.emit('game-state-updated', gameState);
      io.emit('game-reset');
    });

    socket.on('save-score', ({ nickname }) => {
      if (!nickname || !gameState.gameOver) return;
      leaderboard.push({ nickname: nickname.toString().trim().slice(0,16), score: gameState.score, timestamp: new Date().toISOString() });
      socket.emit('score-saved');
    });

    socket.on('disconnect', () => console.log(`👋 PLAYER LEFT: ${socket.id.substring(0,8)} disconnected`));
  });
}

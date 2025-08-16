import { Request, Response } from 'express';
import { gameState, leaderboard } from '../models/gameState.js';
import { resetGame } from '../services/gameService.js';

export function getGameState(_req: Request, res: Response) { res.json(gameState); }

export function getLeaderboard(_req: Request, res: Response) {
  const sorted = [...leaderboard].sort((a,b)=>b.score-a.score).slice(0,10);
  res.json(sorted);
}

export function postSaveScore(req: Request, res: Response) {
  const { nickname, score } = req.body as { nickname?: string; score?: number };
  if (!nickname || typeof score !== 'number') return res.status(400).json({ error: 'Invalid data' });
  leaderboard.push({ nickname: nickname.toString().trim().slice(0,16), score, timestamp: new Date().toISOString() });
  res.json({ success: true });
}

export function postResetGame(_req: Request, res: Response) {
  resetGame();
  res.json({ success: true });
}

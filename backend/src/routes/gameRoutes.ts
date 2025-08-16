import { Router, Request, Response } from 'express';
import { getGameState, getLeaderboard, postSaveScore } from '../controllers/gameController.js';

const router = Router();
router.get('/health', (_req: Request, res: Response) => res.json({ status: 'ok' }));
router.get('/game-state', getGameState);
router.get('/leaderboard', getLeaderboard);
router.post('/save-score', postSaveScore);
export default router;

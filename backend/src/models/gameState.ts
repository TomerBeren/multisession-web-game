export type Cell = { shape: string; color: string };
export const SHAPES = ['triangle', 'square', 'diamond', 'circle'] as const;
export const COLORS = ['red', 'green', 'blue', 'yellow'] as const;
export type Shape = typeof SHAPES[number];
export type Color = typeof COLORS[number];
export const GRID_ROWS = 3;
export const GRID_COLS = 6;
export const COOLDOWN_TURNS = 3;

export interface GameState {
  grid: Cell[][];
  score: number;
  gameOver: boolean;
  turnCount: number;
  cooldowns: number[][];
}

export const gameState: GameState = {
  grid: [],
  score: 0,
  gameOver: false,
  turnCount: 0,
  cooldowns: []
};

export interface LeaderboardEntry { nickname: string; score: number; timestamp: string; }
export const leaderboard: LeaderboardEntry[] = [];

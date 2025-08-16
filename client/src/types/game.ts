export interface Cell {
  shape: string;
  color: string;
}

export interface GameState {
  grid: (Cell | null)[][];
  score: number;
  gameOver: boolean;
  turnCount: number;
  cooldowns: number[][];
}

export interface LeaderboardEntry {
  nickname: string;
  score: number;
  timestamp: string;
}

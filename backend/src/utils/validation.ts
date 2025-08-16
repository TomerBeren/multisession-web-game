import { GRID_ROWS, GRID_COLS, Cell } from '../models/gameState.js';

export function getAdjacentCells(row: number, col: number) {
  const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
  const res: { row: number; col: number }[] = [];
  for (const [dr, dc] of dirs) {
    const nr = row + dr, nc = col + dc;
    if (nr >=0 && nr < GRID_ROWS && nc >=0 && nc < GRID_COLS) res.push({ row: nr, col: nc });
  }
  return res;
}

export function isValidPlacement(grid: (Cell|null)[][], row: number, col: number, shape: string, color: string) {
  const adjacent = getAdjacentCells(row, col);
  for (const { row: ar, col: ac } of adjacent) {
    const cell = grid[ar][ac];
    if (cell && (cell.shape === shape || cell.color === color)) return false;
  }
  return true;
}

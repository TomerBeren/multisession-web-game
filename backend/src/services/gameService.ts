import { SHAPES, COLORS, GRID_ROWS, GRID_COLS, COOLDOWN_TURNS, gameState, Cell } from '../models/gameState.js';
import { isValidPlacement } from '../utils/validation.js';
import { logCooldownState } from '../utils/logging.js';

export function initializeGrid() {
  const grid: Cell[][] = Array.from({ length: GRID_ROWS }, () => Array.from({ length: GRID_COLS }, () => ({ shape: '', color: '' } as unknown as Cell)));
  const cooldowns: number[][] = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(0));
  
  // Generate valid initial grid
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      let attempts = 0;
      while (attempts < 100) { // Prevent infinite loops
        const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        
        if (isValidPlacement(grid, r, c, shape, color)) {
          grid[r][c] = { shape, color };
          break;
        }
        attempts++;
      }
      
      // Fallback if no valid placement found after many attempts
      if (!grid[r][c].shape) {
        // Reset and try again
        return initializeGrid();
      }
    }
  }
  
  gameState.grid = grid;
  gameState.cooldowns = cooldowns;
  gameState.score = 0;
  gameState.gameOver = false;
  gameState.turnCount = 0;
  return gameState;
}

export function resetGame() { initializeGrid(); return gameState; }

export function buildValidCombos(row: number, col: number) {
  const current = gameState.grid[row][col];
  const combos: Cell[] = [];
  console.log(`🔍 Building combos for cell ${row},${col} - current: ${current.shape}, ${current.color}`);
  
  for (const shape of SHAPES) {
    for (const color of COLORS) {
      // Skip if both shape AND color are the same (no change)
      if (shape === current.shape && color === current.color) continue;
      
      // Check if this combination is valid (doesn't match adjacent cells)
      if (isValidPlacement(gameState.grid, row, col, shape, color)) {
        combos.push({ shape, color });
        console.log(`✓ Valid combo: ${shape}, ${color}`);
      } else {
        console.log(`✗ Invalid combo: ${shape}, ${color}`);
      }
    }
  }
  console.log(`📊 Total valid combinations: ${combos.length}`);
  return combos;
}

export function applyMove(row: number, col: number, combo: Cell) {
  gameState.grid[row][col] = { shape: combo.shape, color: combo.color };
  gameState.score++;
  gameState.turnCount++;
  gameState.cooldowns[row][col] = COOLDOWN_TURNS;
  decreaseAllCooldowns(row, col);
  return gameState;
}

export function decreaseAllCooldowns(excludeRow: number, excludeCol: number) {
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (r === excludeRow && c === excludeCol) continue;
      if (gameState.cooldowns[r][c] > 0) {
        gameState.cooldowns[r][c]--;
      }
    }
  }
  logCooldownState();
}

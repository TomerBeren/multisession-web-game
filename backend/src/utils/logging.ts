import { GRID_ROWS, GRID_COLS, gameState } from '../models/gameState.js';

export function logCooldownState() {
  console.log('📊 CURRENT COOLDOWN STATE:');
  for (let r = 0; r < GRID_ROWS; r++) {
    let rowStr = `  Row ${r}: `;
    for (let c = 0; c < GRID_COLS; c++) {
      const cooldown = gameState.cooldowns[r][c];
      const cell = gameState.grid[r][c];
      const disp = cell ? `${cell.shape[0]}${cell.color[0]}` : 'empty';
      rowStr += `[${r},${c}]:${cooldown}(${disp}) `;
    }
    console.log(rowStr);
  }
}

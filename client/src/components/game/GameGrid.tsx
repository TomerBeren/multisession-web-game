import { SHAPE_COMPONENTS } from './Shapes';
import { COLOR_MAP } from '../../constants';
import { GameState } from '../../types';

interface GameGridProps {
  gameState: GameState;
  onCellClick: (row: number, col: number) => void;
}

export const GameGrid = ({ gameState, onCellClick }: GameGridProps) => {
  return (
    <div className="grid grid-cols-6 gap-3 max-w-4xl mx-auto mb-8">
      {gameState.grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (!cell) return null;
          
          const ShapeComponent = SHAPE_COMPONENTS[cell.shape as keyof typeof SHAPE_COMPONENTS];
          const color = COLOR_MAP[cell.color as keyof typeof COLOR_MAP];
          const cooldown = gameState.cooldowns[rowIndex][colIndex];
          const isClickable = cooldown === 0 && !gameState.gameOver;
          
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`
                aspect-square border-2 border-gray-300 rounded-lg flex items-center justify-center relative
                transition-all duration-200 cursor-pointer
                ${isClickable 
                  ? 'hover:border-blue-400 hover:shadow-lg hover:scale-105' 
                  : 'opacity-50 cursor-not-allowed'
                }
                ${cooldown > 0 ? 'bg-gray-100' : 'bg-white'}
              `}
              onClick={() => onCellClick(rowIndex, colIndex)}
            >
              <div className="w-3/4 h-3/4">
                <ShapeComponent color={color} />
              </div>
              {cooldown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    {cooldown}
                  </span>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

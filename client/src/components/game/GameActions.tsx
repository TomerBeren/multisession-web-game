interface GameActionsProps {
  onResetGame: () => void;
  onShowLeaderboard: () => void;
}

export const GameActions = ({ onResetGame, onShowLeaderboard }: GameActionsProps) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={onResetGame}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        🔄 Reset Game
      </button>
      <button
        onClick={onShowLeaderboard}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
      >
        🏆 Leaderboard
      </button>
    </div>
  );
};

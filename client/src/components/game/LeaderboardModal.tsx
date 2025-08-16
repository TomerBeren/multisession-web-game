import { LeaderboardEntry } from '../../types';

interface LeaderboardModalProps {
  leaderboard: LeaderboardEntry[];
  onClose: () => void;
}

export const LeaderboardModal = ({ leaderboard, onClose }: LeaderboardModalProps) => {
  const getRankStyling = (index: number) => {
    switch (index) {
      case 0: return 'bg-yellow-100 border-2 border-yellow-300';
      case 1: return 'bg-gray-100 border-2 border-gray-300';  
      case 2: return 'bg-orange-100 border-2 border-orange-300';
      default: return 'bg-gray-50';
    }
  };

  const getRankTextColor = (index: number) => {
    switch (index) {
      case 0: return 'text-yellow-600';
      case 1: return 'text-gray-600';
      case 2: return 'text-orange-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Leaderboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {leaderboard.length === 0 ? (
            <p className="text-center text-gray-600">No scores yet!</p>
          ) : (
            leaderboard.map((entry, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-3 rounded-lg ${getRankStyling(index)}`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`font-bold text-lg ${getRankTextColor(index)}`}>
                    #{index + 1}
                  </span>
                  <span className="font-medium">{entry.nickname}</span>
                  {index === 0 && <span className="text-xl">👑</span>}
                </div>
                <span className="font-bold text-lg">{entry.score}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

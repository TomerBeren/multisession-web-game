import { useState } from 'react';

interface GameOverModalProps {
  finalScore: number;
  onSaveScore: (nickname: string) => void;
  onClose: () => void;
}

export const GameOverModal = ({ finalScore, onSaveScore, onClose }: GameOverModalProps) => {
  const [nickname, setNickname] = useState('');

  const handleSaveScore = () => {
    if (nickname.trim()) {
      onSaveScore(nickname.trim());
      setNickname('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-center mb-4">Game Over!</h2>
        <p className="text-center text-gray-600 mb-6">
          Final Score: <span className="font-bold text-blue-600">{finalScore}</span>
        </p>
        <div className="space-y-4">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Enter your nickname"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSaveScore()}
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSaveScore}
              disabled={!nickname.trim()}
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
            >
              Save Score
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

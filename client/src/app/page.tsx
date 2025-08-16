'use client';

import React from 'react';
import { 
  GameHeader, 
  GameGrid, 
  GameActions, 
  GameOverModal, 
  LeaderboardModal,
  GameRules,
  Toast 
} from '../components';
import { useSocket, useLeaderboard } from '../hooks';

export default function Home() {
  const {
    gameState,
    connected,
    errorMessage,
    showScoreInput,
    handleCellClick,
    handleResetGame,
    handleSaveScore,
    clearError,
    closeScoreInput
  } = useSocket();

  const {
    leaderboard,
    showLeaderboard,
    fetchLeaderboard,
    closeLeaderboard
  } = useLeaderboard();

  if (!gameState) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <GameHeader 
          connected={connected} 
          score={gameState.score} 
        />

        <GameGrid 
          gameState={gameState}
          onCellClick={handleCellClick}
        />

        <GameActions 
          onResetGame={handleResetGame} 
          onShowLeaderboard={fetchLeaderboard} 
        />

        {showScoreInput && (
          <GameOverModal 
            finalScore={gameState.score} 
            onSaveScore={handleSaveScore} 
            onClose={closeScoreInput} 
          />
        )}
        
        {showLeaderboard && (
          <LeaderboardModal 
            leaderboard={leaderboard} 
            onClose={closeLeaderboard} 
          />
        )}

        {errorMessage && (
          <Toast 
            message={errorMessage} 
            onClose={clearError}
          />
        )}

        <GameRules />
      </div>
    </div>
  );
}

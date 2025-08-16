import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { GameState } from '../types';
import { SOCKET_URL } from '../constants';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showScoreInput, setShowScoreInput] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    newSocket.on('connect', () => setConnected(true));
    newSocket.on('disconnect', () => setConnected(false));
    newSocket.on('game-state-updated', (state: GameState) => setGameState(state));
    newSocket.on('game-over', (data: { finalScore: number; reason: string }) => {
      console.log('Game over received:', data);
      setShowScoreInput(true);
    });
    newSocket.on('valid-move', () => {});
    newSocket.on('game-reset', () => setShowScoreInput(false));
    newSocket.on('score-saved', () => {
      setShowScoreInput(false);
    });
    newSocket.on('error', (errorMsg: string) => {
      setErrorMessage(errorMsg);
      setTimeout(() => setErrorMessage(null), 3000);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  const handleCellClick = (row: number, col: number) => {
    if (socket && gameState && !gameState.gameOver) {
      socket.emit('cell-click', { row, col });
    }
  };

  const handleResetGame = () => {
    socket?.emit('reset-game');
  };

  const handleSaveScore = (nickname: string) => {
    if (socket && nickname.trim()) {
      socket.emit('save-score', { nickname: nickname.trim() });
    }
  };

  const clearError = () => setErrorMessage(null);
  const closeScoreInput = () => setShowScoreInput(false);

  return {
    socket,
    connected,
    gameState,
    errorMessage,
    showScoreInput,
    handleCellClick,
    handleResetGame,
    handleSaveScore,
    clearError,
    closeScoreInput
  };
};

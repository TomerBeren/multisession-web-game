import { useState } from 'react';
import { LeaderboardEntry } from '../types';
import { API_URL } from '../constants';

export const useLeaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch(`${API_URL}/leaderboard`);
      const data = await response.json();
      setLeaderboard(data);
      setShowLeaderboard(true);
    } catch (error) {
      console.error('Failed to fetch leaderboard:', error);
    }
  };

  const closeLeaderboard = () => setShowLeaderboard(false);

  return {
    leaderboard,
    showLeaderboard,
    fetchLeaderboard,
    closeLeaderboard
  };
};

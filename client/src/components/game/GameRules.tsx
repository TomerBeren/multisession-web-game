export const GameRules = () => {
  return (
    <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
        <span>📋</span> How to Play
      </h3>
      <div className="grid md:grid-cols-2 gap-4 text-white/90">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl">🎯</span>
            <div>
              <strong>Click any cell</strong> to randomly change its shape & color
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <div>
              <strong>Valid moves:</strong> New shape/color must differ from all adjacent cells
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">📈</span>
            <div>
              <strong>Scoring:</strong> Each valid click increases your score by +1
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-xl">❄️</span>
            <div>
              <strong>Cooldown:</strong> Clicked cells enter a 3-turn cooldown period
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">💀</span>
            <div>
              <strong>Game ends</strong> when no valid combination exists for a clicked cell
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">🌐</span>
            <div>
              <strong>Multiplayer:</strong> All players share the same board in real-time!
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-white/70 text-sm">
        <span className="inline-flex items-center gap-1">
          <span>💡</span>
          <em>Tip: Only orthogonal neighbors count - no diagonals!</em>
        </span>
      </div>
    </div>
  );
};

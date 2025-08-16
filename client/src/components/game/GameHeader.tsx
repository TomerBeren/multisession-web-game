interface GameHeaderProps {
  score: number;
  connected: boolean;
}

export const GameHeader = ({ score, connected }: GameHeaderProps) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold mb-2">Multisession Shape Game</h1>
      <div className="flex justify-center items-center space-x-6">
        <div className="text-2xl font-semibold text-blue-600">Score: {score}</div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          connected 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {connected ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
      </div>
    </div>
  );
};

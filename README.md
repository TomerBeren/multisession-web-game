# 🎮 Multisession Web Game

A real-time multiplayer puzzle game built with modern web technologies. Players collaborate on a shared game board where they click cells to change shapes and colors while following adjacency rules. The game features live synchronization across multiple devices and browser tabs.

![Game Preview](https://via.placeholder.com/800x400/1e40af/ffffff?text=Game+Board+Preview)

## 🎯 Game Overview

### Core Mechanics
- **3×6 Grid**: Interactive game board with shape and color combinations
- **4 Shapes**: Triangle, Square, Diamond, Circle (rendered as SVG)
- **4 Colors**: Red, Green, Blue, Yellow
- **Validation Rules**: New shapes/colors must differ from all adjacent cells (orthogonal only)
- **Scoring System**: +1 point for each valid move
- **Cooldown System**: 3-turn cooldown period for clicked cells
- **Game Over**: Triggered when no valid combinations exist for a clicked cell

### Multiplayer Features
- **Real-time Synchronization**: All players see the same board state instantly
- **Cross-device Support**: Play simultaneously on multiple devices/tabs
- **Collaborative Gameplay**: Single shared score for all players
- **No Authentication Required**: Join instantly without registration

### Additional Features
- **Leaderboard System**: Save high scores with player nicknames
- **Game Reset**: Start fresh games at any time
- **Visual Feedback**: Cooldown indicators and interactive UI elements
- **Responsive Design**: Works on desktop and mobile devices

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 15.4.6 with React 19
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for responsive design
- **Real-time Communication**: Socket.IO Client
- **Graphics**: SVG for shape rendering
- **Build Tool**: Turbopack for fast development

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES Modules)
- **Real-time Engine**: Socket.IO for WebSocket connections
- **CORS**: Configured for cross-origin requests
- **Development**: Nodemon with ts-node for hot reloading
- **Data Storage**: In-memory (session-based)

### Architecture
- **Client-Server Model**: Clean separation of concerns
- **Component-based Frontend**: Modular React components
- **Custom Hooks**: Reusable logic for Socket.IO and API calls
- **Centralized State**: Shared game state via WebSocket events
- **Environment Configuration**: Proper env variable management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (with pnpm package manager)
- Modern web browser with WebSocket support

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TomerBeren/multisession-web-game.git
   cd multisession-web-game
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   pnpm install
   
   # Install frontend dependencies
   cd ../client
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   # Backend configuration
   cd ../backend
   cp .env.example .env
   # Edit .env if needed (default values work for local development)
   
   # Frontend configuration
   cd ../client
   cp .env.example .env.local
   # Edit .env.local if needed (default values work for local development)
   ```

4. **Start the servers**

   **Terminal 1 - Backend:**
   ```bash
   cd backend
   pnpm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd client
   pnpm run dev
   ```

5. **Access the application**
   - Open your browser to: **http://localhost:5000**
   - Backend API runs on: **http://localhost:5001**

## 🎮 How to Play

1. **Join the Game**: Simply open the URL - no registration needed
2. **Click Any Cell**: Changes both shape and color randomly
3. **Follow the Rules**: New combinations must differ from adjacent cells
4. **Score Points**: Each valid move adds +1 to the shared score
5. **Watch Cooldowns**: Clicked cells show a 3-turn countdown
6. **Game Over**: Occurs when no valid combination exists for a clicked cell
7. **Save Your Score**: Enter a nickname when the game ends
8. **View Leaderboard**: Check high scores from previous games

### Multiplayer Experience
- Open multiple browser tabs to see real-time synchronization
- Share the URL with others to play collaboratively
- All players contribute to the same game and score

## 📁 Project Structure

```
multisession-web-game/
├── backend/                    # Node.js/Express server
│   ├── src/
│   │   ├── config/            # Environment configuration
│   │   ├── controllers/       # Request handlers
│   │   ├── models/           # Data models & types
│   │   ├── routes/           # API routes
│   │   ├── services/         # Business logic
│   │   ├── socket/           # Socket.IO handlers
│   │   ├── utils/            # Helper functions
│   │   └── server.ts         # Main server file
│   ├── package.json
│   └── tsconfig.json
├── client/                     # Next.js React application
│   ├── src/
│   │   ├── app/              # Next.js app router
│   │   ├── components/       # React components
│   │   │   ├── game/         # Game-specific components
│   │   │   └── ui/           # Reusable UI components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── types/            # TypeScript definitions
│   │   └── constants/        # Configuration constants
│   ├── package.json
│   └── next.config.ts
├── README.md
└── ENV_SETUP.md               # Detailed environment setup
```

## 🔧 Development Commands

### Backend
```bash
pnpm run dev        # Start development server with hot reload
pnpm run build      # Compile TypeScript to JavaScript
pnpm run start      # Run compiled production server
```

### Frontend
```bash
pnpm run dev        # Start Next.js development server
pnpm run build      # Build production application
pnpm run start      # Start production server
```

## 🌐 Production Deployment

### Environment Variables

**Frontend (.env.local):**
```bash
NEXT_PUBLIC_SOCKET_URL=https://your-backend-domain.com
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
```

**Backend (.env):**
```bash
PORT=5001
CLIENT_ORIGIN=https://your-frontend-domain.com
```

### Deployment Options
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Railway, Render, Heroku, or any Node.js hosting
- **Full Stack**: DigitalOcean, AWS, Google Cloud Platform

## � Key Features Demonstrated

- ✅ **Real-time Multiplayer**: WebSocket-based synchronization
- ✅ **Modern Frontend**: React 19 + Next.js 15 + TypeScript
- ✅ **Scalable Backend**: Express + Socket.IO architecture
- ✅ **Game Logic**: Complex validation and state management
- ✅ **User Experience**: Responsive design with visual feedback
- ✅ **Best Practices**: Environment variables, component organization
- ✅ **SVG Graphics**: Custom shape rendering
- ✅ **Session Management**: Stateful multiplayer coordination

##  Technical Highlights

This project showcases:
- **Full-stack TypeScript development**
- **Real-time application architecture**
- **Component-based UI design**
- **WebSocket communication patterns**
- **Game state management**
- **Modern development tooling**
- **Production-ready environment configuration**

## 📞 Support

For technical questions or setup assistance, please refer to the `ENV_SETUP.md` file for detailed configuration instructions.

---

*Built with ❤️ using modern web technologies*

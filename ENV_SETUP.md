# Environment Setup

## Client (Frontend)

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your configuration:
   ```bash
   NEXT_PUBLIC_SOCKET_URL=http://localhost:5001
   NEXT_PUBLIC_API_URL=http://localhost:5001/api
   ```

### Environment Variables

- `NEXT_PUBLIC_SOCKET_URL`: WebSocket connection URL for real-time communication
- `NEXT_PUBLIC_API_URL`: REST API base URL for HTTP requests

**Note**: Next.js requires the `NEXT_PUBLIC_` prefix for client-side environment variables.

## Backend (Server)

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your configuration:
   ```bash
   PORT=5001
   CLIENT_ORIGIN=http://localhost:5000
   ```

### Environment Variables

- `PORT`: Server port (default: 5001)
- `CLIENT_ORIGIN`: Allowed CORS origin for frontend requests

## Production Deployment

For production, update the environment variables to point to your deployed domains:

**Client `.env.local`:**
```bash
NEXT_PUBLIC_SOCKET_URL=https://your-backend-domain.com
NEXT_PUBLIC_API_URL=https://your-backend-domain.com/api
```

**Backend `.env`:**
```bash
PORT=5001
CLIENT_ORIGIN=https://your-frontend-domain.com
```

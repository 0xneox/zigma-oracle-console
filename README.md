# Zigma Oracle Console

A terminal-style web interface for the Zigma AI-Powered Polymarket Intelligence Agent. Built for traders who demand transparency, precision, and real-time insights.

## Overview

Zigma Oracle Console provides a real-time dashboard to monitor the Zigma agent's autonomous trading cycles, signal generation, and market analysis. The interface connects directly to the Zigma backend API to display:

- System health and uptime
- Latest trading signals with full transparency
- Operational audit logs
- Market analysis summaries
- Real-time cycle status

## Features

### Real-Time Monitoring
- Live system status and health metrics
- Automatic data refresh every 30 seconds
- Terminal-style CRT aesthetic for authentic trading environment

### Signal Transparency
- Complete audit trail of signal generation process
- Effective edge calculations with entropy adjustments
- Confidence scoring and exposure recommendations
- Historical cycle analysis

### Market Intelligence
- Deep evaluation of selected markets
- Multi-stage analysis including LLM reasoning
- Group competition resolution for correlated markets
- Risk-adjusted signal filtering

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: React Query for API state
- **Deployment**: Static site ready for Netlify/Vercel

## Prerequisites

- Node.js 18+
- npm or yarn
- Zigma backend server running on localhost:3001

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd zigmaui

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Component Structure
- `Index.tsx` - Main dashboard layout
- `LatestSignal.tsx` - Latest signal display with detailed metrics
- `LogsDisplay.tsx` - Operational logs with collapsible audit trails
- `Hero.tsx` - Landing section
- `OracleLogic.tsx` - System philosophy and methodology

### API Integration
- `/status` - System health and cycle metadata
- `/logs` - Raw operational logs for parsing
- Auto-refresh every 30 seconds
- Error handling with fallback states

## Deployment

### Static Site Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

### Environment Variables
No environment variables required - connects to localhost:3001 by default.

## Usage

1. Ensure Zigma backend is running (`npm start` in backend directory)
2. Start the UI (`npm run dev`)
3. Monitor real-time system status and signal generation
4. Review operational logs for full transparency

## Contributing

This is a specialized interface for the Zigma trading agent. Contributions should focus on:
- UI/UX improvements for trader experience
- Real-time data visualization enhancements
- Accessibility and performance optimizations

## License

Proprietary - Zigma Oracle System

## Related Projects

- [Zigma Core Backend](https://github.com/0xneox/zigma-oracle) - The autonomous trading agent
- [Zigma Documentation](https://docs.zigma.ai) - Complete system documentation

---

**Built with precision for traders who demand nothing less.**

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

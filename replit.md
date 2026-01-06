# A2A Labs

## Overview
A2A Labs is a React/Vite web application for building an Agent to Agent Ecosystem. The application showcases autonomous systems coordinating without supervision.

## Project Structure
- `client/` - React frontend application
  - `src/components/` - UI components including Radix UI primitives
  - `src/pages/` - Page components (Home, SignIn, etc.)
  - `src/contexts/` - React context providers (Auth, Theme)
  - `src/lib/` - Utility functions and Firebase config
- `server/` - Express server for production static file serving
- `shared/` - Shared types and utilities
- `patches/` - pnpm package patches

## Tech Stack
- React 19 with TypeScript
- Vite 7 for bundling and development
- Tailwind CSS 4 for styling
- Radix UI for accessible components
- Firebase for authentication
- Express for production server
- pnpm as package manager

## Development
- Run `pnpm dev` to start the development server on port 5000
- The app uses Vite's development server in dev mode

## Production Build
- Run `pnpm build` to create production build
- Output goes to `dist/public/`
- Deployed as a static site

## Configuration
- Vite config: `vite.config.ts`
- TypeScript configs: `tsconfig.json`, `tsconfig.node.json`
- Component config: `components.json`
- **Authentication**: Firebase (Secrets configured)
- **Authorized Domains**: 
  - `043cde53-a472-455a-9196-08e3e7422fc7-00-2p68rghagb0ll.riker.replit.dev` (Current Replit Dev Domain)

## Recent Changes
- 2026-01-06: Configured for Replit environment (port 5000, allowed all hosts)
- 2026-01-06: Integrated Firebase secrets and verified server connectivity
- 2026-01-06: Identified need for domain authorization in Firebase Console

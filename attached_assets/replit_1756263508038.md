# Overview

This is a Vietnamese restaurant menu web application called "Cơm Nhà" (Home-style Rice), featuring traditional Southern Vietnamese cuisine. The application displays a digital menu with various food categories including rice dishes (cơm), noodle soups (bún), stir-fried dishes, and desserts. The frontend is built with React and modern UI components, while the backend uses Express.js with plans for database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite with hot module replacement and development optimizations

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules (type: "module")
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling
- **Storage**: Currently uses in-memory storage with interface for future database integration
- **Session Management**: Prepared for PostgreSQL sessions with connect-pg-simple

## Data Management
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared TypeScript schemas between client and server
- **Validation**: Zod schemas integrated with Drizzle for type-safe data validation
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment

## Development Environment
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Path Mapping**: TypeScript path aliases for clean imports (`@/`, `@shared/`)
- **Development Server**: Vite dev server with Express API integration
- **Error Handling**: Runtime error overlay for development debugging

## UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Component Library**: Comprehensive set of accessible UI components
- **Typography**: Inter font family for modern, readable interface
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Internationalization**: Vietnamese language support with proper UTF-8 encoding

# External Dependencies

## Core Frameworks
- **React**: Frontend framework with hooks and modern patterns
- **Express.js**: Backend web framework for API routes
- **TypeScript**: Type safety across the entire application

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **Drizzle Kit**: Database migration and schema management tools

## Development Tools
- **Vite**: Fast build tool with hot reload
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

## Data Fetching and Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class composition
- **class-variance-authority**: Component variant styling
- **Zod**: Runtime type validation and schema parsing
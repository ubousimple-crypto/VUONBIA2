# Overview

This is a Vietnamese restaurant menu web application called "Cơm Nhà" (Home-style Rice), featuring traditional Southern Vietnamese cuisine. The application displays a digital menu with various food categories including rice dishes, noodles, stir-fried dishes, beverages, and desserts. The interface is designed with a traditional wooden theme to reflect Vietnamese culture and includes features for menu browsing, search, filtering, and restaurant location information with table booking capabilities via Zalo integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing with single-page application structure
- **UI Framework**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS custom properties for consistent theming and responsive design
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite with hot module replacement, development optimizations, and TypeScript support

## Backend Architecture
- **Framework**: Express.js with TypeScript for REST API endpoints
- **Module System**: ES modules (type: "module") for modern JavaScript features
- **Development**: tsx for TypeScript execution in development environment
- **Production Build**: esbuild for optimized server-side bundling and deployment
- **Storage Interface**: Modular storage system with in-memory implementation and PostgreSQL interface ready
- **Session Management**: PostgreSQL session store configuration with connect-pg-simple

## Data Management
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Definition**: Shared TypeScript schemas between client and server in `/shared` directory
- **Validation**: Zod schemas integrated with Drizzle for runtime type validation
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment and scalability

## Development Environment
- **Monorepo Structure**: Organized codebase with `/client`, `/server`, and `/shared` directories
- **Path Mapping**: TypeScript path aliases (`@/`, `@shared/`) for clean import statements
- **Development Server**: Vite dev server with Express API integration and hot reload
- **Error Handling**: Runtime error overlay for development debugging and error tracking
- **Replit Integration**: Custom plugins for Replit development environment support

## UI/UX Design System
- **Design Tokens**: CSS custom properties for consistent color schemes and spacing
- **Component Library**: Comprehensive accessible UI components including modals, forms, carousels
- **Typography**: Inter font family for modern, readable Vietnamese text rendering
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints for all device sizes
- **Theme**: Traditional Vietnamese wooden aesthetic with warm color palette

# External Dependencies

## Core Frameworks
- **React**: Frontend framework with hooks, context, and modern patterns
- **Express.js**: Backend web framework for REST API development
- **TypeScript**: Type safety across frontend, backend, and shared code
- **Vite**: Build tool and development server with fast hot module replacement

## Database & ORM
- **PostgreSQL**: Primary database with Neon serverless hosting
- **Drizzle ORM**: Type-safe database operations with schema management
- **Drizzle Kit**: Database migration and schema synchronization tools

## UI Components & Styling
- **Radix UI**: Headless accessible component primitives for complex interactions
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Shadcn/ui**: Pre-built component library with consistent design system
- **Lucide React**: Icon library for consistent iconography

## State Management & Data Fetching
- **TanStack React Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation for type-safe data handling

## Development Tools
- **tsx**: TypeScript execution for development workflow
- **esbuild**: Fast bundling for production builds
- **Wouter**: Lightweight client-side routing solution

## External Services
- **Zalo**: Vietnamese messaging platform integration for table booking and customer communication
- **Vercel/Netlify**: Deployment platforms for static site hosting
- **Neon Database**: Serverless PostgreSQL hosting service
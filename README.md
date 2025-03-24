Tech Stack Overview
1. Backend (Nest.js API)
Framework: Nest.js

Database: PostgreSQL

ORM: Prisma (with auto-generated client and schema migrations)

Access Control: CASL (using CASL’s NestJS integration)

Typesafe API Contract: ts-rest (shared across services)

API Documentation: OpenAPI with Swagger integration

Validation: class-validator & class-transformer

Main Dependencies:

@nestjs/common, @nestjs/core, @nestjs/platform-express

@nestjs/swagger

dotenv, @nestjs/config

prisma, @prisma/client

@casl/ability, @casl/nestjs

ts-rest

class-validator, class-transformer

2. Buyer Frontend (Next.js)
Framework: Next.js (with support for SSR & SSG)

UI Library: React (React & ReactDOM)

API Consumption: ts-rest (using shared API contract)

Main Dependencies:

next

react, react-dom

ts-rest (from your shared api-contract package)

(Optional: TailwindCSS, styled-components, etc. for styling)

3. Seller/Admin Dashboard (Vite)
Framework: Vite (for fast development and optimized builds)

UI Library: React (React & ReactDOM)

API Consumption: ts-rest (using the shared API contract)

Main Dependencies:

vite

react, react-dom

ts-rest (from your shared api-contract package)

(Optional: Component libraries like Material-UI, Chakra UI, etc.)

4. Shared API Contract (Workspace Package)
Purpose: Centralize API types and contracts to ensure type consistency across all services

Library: ts-rest

Language: TypeScript

Main Dependencies:

typescript

ts-rest

(Any additional shared types or utility libraries)

5. Tooling & Monorepo Management
Monorepo Manager: Turborepo

Package Manager: Yarn Workspaces or PNPM

Linting & Formatting: ESLint & Prettier

Git Hooks: Husky & lint-staged



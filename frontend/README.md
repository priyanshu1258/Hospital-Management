# MediQueue — Intelligent Hospital Queue & Patient History System

## Overview
MediQueue is a full-stack intelligent hospital queue management system built as a final-year CSE project. It features priority-based queue scheduling with aging fairness, real-time tracking, comprehensive patient history, and analytics dashboards for three user roles: Patient, Doctor, and Admin.

## Tech Stack
- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: NextAuth.js v5 (Credentials + JWT)
- **UI Design**: Stitch MCP generated designs
- **Charts**: Recharts
- **File Upload**: Cloudinary
- **Rate Limiting**: Upstash Redis
- **Testing**: Vitest
- **Simulation**: Python + SimPy

## Project Structure
```
frontend/
├── app/
│   ├── (auth)/          # Login, Register
│   ├── (patient)/       # Patient dashboard, queue, history, reports
│   ├── (doctor)/        # Doctor dashboard, patient detail, consultation
│   ├── (admin)/         # Admin dashboard, analytics, doctors, departments
│   └── api/             # REST API routes
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── queue/           # Queue-specific components
│   ├── charts/          # Chart components
│   ├── layout/          # Sidebar, Topbar, PageHeader
│   └── common/          # KpiCard, EmptyState, LoadingSkeleton
├── lib/
│   ├── db/models/       # Mongoose models
│   ├── services/        # Business logic (queue engine, etc.)
│   ├── auth/            # NextAuth config + RBAC
│   ├── validators/      # Zod schemas
│   └── utils/           # Utilities (cn, fetcher, etc.)
├── design/stitch/       # Stitch MCP screen exports
├── scripts/             # Seed, utilities
├── simulator/           # Python SimPy simulator
└── tests/               # Vitest tests
```

## Setup
1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in values
3. `cd frontend && npm install`
4. `npm run seed` — populate demo data
5. `npm run dev` — start development server at http://localhost:3000

## Demo Credentials
| Role    | Email                   | Password    |
|---------|-------------------------|-------------|
| Admin   | admin@hospital.test     | Admin@123   |
| Doctor  | cardio@hospital.test    | Doctor@123  |
| Patient | patient1@hospital.test  | Patient@123 |

## Design Decisions
- **Monolithic fullstack**: Next.js API routes instead of separate Express backend — simpler deployment, shared types, better DX
- **Tailwind v4**: Using CSS-first config with `@tailwindcss/postcss` 
- **JWT sessions**: Stateless auth for scalability, 24h expiry
- **Optimistic concurrency**: Queue claims use version-based CAS to prevent double-assignment
- **Aging fairness**: P3 patients waiting 100+ minutes can outrank fresh P1 entries

## Phases
- [x] Phase 0: Project Setup
- [ ] Phase 1: Stitch MCP UI Generation
- [ ] Phase 2: Convert Stitch → Next.js Components
- [ ] Phase 3: Database Layer
- [ ] Phase 4: Authentication & RBAC
- [ ] Phase 5: Core Services (Queue Engine)
- [ ] Phase 6: API Routes
- [ ] Phase 7: Wire UI to Backend
- [ ] Phase 8: Polish & Security
- [ ] Phase 9: Simulator & Evaluation
- [ ] Phase 10: Final Verification

## License
Academic project — not licensed for production use.

# Study Abroad Decision Intelligence Platform

A production-ready, commission-neutral study abroad decision platform built with Next.js 14, TypeScript, Supabase, and TailwindCSS.

## 🎯 Features

### For Students
- **Match Score Engine** — Personalized university rankings (40% Academic + 30% Budget + 20% ROI + 10% Visa Risk)
- **ROI Calculator** — Break-even analysis, loan simulations, 5-year net gain projections, and university comparison
- **Verified Admits** — Browse real admit/reject data filtered by country and result type
- **Application Tracker** — Track application statuses with inline editing and deadline management
- **Profile Management** — Academic details, budget, preferred countries and programs
- **University Detail** — Full score breakdown, programs, admit statistics

### For Admins
- **University Management** — Full CRUD operations
- **Admit Review System** — Approve/reject user-uploaded admits
- **Statistics Dashboard** — Platform metrics and insights

## 🏗️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL + Row Level Security)
- **Authentication**: Supabase Auth (token-based)
- **Scoring**: Custom match score and ROI calculation engines

## 📁 Project Structure

```
study-abroad-platform/
├── app/                        # Next.js app directory
│   ├── api/                    # API routes
│   │   ├── auth/              # login, signup (Supabase Auth)
│   │   ├── universities/      # browse + detail
│   │   ├── applications/      # CRUD with status tracking
│   │   ├── admits/            # browse + submit
│   │   ├── user/              # profile GET/PUT
│   │   ├── roi/               # single + compare
│   │   └── admin/             # stats, universities CRUD, admits review
│   ├── dashboard/             # User dashboard
│   ├── universities/          # Browse + [id] detail
│   ├── roi-calculator/        # ROI calculator
│   ├── applications/          # Application tracker
│   ├── profile/               # Profile management
│   ├── admits/                # Browse + upload
│   ├── login/                 # Login page
│   ├── signup/                # Signup page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   └── globals.css            # Global styles + Tailwind
├── components/                 # Reusable components
│   ├── Navbar.tsx             # Auth-aware navigation
│   ├── Footer.tsx             # Site footer
│   ├── ScoreCircle.tsx        # Circular score visualization
│   └── LoadingSpinner.tsx     # Loading states
├── lib/                        # Utilities
│   ├── supabase.ts            # Lazy-initialized Supabase clients
│   ├── auth.ts                # Auth helper (getUser from token)
│   ├── scoring.ts             # Match score engine
│   └── roi.ts                 # ROI calculation engine
├── database/                   # Database files
│   ├── schema.sql             # Supabase schema + RLS policies
│   └── seed.sql               # Seed data (25 universities)
└── .env.local                  # Environment variables
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- A Supabase project (free at [supabase.com](https://supabase.com))

### 1. Install Dependencies

```bash
cd study-abroad-platform
npm install
```

### 2. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `database/schema.sql`
3. Optionally run `database/seed.sql` for 25 sample universities
4. Copy your project credentials from **Settings → API**

### 3. Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3001`

### 5. Create Admin Account

1. Sign up normally via the UI
2. Run this SQL in Supabase SQL Editor:
```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your@email.com';
```

## 📊 Database Schema

### Tables (with RLS)
- **profiles** — User profiles with academic data (auto-created on signup via trigger)
- **universities** — University data (tuition, ranking, requirements, salary data)
- **programs** — Degree programs per university
- **applications** — User application tracking with statuses
- **admits** — Verified admit/reject data uploads

See `database/schema.sql` for full schema with Row Level Security policies.

## 🔐 Security

- Supabase Auth with token-based authentication
- Row Level Security (RLS) on all tables
- Service role key used only server-side in API routes
- Lazy-initialized Supabase clients (no build-time env var leaks)
- Role-based access control (user/admin)

## 📈 Scoring Algorithm

**Overall Score = (Academic × 0.4) + (Budget × 0.3) + (ROI × 0.2) + (Visa × 0.1)**

- **Academic**: CGPA + IELTS vs requirements
- **Budget**: User budget vs total cost (tuition + living)
- **ROI**: Break-even years (lower is better)
- **Visa**: Country rejection risk (low/medium/high)

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/signup` — Create account (Supabase Auth)
- `POST /api/auth/login` — Login (returns access_token)

### Universities
- `GET /api/universities` — List with filtering + match scores
- `GET /api/universities/[id]` — Detail with programs, admits, scores

### Applications
- `GET /api/applications` — User's tracked applications
- `POST /api/applications` — Track a university
- `PUT /api/applications/[id]` — Update status/notes
- `DELETE /api/applications/[id]` — Remove

### Admits
- `GET /api/admits` — Browse verified admits (filter by country/type)
- `POST /api/admits` — Submit admit data for verification

### ROI
- `POST /api/roi` — Single ROI calculation or comparison (mode: compare)

### Profile
- `GET /api/user/profile` — Get user profile
- `PUT /api/user/profile` — Update profile

### Admin (requires admin role)
- `GET /api/admin/stats` — Platform statistics
- `POST /api/admin/universities` — Create university
- `PUT /api/admin/universities/[id]` — Update
- `DELETE /api/admin/universities/[id]` — Delete
- `GET /api/admin/admits/pending` — Pending verifications
- `POST /api/admin/admits/[id]/approve` — Approve
- `POST /api/admin/admits/[id]/reject` — Reject

## 🚢 Deployment

```bash
npm run build
npm start
```

Deploy to **Vercel**:
1. Connect GitHub repository
2. Set environment variables (Supabase URL, keys)
3. Deploy — Supabase handles the database

## 🎯 Future Enhancements

- [ ] Real-time chat support
- [ ] Email notifications
- [ ] Scholarship database
- [ ] University reviews
- [ ] AI-powered essay feedback
- [ ] Mobile app

---

**Built with transparency, powered by data, driven by your success.**

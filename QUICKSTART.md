# 🚀 Quick Start Guide

## Study Abroad Decision Intelligence Platform

### Prerequisites
- Node.js 18+ (Check: `node --version`)
- A Supabase account (free at [supabase.com](https://supabase.com))
- npm

---

## ⚡ 3-Minute Setup

### 1. Install Dependencies
```bash
cd study-abroad-platform
npm install
```

### 2. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Open **SQL Editor** and paste the contents of `database/schema.sql` → Run
3. Paste the contents of `database/seed.sql` → Run (adds 25 universities)
4. Go to **Settings → API** and copy your credentials

### 3. Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run!
```bash
npm run dev
```

Visit: **http://localhost:3001** 🎉

---

## 👤 Test Accounts

### Create User Account
1. Go to http://localhost:3001/signup
2. Fill in the form (add CGPA, IELTS, budget for match scores)
3. Login at http://localhost:3001/login

### Create Admin Account
1. Sign up normally
2. Run in Supabase SQL Editor:
```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your@email.com';
```

---

## 📚 What You Can Do

### As a User
- ✅ Browse 25 universities with search and filters
- ✅ Get personalized match scores (40% Academic + 30% Budget + 20% ROI + 10% Visa)
- ✅ View university details with score breakdown, programs, and admit stats
- ✅ Calculate ROI with loan simulation and 5-year projections
- ✅ Compare two universities side-by-side
- ✅ Track applications with status editing and deadlines
- ✅ Manage your profile (CGPA, IELTS, budget, preferences)
- ✅ Browse verified admits filtered by country and result type
- ✅ Upload your own admit data

### As an Admin
- ✅ Create/Edit/Delete universities
- ✅ Review and approve/reject user-submitted admits
- ✅ View platform statistics

---

## 📁 Key Files

| Area | Path |
|------|------|
| API Routes | `app/api/*` |
| Frontend Pages | `app/*/page.tsx` |
| Components | `components/*.tsx` |
| Supabase Client | `lib/supabase.ts` |
| Auth Helper | `lib/auth.ts` |
| Scoring Engine | `lib/scoring.ts` |
| ROI Engine | `lib/roi.ts` |
| DB Schema | `database/schema.sql` |
| Seed Data | `database/seed.sql` |

---

## 🔥 API Endpoints

### Public
- `POST /api/auth/signup` — Register
- `POST /api/auth/login` — Login (returns access_token)
- `GET /api/universities` — Browse (with match scores if authenticated)

### Authenticated (Bearer token)
- `GET /api/user/profile` — Get profile
- `PUT /api/user/profile` — Update profile
- `GET /api/applications` — Your tracked applications
- `POST /api/applications` — Track a university
- `PUT /api/applications/[id]` — Update status
- `DELETE /api/applications/[id]` — Remove
- `GET /api/admits` — Browse verified admits
- `POST /api/admits` — Submit admit data
- `POST /api/roi` — Calculate ROI (single or compare)

### Admin Only
- `GET /api/admin/stats` — Platform statistics
- `POST /api/admin/universities` — Create university
- `PUT/DELETE /api/admin/universities/[id]` — Update/Delete
- `GET /api/admin/admits/pending` — Pending reviews
- `POST /api/admin/admits/[id]/approve` — Approve
- `POST /api/admin/admits/[id]/reject` — Reject

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL + RLS)
- **Auth**: Supabase Auth (token-based)

---

## 🐛 Troubleshooting

**Supabase connection error?**
- Verify `NEXT_PUBLIC_SUPABASE_URL` and keys in `.env.local`
- Check your Supabase project is active (not paused)

**Auth not working?**
- Make sure you ran `database/schema.sql` (includes the profile creation trigger)
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set

**Port 3001 already in use?**
- Kill the process or change port: `npm run dev -- -p 3002`

---

**🎓 Built with transparency. Powered by Supabase. Ready to launch!**

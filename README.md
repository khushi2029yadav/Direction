# DISHA CLASSES

A modern educational institute website for Disha Classes, featuring academic programmes, branch information, student enquiries and an immersive brand experience.

---

## 1. Project Overview

**Disha Classes (दिशा क्लासेज)** is a premier coaching institute based in Mumbai, Maharashtra, with dedicated physical centres in **Wadala** (Head Centre) and **Matunga**. The institute provides comprehensive academic mentoring across secondary schooling (Classes 7–10), Higher Secondary Certificate junior college (Class 11 & 12 Science and Commerce), and national competitive entrance examinations (JEE Main/Advanced & NEET-UG).

This web platform delivers a digital presence built upon Disha Classes' official circular emblem, featuring an editorial color palette (Deep Maroon, Dark Burgundy, Warm Ivory, Blush Pink, and Dusty Rose), verified course curricula, direct WhatsApp admission channels, and resilient student enquiry handling.

---

## 2. Features

- **Official Brand Identity:** Grounded in Disha Classes' official circular emblem with cohesive typography (Playfair Display for editorial accents and Manrope for modern sans-serif headings).
- **Academic Stream Directory:** Detailed exploration across 7 core academic streams:
  - Class 10 Board Excellence (SSC / CBSE / ICSE)
  - Class 9 Conceptual Foundation
  - Classes 7 & 8 Middle School Mastery
  - Class 11 & 12 Science (HSC Board + MHT-CET)
  - Class 11 & 12 Commerce (HSC Board)
  - JEE Preparation (Main & Advanced)
  - NEET-UG Medical Entrance
- **Multi-Branch Campus Architecture:**
  - **Wadala Head Centre:** Complete physical address (*Shop No. 469, 7/40, Sir Pochkhan Wala Road, Panchashila Nagar, Wadala, Mumbai 400037*), telephone link (`+91 92246 57102`), and live Google Maps navigation.
  - **Matunga Centre:** Matunga Central with appointment-based academic counseling and direct batch enquiries.
- **Direct WhatsApp Admissions Beacon:**
  - Intelligent floating desk widget with auto-dismissible status badge on desktop.
  - Pre-filled custom query templates for course details, fee schedules, and campus visits.
- **Admission Enquiry Engine:**
  - Fast, client-side validated enquiry form with instant feedback.
  - Dual-mode data persistence: automatically syncs to cloud Supabase when configured, with seamless, zero-config local storage fallback for development and offline testing.
- **Administrative Control Desk:**
  - Protected admin portal (`/admin`) for reviewing student submissions, updating batch statuses, and managing course listings.
- **Full Regulatory & Legal Suite:** Dedicated pages for [Privacy Policy](/privacy) and [Terms & Conditions](/terms).

---

## 3. Technology Stack

- **Framework:** [Next.js 16.4.6](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Library:** [React 19.3.0](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animation & Micro-interactions:** Framer Motion & Canvas Confetti
- **Language:** TypeScript 5 (Strict Mode)
- **Database / Backend (Optional):** [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Deployment Target:** [Vercel](https://vercel.com/)

---

## 4. Project Structure

```text
disha_/
├── public/
│   ├── images/
│   │   ├── disha-logo.png        # Official Disha Classes circular emblem
│   │   └── disha-logo.jpeg       # High-resolution source asset
│   ├── disha-logo.png            # Root public mirror
│   └── favicon.ico               # Official brand favicon
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── about/page.tsx        # Institute philosophy, methodology & history
│   │   ├── admin/page.tsx        # Protected admissions dashboard
│   │   ├── branches/page.tsx     # Wadala & Matunga campus profiles
│   │   ├── contact/page.tsx      # Comprehensive contact desk & map links
│   │   ├── courses/              # Course catalog & dynamic [slug] detail pages
│   │   ├── gallery/page.tsx      # Campus, classroom & event gallery
│   │   ├── privacy/page.tsx      # Privacy policy
│   │   ├── results/page.tsx      # Merit board & student success stories
│   │   ├── terms/page.tsx        # Academic terms & conditions
│   │   ├── globals.css           # Brand palette variables & typography
│   │   ├── layout.tsx            # Global metadata, navbar & footer shell
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── hero/                 # Minimalist editorial hero section
│   │   ├── courses/              # Academic course cards & grid filters
│   │   ├── layout/               # 4-column footer & floating WhatsApp beacon
│   │   ├── navigation/           # Desktop & mobile responsive navbar
│   │   ├── sections/             # Results showcase, Final CTA & Enquiry form
│   │   └── ui/                   # Logo wrapper & UI elements
│   ├── data/                     # Centralized content stores (courses, branches, config)
│   ├── lib/                      # Supabase client & WhatsApp URL builders
│   └── types/                    # Shared TypeScript interfaces
├── .env.example                  # Environment variable reference template
├── .gitignore                    # Production git exclusions
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies & build scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Documentation
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 5. Installation Instructions

Ensure you have [Node.js](https://nodejs.org/) (version 18.18.0 or newer, Node 20 LTS recommended) installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khushi2029yadav/Direction.git
   cd Direction
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

## 6. Local Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

To run linting checks:
```bash
npm run lint
```

---

## 7. Environment Variables

Create a `.env.local` file in the project root by copying `.env.example`:

```bash
cp .env.example .env.local
```

### Supported Configuration Keys

| Variable | Description | Required | Default |
| :--- | :--- | :---: | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production domain URL | Optional | `https://dishaclasses.in` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project API URL | Optional | `""` (Falls back to local store) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Anon Public Key | Optional | `""` (Falls back to local store) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Official WhatsApp line (international format) | Optional | `919224657102` |
| `NEXT_PUBLIC_INSTITUTE_PHONE` | Primary voice contact phone number | Optional | `+919224657102` |

---

## 8. Supabase Setup (Optional)

Disha Classes is engineered with dual-mode storage: it runs without external database credentials out-of-the-box using browser persistence.

To connect a live cloud database for admission enquiries:
1. Create a project at [supabase.com](https://supabase.com).
2. Create an `enquiries` table in SQL Editor:
   ```sql
   create table enquiries (
     id uuid primary key default gen_random_uuid(),
     student_name text not null,
     parent_name text,
     phone text not null,
     current_standard text not null,
     interested_course text not null,
     preferred_branch text not null,
     message text,
     status text default 'new',
     created_at timestamptz default now()
   );
   ```
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` or in your Vercel project settings.

---

## 9. WhatsApp Integration

WhatsApp click-to-chat links are handled through `src/lib/whatsapp/whatsappUtils.ts`.
- **Target Number:** `+91 92246 57102` (Wadala Head Centre)
- Supports contextual deep links:
  - General enquiry: `"Hello Disha Classes, I would like to enquire about admission..."`
  - Course-specific: Pre-fills the exact course name and stream.
  - Branch-specific: Pre-fills Wadala or Matunga campus preference.

---

## 10. Production Build

To test the production build locally:

```bash
npm run build
```

This compiles TypeScript, generates static pages (SSG), and prepares production bundles.

To preview the production build locally:

```bash
npm run start
```

---

## 11. Vercel Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

### Option A: Via Vercel Web Dashboard (Recommended)
1. Sign in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** → **Project**.
3. Import the GitHub repository: `https://github.com/khushi2029yadav/Direction`.
4. Vercel automatically detects the **Next.js** framework preset.
5. In **Environment Variables**, add any production variables (e.g., `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
6. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 12. GitHub Repository

- **Repository:** [https://github.com/khushi2029yadav/Direction](https://github.com/khushi2029yadav/Direction)
- **Primary Branch:** `main`

---

## 13. Future Improvements

- [ ] Online student mock test portal with auto-evaluated scorecards.
- [ ] Direct fee payment gateway integration (UPI / NetBanking).
- [ ] Parent SMS / WhatsApp notification webhook for attendance and test results.
- [ ] Student LMS portal with downloadable study materials and lecture notes.

---

**© 2026 Disha Classes. All Rights Reserved.**  
*Wadala Head Centre: Shop No. 469, 7/40, Sir Pochkhan Wala Road, Panchashila Nagar, Wadala, Mumbai 400037.*

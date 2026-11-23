-- DISHA CLASSES Database Schema (Supabase / PostgreSQL)

-- 1. Create Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_name TEXT,
  phone TEXT NOT NULL,
  current_standard TEXT NOT NULL,
  interested_course TEXT NOT NULL,
  preferred_branch TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for querying recent enquiries
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);

-- 2. Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit enquiries (INSERT)
CREATE POLICY "Allow public anonymous insert"
ON public.enquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated admins to view and manage enquiries (SELECT, UPDATE, DELETE)
CREATE POLICY "Allow authenticated admin full access"
ON public.enquiries
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 3. Courses Table (Optional Dynamic Override)
CREATE TABLE IF NOT EXISTS public.courses (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  category_label TEXT NOT NULL,
  target_audience TEXT,
  duration TEXT,
  short_description TEXT,
  full_description TEXT,
  subjects_covered TEXT[],
  key_highlights TEXT[],
  badge TEXT,
  is_verified BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Testimonials Table (For verified reviews)
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author_name TEXT NOT NULL,
  role TEXT NOT NULL,
  course_or_class TEXT NOT NULL,
  branch TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  review_text TEXT NOT NULL,
  year TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

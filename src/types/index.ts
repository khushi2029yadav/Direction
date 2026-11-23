export type AcademicCategory = 
  | "all" 
  | "school" 
  | "junior-college-science" 
  | "junior-college-commerce" 
  | "degree" 
  | "competitive";

export interface Course {
  id: string;
  slug: string;
  name: string;
  category: AcademicCategory;
  categoryLabel: string;
  targetAudience: string;
  duration: string;
  shortDescription: string;
  fullDescription: string;
  subjectsCovered: string[];
  keyHighlights: string[];
  badge?: string;
  isVerified: boolean; // clearly configurable
}

export interface Branch {
  id: string;
  name: string;
  badge: string;
  address: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email?: string;
  timings?: string;
  mapEmbedUrl?: string;
  directionsUrl?: string;
  isVerifiedAddress: boolean;
  notes?: string;
}

export interface ResultHighlight {
  id: string;
  studentName: string;
  exam: string;
  scoreOrRank: string;
  percentile?: string;
  category: string;
  year: string;
  quote?: string;
  avatarUrl?: string;
  isVerified: boolean; // flag for verified vs placeholder
}

export interface Testimonial {
  id: string;
  authorName: string;
  role: "Student" | "Parent" | "Alumni";
  courseOrClass: string;
  branch: string;
  rating: number;
  reviewText: string;
  year?: string;
  isVerified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Classrooms" | "Faculty" | "Students" | "Events" | "Learning Activities" | "Celebrations";
  imageUrl: string;
  caption: string;
  tag: string;
}

export interface EnquirySubmission {
  id?: string;
  student_name: string;
  parent_name?: string;
  phone: string;
  current_standard: string;
  interested_course: string;
  preferred_branch: string;
  message?: string;
  created_at?: string;
  status?: "new" | "contacted" | "enrolled" | "archived";
}

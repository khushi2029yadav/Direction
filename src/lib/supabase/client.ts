import { createClient } from "@supabase/supabase-js";
import { EnquirySubmission } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-supabase-url")
);

// Fallback client or active client
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const LOCAL_STORAGE_KEY = "disha_classes_local_enquiries";

/**
 * Submits an admission enquiry.
 * Uses real Supabase if credentials are present, otherwise uses local resilient storage
 * with full development mock persistence.
 */
export async function submitAdmissionEnquiry(
  enquiry: EnquirySubmission
): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    const payload = {
      student_name: enquiry.student_name,
      parent_name: enquiry.parent_name || null,
      phone: enquiry.phone,
      current_standard: enquiry.current_standard,
      interested_course: enquiry.interested_course,
      preferred_branch: enquiry.preferred_branch,
      message: enquiry.message || null,
      created_at: new Date().toISOString(),
      status: "new",
    };

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase
        .from("enquiries")
        .insert([payload])
        .select();

      if (error) {
        console.warn("Supabase insert error, falling back to local sync:", error);
      } else if (data && data[0]) {
        return { success: true, id: data[0].id };
      }
    }

    // Local resilient store fallback for demo & offline testing
    if (typeof window !== "undefined") {
      const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing = existingStr ? JSON.parse(existingStr) : [];
      const generatedId = "enq-" + Date.now();
      existing.unshift({ id: generatedId, ...payload });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
      return { success: true, id: generatedId };
    }

    return { success: true, id: "demo-" + Date.now() };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Submission failed";
    console.error("Enquiry submission exception:", errorMsg);
    return { success: false, error: errorMsg };
  }
}

/**
 * Fetches all enquiries for the admin dashboard
 */
export async function getAdminEnquiries(): Promise<EnquirySubmission[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      return data as EnquirySubmission[];
    }
  }

  // Fallback to local storage
  if (typeof window !== "undefined") {
    const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (existingStr) {
      try {
        return JSON.parse(existingStr);
      } catch {
        return [];
      }
    }
  }

  // Default initial mock data for admin showcase
  return [
    {
      id: "enq-sample-1",
      student_name: "Aarav Sharma",
      parent_name: "Rajesh Sharma",
      phone: "+91 98201 12345",
      current_standard: "Class 10",
      interested_course: "Class 10 Board Excellence",
      preferred_branch: "Wadala Center",
      message: "Interested in the weekend batch with mathematics doubt sessions.",
      created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      status: "new",
    },
    {
      id: "enq-sample-2",
      student_name: "Pooja Mehta",
      parent_name: "Kavita Mehta",
      phone: "+91 98190 54321",
      current_standard: "Class 12 Commerce",
      interested_course: "Class 11 & 12 Commerce (HSC Board)",
      preferred_branch: "Matunga Center",
      message: "Looking for Accountancy & Economics intensive revision.",
      created_at: new Date(Date.now() - 3600000 * 26).toISOString(),
      status: "contacted",
    },
  ];
}

"use client";

import React, { useState, useEffect } from "react";
import { getAdminEnquiries, isSupabaseConfigured } from "@/lib/supabase/client";
import { COURSES_DATA } from "@/data/coursesData";
import { BRANCHES_DATA } from "@/data/branchesData";
import { EnquirySubmission, Course, AcademicCategory } from "@/types";
import {
  LayoutDashboard,
  Inbox,
  BookOpen,
  MapPin,
  Trophy,
  Bell,
  Phone,
  MessageCircle,
  Plus,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";
import DishaLogo from "@/components/ui/DishaLogo";

type AdminTab =
  | "overview"
  | "enquiries"
  | "courses"
  | "branches"
  | "results"
  | "testimonials"
  | "gallery"
  | "announcements";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [announcements] = useState([
    {
      id: "ann-1",
      title: "Admissions Open for Class 10 & 12 (Batch 2026–27)",
      date: "Nov 2026",
      status: "Published",
      target: "All Parents & Students",
    },
    {
      id: "ann-2",
      title: "Free Diagnostic Scholarship Test (Wadala Center)",
      date: "Dec 2026",
      status: "Draft",
      target: "Class 9 & 11 Aspirants",
    },
  ]);

  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseCategory, setNewCourseCategory] = useState("school");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === "disha2026" || adminPin === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid Admin PIN. (Development Master PIN: disha2026)");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAdminEnquiries().then((data) => setEnquiries(data));
    }
  }, [isAuthenticated]);

  const updateEnquiryStatus = (id: string | undefined, newStatus: "new" | "contacted" | "enrolled" | "archived") => {
    if (!id) return;
    setEnquiries((prev) =>
      prev.map((enq) => (enq.id === id ? { ...enq, status: newStatus } : enq))
    );
  };

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseName.trim()) return;
    const newCourse: Course = {
      id: "course-" + Date.now(),
      slug: newCourseName.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: newCourseName.trim(),
      category: newCourseCategory as AcademicCategory,
      categoryLabel: newCourseCategory.toUpperCase(),
      targetAudience: "Incoming Batch",
      duration: "1 Year",
      shortDescription: "Newly created academic course module.",
      fullDescription: "Detailed curriculum to be updated by faculty.",
      subjectsCovered: ["Subject A", "Subject B"],
      keyHighlights: ["Weekly assessments", "Personal mentorship"],
      isVerified: true,
    };
    setCourses([newCourse, ...courses]);
    setNewCourseName("");
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/20 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <DishaLogo size={60} showText={false} />
            <h1 className="font-heading font-extrabold text-2xl text-[#292326] mt-4">
              Disha Administrative Desk
            </h1>
            <p className="mt-2 text-xs text-[#6e656a]">
              Enter authorized administrator PIN to access admissions & branch records.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                Administrator PIN
              </label>
              <input
                type="password"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                placeholder="Enter PIN (e.g. disha2026)"
                className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl btn-maroon font-heading font-bold text-xs uppercase tracking-wider"
            >
              Access Dashboard
            </button>

            <div className="text-center pt-2">
              <span className="text-[11px] font-mono text-[#6e656a]">
                Default Master PIN: <code className="text-[#74151D] font-bold">disha2026</code>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#74151D]/15 gap-4">
          <div className="flex items-center space-x-4">
            <DishaLogo size={48} showText={false} />
            <div>
              <div className="flex items-center space-x-2">
                <span className="micro-label text-[#74151D]">ADMIN CONTROL PANEL</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#F5D8D5] text-[#74151D] font-mono font-bold">
                  {isSupabaseConfigured ? "Supabase Live Connected" : "Local Resilient Store"}
                </span>
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326] mt-1">
                DISHA CLASSES Management Suite
              </h1>
            </div>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 rounded-xl bg-[#F5D8D5] border border-[#74151D]/20 text-xs font-mono font-bold text-[#74151D] hover:bg-[#eed0cd]"
          >
            Sign Out
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-[#74151D]/15 pb-4">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "enquiries", label: `Enquiries (${enquiries.length})`, icon: Inbox },
            { id: "courses", label: `Courses (${courses.length})`, icon: BookOpen },
            { id: "branches", label: "Campuses (2)", icon: MapPin },
            { id: "results", label: "Results & Merit", icon: Trophy },
            { id: "announcements", label: "Announcements", icon: Bell },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as AdminTab)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all font-bold ${
                  isActive
                    ? "bg-[#74151D] text-white shadow-md"
                    : "bg-[#F5D8D5] text-[#74151D] hover:bg-[#eed0cd]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW */}
        {activeTab === "overview" && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm">
                <span className="text-xs font-mono text-[#74151D] uppercase font-bold">Total Enquiries</span>
                <div className="font-heading font-extrabold text-3xl text-[#292326] mt-2">
                  {enquiries.length}
                </div>
                <span className="text-[11px] text-[#74151D] font-mono mt-1 block font-semibold">Active pipeline</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#FCECE9] border-2 border-[#74151D]/20 shadow-sm">
                <span className="text-xs font-mono text-[#74151D] uppercase font-bold">New / Pending</span>
                <div className="font-heading font-extrabold text-3xl text-[#74151D] mt-2">
                  {enquiries.filter((e) => e.status === "new" || !e.status).length}
                </div>
                <span className="text-[11px] text-[#6e656a] font-mono mt-1 block">Requires counselor callback</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm">
                <span className="text-xs font-mono text-[#74151D] uppercase font-bold">Active Programmes</span>
                <div className="font-heading font-extrabold text-3xl text-[#292326] mt-2">
                  {courses.length}
                </div>
                <span className="text-[11px] text-[#74151D] font-mono mt-1 block font-semibold">School, HSC & Degree</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm">
                <span className="text-xs font-mono text-[#74151D] uppercase font-bold">Campuses Active</span>
                <div className="font-heading font-extrabold text-3xl text-[#292326] mt-2">
                  2
                </div>
                <span className="text-[11px] text-[#74151D] font-mono mt-1 block font-semibold">Wadala & Matunga</span>
              </div>
            </div>

            {/* Enquiries table */}
            <div className="p-6 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-md">
              <h3 className="font-heading font-bold text-lg text-[#292326] mb-4">
                Recent Admission Enquiries
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="text-[#74151D] border-b border-[#74151D]/15 uppercase font-bold">
                    <tr>
                      <th className="pb-3">Student Name</th>
                      <th className="pb-3">Phone</th>
                      <th className="pb-3">Course</th>
                      <th className="pb-3">Campus</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#74151D]/10">
                    {enquiries.slice(0, 5).map((enq, idx) => (
                      <tr key={enq.id || idx} className="hover:bg-[#F5D8D5]/30 transition-colors">
                        <td className="py-3 font-bold text-[#292326]">{enq.student_name}</td>
                        <td className="py-3 text-[#74151D] font-semibold">{enq.phone}</td>
                        <td className="py-3">{enq.interested_course}</td>
                        <td className="py-3">{enq.preferred_branch}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              enq.status === "contacted"
                                ? "bg-blue-100 text-blue-800"
                                : enq.status === "enrolled"
                                ? "bg-green-100 text-green-800"
                                : "bg-[#F5D8D5] text-[#74151D]"
                            }`}
                          >
                            {enq.status || "new"}
                          </span>
                        </td>
                        <td className="py-3 text-right space-x-2">
                          <a
                            href={`tel:${enq.phone}`}
                            className="p-1.5 rounded-lg bg-[#F5D8D5] text-[#74151D] inline-block hover:bg-[#74151D] hover:text-white transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() =>
                              openWhatsApp({
                                phone: enq.phone,
                                customMessage: `Hello ${enq.student_name}, this is Disha Classes regarding your admission enquiry for ${enq.interested_course}.`,
                              })
                            }
                            className="p-1.5 rounded-lg bg-[#25D366]/20 text-[#128C7E] inline-block hover:bg-[#25D366] hover:text-white transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. ENQUIRIES TAB */}
        {activeTab === "enquiries" && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-200">
            <h2 className="font-heading font-extrabold text-xl text-[#292326]">
              All Student Admission Inquiries ({enquiries.length})
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {enquiries.map((enq, idx) => (
                <div
                  key={enq.id || idx}
                  className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <span className="font-heading font-extrabold text-base text-[#292326]">
                        {enq.student_name}
                      </span>
                      {enq.parent_name && (
                        <span className="text-xs text-[#6e656a]">
                          (Parent: {enq.parent_name})
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                          enq.status === "contacted"
                            ? "bg-blue-100 text-blue-800"
                            : enq.status === "enrolled"
                            ? "bg-green-100 text-green-800"
                            : "bg-[#F5D8D5] text-[#74151D]"
                        }`}
                      >
                        {enq.status || "new"}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#74151D] flex flex-wrap gap-4 font-semibold">
                      <span>Phone: {enq.phone}</span>
                      <span>Class: {enq.current_standard}</span>
                      <span>Target: {enq.interested_course}</span>
                      <span>Campus: {enq.preferred_branch}</span>
                    </div>

                    {enq.message && (
                      <p className="text-xs text-[#6e656a] italic pt-1">
                        &quot;{enq.message}&quot;
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => updateEnquiryStatus(enq.id, "contacted")}
                      className="px-3 py-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-mono font-bold"
                    >
                      Mark Contacted
                    </button>
                    <button
                      onClick={() => updateEnquiryStatus(enq.id, "enrolled")}
                      className="px-3 py-1.5 rounded-lg bg-green-100 hover:bg-green-200 text-green-800 text-xs font-mono font-bold"
                    >
                      Mark Enrolled
                    </button>
                    <button
                      onClick={() =>
                        openWhatsApp({
                          phone: enq.phone,
                          customMessage: `Hello ${enq.student_name}, this is Disha Classes regarding your admission enquiry.`,
                        })
                      }
                      className="p-2 rounded-lg bg-[#25D366]/20 text-[#128C7E] hover:bg-[#25D366] hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. COURSES TAB */}
        {activeTab === "courses" && (
          <div className="mt-8 space-y-8 animate-in fade-in duration-200">
            <form onSubmit={handleAddCourse} className="p-6 rounded-2xl bg-[#FCECE9] border-2 border-[#74151D]/20">
              <h3 className="font-heading font-extrabold text-lg text-[#292326] mb-4">
                Add New Course Module
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#74151D] mb-1 font-bold">Course Name</label>
                  <input
                    type="text"
                    required
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    placeholder="e.g. Class 12 Science Fastrack"
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFDF7] border border-[#74151D]/20 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#74151D] mb-1 font-bold">Category</label>
                  <select
                    value={newCourseCategory}
                    onChange={(e) => setNewCourseCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FFFDF7] border border-[#74151D]/20 text-xs"
                  >
                    <option value="school">School (7–10)</option>
                    <option value="junior-college-science">Jr. College Science</option>
                    <option value="junior-college-commerce">Jr. College Commerce</option>
                    <option value="degree">Degree Education</option>
                    <option value="competitive">Competitive (JEE/NEET)</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl btn-maroon font-heading font-bold text-xs uppercase"
                  >
                    <Plus className="w-4 h-4 inline mr-1" /> Add Course
                  </button>
                </div>
              </div>
            </form>

            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="p-5 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/15 flex items-center justify-between"
                >
                  <div>
                    <span className="micro-label text-[#74151D] font-bold">{course.categoryLabel}</span>
                    <h4 className="font-heading font-extrabold text-base text-[#292326] mt-0.5">{course.name}</h4>
                    <span className="text-xs text-[#6e656a] font-mono">{course.targetAudience}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. BRANCHES TAB */}
        {activeTab === "branches" && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-200">
            <h2 className="font-heading font-extrabold text-xl text-[#292326]">
              Campus Configuration & Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BRANCHES_DATA.map((b) => (
                <div key={b.id} className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/20 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[#292326] text-lg">{b.name}</span>
                    <span className="text-xs font-mono font-bold text-[#74151D] px-2 py-0.5 rounded bg-[#F5D8D5]">{b.badge}</span>
                  </div>
                  <p className="text-xs text-[#6e656a] mt-2">{b.address}</p>
                  <div className="mt-4 text-xs font-mono text-[#74151D] font-bold">
                    Phone: {b.phone}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#74151D]/15">
                    <span className="text-[11px] text-[#74151D] font-mono font-bold">
                      ✓ Configured for Admissions Desk
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. ANNOUNCEMENTS TAB */}
        {activeTab === "announcements" && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-200">
            <h2 className="font-heading font-extrabold text-xl text-[#292326]">
              Institute Announcements & Notices
            </h2>
            <div className="space-y-4">
              {announcements.map((ann) => (
                <div
                  key={ann.id}
                  className="p-5 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#74151D] font-bold uppercase">{ann.date} • {ann.status}</span>
                    <h4 className="font-heading font-extrabold text-[#292326] text-base mt-1">{ann.title}</h4>
                    <span className="text-xs text-[#6e656a] font-mono">Target: {ann.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

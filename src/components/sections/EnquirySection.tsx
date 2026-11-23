"use client";

import React, { useState } from "react";
import { submitAdmissionEnquiry } from "@/lib/supabase/client";
import { COURSES_DATA } from "@/data/coursesData";
import { BRANCHES_DATA } from "@/data/branchesData";
import { Sparkles, Send, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface EnquirySectionProps {
  preselectedCourse?: string;
  preselectedBranch?: string;
}

export default function EnquirySection({
  preselectedCourse = "",
  preselectedBranch = "",
}: EnquirySectionProps) {
  const [studentName, setStudentName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentStandard, setCurrentStandard] = useState("Class 10");
  const [interestedCourse, setInterestedCourse] = useState(
    preselectedCourse || COURSES_DATA[0]?.name || "Class 10 Board Excellence"
  );
  const [preferredBranch, setPreferredBranch] = useState(
    preselectedBranch || BRANCHES_DATA[0]?.name || "Wadala Branch (Head Center)"
  );
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const standards = [
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11 Science",
    "Class 12 Science",
    "Class 11 Commerce",
    "Class 12 Commerce",
    "Degree (B.Com/BAF)",
    "JEE / NEET Aspirant",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!studentName.trim()) {
      setErrorMessage("Please enter the student's name.");
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    const result = await submitAdmissionEnquiry({
      student_name: studentName.trim(),
      parent_name: parentName.trim() || undefined,
      phone: phone.trim(),
      current_standard: currentStandard,
      interested_course: interestedCourse,
      preferred_branch: preferredBranch,
      message: message.trim() || undefined,
    });

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#74151D", "#DDA6A6", "#F5D8D5", "#C59B4B"],
        });
      } catch {
        // Safe fallback
      }
    } else {
      setErrorMessage(result.error || "Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <section id="enquiry" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FCECE9] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>ADMISSIONS 2026–27</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            YOUR NEXT CHAPTER{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              STARTS HERE.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            Tell us what you&apos;re looking for. Our academic team will get in touch to schedule a counseling session and diagnostic roadmap.
          </p>
        </div>

        {/* Premium Maroon & Blush Form Card */}
        <div className="relative rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/20 p-8 sm:p-12 shadow-2xl">
          {success ? (
            <div className="text-center py-12 flex flex-col items-center animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#74151D]/10 border-2 border-[#74151D] flex items-center justify-center text-[#74151D] mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326]">
                Enquiry Successfully Received!
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#6e656a] max-w-lg leading-relaxed">
                Thank you for reaching out to Disha Classes. Our senior academic counselor will call you at <strong className="text-[#74151D]">{phone}</strong> within 24 hours to discuss batch schedules and seat availability.
              </p>

              <button
                onClick={() => {
                  setSuccess(false);
                  setStudentName("");
                  setPhone("");
                  setMessage("");
                }}
                className="mt-8 px-6 py-2.5 rounded-xl btn-maroon text-xs font-mono uppercase tracking-wider"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                    Student Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm"
                  />
                </div>

                {/* Parent/Guardian Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#6e656a] mb-2 font-bold">
                    Parent / Guardian Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                    Mobile Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98201 12345"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm"
                  />
                </div>

                {/* Current Standard */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                    Current Standard / Class <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={currentStandard}
                    onChange={(e) => setCurrentStandard(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] focus:outline-none focus:border-[#74151D] text-sm font-medium"
                  >
                    {standards.map((std) => (
                      <option key={std} value={std}>
                        {std}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Interested Course */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                    Interested Programme <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={interestedCourse}
                    onChange={(e) => setInterestedCourse(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] focus:outline-none focus:border-[#74151D] text-sm font-medium"
                  >
                    {COURSES_DATA.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.name} ({course.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Branch */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#74151D] mb-2 font-bold">
                    Preferred Campus Location <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] focus:outline-none focus:border-[#74151D] text-sm font-medium"
                  >
                    {BRANCHES_DATA.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#6e656a] mb-2 font-bold">
                  Additional Queries or Specific Academic Goals
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about specific subjects, syllabus or test schedules you need guidance with..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-[#6e656a]">
                  <ShieldCheck className="w-4 h-4 text-[#74151D]" />
                  <span>No spam. Your contact info is strictly confidential.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl btn-maroon font-heading font-extrabold text-sm uppercase tracking-wider disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>SUBMIT ADMISSION ENQUIRY</span>
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

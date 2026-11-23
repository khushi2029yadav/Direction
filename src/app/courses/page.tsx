"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES_DATA } from "@/data/coursesData";
import { AcademicCategory } from "@/types";
import { Search, ArrowRight, CheckCircle2, MessageCircle, Layers } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

const CATEGORIES: { label: string; value: AcademicCategory }[] = [
  { label: "All Programmes", value: "all" },
  { label: "School Education (7–10)", value: "school" },
  { label: "Jr. College Science", value: "junior-college-science" },
  { label: "Jr. College Commerce", value: "junior-college-commerce" },
  { label: "Degree Education", value: "degree" },
  { label: "Competitive (JEE/NEET)", value: "competitive" },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<AcademicCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      activeCategory === "all" || course.category === activeCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subjectsCovered.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <Layers className="w-4 h-4" />
          <span>COURSE CATALOGUE 2026–27</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          FIND THE RIGHT{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            ACADEMIC PROGRAMME.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Comprehensive classroom batches across School Boards, Maharashtra HSC Junior College, Undergraduate Degrees, and National Competitive Entrance Exams.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-[#6e656a] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by subject, stream, or class (e.g. Physics, Accountancy, Class 10)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#FFFDF7] border-2 border-[#74151D]/20 text-[#292326] placeholder-[#6e656a]/50 focus:outline-none focus:border-[#74151D] text-sm shadow-md"
          />
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all font-bold ${
                activeCategory === cat.value
                  ? "bg-[#74151D] text-[#FFFDF7] shadow-md scale-105"
                  : "bg-[#F5D8D5] text-[#74151D] hover:bg-[#eed0cd] border border-[#74151D]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="group flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 hover:border-[#74151D]/45 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="micro-label text-[#74151D] px-2.5 py-1 rounded bg-[#F5D8D5] border border-[#74151D]/20 font-bold shrink-0">
                  {course.categoryLabel}
                </span>
                {course.badge && (
                  <span className="micro-label text-[#3C1015] px-2.5 py-1 rounded bg-[#DDA6A6]/40 border border-[#74151D]/20 font-extrabold shrink-0">
                    {course.badge}
                  </span>
                )}
              </div>

              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#292326] group-hover:text-[#74151D] transition-colors leading-snug">
                {course.name}
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[#5C5559] leading-relaxed flex-grow">
                {course.shortDescription}
              </p>

              <div className="mt-5 pt-4 border-t border-[#74151D]/10 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#74151D] block font-bold">
                  Core Subjects Covered
                </span>
                <div className="space-y-1.5">
                  {course.subjectsCovered.slice(0, 3).map((sub, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-[#292326]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#74151D] shrink-0" />
                      <span className="truncate font-medium">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#74151D]/10 flex items-center justify-between gap-3">
              <Link
                href={`/courses/${course.slug}`}
                className="text-xs uppercase font-mono tracking-wider text-[#74151D] hover:text-[#3C1015] flex items-center space-x-1 font-bold group/link shrink-0 py-2"
              >
                <span className="whitespace-nowrap">Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover/link:translate-x-1" />
              </Link>

              <button
                onClick={() => openWhatsApp({ courseName: course.name })}
                className="h-9 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors shrink-0 whitespace-nowrap shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Enquire</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

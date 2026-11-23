"use client";

import React, { useState } from "react";
import { COURSES_DATA } from "@/data/coursesData";
import { Course, AcademicCategory } from "@/types";
import CourseCard from "@/components/courses/CourseCard";
import CourseModal from "@/components/courses/CourseModal";
import { Layers } from "lucide-react";

const CATEGORIES: { label: string; value: AcademicCategory }[] = [
  { label: "All Programmes", value: "all" },
  { label: "School (7th–10th)", value: "school" },
  { label: "Jr. College Science", value: "junior-college-science" },
  { label: "Jr. College Commerce", value: "junior-college-commerce" },
  { label: "Degree (B.Com/BAF)", value: "degree" },
  { label: "JEE & NEET", value: "competitive" },
];

interface CoursesSectionProps {
  onSelectCourseForEnquiry?: (courseName: string) => void;
}

export default function CoursesSection({ onSelectCourseForEnquiry }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<AcademicCategory>("all");
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const filteredCourses =
    selectedCategory === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((course) => course.category === selectedCategory);

  const handleDirectEnquire = (course: Course) => {
    if (onSelectCourseForEnquiry) {
      onSelectCourseForEnquiry(course.name);
    }
    const enquiryElem = document.getElementById("enquiry");
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-t border-[#74151D]/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <Layers className="w-4 h-4" />
            <span>ACADEMIC PROGRAMMES 2026–27</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            FIND YOUR PATH.{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              WE&apos;LL HELP YOU MOVE FORWARD.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            From foundational middle school curriculum to Maharashtra HSC Board and national competitive entrance exams, explore our verified academic batches in Wadala and Matunga.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 font-bold ${
                selectedCategory === cat.value
                  ? "bg-[#74151D] text-[#FFFDF7] shadow-md scale-105"
                  : "bg-[#F5D8D5] text-[#74151D] hover:bg-[#eed0cd] border border-[#74151D]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpenDetails={(c) => setActiveModalCourse(c)}
              onDirectEnquire={handleDirectEnquire}
            />
          ))}
        </div>

        {/* Configurable Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#F5D8D5]/60 border border-[#74151D]/15 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#74151D] font-mono font-medium">
            * Batch schedules, personalized test series, and subject combinations are configured for the 2026–2027 academic session.
          </p>
        </div>
      </div>

      {/* Modal */}
      <CourseModal
        course={activeModalCourse}
        onClose={() => setActiveModalCourse(null)}
        onEnquire={handleDirectEnquire}
      />
    </section>
  );
}

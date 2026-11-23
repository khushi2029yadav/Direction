"use client";

import React, { useState } from "react";
import HeroContent from "@/components/hero/HeroContent";
import BrandIntro from "@/components/sections/BrandIntro";
import CoursesSection from "@/components/sections/CoursesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LearningJourney from "@/components/sections/LearningJourney";
import ResultsShowcase from "@/components/sections/ResultsShowcase";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import BranchesSection from "@/components/sections/BranchesSection";
import GallerySection from "@/components/sections/GallerySection";
import EnquirySection from "@/components/sections/EnquirySection";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

  return (
    <div className="relative w-full min-h-screen bg-[#FFFDF7] text-[#292326] overflow-hidden">
      {/* SECTION A: HERO (Refined Two-Column Editorial Composition) */}
      <HeroContent />

      {/* SECTION B: BRAND INTRODUCTION (Blush Accent Background) */}
      <BrandIntro />

      {/* SECTION C: ACADEMIC PROGRAMMES (Clean Ivory Background) */}
      <CoursesSection
        onSelectCourseForEnquiry={(courseName) => setSelectedCourse(courseName)}
      />

      {/* SECTION D: WHY CHOOSE DISHA? (Blush Pink Background) */}
      <WhyChooseUs />

      {/* SECTION E: THE LEARNING EXPERIENCE (Ivory Background) */}
      <LearningJourney />

      {/* SECTION F: RESULTS AND ACHIEVEMENTS (Blush Pink Background) */}
      <ResultsShowcase />

      {/* SECTION G: TESTIMONIALS (Ivory Background) */}
      <TestimonialsCarousel />

      {/* SECTION H: OUR BRANCHES (Blush Pink Background) */}
      <BranchesSection
        onSelectBranchForEnquiry={(branchName) => setSelectedBranch(branchName)}
      />

      {/* SECTION I: PHOTO GALLERY (Ivory Background) */}
      <GallerySection />

      {/* SECTION J: ADMISSION ENQUIRY (Blush Pink Background) */}
      <EnquirySection
        preselectedCourse={selectedCourse}
        preselectedBranch={selectedBranch}
      />

      {/* SECTION K: FINAL CTA (Deep Burgundy Background) */}
      <FinalCta />
    </div>
  );
}

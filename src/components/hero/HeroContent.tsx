"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function HeroContent() {
  return (
    <section className="relative w-full bg-[#FFFDF7] pt-28 sm:pt-36 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle, Calm Background Warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,rgba(245,216,213,0.30),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFF2DE]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Admission Announcement Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FCECE9] border border-[#74151D]/15 text-xs font-mono tracking-wider mb-6 sm:mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#74151D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#74151D]"></span>
          </span>
          <span className="font-bold uppercase tracking-widest text-[#74151D] text-[11px] whitespace-nowrap">
            ADMISSIONS OPEN 2026–27
          </span>
          <span className="text-[#DDA6A6]">•</span>
          <span className="text-[#3C1015] flex items-center gap-1 font-semibold text-[11px] whitespace-nowrap">
            <MapPin className="w-3 h-3 inline shrink-0 text-[#74151D]" /> Wadala & Matunga, Mumbai
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-heading tracking-tight leading-[1.08] text-[#292326] max-w-4xl mx-auto">
          {/* Line 1: Bold Modern Sans-Serif */}
          <span className="block font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#292326]">
            YOUR DREAMS.
          </span>

          {/* Line 2: Elegant Editorial Serif Italic */}
          <span className="block font-editorial italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#74151D] my-1 sm:my-2">
            YOUR DIRECTION.
          </span>

          {/* Line 3: Bold Modern Sans-Serif */}
          <span className="block font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#3C1015]">
            YOUR DISHA.
          </span>
        </h1>

        {/* Supporting Copy with Generous Spacing */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#5C5559] max-w-2xl mx-auto font-normal leading-relaxed">
          Building strong foundations, developing confident minds, and guiding students towards the future they deserve.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <Link
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase btn-maroon group shadow-md shrink-0 whitespace-nowrap"
          >
            <span>EXPLORE COURSES</span>
            <ArrowRight className="ml-2 w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase btn-blush font-heading shadow-sm shrink-0 whitespace-nowrap"
          >
            <Sparkles className="mr-2 w-4 h-4 shrink-0 text-[#74151D]" />
            <span>ENQUIRE NOW</span>
          </Link>
        </div>

        {/* Academic Category Cards: Consistent, Clean 4-Column Structure */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full max-w-4xl mx-auto pt-8 border-t border-[#74151D]/12">
          
          {/* Card 1: Class 7–12 */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 shadow-sm hover:shadow-md hover:border-[#74151D]/35 transition-all min-h-[92px] sm:min-h-[104px]">
            <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#74151D] tracking-wide uppercase leading-tight">
              CLASS 7–12
            </span>
            <span className="text-xs sm:text-sm text-[#5C5559] mt-1.5 font-medium leading-normal">
              School & College
            </span>
          </div>

          {/* Card 2: Science & Commerce */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 shadow-sm hover:shadow-md hover:border-[#74151D]/35 transition-all min-h-[92px] sm:min-h-[104px]">
            <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#3C1015] tracking-wide uppercase leading-tight">
              SCIENCE & COMMERCE
            </span>
            <span className="text-xs sm:text-sm text-[#5C5559] mt-1.5 font-medium leading-normal">
              HSC Board Streams
            </span>
          </div>

          {/* Card 3: JEE & NEET */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 shadow-sm hover:shadow-md hover:border-[#74151D]/35 transition-all min-h-[92px] sm:min-h-[104px]">
            <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#74151D] tracking-wide uppercase leading-tight">
              JEE & NEET
            </span>
            <span className="text-xs sm:text-sm text-[#5C5559] mt-1.5 font-medium leading-normal">
              Competitive Preparation
            </span>
          </div>

          {/* Card 4: 2 Centres */}
          <div className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 shadow-sm hover:shadow-md hover:border-[#74151D]/35 transition-all min-h-[92px] sm:min-h-[104px]">
            <span className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#3C1015] tracking-wide uppercase leading-tight">
              2 CENTRES
            </span>
            <span className="text-xs sm:text-sm text-[#5C5559] mt-1.5 font-medium leading-normal">
              Wadala & Matunga
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

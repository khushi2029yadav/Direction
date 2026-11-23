"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/testimonialsData";
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <MessageSquareQuote className="w-4 h-4" />
            <span>VOICES OF TRUST & MENTORSHIP</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#292326] tracking-tight">
            WHAT PARENTS & STUDENTS SAY
          </h2>
        </div>

        {/* Elegant Blush Testimonial Container with Charcoal Typography */}
        <div className="mt-12 relative p-8 sm:p-14 rounded-3xl bg-[#F5D8D5]/70 border-2 border-[#74151D]/15 shadow-xl">
          {/* Subtle Watermark Quote in Maroon */}
          <div className="absolute top-6 right-8 text-[#74151D]/10 font-editorial text-8xl select-none pointer-events-none">
            “
          </div>

          <div className="flex items-center space-x-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#74151D] fill-[#74151D]" />
            ))}
            <span className="ml-2 text-xs font-mono font-bold text-[#74151D]">
              5.0 Academic Rating
            </span>
          </div>

          <p className="text-lg sm:text-2xl text-[#292326] font-normal leading-relaxed italic font-serif">
            &quot;{current.reviewText}&quot;
          </p>

          <div className="mt-8 pt-6 border-t border-[#74151D]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-heading font-extrabold text-[#74151D] text-base sm:text-lg">
                {current.authorName}
              </div>
              <div className="text-xs font-mono text-[#6e656a] mt-0.5">
                {current.role} • {current.courseOrClass} ({current.branch})
              </div>
            </div>

            {/* Nav Arrows in Maroon */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="p-3 rounded-full bg-[#FFFDF7] border border-[#74151D]/25 text-[#74151D] hover:bg-[#74151D] hover:text-white transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="p-3 rounded-full bg-[#FFFDF7] border border-[#74151D]/25 text-[#74151D] hover:bg-[#74151D] hover:text-white transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#6e656a] font-mono">
          * Representative student feedback format. Official parent reviews are managed through our registered administrative desk.
        </div>
      </div>
    </section>
  );
}

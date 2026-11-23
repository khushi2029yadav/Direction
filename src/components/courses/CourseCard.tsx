"use client";

import React from "react";
import { Course } from "@/types";
import { ArrowUpRight, MessageCircle, Check } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

interface CourseCardProps {
  course: Course;
  onOpenDetails: (course: Course) => void;
  onDirectEnquire: (course: Course) => void;
}

export default function CourseCard({ course, onOpenDetails, onDirectEnquire }: CourseCardProps) {
  return (
    <div className="group relative flex flex-col justify-between h-full rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 hover:border-[#74151D]/40 p-6 sm:p-7 shadow-[0_6px_20px_rgba(116,21,29,0.05)] hover:shadow-[0_16px_36px_rgba(116,21,29,0.12)] transition-all duration-300">
      {/* Top subtle maroon accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#74151D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Category & Badge Header (flex-wrap with gap-2 so long titles never collide) */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#74151D] px-2.5 py-1 rounded-md bg-[#F5D8D5] border border-[#74151D]/15 font-bold shrink-0">
            {course.categoryLabel}
          </span>
          {course.badge && (
            <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#3C1015] px-2.5 py-1 rounded-md bg-[#DDA6A6]/30 border border-[#74151D]/20 font-extrabold shrink-0">
              {course.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#292326] group-hover:text-[#74151D] transition-colors leading-snug">
          {course.name}
        </h3>

        {/* Supporting Description */}
        <p className="mt-3 text-xs sm:text-sm text-[#5C5559] leading-relaxed flex-grow">
          {course.shortDescription}
        </p>

        {/* Core Subjects Covered */}
        <div className="mt-5 space-y-2 border-t border-[#74151D]/10 pt-4">
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#74151D] block font-bold">
            Core Subjects Covered
          </span>
          <div className="space-y-1.5">
            {course.subjectsCovered.slice(0, 3).map((sub, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-[#292326]">
                <Check className="w-3.5 h-3.5 text-[#74151D] shrink-0" />
                <span className="truncate font-medium">{sub}</span>
              </div>
            ))}
          </div>
          {course.subjectsCovered.length > 3 && (
            <span className="text-[11px] text-[#74151D] pl-5 font-mono block font-semibold">
              + {course.subjectsCovered.length - 3} more subjects
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer: Never collapses or overlaps */}
      <div className="mt-6 pt-5 border-t border-[#74151D]/10 flex items-center justify-between gap-3">
        {/* View Details Link */}
        <button
          onClick={() => onOpenDetails(course)}
          className="text-xs uppercase font-mono tracking-wider text-[#74151D] hover:text-[#3C1015] flex items-center space-x-1 font-bold transition-colors shrink-0 py-2"
        >
          <span className="whitespace-nowrap">View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {/* Action Buttons: WhatsApp + Enquire */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => openWhatsApp({ courseName: course.name })}
            title="Enquire on WhatsApp"
            className="h-9 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#128C7E] flex items-center justify-center shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
          </button>

          <button
            onClick={() => onDirectEnquire(course)}
            className="h-9 px-3.5 rounded-xl btn-maroon text-xs font-bold uppercase tracking-wider font-heading flex items-center justify-center shrink-0 whitespace-nowrap shadow-sm"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

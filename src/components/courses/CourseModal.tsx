"use client";

import React from "react";
import { Course } from "@/types";
import { X, CheckCircle2, MessageCircle, ArrowRight, BookOpen, Clock, Users } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnquire: (course: Course) => void;
}

export default function CourseModal({ course, onClose, onEnquire }: CourseModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/20 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F5D8D5] text-[#74151D] hover:bg-[#eed0cd] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="micro-label text-[#74151D] px-2.5 py-1 rounded bg-[#F5D8D5] border border-[#74151D]/20 font-bold">
            {course.categoryLabel}
          </span>
          {course.badge && (
            <span className="micro-label text-[#3C1015] px-2.5 py-1 rounded bg-[#DDA6A6]/40 border border-[#74151D]/20 font-extrabold">
              {course.badge}
            </span>
          )}
        </div>

        {/* Course Title */}
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326]">
          {course.name}
        </h3>

        {/* Meta details */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#6e656a] border-b border-[#74151D]/10 pb-4">
          <div className="flex items-center space-x-1.5">
            <Users className="w-4 h-4 text-[#74151D]" />
            <span>Target: {course.targetAudience}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-[#74151D]" />
            <span>Duration: {course.duration}</span>
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-5">
          <h4 className="text-xs uppercase font-mono tracking-wider text-[#74151D] mb-2 font-bold">
            Program Overview
          </h4>
          <p className="text-sm sm:text-base text-[#292326]/90 leading-relaxed font-normal">
            {course.fullDescription}
          </p>
        </div>

        {/* Subjects Covered */}
        <div className="mt-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-[#74151D] mb-3 font-bold flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#74151D]" />
            <span>Curriculum & Subjects Covered</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {course.subjectsCovered.map((subject, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2 text-xs sm:text-sm text-[#292326] p-2.5 rounded-lg bg-[#F5D8D5]/50 border border-[#74151D]/10"
              >
                <CheckCircle2 className="w-4 h-4 text-[#74151D] shrink-0 mt-0.5" />
                <span>{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-[#74151D] mb-3 font-bold">
            Pedagogical Features
          </h4>
          <ul className="space-y-2">
            {course.keyHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#6e656a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#74151D] mt-1.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-[#74151D]/15 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={() => {
              openWhatsApp({ courseName: course.name });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/25 transition-colors shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
            <span>WhatsApp Enquiry</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(course);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold btn-maroon font-heading shrink-0 whitespace-nowrap shadow-sm"
          >
            <span>Direct Admissions Enquiry</span>
            <ArrowRight className="w-4 h-4 ml-1.5 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}

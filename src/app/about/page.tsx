"use client";

import React from "react";
import Link from "next/link";
import { INSTITUTE_CONFIG } from "@/data/instituteConfig";
import { Compass, BookOpen, UserCheck, TrendingUp } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";
import DishaLogo from "@/components/ui/DishaLogo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <Compass className="w-4 h-4" />
          <span>ABOUT DISHA CLASSES</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          GUIDING STUDENTS TOWARDS{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            ACADEMIC CLARITY.
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Established in Mumbai with a single mission: to replace rote memorization with fundamental conceptual mastery and dedicated personal attention.
        </p>
      </div>

      {/* Core Philosophy Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FCECE9] border-2 border-[#74151D]/15 shadow-md relative overflow-hidden">
          <div className="flex items-center space-x-4 mb-4">
            <DishaLogo size={48} showText={false} />
            <div>
              <span className="micro-label text-[#74151D] block">Our Foundation</span>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#292326]">
                {INSTITUTE_CONFIG.philosophyHeadline}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-sm sm:text-base text-[#6e656a] leading-relaxed">
            {INSTITUTE_CONFIG.philosophySubtext}
          </p>
          <div className="mt-8 pt-6 border-t border-[#74151D]/15 flex items-center justify-between text-xs font-mono text-[#74151D]">
            <span className="font-bold">Dual Campuses: Wadala & Matunga</span>
            <span className="text-[#6e656a]">Mumbai, Maharashtra</span>
          </div>
        </div>

        {/* Principles Column */}
        <div className="space-y-4">
          {INSTITUTE_CONFIG.principles.map((p) => (
            <div
              key={p.number}
              className="p-6 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 hover:border-[#74151D]/35 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-mono text-xl font-extrabold text-[#74151D]">{p.number}</span>
                <h3 className="font-heading font-bold text-lg text-[#292326]">{p.title}</h3>
              </div>
              <p className="text-sm text-[#6e656a] leading-relaxed pl-8">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Methodology Section */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="micro-label text-[#74151D]">Pedagogy</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#292326] mt-1">
            The Disha Mentorship Framework
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#FCECE9] border border-[#74151D]/15">
            <div className="w-10 h-10 rounded-xl bg-[#FFFDF7] text-[#74151D] flex items-center justify-center mb-5 border border-[#74151D]/15">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#292326]">Interactive Theory Lectures</h3>
            <p className="mt-3 text-sm text-[#6e656a] leading-relaxed">
              Every chapter begins with intuitive mental models. We demonstrate the practical relevance of mathematical and scientific equations before numerical problem solving.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FCECE9] border border-[#74151D]/15">
            <div className="w-10 h-10 rounded-xl bg-[#FFFDF7] text-[#74151D] flex items-center justify-center mb-5 border border-[#74151D]/15">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#292326]">Daily Doubt Resolution</h3>
            <p className="mt-3 text-sm text-[#6e656a] leading-relaxed">
              Students have direct access to faculty members immediately after lecture hours. Doubts are addressed individually to avoid lingering conceptual gaps.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#FCECE9] border border-[#74151D]/15">
            <div className="w-10 h-10 rounded-xl bg-[#FFFDF7] text-[#74151D] flex items-center justify-center mb-5 border border-[#74151D]/15">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#292326]">Continuous Diagnostics</h3>
            <p className="mt-3 text-sm text-[#6e656a] leading-relaxed">
              Weekly chapter tests, timed speed drills, and official board simulation prelims evaluate answer presentation, formatting, and speed.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-24 text-center p-10 rounded-3xl bg-[#3C1015] text-[#FFFDF7] border-2 border-[#74151D]/30 shadow-xl">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
          Experience the Difference in Person
        </h3>
        <p className="mt-3 text-sm text-[#F5D8D5] max-w-lg mx-auto">
          Visit our Wadala head center or contact our central helpline to book a student diagnostic consultation.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl bg-[#FFFDF7] text-[#74151D] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#F5D8D5] transition-all"
          >
            Explore Courses
          </Link>
          <button
            onClick={() => openWhatsApp({ customMessage: "Hello Disha Classes, I would like to schedule a visit to your Wadala center." })}
            className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all"
          >
            Connect on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {
  CalendarRange,
  UserCheck,
  GraduationCap,
  ClipboardCheck,
  HelpCircle,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: <CalendarRange className="w-6 h-6 text-[#74151D]" />,
    title: "Structured Learning",
    description:
      "A systematic roadmap mapping every chapter, formula derivation, and revision cycle well before board and competitive examination windows.",
    highlight: "Syllabus Milestones",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-[#74151D]" />,
    title: "Personal Attention",
    description:
      "Maintained low student-to-mentor ratios ensuring every student’s strengths and stumbling blocks are understood and actively addressed.",
    highlight: "Individual Care",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#74151D]" />,
    title: "Experienced Faculty",
    description:
      "Subject specialists dedicated to simplifying complex physics derivations, balancing accounts ledgers, and teaching scoring techniques.",
    highlight: "First-Principle Clarity",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-[#74151D]" />,
    title: "Regular Assessments",
    description:
      "Periodic chapter-end diagnostic papers and full-length prelim simulations replicating exact board conditions and marking schemes.",
    highlight: "Board-Pattern Prelims",
  },
  {
    icon: <HelpCircle className="w-6 h-6 text-[#74151D]" />,
    title: "Doubt-Solving Support",
    description:
      "Dedicated one-on-one doubt clarification hours. No student leaves the center with unresolved questions or conceptual confusion.",
    highlight: "Open Question Desk",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#74151D]" />,
    title: "Student Development",
    description:
      "Beyond rote exams: study habit workshops, stress mitigation techniques, and career orientation that build resilient, ambitious young minds.",
    highlight: "Holistic Mindset",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FCECE9] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>THE DISHA ADVANTAGE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            THE RIGHT GUIDANCE{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              CHANGES EVERYTHING.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            Coaching is more than completing a syllabus—it is about building deep academic self-belief, disciplined study habits, and personal exam resilience.
          </p>
        </div>

        {/* 6 Feature Blocks Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-7 sm:p-8 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/12 hover:border-[#74151D]/35 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-[#F5D8D5] border border-[#74151D]/15 group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#74151D] px-2.5 py-1 rounded bg-[#F5D8D5] font-bold">
                  {feature.highlight}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#292326] group-hover:text-[#74151D] transition-colors">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-[#6e656a] leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-5 w-8 h-0.5 bg-[#DDA6A6] group-hover:w-full group-hover:bg-[#74151D] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

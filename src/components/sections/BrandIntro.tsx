"use client";

import React from "react";
import { INSTITUTE_CONFIG } from "@/data/instituteConfig";
import { BookOpen, UserCheck, TrendingUp, Sparkles } from "lucide-react";
import DishaLogo from "@/components/ui/DishaLogo";

export default function BrandIntro() {
  const iconMap = [
    <BookOpen key="01" className="w-5 h-5 text-[#74151D]" />,
    <UserCheck key="02" className="w-5 h-5 text-[#74151D]" />,
    <TrendingUp key="03" className="w-5 h-5 text-[#74151D]" />,
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FCECE9] border-t border-[#74151D]/10 overflow-hidden">
      {/* Background subtle radial warm lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5D8D5]/60 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center space-x-2 micro-label text-[#74151D] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>OUR ACADEMIC PHILOSOPHY</span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-[1.15]">
                EDUCATION IS NOT JUST ABOUT MARKS.{" "}
                <span className="font-editorial italic font-normal text-[#74151D]">
                  IT&apos;S ABOUT DIRECTION.
                </span>
              </h2>

              <p className="mt-6 text-[#6e656a] text-base sm:text-lg leading-relaxed font-normal">
                {INSTITUTE_CONFIG.philosophySubtext}
              </p>
            </div>

            {/* Custom Visual Editorial Card */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 shadow-md relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-4">
                <DishaLogo size={42} showText={false} />
                <div>
                  <h3 className="font-heading font-bold text-[#74151D] text-base">
                    The Disha Mentorship Standard
                  </h3>
                  <span className="text-xs text-[#6e656a] font-mono">Academic Direction & Excellence</span>
                </div>
              </div>
              <p className="text-sm text-[#292326] leading-relaxed">
                We believe that clarity precedes mastery. When students understand the fundamental &apos;why&apos; behind a theorem or financial entry, exam fear dissolves into analytical curiosity and high academic performance.
              </p>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-[#74151D]/10 text-xs font-mono text-[#74151D]">
                <span className="font-semibold">Wadala & Matunga Centers</span>
                <span className="text-[#6e656a]">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Principles */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            {INSTITUTE_CONFIG.principles.map((principle, index) => (
              <div
                key={principle.number}
                className="group p-6 sm:p-7 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/12 hover:border-[#74151D]/35 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#74151D]/25 group-hover:text-[#74151D] transition-colors duration-300">
                    {principle.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#F5D8D5] border border-[#74151D]/15">
                    {iconMap[index]}
                  </div>
                </div>

                <h3 className="mt-4 font-heading font-bold text-xl sm:text-2xl text-[#292326] group-hover:text-[#74151D] transition-colors">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#6e656a] leading-relaxed">
                  {principle.description}
                </p>

                {/* Bottom line accent */}
                <div className="mt-5 h-0.5 w-12 bg-[#DDA6A6] group-hover:w-full group-hover:bg-[#74151D] transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

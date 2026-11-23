"use client";

import React from "react";
import { RESULTS_DATA } from "@/data/resultsData";
import { Award, ShieldCheck, Trophy } from "lucide-react";

export default function ResultsShowcase() {
  return (
    <section id="results" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FCECE9] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <Award className="w-4 h-4" />
            <span>HONORS & MERIT ARCHIVE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            EVERY ACHIEVEMENT{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              HAS A STORY.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            Our students consistently transform their potential into top percentiles across School Boards, HSC Science & Commerce, and Entrance Examinations.
          </p>
        </div>

        {/* Academic Authenticity Notice */}
        <div className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-[#FFFDF7] border border-[#74151D]/20 shadow-sm flex items-center space-x-3 text-xs text-[#292326]">
          <ShieldCheck className="w-5 h-5 text-[#74151D] shrink-0" />
          <span>
            <strong>Authenticity Commitment:</strong> Scorecards shown below represent format benchmarks. Official annual roll-lists are authenticated and verified directly with school & board records at our Wadala center.
          </span>
        </div>

        {/* Results Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_DATA.map((result) => (
            <div
              key={result.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[#FFFDF7] border border-[#74151D]/15 hover:border-[#74151D]/45 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#74151D] px-2.5 py-0.5 rounded bg-[#F5D8D5] font-bold">
                    {result.category}
                  </span>
                  <Trophy className="w-4 h-4 text-[#74151D]" />
                </div>

                {/* Score */}
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#74151D] transition-colors">
                  {result.scoreOrRank}
                </div>

                <div className="text-xs font-mono text-[#3C1015] font-semibold mt-1">
                  {result.exam}
                </div>

                {/* Quote */}
                <p className="mt-4 text-xs text-[#6e656a] italic leading-relaxed">
                  &quot;{result.quote}&quot;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#74151D]/10 flex items-center justify-between text-xs">
                <span className="font-bold text-[#292326]">{result.studentName}</span>
                <span className="font-mono text-[11px] text-[#74151D] font-semibold">
                  {result.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

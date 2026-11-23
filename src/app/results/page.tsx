"use client";

import React from "react";
import { RESULTS_DATA } from "@/data/resultsData";
import { Award, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <Award className="w-4 h-4" />
          <span>ACADEMIC HONORS & MERIT</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          EVERY ACHIEVEMENT{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            HAS A STORY.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Celebrating dedication, analytical perseverance, and exemplary scores produced by Disha Classes students across Mumbai boards.
        </p>

        {/* Authenticity Policy Card */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-[#FCECE9] border-2 border-[#74151D]/20 flex items-start space-x-3 text-left text-xs text-[#292326]">
          <ShieldCheck className="w-5 h-5 text-[#74151D] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#74151D] block mb-0.5">Academic Authenticity Notice:</span>
            <span>
              Disha Classes believes in genuine, verifiable educational standards. Official student roll lists, marksheets, and parent authorizations are maintained at our Wadala administrative center. Score entries displayed below demonstrate reporting formats for incoming batches.
            </span>
          </div>
        </div>
      </div>

      {/* Results Showcase Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESULTS_DATA.map((res) => (
          <div
            key={res.id}
            className="group p-7 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 hover:border-[#74151D]/40 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="micro-label text-[#74151D] px-2.5 py-1 rounded bg-[#F5D8D5] font-bold">
                  {res.category}
                </span>
                <Trophy className="w-4 h-4 text-[#74151D]" />
              </div>

              <div className="font-heading font-extrabold text-4xl text-[#74151D] transition-colors">
                {res.scoreOrRank}
              </div>

              <div className="text-xs font-mono text-[#3C1015] font-semibold mt-1">
                {res.exam}
              </div>

              <p className="mt-4 text-xs text-[#6e656a] italic leading-relaxed">
                &quot;{res.quote}&quot;
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#74151D]/10 flex items-center justify-between text-xs font-mono text-[#292326]">
              <span className="font-bold">{res.studentName}</span>
              <span className="text-[#74151D] font-semibold">{res.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mt-20 text-center p-10 rounded-3xl bg-[#FCECE9] border-2 border-[#74151D]/20 shadow-lg">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326]">
          Ready to Write Your Own Success Story?
        </h3>
        <p className="mt-3 text-sm text-[#6e656a] max-w-lg mx-auto">
          Join our structured batch programs for Class 7–12, HSC Science & Commerce, or JEE/NEET entrance preparation.
        </p>
        <Link
          href="/#enquiry"
          className="mt-6 inline-flex items-center justify-center px-8 py-3.5 rounded-xl btn-maroon font-heading font-bold text-xs uppercase tracking-wider"
        >
          Enquire for Upcoming Batches
        </Link>
      </div>
    </div>
  );
}

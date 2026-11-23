"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

export default function FinalCta() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#3C1015] border-t border-[#74151D]/40 overflow-hidden text-[#FFFDF7]">
      {/* Subtle, Sophisticated Ambient Glow (No excessive particles) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(116,21,29,0.40),transparent_75%)] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#74151D]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Eyebrow Label with High Contrast */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#74151D]/50 border border-[#F5D8D5]/30 text-xs font-mono tracking-widest text-[#F5D8D5] uppercase mb-5 sm:mb-6 shadow-sm">
          <Compass className="w-3.5 h-3.5 text-[#F5D8D5] shrink-0" />
          <span>YOUR ACADEMIC CROSSROAD</span>
        </div>

        {/* High-Contrast Editorial Headline */}
        <h2 className="font-heading tracking-tight leading-[1.12] max-w-3xl">
          {/* Line 1: Warm Ivory (#FFFDF7) Modern Bold Sans-Serif */}
          <span className="block font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#FFFDF7]">
            THE FUTURE IS WAITING.
          </span>

          {/* Line 2: Blush Pink (#F5D8D5) Elegant Editorial Serif Italic */}
          <span className="block font-editorial italic font-normal text-3xl sm:text-5xl md:text-6xl text-[#F5D8D5] mt-1.5 sm:mt-2.5">
            TAKE THE FIRST STEP.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg text-[#E8C9C9] max-w-xl mx-auto font-normal leading-relaxed">
          Whether you are preparing for board distinction or cracking competitive entrance exams, Disha Classes gives you the direction to excel.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Ivory background with Deep Maroon text */}
          <Link
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-8 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#FFFDF7] text-[#74151D] hover:bg-[#F5D8D5] font-heading shadow-xl transition-all duration-300 group shrink-0 whitespace-nowrap"
          >
            <span>EXPLORE COURSES</span>
            <ArrowRight className="ml-2 w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA: Transparent burgundy background with ivory border and ivory text */}
          <button
            onClick={() =>
              openWhatsApp({
                customMessage:
                  "Hello Disha Classes, I would like to schedule a personal counseling session at your center.",
              })
            }
            className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-8 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase bg-transparent border-2 border-[#FFFDF7]/60 hover:border-[#FFFDF7] text-[#FFFDF7] hover:bg-[#FFFDF7]/10 transition-all duration-300 font-heading shrink-0 whitespace-nowrap shadow-md"
          >
            <MessageCircle className="mr-2 w-4 h-4 text-[#25D366] shrink-0" />
            <span>CHAT ON WHATSAPP</span>
          </button>
        </div>

      </div>
    </section>
  );
}

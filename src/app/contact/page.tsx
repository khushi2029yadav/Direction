"use client";

import React from "react";
import { Phone, MapPin, MessageCircle, Navigation } from "lucide-react";
import EnquirySection from "@/components/sections/EnquirySection";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";
import { BRANCHES_DATA } from "@/data/branchesData";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <Phone className="w-4 h-4" />
          <span>CONTACT & ADMISSIONS</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          CONNECT WITH{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            DISHA CLASSES.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Speak with our academic counselors, visit our Wadala head center, or send an admission inquiry online.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Phone */}
        <div className="p-8 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-md flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#F5D8D5] text-[#74151D] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#292326]">Central Helpline</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e656a]">
              Call directly for batch schedules, fee structure, and seat availability.
            </p>
            <div className="mt-4 font-mono font-extrabold text-lg text-[#74151D]">
              +91 92246 57102
            </div>
          </div>
          <a
            href="tel:+919224657102"
            className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#F5D8D5] hover:bg-[#eed0cd] text-[#74151D] text-xs font-bold uppercase tracking-wider font-heading transition-all"
          >
            Call Now
          </a>
        </div>

        {/* Card 2: WhatsApp */}
        <div className="p-8 rounded-3xl bg-[#FFFDF7] border-2 border-[#25D366]/30 shadow-md flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#292326]">WhatsApp Desk</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#6e656a]">
              Instant guidance on course details and syllabus brochures via WhatsApp.
            </p>
            <div className="mt-4 font-mono font-extrabold text-lg text-[#128C7E]">
              +91 92246 57102
            </div>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider font-heading hover:bg-[#20ba5a] transition-all"
          >
            Chat on WhatsApp
          </button>
        </div>

        {/* Card 3: Wadala Center */}
        <div className="p-8 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-md flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#F5D8D5] text-[#74151D] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-[#292326]">Wadala Head Center</h3>
            <p className="mt-2 text-xs text-[#292326] leading-relaxed font-medium">
              Shop Number 469, 7/40, Sir Pochkhan Wala Road, Panchashila Nagar, Wadala, Mumbai 400037
            </p>
            <div className="mt-3 text-xs font-mono text-[#74151D] font-bold">
              Open: Mon–Sat 9:00 AM – 8:30 PM
            </div>
          </div>
          <a
            href={BRANCHES_DATA[0].directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-xl btn-maroon text-xs font-bold uppercase tracking-wider font-heading transition-all"
          >
            <Navigation className="w-3.5 h-3.5 mr-1.5" />
            <span>Open in Maps</span>
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-16">
        <EnquirySection />
      </div>
    </div>
  );
}

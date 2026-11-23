"use client";

import React from "react";
import { BRANCHES_DATA } from "@/data/branchesData";
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";
import Link from "next/link";

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <MapPin className="w-4 h-4" />
          <span>MUMBAI CAMPUSES</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          OUR LOCATIONS IN{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            WADALA & MATUNGA.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Strategically located to provide easily accessible, modern academic coaching for students throughout Central Mumbai.
        </p>
      </div>

      {/* Branches Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {BRANCHES_DATA.map((branch) => (
          <div
            key={branch.id}
            className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/15 hover:border-[#74151D]/45 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="micro-label text-[#74151D] px-3 py-1 rounded bg-[#F5D8D5] border border-[#74151D]/20 font-bold">
                  {branch.badge}
                </span>
                {branch.isVerifiedAddress ? (
                  <span className="flex items-center text-xs text-[#74151D] font-mono font-bold">
                    <ShieldCheck className="w-4 h-4 mr-1 text-[#74151D]" />
                    Verified Campus
                  </span>
                ) : (
                  <span className="flex items-center text-xs text-[#6e656a] font-mono">
                    <HelpCircle className="w-4 h-4 mr-1 text-[#74151D]" />
                    Admissions Desk
                  </span>
                )}
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326]">
                {branch.name}
              </h2>

              <div className="mt-5 flex items-start space-x-3 text-sm text-[#292326]">
                <MapPin className="w-5 h-5 text-[#74151D] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{branch.address}</p>
              </div>

              {branch.timings && (
                <div className="mt-4 flex items-start space-x-3 text-xs sm:text-sm text-[#74151D] font-mono font-semibold">
                  <Clock className="w-4 h-4 text-[#74151D] shrink-0 mt-0.5" />
                  <span>{branch.timings}</span>
                </div>
              )}

              {branch.notes && (
                <p className="mt-5 text-xs text-[#6e656a] italic border-l-2 border-[#74151D]/30 pl-3 leading-relaxed">
                  {branch.notes}
                </p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-[#74151D]/15 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${branch.phone}`}
                className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#F5D8D5] hover:bg-[#eed0cd] text-[#74151D] border border-[#74151D]/20 text-xs font-bold uppercase tracking-wider font-heading transition-all"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                <span>Call {branch.displayPhone}</span>
              </a>

              <button
                onClick={() => openWhatsApp({ branchName: branch.name, phone: branch.whatsappNumber })}
                className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/30 text-xs font-bold uppercase tracking-wider font-heading transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                <span>WhatsApp</span>
              </button>

              {branch.directionsUrl && (
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#FFFDF7] hover:bg-[#F5D8D5] text-[#292326] border border-[#74151D]/20 text-xs font-bold uppercase tracking-wider font-heading transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5 text-[#74151D]" />
                  <span>Get Directions</span>
                </a>
              )}

              <Link
                href="/#enquiry"
                className="inline-flex items-center px-4 py-2.5 rounded-xl btn-maroon text-xs font-bold uppercase tracking-wider font-heading transition-all ml-auto"
              >
                <span>Enquire Here</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { BRANCHES_DATA } from "@/data/branchesData";
import { Branch } from "@/types";
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

interface BranchesSectionProps {
  onSelectBranchForEnquiry?: (branchName: string) => void;
}

export default function BranchesSection({ onSelectBranchForEnquiry }: BranchesSectionProps) {
  const handleBranchEnquire = (branch: Branch) => {
    if (onSelectBranchForEnquiry) {
      onSelectBranchForEnquiry(branch.name);
    }
    const elem = document.getElementById("enquiry");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="branches" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FCECE9] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <MapPin className="w-4 h-4" />
            <span>MUMBAI CAMPUSES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            TWO LOCATIONS.{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              ONE DIRECTION: YOUR SUCCESS.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            Conveniently situated in Central Mumbai to serve students across Wadala, Matunga, Dadar, and adjoining neighborhoods.
          </p>
        </div>

        {/* Clean Ivory Cards with Maroon Buttons */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#FFFDF7] border-2 border-[#74151D]/15 hover:border-[#74151D]/45 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl"
            >
              <div>
                {/* Branch Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="micro-label text-[#74151D] px-3 py-1 rounded-md bg-[#F5D8D5] border border-[#74151D]/20 font-bold">
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

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#292326]">
                  {branch.name}
                </h3>

                {/* Address block */}
                <div className="mt-5 flex items-start space-x-3 text-sm text-[#292326]">
                  <MapPin className="w-5 h-5 text-[#74151D] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{branch.address}</p>
                </div>

                {/* Timings */}
                {branch.timings && (
                  <div className="mt-4 flex items-start space-x-3 text-xs sm:text-sm text-[#74151D] font-mono font-semibold">
                    <Clock className="w-4 h-4 text-[#74151D] shrink-0 mt-0.5" />
                    <span>{branch.timings}</span>
                  </div>
                )}

                {/* Notes */}
                {branch.notes && (
                  <p className="mt-4 text-xs text-[#6e656a] italic border-l-2 border-[#74151D]/30 pl-3 leading-relaxed">
                    {branch.notes}
                  </p>
                )}
              </div>

              {/* Action Buttons in Maroon */}
              <div className="mt-8 pt-6 border-t border-[#74151D]/15 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${branch.phone}`}
                  className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#F5D8D5] hover:bg-[#eed0cd] text-[#74151D] border border-[#74151D]/20 text-xs font-bold uppercase tracking-wider font-heading transition-all"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>Call: {branch.displayPhone}</span>
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

                <button
                  onClick={() => handleBranchEnquire(branch)}
                  className="inline-flex items-center px-4 py-2.5 rounded-xl btn-maroon text-xs font-bold uppercase tracking-wider font-heading transition-all ml-auto"
                >
                  <span>Enquire Here</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

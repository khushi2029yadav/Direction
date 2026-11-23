"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center space-x-2.5">
      {/* Tooltip badge (Desktop only so mobile screen is never obstructed) */}
      {showTooltip && (
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FFFDF7] border border-[#74151D]/20 text-[#292326] text-xs shadow-lg animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span className="font-mono font-bold text-[#74151D] text-[11px] whitespace-nowrap">
            Admissions Desk Online
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss tooltip"
            className="text-[#6E656A] hover:text-[#292326] ml-1 p-0.5 rounded-full hover:bg-[#F5D8D5] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => openWhatsApp({ customMessage: "Hello Disha Classes, I would like to make an enquiry regarding admissions." })}
        aria-label="Chat with Disha Classes Admissions Desk on WhatsApp"
        className="relative p-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#74151D]"></span>
        </span>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white shrink-0" />
      </button>
    </aside>
  );
}

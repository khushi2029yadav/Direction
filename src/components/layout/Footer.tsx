"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ExternalLink, Lock } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp/whatsappUtils";
import DishaLogo from "@/components/ui/DishaLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3C1015] border-t border-[#74151D]/60 text-[#E8C9C9] text-sm overflow-hidden">
      {/* Top Subtle Metallic Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DDA6A6]/40 to-transparent" />

      {/* Main Footer Content Container (Extra bottom padding on mobile for floating WhatsApp widget) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* ============================================================== */}
          {/* COLUMN 1 — BRAND (4 Cols)                                      */}
          {/* ============================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <DishaLogo size={52} showText={true} lightText={true} />
            </Link>

            <p className="text-sm font-editorial italic text-[#F5D8D5] pt-1">
              &quot;Your Future. Your Direction. Your Disha.&quot;
            </p>

            <p className="text-xs sm:text-sm text-[#E8C9C9] leading-relaxed max-w-sm">
              Empowering Mumbai students with strong conceptual foundations, personalized attention, and rigorous academic preparation.
            </p>

            {/* Direct Contact Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => openWhatsApp({ customMessage: "Hello Disha Classes, I would like to make an enquiry regarding admissions." })}
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold hover:bg-[#25D366]/30 transition-colors shrink-0 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp Desk</span>
              </button>

              <a
                href="tel:+919224657102"
                className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-[#FFFDF7] text-xs font-mono font-bold hover:bg-white/20 transition-colors shrink-0 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 shrink-0 text-[#F5D8D5]" />
                <span>+91 92246 57102</span>
              </a>
            </div>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 2 — QUICK LINKS (2 Cols)                                */}
          {/* ============================================================== */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FFFDF7] uppercase mb-4 border-b border-[#DDA6A6]/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  Academic Programmes
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  Results & Merit
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 3 — FEATURED PROGRAMMES (3 Cols)                        */}
          {/* ============================================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FFFDF7] uppercase mb-4 border-b border-[#DDA6A6]/20 pb-2">
              Featured Programmes
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/courses/class-10-board-prep" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  Class 10 Board Excellence
                </Link>
              </li>
              <li>
                <Link href="/courses/class-9-foundation" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  Class 9 Conceptual Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses/class-7-8-middle-school" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  Classes 7 & 8 Middle School
                </Link>
              </li>
              <li>
                <Link href="/courses/class-11-12-science-hsc" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  Class 11 & 12 Science (HSC)
                </Link>
              </li>
              <li>
                <Link href="/courses/class-11-12-commerce-hsc" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  Class 11 & 12 Commerce (HSC)
                </Link>
              </li>
              <li>
                <Link href="/courses/jee-main-advanced-prep" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  JEE Preparation (Main & Adv)
                </Link>
              </li>
              <li>
                <Link href="/courses/neet-ug-medical-prep" className="text-[#E8C9C9] hover:text-[#FFFDF7] transition-colors block py-0.5 truncate">
                  NEET-UG Medical Entrance
                </Link>
              </li>
            </ul>
          </div>

          {/* ============================================================== */}
          {/* COLUMN 4 — OUR CAMPUSES (3 Cols)                               */}
          {/* ============================================================== */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#FFFDF7] uppercase mb-4 border-b border-[#DDA6A6]/20 pb-2">
              Our Campuses
            </h4>
            <div className="space-y-5 text-xs">
              
              {/* Wadala Centre */}
              <div className="rounded-xl p-3 bg-white/5 border border-white/10 space-y-1.5">
                <span className="font-heading font-extrabold text-[#FFFDF7] text-xs uppercase tracking-wide block">
                  WADALA CENTRE (HEAD OFFICE)
                </span>
                <p className="text-[#E8C9C9] leading-relaxed text-[11px]">
                  Shop No. 469, 7/40, Sir Pochkhan Wala Road, Panchashila Nagar, Wadala, Mumbai 400037.
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                  <a
                    href="tel:+919224657102"
                    className="text-[#F5D8D5] hover:text-white font-bold flex items-center space-x-1"
                  >
                    <Phone className="w-3 h-3 text-[#25D366]" />
                    <span>+91 92246 57102</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Shop+No+469+7/40+Sir+Pochkhan+Wala+Road+Panchashila+Nagar+Wadala+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#DDA6A6] hover:text-[#FFFDF7] flex items-center space-x-0.5"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Matunga Centre */}
              <div className="rounded-xl p-3 bg-white/5 border border-white/10 space-y-1.5">
                <span className="font-heading font-extrabold text-[#FFFDF7] text-xs uppercase tracking-wide block">
                  MATUNGA CENTRE
                </span>
                <p className="text-[#E8C9C9] leading-relaxed text-[11px]">
                  Matunga Central, Mumbai.
                </p>
                <p className="text-[#DDA6A6] text-[10px] leading-tight">
                  Scheduled Counseling & Batches (By Appointment via Central Office).
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px] font-mono">
                  <button
                    onClick={() => openWhatsApp({ customMessage: "Hello Disha Classes, I want to enquire about batch timings at the Matunga Center." })}
                    className="text-[#25D366] hover:text-white font-bold flex items-center space-x-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Enquire Matunga</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* PREMIUM FOOTER BOTTOM BAR                                      */}
        {/* ============================================================== */}
        <div className="mt-14 pt-8 border-t border-[#DDA6A6]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDA6A6] gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} Disha Classes. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <Link href="/privacy" className="hover:text-[#FFFDF7] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#DDA6A6]/40">•</span>
            <Link href="/terms" className="hover:text-[#FFFDF7] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#DDA6A6]/40">•</span>
            <Link href="/admin" className="hover:text-[#FFFDF7] flex items-center space-x-1 text-[#F5D8D5]">
              <Lock className="w-3 h-3 text-[#F5D8D5]" />
              <span>Admin Desk</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

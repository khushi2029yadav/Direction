import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-[#74151D] hover:text-[#3C1015] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return Home</span>
        </Link>

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5D8D5] text-[#74151D] text-xs font-mono font-bold mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DATA INTEGRITY & PRIVACY</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#292326] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#6E656A] font-mono mt-2">
          Effective for Academic Sessions 2026–2027 • Disha Classes, Mumbai
        </p>

        <div className="mt-8 space-y-6 text-sm text-[#292326]/90 leading-relaxed font-sans border-t border-[#74151D]/15 pt-6">
          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">1. Collection of Student & Parent Data</h2>
            <p>Disha Classes collects student and parent contact details (name, phone number, academic grade, school/college, and target examination) strictly for academic counseling, admission processing, and test schedule notifications.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">2. Communication Standards</h2>
            <p>We respect parent and student time. Communication through phone or WhatsApp is conducted solely regarding academic batches, student attendance, examination results, and scheduled parent-teacher meetings.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">3. Non-Disclosure & Security</h2>
            <p>Student records and contact information are confidential and are never sold, rented, or transferred to third-party telemarketers or external entities.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

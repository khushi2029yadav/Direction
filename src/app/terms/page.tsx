import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function TermsPage() {
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
          <BookOpen className="w-3.5 h-3.5" />
          <span>ACADEMIC ENROLLMENT GUIDELINES</span>
        </div>

        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#292326] tracking-tight">
          Terms & Academic Conditions
        </h1>
        <p className="text-xs text-[#6E656A] font-mono mt-2">
          Academic Year 2026–2027 • Disha Classes, Mumbai
        </p>

        <div className="mt-8 space-y-6 text-sm text-[#292326]/90 leading-relaxed font-sans border-t border-[#74151D]/15 pt-6">
          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">1. Attendance & Class Discipline</h2>
            <p>Regular attendance and timely submission of homework assignments are mandatory for all enrolled students across Wadala and Matunga centers to ensure steady academic improvement.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">2. Batch Allocation & Schedules</h2>
            <p>Batch timings, test schedules, and faculty assignments are finalized by the academic directorate to maintain optimum teacher-student attention and avoid school/college timing clashes.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-lg text-[#74151D] mb-2">3. Parent Mentorship Interaction</h2>
            <p>Periodic academic reviews and test performance reports are shared with parents to celebrate milestones and proactively address conceptual difficulties.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

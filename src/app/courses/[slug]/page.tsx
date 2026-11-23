import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES_DATA } from "@/data/coursesData";
import { CheckCircle2, Users, Clock, ArrowLeft, MessageCircle, Sparkles, BookOpen, MapPin } from "lucide-react";
import EnquirySection from "@/components/sections/EnquirySection";

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({
    slug: course.slug,
  }));
}

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const resolvedParams = await params;
  const course = COURSES_DATA.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const whatsappMessage = `Hello Disha Classes, I am interested in learning more about ${course.name}. Please share the syllabus and admission details.`;
  const whatsappUrl = `https://wa.me/919224657102?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/courses"
          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-[#74151D] hover:text-[#3C1015] mb-8 transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to All Programmes</span>
        </Link>

        {/* Hero Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FCECE9] border-2 border-[#74151D]/20 shadow-xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="micro-label text-[#74151D] px-3 py-1 rounded bg-[#FFFDF7] border border-[#74151D]/20 font-bold">
              {course.categoryLabel}
            </span>
            {course.badge && (
              <span className="micro-label text-[#3C1015] px-3 py-1 rounded bg-[#DDA6A6]/40 border border-[#74151D]/20 font-extrabold">
                {course.badge}
              </span>
            )}
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#292326] tracking-tight leading-tight">
            {course.name}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-xs sm:text-sm font-mono text-[#74151D] border-b border-[#74151D]/15 pb-6">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#74151D]" />
              <span className="font-semibold">Target: {course.targetAudience}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#74151D]" />
              <span className="font-semibold">Duration: {course.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#74151D]" />
              <span className="font-semibold">Offered at: Wadala & Matunga</span>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="mt-8">
            <h2 className="text-xs uppercase font-mono tracking-wider text-[#74151D] font-bold mb-3">
              Program Description & Academic Scope
            </h2>
            <p className="text-base sm:text-lg text-[#292326]/90 leading-relaxed font-normal">
              {course.fullDescription}
            </p>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="mt-8 pt-6 border-t border-[#74151D]/15 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-md shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 mr-2 shrink-0" />
              <span>Inquire via WhatsApp</span>
            </a>

            <a
              href="#enquiry"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl btn-maroon font-heading font-bold text-xs uppercase tracking-wider transition-all shrink-0 whitespace-nowrap shadow-sm"
            >
              <span>Submit Admission Enquiry</span>
            </a>
          </div>
        </div>

        {/* Subjects & Highlights 2-Col Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Subjects */}
          <div className="p-8 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#292326] mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#74151D]" />
              <span>Curriculum & Subjects</span>
            </h3>
            <div className="space-y-3">
              {course.subjectsCovered.map((subject, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm text-[#292326] p-3 rounded-xl bg-[#FCECE9] border border-[#74151D]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#74151D] shrink-0 mt-0.5" />
                  <span>{subject}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="p-8 rounded-2xl bg-[#FFFDF7] border-2 border-[#74151D]/15 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#292326] mb-4 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#74151D]" />
              <span>Key Academic Advantages</span>
            </h3>
            <div className="space-y-3">
              {course.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-sm text-[#6e656a] p-3 rounded-xl bg-[#FCECE9] border border-[#74151D]/10">
                  <span className="w-2 h-2 rounded-full bg-[#74151D] mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Enquiry Section */}
        <div className="mt-16">
          <EnquirySection preselectedCourse={course.name} />
        </div>
      </div>
    </div>
  );
}

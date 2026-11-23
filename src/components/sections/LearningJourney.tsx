"use client";

import React, { useState } from "react";
import { Compass, Lightbulb, PenTool, CheckCircle, Flame, Trophy } from "lucide-react";

const STAGES = [
  {
    number: "01",
    title: "Understand",
    sub: "Conceptual Foundations",
    icon: <Lightbulb className="w-5 h-5 text-[#74151D]" />,
    detail:
      "Interactive lectures that deconstruct core theories from first principles. Students learn the 'why' before memorizing the 'how'.",
    outcome: "Eliminates rote memorization",
  },
  {
    number: "02",
    title: "Practice",
    sub: "Application Drills",
    icon: <PenTool className="w-5 h-5 text-[#74151D]" />,
    detail:
      "Curated question banks ranging from textbook exercises to tricky multi-concept board and competitive entrance problems.",
    outcome: "Builds problem-solving agility",
  },
  {
    number: "03",
    title: "Evaluate",
    sub: "Diagnostic Testing",
    icon: <CheckCircle className="w-5 h-5 text-[#74151D]" />,
    detail:
      "Timed chapter assessments, OMR drills, and full-length prelim exams that simulate official examination conditions.",
    outcome: "Accurate readiness benchmark",
  },
  {
    number: "04",
    title: "Improve",
    sub: "Targeted Feedback",
    icon: <Flame className="w-5 h-5 text-[#74151D]" />,
    detail:
      "Granular error analysis identifying calculation slips vs conceptual gaps. Customized remedial sessions until doubts vanish.",
    outcome: "Turns weaknesses into strengths",
  },
  {
    number: "05",
    title: "Achieve",
    sub: "Exam Day Mastery",
    icon: <Trophy className="w-5 h-5 text-[#74151D]" />,
    detail:
      "Entering the exam hall with calm psychological resilience, speed-accuracy mastery, and flawless paper presentation.",
    outcome: "Top percentiles & distinctions",
  },
];

export default function LearningJourney() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFFDF7] border-t border-[#74151D]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
            <Compass className="w-4 h-4" />
            <span>THE 5-STAGE STUDENT JOURNEY</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292326] tracking-tight leading-tight">
            A PROVEN PATHWAY FROM{" "}
            <span className="font-editorial italic font-normal text-[#74151D]">
              UNCERTAINTY TO DISTINCTION.
            </span>
          </h2>

          <p className="mt-4 text-[#6e656a] text-sm sm:text-base leading-relaxed">
            Success is not random luck; it is an engineered progression. Here is how Disha Classes guides students through every milestone of the academic year.
          </p>
        </div>

        {/* Interactive Progress Line */}
        <div className="mt-16">
          <div className="hidden lg:grid grid-cols-5 gap-4 relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#F5D8D5] -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#74151D] -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStage / (STAGES.length - 1)) * 100}%` }}
            />

            {STAGES.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-extrabold text-sm transition-all duration-300 ${
                    idx <= activeStage
                      ? "bg-[#74151D] text-[#FFFDF7] shadow-lg scale-110"
                      : "bg-[#FFFDF7] border-2 border-[#DDA6A6] text-[#6e656a] group-hover:border-[#74151D]"
                  }`}
                >
                  {stage.number}
                </div>
                <span
                  className={`mt-3 font-heading font-bold text-sm transition-colors ${
                    idx === activeStage ? "text-[#74151D]" : "text-[#6e656a] group-hover:text-[#292326]"
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {STAGES.map((stage, idx) => {
              const isActive = idx === activeStage;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 relative flex flex-col justify-between ${
                    isActive
                      ? "bg-[#FCECE9] border-2 border-[#74151D] shadow-lg scale-[1.02]"
                      : "bg-[#FFFDF7] border border-[#74151D]/15 hover:border-[#74151D]/35 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-extrabold text-[#74151D]/30">
                        {stage.number}
                      </span>
                      <div className="p-2 rounded-lg bg-[#F5D8D5] border border-[#74151D]/15">
                        {stage.icon}
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#292326]">
                      {stage.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#74151D] font-bold block mb-2">
                      {stage.sub}
                    </span>

                    <p className="text-xs text-[#6e656a] leading-relaxed">
                      {stage.detail}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#74151D]/10">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#74151D] block font-bold">
                      Target Outcome
                    </span>
                    <span className="text-xs text-[#292326] font-semibold">
                      {stage.outcome}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

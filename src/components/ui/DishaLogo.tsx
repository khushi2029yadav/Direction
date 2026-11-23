"use client";

import React from "react";
import Image from "next/image";

interface DishaLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  lightText?: boolean;
}

export default function DishaLogo({
  size = 48,
  className = "",
  showText = true,
  lightText = false,
}: DishaLogoProps) {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Official Uploaded Logo Emblem Container */}
      <div
        className={`relative shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
          lightText
            ? "drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
            : "drop-shadow-[0_4px_12px_rgba(116,21,29,0.22)]"
        }`}
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/disha-logo.png"
          alt="DISHA CLASSES Official Logo"
          width={size * 2}
          height={size * 2}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-heading font-extrabold tracking-wider leading-none ${
              lightText ? "text-white" : "text-[#74151D]"
            }`}
            style={{ fontSize: Math.max(16, size * 0.38) }}
          >
            DISHA <span className={lightText ? "text-[#F5D8D5]" : "text-[#3C1015]"}>CLASSES</span>
          </span>
          <span
            className={`font-sans font-semibold tracking-widest uppercase mt-0.5 ${
              lightText ? "text-[#DDA6A6]" : "text-[#74151D]/80"
            }`}
            style={{ fontSize: Math.max(9, size * 0.2) }}
          >
            दिशा क्लासेज • Wadala & Matunga
          </span>
        </div>
      )}
    </div>
  );
}

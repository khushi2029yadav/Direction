"use client";

import React, { useState } from "react";
import { GALLERY_DATA } from "@/data/galleryData";
import { GalleryItem } from "@/types";
import { Camera, Maximize2, X } from "lucide-react";

const CATEGORIES = [
  "All",
  "Classrooms",
  "Students",
  "Faculty",
  "Learning Activities",
  "Events",
  "Celebrations",
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FFFDF7] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 micro-label text-[#74151D] mb-3">
          <Camera className="w-4 h-4" />
          <span>VISUAL ARCHIVE</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#292326] tracking-tight leading-tight">
          CAMPUS LIFE, CLASSROOMS &{" "}
          <span className="font-editorial italic font-normal text-[#74151D]">
            EVENTS.
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#6e656a] max-w-2xl mx-auto font-normal leading-relaxed">
          Explore our learning facilities, student doubt sessions, study library, and annual felicitation ceremonies.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all font-bold ${
                activeCategory === cat
                  ? "bg-[#74151D] text-white shadow-md scale-105"
                  : "bg-[#F5D8D5] text-[#74151D] hover:bg-[#eed0cd] border border-[#74151D]/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="group cursor-pointer relative h-80 rounded-3xl overflow-hidden border-2 border-[#74151D]/15 bg-[#FFFDF7] shadow-lg hover:shadow-2xl transition-all"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C1015] via-[#3C1015]/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="micro-label text-white px-2.5 py-1 rounded bg-[#74151D]/90 backdrop-blur-md border border-white/20">
                {item.tag}
              </span>
              <span className="p-2 rounded-full bg-white/20 text-white backdrop-blur-sm group-hover:bg-[#74151D] transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5D8D5] block mb-1 font-bold">
                {item.category}
              </span>
              <h2 className="font-heading font-extrabold text-lg text-white group-hover:text-[#F5D8D5] transition-colors leading-snug">
                {item.title}
              </h2>
              <p className="mt-1 text-xs text-[#FFFDF7]/85 line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-[#FFFDF7] border-2 border-[#74151D]/30 p-2 sm:p-4 text-left shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#74151D] text-white hover:bg-[#8B1D26] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="w-full h-80 sm:h-[450px] bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${lightboxItem.imageUrl})` }}
            />

            <div className="p-4 sm:p-6">
              <span className="micro-label text-[#74151D] font-bold">{lightboxItem.category}</span>
              <h3 className="font-heading font-extrabold text-2xl text-[#292326] mt-1">
                {lightboxItem.title}
              </h3>
              <p className="mt-2 text-sm text-[#6e656a] leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

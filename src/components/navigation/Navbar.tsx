"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import DishaLogo from "@/components/ui/DishaLogo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Branches", href: "/branches" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#74151D]/15 py-3 shadow-[0_4px_20px_rgba(116,21,29,0.06)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="group flex items-center">
            <DishaLogo size={46} showText={true} lightText={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-[#F5D8D5]/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#74151D]/15 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#FFFDF7] bg-[#74151D] shadow-[0_2px_10px_rgba(116,21,29,0.3)]"
                      : "text-[#292326] hover:text-[#74151D] hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+919224657102"
              className="hidden xl:flex items-center space-x-1.5 text-xs font-semibold text-[#74151D] hover:text-[#3C1015] px-3 py-1.5 rounded-lg border border-[#74151D]/20 hover:border-[#74151D]/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#74151D]" />
              <span>+91 92246 57102</span>
            </a>

            <Link
              href="/#enquiry"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-bold rounded-full overflow-hidden btn-maroon group active:scale-95"
            >
              <span className="relative flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F5D8D5] animate-pulse" />
                <span>ADMISSIONS OPEN</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl bg-[#F5D8D5] text-[#74151D] border border-[#74151D]/20 hover:bg-[#eed0cd]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF7] border-b border-[#74151D]/20 px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          {/* Mobile Header with Official Logo */}
          <div className="flex items-center justify-between pb-5 mb-4 border-b border-[#74151D]/15">
            <DishaLogo size={44} showText={true} lightText={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[#74151D] hover:bg-[#F5D8D5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-[#74151D] text-white"
                    : "text-[#292326] hover:bg-[#F5D8D5] hover:text-[#74151D]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#74151D]/15 flex flex-col space-y-3">
              <a
                href="tel:+919224657102"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 text-sm text-[#74151D] font-bold px-4 py-2.5 rounded-xl bg-[#F5D8D5] border border-[#74151D]/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Wadala: +91 92246 57102</span>
              </a>

              <Link
                href="/#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl btn-maroon font-bold text-sm"
              >
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import LeadForm from "./LeadForm";

export default function FloatingCallCTA() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 || document.documentElement.scrollHeight <= window.innerHeight + 100) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleOpenCallback = () => {
      setIsModalOpen(true);
    };
    window.addEventListener("open-callback-modal", handleOpenCallback);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-callback-modal", handleOpenCallback);
    };
  }, []);

  return (
    <>
      {/* Floating Bottom CTA */}
      <div
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-500 ease-out flex items-center justify-center"
        style={{
          transform: `translateY(${showFloatingCTA ? "0px" : "100px"}) scale(${showFloatingCTA ? 1 : 0.9})`,
          opacity: showFloatingCTA ? 1 : 0,
          pointerEvents: showFloatingCTA ? "auto" : "none",
        }}
      >
        <div className="relative rounded-full p-[2px] animate-shimmer shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="Request a Call"
            title="Request a Call"
            className="relative w-14 h-14 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-brand-primary/40 transition-all duration-200"
          >
            <Phone className="h-6 w-6 stroke-[2.2]" />
          </button>
        </div>
      </div>

      {/* Popup Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm formId="callback" className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}
    </>
  );
}

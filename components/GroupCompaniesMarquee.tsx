"use client";

import React from "react";

const divisionLogos = [
  {
    name: "Choyal Grinding Solution",
    src: "/images/about/logo-marquee/logos/trimmed/Choyal%20grinding%20solution.png",
  },
  {
    name: "Mavian",
    src: "/images/about/logo-marquee/logos/trimmed/mavian.png",
  },
  {
    name: "Floura",
    src: "/images/about/logo-marquee/logos/trimmed/Floura.png",
  },
  {
    name: "Shrihit",
    src: "/images/about/logo-marquee/logos/trimmed/Shrihit.png",
  },
  {
    name: "Brain Trust Society",
    src: "/images/about/logo-marquee/logos/trimmed/Brain%20Trust%20Scociety.png",
  },
  {
    name: "Shri Agro Industries",
    src: "/images/about/logo-marquee/logos/trimmed/Shri%20Agro.png",
  },
  {
    name: "CHARGE",
    src: "/images/about/logo-marquee/logos/trimmed/charge.png",
  },
];

// Double the items to ensure seamless loop on wide screens
const marqueeItems = [...divisionLogos, ...divisionLogos];

export default function GroupCompaniesMarquee() {
  return (
    <section
      id="divisions-ecosystem"
      className="w-full py-16 sm:py-20 bg-slate-50 border-t border-slate-200/50 overflow-hidden relative z-10 scroll-mt-36"
    >
      <div className="w-full mx-auto">
        {/* Parent RS Choyal Group Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 px-6">
          <img
            src="/images/about/logo-marquee/logos/trimmed/RS%20Choyal%20Group.png"
            alt="RS Choyal Group"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain select-none"
          />
        </div>

        {/* Eyebrow with Amber Divider Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-12 max-w-xl mx-auto px-6">
          <div className="h-[1.5px] w-8 sm:w-16 bg-[#FFAA17]" />
          <span className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0B2C1C] whitespace-nowrap">
            Our divisions &amp; working ecosystems
          </span>
          <div className="h-[1.5px] w-8 sm:w-16 bg-[#FFAA17]" />
        </div>

        {/* Marquee Track with Edge Gradients */}
        <div className="relative w-full overflow-hidden marquee-container py-2">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-slate-50 to-transparent" />

          {/* Scrolling Rows */}
          <div className="flex items-center gap-6 sm:gap-10 md:gap-12 min-w-full">
            {/* Primary Track */}
            <div className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-10 md:gap-12 min-w-full">
              {marqueeItems.map((logo, idx) => (
                <div
                  key={`div-1-${idx}`}
                  className="w-[150px] sm:w-[180px] md:w-[210px] h-[60px] sm:h-[72px] md:h-[80px] flex items-center justify-center px-3 sm:px-4 shrink-0 select-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-[42px] sm:max-h-[50px] md:max-h-[56px] max-w-full w-auto h-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* Duplicated Track for Infinite Loop */}
            <div
              className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-10 md:gap-12 min-w-full"
              aria-hidden="true"
            >
              {marqueeItems.map((logo, idx) => (
                <div
                  key={`div-2-${idx}`}
                  className="w-[150px] sm:w-[180px] md:w-[210px] h-[60px] sm:h-[72px] md:h-[80px] flex items-center justify-center px-3 sm:px-4 shrink-0 select-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-[42px] sm:max-h-[50px] md:max-h-[56px] max-w-full w-auto h-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

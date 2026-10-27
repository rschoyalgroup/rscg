"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InfrastructureItem {
  id: string;
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
}

const infrastructureItems: InfrastructureItem[] = [
  {
    id: "factory-unit",
    eyebrow: "Factory unit",
    heading: "Where engineering takes physical form.",
    description:
      "Our heavy engineering facility brings together fabrication, emery-stone manufacturing, silos, PEB components and specialised milling equipment turning engineered concepts into production-ready systems.",
    image: "/images/infrastructure/factory_unit.jpg",
  },
  {
    id: "digital-pilot-plant",
    eyebrow: "Digital pilot plant",
    heading: "Where technology meets the real mill.",
    description:
      "A full-scale environment for live demonstrations, milling trials, diagnostics and automation development giving new technologies a real production setting to perform, adapt and improve.",
    image: "/images/infrastructure/pilot_plant.jpg",
  },
  {
    id: "corporate-headquarters",
    eyebrow: "Choyal Tower · Corporate headquarters",
    heading: "Where the Group moves as one.",
    description:
      "Our corporate headquarters brings Marketing, Sales, IT, Media and Finance together connecting people, decisions and ideas that support the Group's operations and growth.",
    image: "/images/infrastructure/corporate_office.jpg",
  },
  {
    id: "workshop-advanced-manufacturing",
    eyebrow: "Workshop · Advanced manufacturing",
    heading: "Where precision becomes production.",
    description:
      "A 46,000 sq. ft. manufacturing facility with CNC machining, welding, design, R&D and warehousing capabilities supporting precision engineering from development through production.",
    image: "/images/infrastructure/precision_workshop.jpg",
  },
];

export default function WalkthroughSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="infrastructure"
      className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 bg-slate-50 relative z-10 border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-4xl space-y-3">
          <p className="text-xs sm:text-sm font-bold text-[#133a25] tracking-wider">
            Our infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#133a25] leading-[1.15] font-heading">
            A company you can <br className="hidden sm:block" />
            <span className="text-[#FFAA17]">walk through.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl pt-1 font-normal">
            Manufacturing, testing, operations and learning happen within one
            connected ecosystem. Ideas move from the drawing board to the
            workshop and into working plants gaining insight at every stage and
            returning stronger.
          </p>
        </div>

        {/* 4 Cards in 2x2 Grid */}
        <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-7 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {infrastructureItems.map((item, idx) => {
            const isActive = activeCard === idx;

            return (
              <article
                key={item.id}
                tabIndex={0}
                onClick={() => setActiveCard(isActive ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveCard(isActive ? null : idx);
                  }
                }}
                className={`w-[74vw] max-w-[290px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none relative h-[380px] sm:h-[420px] lg:h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#133a25]/20 bg-slate-900 ${
                  isActive ? "shadow-2xl -translate-y-1" : ""
                }`}
              >
                {/* Background Image with smooth hover scale */}
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Scrim - only appears on hover or active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 via-45% to-transparent pointer-events-none transition-opacity duration-500 ease-out ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* Content Layer (initially shows eyebrow & heading, reveals description on hover) */}
                <div className="absolute inset-0 p-6 sm:p-8 lg:p-9 flex flex-col justify-end z-10 text-white pointer-events-none">
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-[#FFAA17] mb-2 flex items-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                    <span className="w-2 h-2 rounded-full bg-[#FFAA17]" />
                    {item.eyebrow}
                  </span>

                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {item.heading}
                  </h3>

                  {/* Expandable Drawer: opens on hover on desktop, or tap on mobile */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-normal pt-3 max-w-2xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

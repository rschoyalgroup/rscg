"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CSRInitiative {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const csrInitiatives: CSRInitiative[] = [
  {
    id: "bts",
    title: "Brain Trust Society",
    description:
      "Established in 1992, Brains Trust Society (BTS) works in education, community development, and cultural initiatives, supporting rural development through training, workshops, and grassroots programs.",
    image: "/images/about/csr/trimmed/bts.png",
    alt: "Brain Trust Society",
  },
  {
    id: "csmt",
    title: "Choyal School of Milling Technology",
    description:
      "Choyal School of Milling Technology (CSMT) provides practical training in flour milling and grain processing, combining technical education with hands-on exposure to modern milling technologies.",
    image: "/images/about/csr/trimmed/csmt.png",
    alt: "Choyal School of Milling Technology",
  },
  {
    id: "charge",
    title: "CHARGE",
    description:
      "CHARGE (Choyal Hub for Agribusiness, Research, Growth & Entrepreneurship) builds on CSMT to support skill development, research, entrepreneurship, and agribusiness innovation through training, workshops, and incubation.",
    image: "/images/about/csr/trimmed/charge.png",
    alt: "CHARGE - Choyal Hub for Agribusiness, Research, Growth & Entrepreneurship",
  },
];

export default function CSRSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="social-responsibility"
      className="w-full py-16 sm:py-24 bg-[#FCFDFD] border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold text-[#0E3321] tracking-wider mb-3">
            Our commitment &amp; initiatives
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E3321] tracking-tight leading-[1.18] mb-4 font-heading">
            Building knowledge.
            <br className="hidden sm:inline" /> Creating{" "}
            <span className="text-[#FFAA17]">opportunity.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            The knowledge that shapes our technology also drives our commitment
            to education, skill development, entrepreneurship and community
            progress.
          </p>
        </div>

        {/* 3 Initiative Cards */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {csrInitiatives.map((item, idx) => {
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
                className={`w-[74vw] max-w-[290px] md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none relative h-[410px] sm:h-[430px] rounded-2xl bg-white border border-slate-200/90 overflow-hidden cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#0E3321]/20 ${
                  isActive ? "border-slate-300 shadow-[0_16px_36px_rgba(15,23,42,0.12)] -translate-y-1.5" : ""
                } ${
                  idx === csrInitiatives.length - 1 && csrInitiatives.length % 2 === 1
                    ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-14px)] lg:col-span-1 lg:w-auto lg:justify-self-stretch"
                    : "md:w-auto"
                }`}
              >
                {/* Logo Graphic Layer (Clean off-white backdrop) */}
                <div className="absolute inset-0 bg-[#F8F9FA] flex items-center justify-center p-6 sm:p-8 pb-32">
                  <div className="relative w-full h-full max-h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Dark Gradient Scrim - only appears on hover or active */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 via-55% to-transparent pointer-events-none transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />

                {/* Bottom Content Layer */}
                <div className="absolute left-0 right-0 bottom-0 p-6 sm:p-7 z-10 flex flex-col justify-end">
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[#0E3321] group-hover:text-white"
                  }`}>
                    {item.title}
                  </h3>

                  {/* Expandable Drawer: opens on hover on desktop, or tap on mobile */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-200 pt-3 font-normal">
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

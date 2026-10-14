"use client";

import React from "react";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    id: "vision",
    Icon: Eye,
    eyebrow: "Our vision",
    title: ["Aiming for a smarter,", "stronger tomorrow."],
    desc: "To combine engineering excellence, innovation and efficiency to create practical solutions that deliver consistent value for our customers.",
    image: "/images/about/mission-vision/vision.png",
  },
  {
    id: "mission",
    Icon: Target,
    eyebrow: "Our mission",
    title: ["Building solutions", "for a better future."],
    desc: "To advance milling through intelligent, efficient and sustainable technologies combining experience, experimentation and continuous improvement to build solutions for the future.",
    image: "/images/about/mission-vision/mission.jpg",
  },
];

function VisionMissionCard({ id, Icon, eyebrow, title, desc, image }: (typeof cards)[number]) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden relative flex flex-col lg:flex-row lg:justify-between lg:min-h-[250px] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Mobile / Tablet: image banner on top (no overlap with text) */}
      <div className="lg:hidden relative w-full aspect-[16/9] overflow-hidden bg-[#E4EEE6]">
        <img
          src={image}
          alt={eyebrow}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-7 lg:p-9 lg:pr-[265px] xl:pr-[285px] flex flex-col justify-between relative z-10 flex-1 min-w-0 bg-transparent">
        <div>
          <div className="flex items-start gap-3 sm:gap-5 mb-2.5 sm:mb-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#17422C] flex items-center justify-center shrink-0 text-white shadow-[0_0_0_4px_#E6EFEA] sm:shadow-[0_0_0_5px_#E6EFEA]">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] sm:text-xs font-bold text-[#FFAA17] tracking-[0.08em] block mb-0.5 sm:mb-1">
                {eyebrow}
              </span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#0B2C1C] leading-snug">
                {title[0]}
                <br className="hidden lg:inline" /> {title[1]}
              </h3>
              <div className="w-8 sm:w-10 h-[2px] sm:h-[2.5px] bg-[#FFAA17] mt-2 sm:mt-3.5 mb-2 sm:mb-4 rounded-full" />
            </div>
          </div>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">{desc}</p>
      </div>

      {/* Desktop: subtle white gradient (above BG, behind text) */}
      <div
        className="hidden lg:block absolute inset-0 z-[5] pointer-events-none bg-[linear-gradient(50deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_48%,rgba(255,255,255,0)_70%)]"
        aria-hidden="true"
      />

      {/* Desktop: graphic box with 2 background circle arcs & left-arced image */}
      <div className="hidden lg:flex absolute right-0 inset-y-0 w-[270px] xl:w-[290px] z-0 items-center justify-end pointer-events-none select-none">
        <svg
          viewBox="0 0 260 280"
          className="w-full h-full overflow-visible pointer-events-none"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id={`${id}-image-clip`}>
              <path d="M 260,0 C 25,60 20,200 75,280 L 260,280 Z" />
            </clipPath>
          </defs>

          {/* 2 Soft Sage Background Circle Arcs (top & bottom) */}
          <circle cx="180" cy="20" r="110" fill="#E4EEE6" />
          <circle cx="170" cy="255" r="115" fill="#E4EEE6" />

          {/* Image with smooth hover scale (bottom-right uncut) */}
          <g clipPath={`url(#${id}-image-clip)`}>
            <image
              href={image}
              x="0"
              y="0"
              width="260"
              height="280"
              preserveAspectRatio="xMidYMid slice"
              className="transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ transformOrigin: "center" }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <section
      id="mission-vision"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/50 scroll-mt-36"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto space-y-16 sm:space-y-20">
        <div>
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-[#0B2C1C] tracking-tight mb-8 sm:mb-10 text-left">
            Our vision &amp; mission
          </h2>

          {/* 2 Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
            {cards.map((card) => (
              <VisionMissionCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

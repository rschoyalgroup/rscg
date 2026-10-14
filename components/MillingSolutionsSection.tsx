"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MillingSolutionsSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const topCards = [
    {
      tag: "01 · Create",
      heading: "Build a complete flour plant",
      desc: "From planning and layout to installation and commissioning, we build your complete milling plant with one experienced team.",
      cta: "Explore Turnkey Solutions",
      href: "/turnkey-projects"
    },
    {
      tag: "02 · Expand",
      heading: "Upgrade what you already have",
      desc: "Improve capacity and efficiency by upgrading individual processes without rebuilding your entire plant.",
      cta: "See Systems by Section",
      href: "/flour-mills"
    },
    {
      tag: "03 · Solve",
      heading: "Discover the right milling solution",
      desc: "Choose the right milling solutions for your process, capacity and production needs from individual equipment to complete systems.",
      cta: "Explore The Product Range",
      href: "/catalog"
    }
  ];

  const coreFeatures = [
    {
      num: "01",
      heading: "Stone milling is our foundation.",
      desc: "Choyal built its expertise in emery stones, milling geometry, grain flow and grinding conditions, understanding the fundamentals that shape flour quality and milling performance.",
      img: "/images/stone-milling/stone-foundation-v3.png",
      alt: "Early Choyal stone mill - the foundation of stone milling",
      href: "/emery-stones"
    },
    {
      num: "02",
      heading: "Innovation brought stone milling into the digital age.",
      desc: "The expertise led to WonderMill, the world's first digital stone mill, combining traditional stone milling with digital control, automation and intelligent monitoring.",
      img: "/images/stone-milling/digital-era-v3.png",
      alt: "Digital stone mill innovation",
      href: "/flour-mills"
    },
    {
      num: "03",
      heading: "Experience evolved into engineered solutions.",
      desc: "As milling needs evolved, Choyal expanded into precision flour mills, advanced machinery and turnkey solutions, combining engineering, process knowledge and decades of mill-floor experience.",
      img: "/images/stone-milling/turnkey-solution-v2.png",
      alt: "Engineered milling solutions",
      href: "/turnkey-projects"
    }
  ];

  return (
    <section 
      id="end-to-end-solutions" 
      className="relative w-full overflow-hidden bg-[#FAF9F5] border-t border-slate-200/60 py-20 sm:py-24 lg:py-28 isolate"
    >
      {/* =========================================================
          BACKGROUND DECORATIVE GLOW & ORBIT
      ========================================================= */}
      
      {/* Orange Radial Gradient Glow */}
      <div 
        className="absolute w-[800px] sm:w-[1000px] lg:w-[1200px] h-[800px] sm:h-[1000px] lg:h-[1200px] -right-[400px] lg:-right-[520px] top-[100px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 170, 23, 0.12) 0%, rgba(255, 170, 23, 0.07) 20%, rgba(255, 170, 23, 0.035) 38%, rgba(255, 170, 23, 0.015) 55%, transparent 72%)"
        }}
        aria-hidden="true"
      />

      {/* Decorative Concentric Rings */}
      <div 
        className="absolute -right-[600px] sm:-right-[650px] lg:-right-[700px] -top-[300px] sm:-top-[320px] lg:-top-[350px] w-[1200px] sm:w-[1300px] lg:w-[1400px] h-[1200px] sm:h-[1300px] lg:h-[1400px] pointer-events-none z-0 opacity-70 lg:opacity-100"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1400 1400" className="w-full h-full block">
          <g>
            <circle cx="700" cy="700" r="700" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="650" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="600" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="550" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="500" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="450" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="400" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="350" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="300" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="250" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="200" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="150" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="100" fill="#FFAA17" opacity=".022" />
            <circle cx="700" cy="700" r="50" fill="#FFAA17" opacity=".022" />
          </g>
        </svg>
      </div>

      {/* Orbit with Circular Nodes */}
      <div 
        className="absolute -right-[600px] sm:-right-[650px] lg:-right-[700px] -top-[300px] sm:-top-[320px] lg:-top-[350px] w-[1200px] sm:w-[1300px] lg:w-[1400px] h-[1200px] sm:h-[1300px] lg:h-[1400px] pointer-events-none z-0 opacity-80 lg:opacity-100"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1400 1400" className="w-full h-full block">
          {/* Main dashed orbit */}
          <circle
            cx="700"
            cy="700"
            r="330"
            fill="none"
            stroke="#FFAA17"
            strokeWidth="1.3"
            strokeDasharray="5 5"
          />
          {/* Solid orange nodes */}
          <g fill="#FFAA17">
            <circle cx="700" cy="370" r="7" />
            <circle cx="1030" cy="700" r="10" />
            <circle cx="467" cy="467" r="8" />
            <circle cx="467" cy="933" r="9" />
            <circle cx="933" cy="933" r="6" />
          </g>
          {/* White outer / orange inner nodes */}
          <g fill="#fff" stroke="#FFAA17" strokeWidth="2">
            <circle cx="583" cy="414" r="13" />
            <circle cx="370" cy="700" r="13" />
            <circle cx="700" cy="1030" r="14" />
          </g>
          <g fill="#FFAA17">
            <circle cx="583" cy="414" r="6" />
            <circle cx="370" cy="700" r="6" />
            <circle cx="700" cy="1030" r="7" />
          </g>
        </svg>
      </div>

      {/* Traditional Millstone Assembly (Floating on the right side) */}
      <div 
        className="hidden lg:block absolute -right-[100px] xl:-right-[40px] 2xl:right-[20px] -bottom-[30px] xl:bottom-[10px] 2xl:bottom-[20px] w-[560px] xl:w-[660px] 2xl:w-[740px] h-[560px] xl:h-[660px] 2xl:h-[740px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <div 
          className="relative w-full h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.55) 36%, #000 64%)',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.55) 36%, #000 64%)',
          }}
        >
          <Image
            src="/images/stone-milling/stone-milling-section-bg-v2.png"
            alt="Traditional Stone Millstone Assembly"
            fill
            className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            priority={false}
          />
        </div>

        {/* Soft luminous white gradient & glow overlay directly washing over the chakki */}
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/70 to-transparent" 
          aria-hidden="true"
        />
        <div 
          className="absolute -left-20 top-1/4 w-[360px] h-[360px] rounded-full bg-white/75 blur-3xl pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* =========================================================
          MAIN CONTENT CONTAINER (Matches exact site navbar & section padding)
      ========================================================= */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        
        {/* =======================================================
            SECTION 1: END-TO-END MILLING SOLUTIONS
        ======================================================== */}
        <div>
          {/* Section Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-semibold text-[#0E3321] tracking-wide block">
              End-to-end milling solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-black tracking-tight text-[#0F172A] leading-[1.2]">
              Solutions for <br className="hidden sm:inline" />
              every stage of <span className="text-[#FFAA17]">your mill</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base lg:text-lg leading-relaxed pt-1 max-w-2xl font-normal">
              From setting up a new plant to upgrading a single process, choose the machinery and technology that fits your operation today and its growth tomorrow.
            </p>
          </div>

          {/* 3 Pillar Cards Grid (Horizontally swipable on mobile, grid on md+) */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 mt-9 sm:mt-11 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
            {topCards.map((card, idx) => (
              <div 
                key={idx}
                className="w-[74vw] max-w-[290px] md:w-full md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group relative bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.035)] hover:shadow-[0_18px_40px_rgba(14,51,33,0.08)] hover:border-[#0E3321]/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[250px] overflow-hidden"
              >
                {/* Top Amber Accent Line on Hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFAA17] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" 
                  aria-hidden="true"
                />

                <div>
                  <span className="text-xs font-semibold text-[#FFAA17] tracking-[0.08em] block mb-3.5">
                    {card.tag}
                  </span>
                  <h3 className="text-xl sm:text-[21px] font-bold text-[#0F172A] tracking-tight leading-[1.25] mb-3 group-hover:text-[#0E3321] transition-colors">
                    {card.heading}
                  </h3>
                  <p className="text-[#475569] text-[15px] sm:text-[15.5px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link 
                    href={card.href}
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#0E3321] group-hover:text-[#FFAA17] transition-all duration-200"
                  >
                    <span>{card.cta}</span>
                    <span className="text-[17px] transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>
        </div>

        {/* =======================================================
            SECTION 2: THE CHOYAL CORE (Stone Milling to Smarter Milling)
        ======================================================== */}
        <div className="mt-20 sm:mt-24 lg:mt-28 relative">
          
          {/* Header */}
          <div className="space-y-3 max-w-2xl">
            <span className="text-sm font-semibold text-[#0E3321] tracking-wide block">
              The Choyal core
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-heading font-black tracking-tight text-[#0F172A] leading-[1.2]">
              From stone milling to <br className="hidden sm:inline" />
              smarter <span className="text-[#FFAA17]">milling.</span>
            </h2>
          </div>

          {/* Feature Cards: Interactive Expandable on Desktop */}
          <div 
            className="hidden lg:flex flex-row gap-4 xl:gap-5.5 w-full lg:max-w-[740px] xl:max-w-[830px] 2xl:max-w-[880px] h-[295px] xl:h-[310px] 2xl:h-[325px] mt-11 sm:mt-13"
            onMouseLeave={() => setHoveredFeature(null)}
          >
            {coreFeatures.map((feat, idx) => {
              const isHovered = hoveredFeature === idx;
              const hasHover = hoveredFeature !== null;

              return (
                <Link
                  key={idx}
                  href={feat.href}
                  onMouseEnter={() => setHoveredFeature(idx)}
                  className={`relative flex flex-row p-5 xl:p-6 rounded-[20px] border transition-all duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)] overflow-hidden cursor-pointer backdrop-blur-xs select-none ${
                    isHovered
                      ? "flex-[2.4] xl:flex-[2.6] bg-white border-[#FFAA17] shadow-[0_20px_45px_rgba(14,51,33,0.10)] -translate-y-1"
                      : hasHover
                      ? "flex-[0.6] bg-white/90 border-[#E2E8F0] shadow-[0_10px_25px_rgba(15,23,42,0.03)]"
                      : "flex-1 bg-white/90 border-[#E2E8F0] shadow-[0_14px_35px_rgba(15,23,42,0.045)] hover:border-slate-300"
                  }`}
                >
                  {/* Left Column Text Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      {/* Number */}
                      <span className="text-xs xl:text-sm font-bold text-[#FFAA17] tracking-[0.08em] block transition-transform duration-300">
                        {feat.num}
                      </span>

                      {/* Heading */}
                      <h4 className={`font-bold text-[#0F172A] tracking-tight leading-[1.25] mt-3.5 xl:mt-4 transition-all duration-300 ${
                        isHovered 
                          ? "text-[18px] xl:text-[20px] 2xl:text-[21px] max-w-[280px]" 
                          : hasHover 
                          ? "text-[15px] xl:text-[16px] line-clamp-3" 
                          : "text-[17px] xl:text-[18px] 2xl:text-[19px]"
                      }`}>
                        {feat.heading}
                      </h4>

                      {/* Revealable Description */}
                      <div className={`overflow-hidden transition-all duration-400 ease-out ${
                        isHovered ? "max-h-48 opacity-100 mt-2.5 xl:mt-3" : "max-h-0 opacity-0 mt-0"
                      }`}>
                        <p className="text-[13px] xl:text-[14px] text-[#475569] leading-relaxed max-w-[240px] xl:max-w-[270px] font-normal">
                          {feat.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Space placeholder */}
                    <div className="h-6" />
                  </div>

                  {/* Inner Image Thumbnail (Reveals on Hover) */}
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)] overflow-hidden flex items-stretch shrink-0 ${
                    isHovered 
                      ? "w-[40%] xl:w-[44%] opacity-100 ml-3.5 xl:ml-4 scale-100" 
                      : "w-0 opacity-0 ml-0 scale-95 pointer-events-none"
                  }`}>
                    <div className="w-full h-full min-w-[160px] xl:min-w-[200px] bg-[#F3F4F2] rounded-[14px] overflow-hidden relative shadow-inner">
                      <Image
                        src={feat.img}
                        alt={feat.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1280px) 200px, 280px"
                      />
                    </div>
                  </div>

                  {/* Circle Arrow Button (Bottom-Right) */}
                  <div className={`absolute right-4 bottom-4 xl:right-5 xl:bottom-5 w-9 h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isHovered
                      ? "bg-[#F3F8F5] border-[#0E3321] text-[#0E3321] translate-x-0.5 shadow-sm"
                      : "bg-transparent border-[#8fb89d]/70 text-[#0E3321]"
                  }`}>
                    <ArrowRight className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Feature Cards: Mobile / Tablet Layout (Horizontally swipable on mobile) */}
          <div className="lg:hidden flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 sm:pb-0">
            {coreFeatures.map((feat, idx) => (
              <Link
                key={idx}
                href={feat.href}
                className="w-[74vw] max-w-[290px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-start sm:snap-align-none group relative bg-white rounded-2xl p-5 sm:p-7 border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#FFAA17]/60 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <span className="block mb-3 text-xs sm:text-sm font-bold text-[#FFAA17] tracking-[0.08em]">
                    {feat.num}
                  </span>

                  <h4 className="text-xl sm:text-[22px] font-bold text-[#0F172A] tracking-tight leading-[1.25] mb-2.5">
                    {feat.heading}
                  </h4>

                  <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-relaxed font-normal mb-5">
                    {feat.desc}
                  </p>
                </div>

                {/* Mobile Image (square, shown in full) */}
                <div className="mt-auto">
                  <div className="w-full aspect-square rounded-xl overflow-hidden relative bg-[#F3F4F2] shadow-inner">
                    <Image
                      src={feat.img}
                      alt={feat.alt}
                      fill
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-width: 640px) 85vw, 400px"
                    />
                  </div>

                  {/* Arrow below the image */}
                  <div className="flex justify-end mt-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#8fb89d]/70 text-[#0E3321] group-hover:bg-[#F3F8F5] group-hover:border-[#0E3321] transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-2 shrink-0 sm:hidden" aria-hidden="true" />
          </div>

        </div>

      </div>
    </section>
  );
}

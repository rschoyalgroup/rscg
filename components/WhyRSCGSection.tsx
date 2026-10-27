"use client";

import React from "react";

interface WhyRSCItem {
  number: string;
  title: string;
  description: string;
}

const whyRSCItems: WhyRSCItem[] = [
  {
    number: "01",
    title: "Trust",
    description:
      "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind.",
  },
  {
    number: "02",
    title: "Quality",
    description:
      "Quality and excellence define our product range. We provide solutions built to deliver dependable performance.",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales.",
  },
  {
    number: "04",
    title: "Economical solutions",
    description:
      "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth.",
  },
  {
    number: "05",
    title: "Experience",
    description:
      "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project.",
  },
];

export default function WhyRSCGSection() {
  const renderCardContent = (item: WhyRSCItem) => (
    <>
      <span className="text-xs sm:text-sm font-bold text-[#FFAA17] tracking-wider block mb-3">
        {item.number}
      </span>
      <h3 className="text-xl sm:text-2xl font-bold text-[#0E3321] mb-3.5 tracking-tight font-heading">
        {item.title}
      </h3>
      <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed font-normal">
        {item.description}
      </p>
    </>
  );

  return (
    <section
      id="why-rsc"
      className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto text-left">
        {/* Left-aligned Header Section */}
        <header className="mb-10 sm:mb-14 text-left max-w-3xl">
          <span className="block text-[#0E3321] font-bold text-[13px] sm:text-[14px] tracking-[0.16em] mb-3 text-left">
            Why RSCG
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15] font-heading mb-4 text-left">
            <span className="block text-[#0E3321]">A legacy built a</span>
            <span className="block text-[#0E3321]">
              future <span className="text-[#FFAA17]">evolving</span>.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Built through generations, shaping excellence, evolving with the industry.
          </p>
        </header>

        {/* Cards Container (Horizontally swipable on mobile, 2-Col Centered Wrap on md+) */}
        <div className="flex md:flex-wrap md:justify-center gap-4 sm:gap-5 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {whyRSCItems.map((item) => (
            <article
              key={item.number}
              className="w-[74vw] max-w-[290px] md:w-[calc(50%-12px)] md:max-w-none shrink-0 snap-start md:snap-align-none bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 md:p-10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1 text-left flex flex-col justify-between"
            >
              {renderCardContent(item)}
            </article>
          ))}
          <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

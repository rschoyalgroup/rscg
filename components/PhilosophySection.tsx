"use client";

import React from "react";
import Image from "next/image";

interface PhilosophyItem {
  number: string;
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  description: string;
}

const philosophyValues: PhilosophyItem[] = [
  {
    number: "01",
    title: "Responsibility",
    subtitle: "Commitment & trust",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/responsibility.png",
    description:
      "We take ownership of our commitments and recognise the trust our customers, partners and stakeholders place in us.",
  },
  {
    number: "02",
    title: "Integrity",
    subtitle: "Ethics & conduct",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/integrity.png",
    description:
      "We believe in doing business with honesty, transparency and ethical principles - without compromise.",
  },
  {
    number: "03",
    title: "Innovation",
    subtitle: "R&D & tech",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/innovation.png",
    description:
      "Continuous research and development drives our progress, helping us create better, smarter and more efficient milling solutions.",
  },
  {
    number: "04",
    title: "Empowerment",
    subtitle: "Made in India",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/empowerment.png",
    description:
      "We believe in strengthening Indian manufacturing and taking the quality of “Made in India” to global standards.",
  },
  {
    number: "05",
    title: "Community",
    subtitle: "Social impact",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/community.png",
    description:
      "We remain committed to creating meaningful economic and social value for the communities around us.",
  },
  {
    number: "06",
    title: "Fairness",
    subtitle: "Equal opportunity",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/fairness.png",
    description:
      "We believe in fair dealing, transparent relationships and opportunities that support sustainable, ethical growth.",
  },
  {
    number: "07",
    title: "Growth",
    subtitle: "Sustainable progress",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/growth.png",
    description:
      "We pursue responsible growth by creating long-term value for our customers, partners, employees and stakeholders.",
  },
  {
    number: "08",
    title: "Service",
    subtitle: "Lifelong partnership",
    color: "#063831",
    icon: "/images/about/philosophy/icons/v2/service.png",
    description:
      "We combine quality, responsiveness and dependable support to deliver a better experience throughout the customer journey.",
  },
];

export default function PhilosophySection() {
  const renderCard = (card: PhilosophyItem, idx: number) => {
    // Card 07 (idx 6) centers on lg by starting at column 2 of 6
    const colClasses =
      idx === 6
        ? "col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2"
        : "col-span-1 md:col-span-1 lg:col-span-2";

    return (
      <div
        key={card.number}
        title={card.description}
        className={`${colClasses} w-[72vw] max-w-[280px] md:w-full md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between cursor-default`}
      >
        <div className="space-y-1.5 pr-3">
          <span
            className="text-xs sm:text-sm font-bold tracking-wider block"
            style={{ color: card.color }}
          >
            {card.number}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight group-hover:text-slate-900 transition-colors">
            {card.title}
          </h3>
          <p className="text-[11px] sm:text-xs font-semibold text-slate-400 tracking-widest">
            {card.subtitle}
          </p>
        </div>
        <div className="shrink-0 pl-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ease-out">
            <Image
              src={card.icon}
              alt={card.title}
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="philosophy"
      className="w-full py-16 sm:py-24 bg-white border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-bold text-slate-600 tracking-wide mb-3">
            Our philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4 font-heading">
            Values that shape
            <br className="hidden sm:inline" /> how{" "}
            <span className="text-[#FFAA17]">we work</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            At R.S. Choyal Group, engineering discipline, operational excellence
            and ethical business practices shape how we work turning generations
            of experience and trust into lasting value for our customers,
            partners and communities.
          </p>
        </div>

        {/* 8 Cards (Horizontally swipable on mobile, 6-Column Grid on lg) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-8 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-8 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {philosophyValues.map((card, idx) => renderCard(card, idx))}
          <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LeaderCard {
  name: string;
  tag: string;
  description: string;
  image: string;
  link: string;
}

const leaders: LeaderCard[] = [
  {
    tag: "Co-founder & ex-chairman",
    name: "Late Mr. B. M. Choyal",
    description:
      "One of the founders who helped establish Choyal’s early foundation in indigenous emery stone and milling technology, setting the direction for generations of engineering.",
    image: "/images/about/leadership/B.M%20Choyal.jpg",
    link: "/ex-chairman",
  },
  {
    tag: "Co-founder & ex-managing director",
    name: "Late Shri R. D. Sharma",
    description:
      "A founding force behind the company’s growth, helping transform early manufacturing capabilities into a disciplined industrial enterprise.",
    image: "/images/about/leadership/R.D%20Sharma.jpg",
    link: "/ex-md",
  },
  {
    tag: "Chairman & managing director",
    name: "Mr. R. S. Choyal",
    description:
      "Carrying the legacy into a new era through advanced machinery, patented innovations, complete plants and digitally connected milling systems.",
    image: "/images/about/leadership/RS%20Choyal.jpg",
    link: "/leadership-ed",
  },
];

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#FBFBFA] border-t border-slate-200/50 scroll-mt-36"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.08em] text-[#0B2C1C] mb-3">
            Our leadership &amp; heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black tracking-tight text-[#0B2C1C] leading-[1.2] mb-4">
            A legacy that{" "}
            <br className="hidden sm:inline" />
            keeps <span className="text-[#FFAA17]">moving forward.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
            From the founders who established the foundation to the leadership shaping modern
            milling systems, each generation has expanded what Choyal can build, solve and deliver.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className={`w-[74vw] max-w-[290px] md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none ${
                idx === leaders.length - 1 && leaders.length % 2 === 1
                  ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-14px)] lg:col-span-1 lg:w-auto lg:justify-self-stretch"
                  : "md:w-auto"
              } bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div>
                {/* Portrait - Natural True Size without Cropping */}
                <div className="w-full bg-[#EAEAEA] overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto block opacity-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-6 sm:p-7 pb-4">
                  <div className="text-xs font-bold text-[#FFAA17] tracking-[0.06em] mb-2">
                    {leader.tag}
                  </div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 leading-snug mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {leader.description}
                  </p>
                </div>
              </div>

              {/* Read Story Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <Link
                  href={leader.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2C1C] group-hover:text-[#FFAA17] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
          <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

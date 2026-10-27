"use client";

import React from "react";
import LeaderGroups from "./LeaderGroups";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/50 scroll-mt-36"
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

        {/* Leadership cards, grouped into founders and current leadership */}
        <LeaderGroups />
      </div>
    </section>
  );
}

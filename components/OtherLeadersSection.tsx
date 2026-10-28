"use client";

import React from "react";
import LeaderGroups from "./LeaderGroups";

export default function OtherLeadersSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-black tracking-tight text-[#0B2C1C] leading-[1.2]">
            Our leadership
          </h2>
        </div>

        {/* Same grouped cards as the About page */}
        <LeaderGroups />
      </div>
    </section>
  );
}

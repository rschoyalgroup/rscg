"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { leaderGroups } from "./leadersData";

/**
 * Leadership cards grouped into two rows ("The Roots of Our Legacy" / "Leading the Legacy Forward").
 * Used on the About page and at the bottom of every leader's internal page.
 */
export default function LeaderGroups() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {leaderGroups.map((group) => (
        <div key={group.heading}>
          {/* Group heading with hairlines on both sides */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-black tracking-tight text-[#0B2C1C] shrink-0">
              {group.heading}
            </h3>
            <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[1100px]">
            {group.leaders.map((leader) => (
              <Link
                key={leader.name}
                href={leader.link}
                className="group flex bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Portrait */}
                <div className="w-[36%] sm:w-[38%] shrink-0 p-3 sm:p-4 pr-0 sm:pr-0 xl:p-0 xl:bg-[#EAEAEA] xl:self-stretch">
                  {/* Natural portrait ratio, so the photo is never cropped at the sides */}
                  <div className="rounded-xl xl:rounded-none overflow-hidden bg-[#EAEAEA]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-auto block opacity-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0 flex flex-col justify-between p-4 sm:p-6 lg:p-7">
                  <div>
                    <span className="block w-6 h-[2px] bg-[#FFAA17] mb-2.5" aria-hidden="true" />
                    <div className="text-[11px] sm:text-xs font-bold text-[#FFAA17] tracking-[0.06em] mb-1.5">
                      {leader.tag}
                    </div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B2C1C] leading-snug mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-4 sm:line-clamp-none">
                      {leader.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2C1C] group-hover:text-[#FFAA17] transition-colors mt-3">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

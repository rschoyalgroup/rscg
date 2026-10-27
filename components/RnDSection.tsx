"use client";

import React from "react";

interface RnDItem {
  number: string;
  title: string;
  description: string;
}

const rndCapabilities: RnDItem[] = [
  {
    number: "01",
    title: "Stone engineering & material testing",
    description:
      "Studying wear, strength, surface behaviour and material performance for demanding grinding applications.",
  },
  {
    number: "02",
    title: "Controls & automation",
    description:
      "Testing PLC and HMI systems, machine logic, recipes, diagnostics and automated responses before deployment.",
  },
  {
    number: "03",
    title: "Flow & process engineering",
    description:
      "Evaluating feeding, conveying, discharge and material movement to improve consistency across the milling process.",
  },
  {
    number: "04",
    title: "Plant-scale validation",
    description:
      "Taking concepts beyond the laboratory and testing them under real operating conditions before they become part of a working solution.",
  },
];

export default function RnDSection() {
  return (
    <section
      id="research-development"
      className="w-full py-16 sm:py-24 bg-slate-50 border-t border-slate-200/50 scroll-mt-28"
    >
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-600 tracking-wider mb-3">
                Research &amp; innovation
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#113a27] tracking-tight leading-[1.15] mb-5 font-heading">
                Where ideas are tested,
                <br />
                <span className="text-[#FFAA17]">refined and made repeatable.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At R.S. Choyal Group, research and development brings together abrasive science,
                mechanical engineering, automation, controls and plant operations. The focus is
                simple: understand what works, test it rigorously, and turn proven ideas into
                reliable milling solutions.
              </p>
              <p>
                Established in 2012 at Arjunpura, Ajmer, our dedicated R&amp;D Centre
                works closely with our manufacturing and engineering teams. From material
                behaviour and machine controls to plant-scale performance, every development
                is evaluated with practical application in mind.
              </p>
            </div>
          </div>

          {/* Right Column: 4-Item List */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {rndCapabilities.map((item) => (
              <div
                key={item.number}
                className="py-6 sm:py-7 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-8 group"
              >
                <span className="text-xs sm:text-sm font-bold text-[#FFAA17] tracking-wider shrink-0 pt-0.5">
                  {item.number}
                </span>
                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111827] tracking-tight group-hover:text-[#113a27] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

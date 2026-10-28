"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, Settings, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const facilitySpecs = [
  { label: "Capacity", value: "40 TPD", iconPath: "/images/facility-centre/icons/see-and-learn/capacity.png" },
  { label: "Purpose", value: "Experience Centre", iconPath: "/images/facility-centre/icons/see-and-learn/purpose.png" },
  { label: "Applications", value: "Machinery Demo / R&D / Training", iconPath: "/images/facility-centre/icons/see-and-learn/application.png" },
  { label: "Software", value: "Miller Lite PLC", iconPath: "/images/facility-centre/icons/see-and-learn/software.png" },
  { label: "Location", value: "Ajmer, Rajasthan", iconPath: "/images/facility-centre/icons/see-and-learn/location.png" },
];

const capabilities = [
  { title: "Machinery in action", desc: "See a wide range of milling machines running live.", iconPath: "/images/services/facility-center/icons/machinery_demo.png" },
  { title: "Research & development", desc: "Conduct trials, optimize processes, and innovate with our expertise.", iconPath: "/images/services/facility-center/icons/research_and_development.png" },
  { title: "Operator training", desc: "Hands-on training to build skills and improve operational excellence.", iconPath: "/images/services/facility-center/icons/operator_training.png" },
  { title: "Process evaluation", desc: "Evaluate performance and economics to make the right investment decision.", iconPath: "/images/services/facility-center/icons/process_evaluation.png" },
];

const supports = [
  {
    title: "Machinery\ndemonstration",
    desc: "See different flour milling machines in operation and understand their real-world performance.",
    imgPath: "/images/facility-centre/facility-support/machinery-demonstration.png"
  },
  {
    title: "R&D &\nproduct trials",
    desc: "Test process parameters, evaluate yield, quality, and consistency to find the best outcome.",
    imgPath: "/images/facility-centre/facility-support/randd-and-product-trials.png"
  },
  {
    title: "Training &\nauditing",
    desc: "Practical operator training and plant audits to ensure peak performance and compliance.",
    imgPath: "/images/facility-centre/facility-support/training-and-auditing.png"
  }
];

const gallery = [
  { title: "Advanced control & monitoring", imgPath: "/images/facility-centre/inside-facility/advanced-control-and-monitoring.png" },
  { title: "State-of-the-art infrastructure", imgPath: "/images/facility-centre/inside-facility/state-of-the-art-infrastructure.png" },
  { title: "Expert team & training", imgPath: "/images/facility-centre/inside-facility/expert-team-and-training.png" },
  { title: "Sustainable & green operations", imgPath: "/images/facility-centre/inside-facility/sustainable-operations.png" },
  { title: "Modern milling technology", imgPath: "/images/facility-centre/inside-facility/modern-milling-technology.png" }
];

export default function FacilityCentrePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Standardized responsive hero */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/hero/facility-center/facility-center-desktop-cropped.png"
                alt="40 TPD Flour Milling Facility Centre"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Dark-charcoal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
            </div>

            {/* Mobile Background Image (1079x1920 -> 9:16) */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/hero/facility-center/facility-center-mobile.png"
                alt="40 TPD Flour Milling Facility Centre"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Mobile gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/65 to-[#0B1510]/40"></div>
            </div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
            <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                Facility centre
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                40 TPD flour milling facility centre
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                A hands-on experience centre where you can see machinery in action, validate solutions, conduct R&amp;D, and build operator capability through practical training.
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => document.getElementById('facility-overview')?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
                >
                  EXPLORE THE FACILITY <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
        <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-row divide-x divide-slate-100 overflow-hidden">

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">40 TPD</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Pilot plant capacity</p>
            </div>

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">Machinery in action</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">Live machine demonstrations</p>
            </div>

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">Train. Test. Validate.</h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">All in one place</p>
            </div>

          </div>
        </div>

        {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
        <div className="block md:hidden relative z-30 -mt-13 w-full">
          <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">40 TPD</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Pilot plant capacity</p>
            </div>

            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Machinery in action</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Live machine demonstrations</p>
            </div>

            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Train. Test. Validate.</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">All in one place</p>
            </div>

            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </div>

        <section id="facility-overview" className="w-full pt-6 sm:pt-12 md:pt-10 lg:pt-14 xl:pt-16 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 relative md:-mt-12 lg:-mt-16">

          {/* See, Test & Learn Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-stretch mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-[#133020] leading-tight pb-4 border-b-2 border-[#D3994B]/30 inline-block">
                See, test & learn before you invest
              </h2>
              <div className="text-slate-600 space-y-5 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Our <span className="whitespace-nowrap font-bold text-slate-800">40 TPD</span> Flour Milling Facility Centre in Ajmer is more than a pilot plant - it is an experience centre designed to help you make confident, informed investment decisions.
                </p>
                <p>
                  See a wide range of flour-milling machines operating in real conditions, assess process performance, conduct research and development trials, and provide practical training to your operators and technical teams.
                </p>
                <p>
                  From process trials and product development to skill-building and plant evaluation, the facility gives you the opportunity to validate the right solution before making a larger investment.
                </p>
              </div>
            </div>

            {/* Specifications Card */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center">
              <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-4 sm:gap-y-0 md:gap-x-10 lg:gap-x-0 lg:my-auto">
                {facilitySpecs.map((spec, idx) => (
                  <li key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 sm:py-4 lg:py-5 sm:first:pt-0 md:[&:nth-child(2)]:pt-0 lg:[&:nth-child(2)]:pt-5 sm:border-b border-slate-100 last:border-0 last:pb-0 last:col-span-2 sm:last:col-span-1 md:last:col-span-2 lg:last:col-span-1">
                    <div className="flex items-center gap-3 sm:w-48 md:w-32 lg:w-40 xl:w-48 shrink-0">
                      <img src={spec.iconPath} alt={spec.label} className="w-5 h-5 object-contain opacity-80" />
                      <span className="text-xs sm:text-base font-bold text-slate-500 sm:text-slate-700">{spec.label}</span>
                    </div>
                    <span className="text-sm sm:text-base font-black text-[#133020]">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Capabilities Highlight Banner */}
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[32px] p-6 sm:p-8 lg:p-10 mb-16 shadow-xl border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4 xl:divide-x divide-white/10">
              {capabilities.map((cap, idx) => (
                <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? "xl:pl-6" : ""}`}>
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-3 shrink-0 shadow-sm">
                    <img src={cap.iconPath} alt={cap.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1 leading-tight">{cap.title}</h4>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How the Facility Supports You */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="h-px w-8 sm:w-16 bg-[#D3994B]/30"></div>
              <h3 className="text-[11px] sm:text-xs font-black tracking-[0.12em] sm:tracking-[0.15em] text-[#D3994B] text-center whitespace-nowrap">
                How the facility supports you
              </h3>
              <div className="h-px w-16 bg-[#D3994B]/30"></div>
            </div>

            <div className="flex lg:grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 lg:mx-0 lg:px-0 scroll-pl-6 sm:scroll-pl-12 lg:scroll-pl-0 pb-4 lg:pb-0">
              {supports.map((item, idx) => (
                <div key={idx} className="w-[74vw] max-w-[290px] lg:w-auto lg:max-w-none shrink-0 lg:shrink snap-start lg:snap-align-none bg-white rounded-[24px] overflow-hidden flex flex-col sm:flex-row shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow group">
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto sm:h-full relative overflow-hidden shrink-0">
                    <img src={item.imgPath} alt={item.title.replace('\n', ' ')} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-5 sm:p-5 lg:p-6 flex flex-col justify-center space-y-3 sm:w-3/5">
                    <h4 className="font-heading font-black text-[#133020] text-lg whitespace-pre-line leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="w-2 shrink-0 lg:hidden" aria-hidden="true" />
            </div>
          </div>

          {/* Inside the Facility */}
          <div className="mb-20">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#133020] mb-8">
              Inside the facility
            </h3>
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
              {gallery.map((item, idx) => (
                <div key={idx} className="w-[68vw] max-w-[260px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src={item.imgPath} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h4 className="text-xs sm:text-sm text-white font-bold leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-xl border border-white/10">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 max-w-2xl relative z-10 text-center lg:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 p-3.5">
                <img src="/images/services/facility-center/icons/schedule_visit.png" alt="Schedule a Visit" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-3xl font-heading font-black text-white leading-tight">
                  Want to visit our facility centre?
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-normal">
                  Book a guided visit to explore machinery, evaluate performance, and train your team.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm tracking-wide cursor-pointer whitespace-nowrap"
              >
                <span>Discuss your requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}

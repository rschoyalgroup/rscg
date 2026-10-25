"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function ConsultancyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroProofPoints = [
    {
      title: "Industry expertise",
      desc: "Decades of experience in flour milling"
    },
    {
      title: "Data driven approach",
      desc: "Practical solutions backed by analysis"
    },
    {
      title: "End-to-end support",
      desc: "From planning to performance improvement"
    },
    {
      title: "Sustainable growth",
      desc: "Build efficient, future-ready milling businesses"
    }
  ];

  const valueServices = [
    {
      title: "Market entry strategy",
      desc: "Assess opportunities, demand, competition and regulations to build a winning entry strategy.",
      icon: "/consultancy/how-we-add-value/market_entry_and_strategy-clean.png"
    },
    {
      title: "Plant planning & design",
      desc: "Optimize plant layout, capacity, machinery selection and material flow for maximum efficiency.",
      icon: "/consultancy/how-we-add-value/Plant_Planning___Design-clean.png"
    },
    {
      title: "Process optimization",
      desc: "Improve yield, quality, capacity and energy efficiency through process improvements.",
      icon: "/consultancy/how-we-add-value/Process_Optimization-clean.png"
    },
    {
      title: "Raw material & sourcing",
      desc: "Guidance on wheat quality, sourcing strategy and inventory management for consistent production.",
      icon: "/consultancy/how-we-add-value/raw_material-clean.png"
    },
    {
      title: "Cost & financial management",
      desc: "Control costs, reduce wastage and improve profitability with smart financial planning.",
      icon: "/consultancy/how-we-add-value/sustainable_growth-clean.png"
    },
    {
      title: "Operations & people",
      desc: "Streamline operations, SOPs and workforce management for higher productivity.",
      icon: "/consultancy/how-we-add-value/Operations___People-clean.png"
    }
  ];

  const clientTypes = [
    { label: "New entrants", icon: "/consultancy/who-we-work-with/new-entrant.png" },
    { label: "Existing millers", icon: "/consultancy/who-we-work-with/existing_flour_mill_owner-clean.png" },
    { label: "Investors", icon: "/consultancy/who-we-work-with/investors_and_entrpreneurs-clean.png" },
    { label: "Cooperatives", icon: "/consultancy/who-we-work-with/farmers_and_groups-clean.png" },
    { label: "Agri businesses", icon: "/consultancy/who-we-work-with/agribusinesses-clean.png" },
    { label: "Food brands", icon: "/consultancy/who-we-work-with/food_brands-clean.png" }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header onRequestCallback={() => setIsModalOpen(true)} />

        {/* Hero Section - Standardized responsive hero */}
        <section className="w-full relative z-10 bg-[#0B1510] text-white aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex flex-col justify-center">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/consultancy/consultancy_desktop_cropped.png"
                alt="Flour Milling Consultancy"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/90 via-[#0B1510]/50 to-transparent z-10 w-full" />
            </div>

            {/* Mobile Background Image (1080x1920) */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/consultancy/consultancy_mobile.png"
                alt="Flour Milling Consultancy"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/90 via-[#0B1510]/55 to-transparent z-10 w-full" />
            </div>
          </div>

          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 flex-1 flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
            <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Standard Eyebrow */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                Services
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                Flour milling consultancy
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Expert guidance to help you enter, scale, and excel in the flour milling industry. Strategic partnership from concept to continuous improvement.
              </p>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
                >
                  EXPLORE CONSULTANCY <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          {/* Desktop Proof Points White Container - Full Width Overlapping Hero Bottom */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full px-6 sm:px-12 lg:px-16 xl:px-24 z-30 translate-y-1/2">
            <div className="w-full bg-white rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-slate-100">
                <div className="grid grid-cols-4 divide-x divide-slate-200">
                  {heroProofPoints.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 cursor-default text-left space-y-1.5"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1510] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mobile Proof Points - Horizontal Swipeable Slider */}
        <div className="block md:hidden relative z-30 -mt-11 w-full">
          <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
            {heroProofPoints.map((item, idx) => (
              <div
                key={idx}
                className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5"
              >
                <h3 className="text-base font-bold text-[#0B1510] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* How We Add Value Section */}
        <section className="w-full pt-6 sm:pt-12 md:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
              How we add value
            </h2>
            <div className="flex items-center justify-center gap-1">
              <div className="w-8 h-px bg-[#D3994B]" />
              <div className="w-1.5 h-1.5 rounded-sm bg-[#D3994B] transform rotate-45" />
              <div className="w-8 h-px bg-[#D3994B]" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Comprehensive milling consultancy services tailored to drive measurable operational and financial growth.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pt-2 pb-6 md:py-0">
            {valueServices.map((service, idx) => (
              <div
                key={idx}
                className="w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none bg-white border border-slate-200/70 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-[#133020]/20 transition-all group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-[#F0F7F3] rounded-2xl flex items-center justify-center border border-[#133020]/10 p-3 sm:p-3.5 group-hover:scale-105 group-hover:bg-[#E8F5E9] transition-all duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <h4 className="font-heading font-black text-[#133020] text-lg sm:text-xl">
                    {service.title}
                  </h4>
                  <div className="w-8 h-[2px] bg-[#D3994B]" />
                  <p className="text-sm sm:text-[15px] text-slate-600 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>
        </section>

        {/* Why Work With Us Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] px-5 py-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Homepage CTA */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="lg:w-1/2 space-y-4 text-center lg:text-left relative z-10">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
                Why work with us?
              </h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                We combine our deep domain knowledge with hands-on industry experience to deliver practical, result-oriented solutions tailored to your business goals.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-3 gap-2 sm:gap-4 w-full divide-x divide-white/20 relative z-10">
              {[
                { value: "60+", label: "Years milling and engineering experience" },
                { value: "25+", label: "Countries international market exposure" },
                { value: "275+", label: "Turnkey projects delivered" },
              ].map((stat) => (
                <div key={stat.value} className="flex flex-col items-center text-center px-1.5 sm:px-4">
                  <span className="text-[26px] sm:text-5xl lg:text-6xl font-black text-[#f7b032] font-heading leading-none">
                    {stat.value}
                  </span>
                  <span className="text-white text-[11.5px] sm:text-base font-semibold mt-2 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* From Vision to Value Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-16">
          <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-md border border-slate-100 flex flex-col md:flex-row items-stretch">

            <div className="md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
              <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#133020]">
                From vision to value
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Whether you are setting up your first mill, expanding capacity, or looking to improve performance, our consultancy helps you make the right decisions and achieve measurable results.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap w-full sm:w-auto"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative min-h-[340px] lg:min-h-[420px]">
              <Image
                src="/images/consultancy/vision-to-value/vision-to-value.png"
                alt="From Vision to Value"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-24">
          <div className="w-full bg-[#F0F4F2] rounded-[24px] p-8 sm:p-12 lg:p-14 border border-[#E1EAE5]">
            <div className="text-center mb-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#133020]">
                Who we work with
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
                Partnering with organizations across the grain and milling value chain.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
              {clientTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-[#E1EAE5]/60 hover:border-[#133020]/20 transition-all flex flex-col items-center justify-between group"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#E8F5E9]/50 rounded-2xl p-3.5 sm:p-4 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E8F5E9] transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#133020] mt-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

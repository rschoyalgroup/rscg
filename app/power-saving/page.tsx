"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

export default function PowerSavingPage() {
  const { addToQuote } = useQuote();

  const products = [
    {
      name: "Wonder Mill",
      tag: "Save up to 30%",
      desc: "A high-efficiency automated stone mill engineered for improved output, consistent flour quality, and lower power usage.",
      img: "/images/power-saving/wondermill.png",
      href: "/flour-mills/wonder-mill",
      code: "WONDERMILL"
    },
    {
      name: "Wonder Miller",
      tag: "Save up to 30%",
      desc: "An intelligent PLC-based automation system designed to optimize stone milling, maximize productivity, and ensure consistent grinding performance.",
      img: "/images/power-saving/wondermiller.png",
      href: "/power-saving/wonder-miller",
      code: "WONDERMILLER"
    },
    {
      name: "iQuadra",
      tag: "Save up to 30%",
      desc: "A smart mill solution engineered to deliver up to 30% power savings, higher productivity, and precision-controlled flour production.",
      img: "/images/power-saving/iquadra.png",
      href: "/flour-mills/iquadra-mill",
      code: "IQUADRA"
    },
    {
      name: "Floura",
      tag: "Save 15-30%",
      desc: "A versatile stone flour milling solution designed for reliable grinding, superior flour quality, and efficient daily operation.",
      img: "/images/power-saving/floura.png",
      href: "/vending-machines",
      code: "FLOURA"
    },
    {
      name: "Emery Stone Dresser",
      tag: "3-4 min per groove dressed",
      desc: "A precision stone dressing machine engineered to restore grinding efficiency, extend stone life, and minimize production downtime.",
      img: "/images/power-saving/emery-stone-dresser.png",
      href: "/emery-stones/emery-stone-dresser",
      code: "STONEDRESSER"
    },
    {
      name: "Neomatic",
      tag: "Save 10-30%",
      desc: "A fully automated pneumatic conveying system designed for efficient material handling, reliable operation, and reduced energy consumption.",
      img: "/images/power-saving/neomatic.png",
      href: "/power-saving/neomatic",
      code: "NEOMATIC"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/power-saving/power-saving-desktop-cropped.png" 
              alt="Power Saving Control System" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark-charcoal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>

          {/* Mobile Background Image (9:16) */}
          <div className="block md:hidden absolute inset-0">
            <Image 
              src="/hero/power-saving/power-saving-mobile.png" 
              alt="Power Saving Control System" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Mobile gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
          <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
              <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
              Power saving
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Energy saving solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Engineered systems and intelligent controls that reduce power consumption, improve efficiency, and lower operating costs across the complete milling plant.
            </p>
            <div className="pt-2 sm:pt-4">
              <Link 
                href="#products" 
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7 flex flex-row items-center justify-between gap-4 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Smart systems</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Intelligent controls</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Lower consumption</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Up to 30% savings</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Higher performance</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Maximized output</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10 mb-2">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Smart systems</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Intelligent controls</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Lower consumption</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Up to 30% savings</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Higher performance</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Maximized output</p>
            </div>
          </div>
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Optimize Energy Consumption */}
      <section className="w-full pt-4 md:pt-2 xl:pt-24 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Left */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Maximum Output. Minimum Energy.
            </h2>
            <div className="w-16 h-1 bg-[#eab308] mb-6"></div>
            
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
              <p>
                With rising power costs, energy optimization in flour milling has become critical. RS Choyal Group provides specialized systems that balance grinding pressure, motor speed, grain flow, and process loads to achieve maximum output with minimum electrical consumption.
              </p>
              <p>
                Our energy-efficient electronics, smart PLC-driven feeding systems, optimized transmission components, and intelligent control systems help reduce friction losses, load imbalance, and unnecessary power spikes. This enables smoother operation and better overall plant efficiency.
              </p>
              <p>
                High-efficiency drives, digital control loops, and advanced software work together to reduce energy waste, protect operating margins, and improve long-term plant reliability.
              </p>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-heading font-extrabold text-[#0a3118] mb-6">
                Quick links
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "/about" },
                  { label: "Products", href: "/catalog" },
                  { label: "Turnkey solutions", href: "/turnkey-projects" },
                  { label: "Power saving", href: "/power-saving" },
                  { label: "Flour mill", href: "/flour-mills" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="flex items-center gap-3 text-slate-700 hover:text-[#0a3118] font-bold transition-colors group">
                      <div className="text-[#eab308] group-hover:translate-x-1 transition-transform">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advanced Milling Products */}
      <section id="products" className="w-full py-20 bg-slate-50 border-t border-slate-200/60 px-6 sm:px-12 lg:px-16 xl:px-24 scroll-mt-24">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Our advanced milling products
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Optimized and Automated solutions for your milling needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 w-full">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href={product.href}
              className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
            >
              {/* Image Area - Clean rounded background matching catalog page */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-1 sm:p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Card Content - Responsive sizing for 2-col mobile & 3-col desktop */}
              <div className="p-3.5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-base text-slate-500 mt-1.5 sm:mt-3 line-clamp-2 leading-relaxed font-normal">
                    {product.desc}
                  </p>
                </div>

                {/* Card Bottom Link */}
                <div className="mt-3 sm:mt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Key Benefits Strip */}
      <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white border-b border-slate-200/60">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {[
            { title: "Lower power consumption", icon: "/images/power-saving/lower_power_consumption.png" },
            { title: "Improved efficiency", icon: "/images/power-saving/Improved_Efficiency.png" },
            { title: "Reduced wear & maintenance", icon: "/images/power-saving/Reduced_Wear_Maintenance.png" },
            { title: "Greener operations, lower footprint", icon: "/images/power-saving/Greener_Operations_Lower_Footprint.png" }
          ].map((benefit, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}>
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src={benefit.icon} alt={benefit.title} fill className="object-contain" />
              </div>
              <h4 className="font-bold text-[#0a3118] text-sm leading-snug">{benefit.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Power Saving Setup */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50">
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-green-500"></div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Benefits of power saving setup
            </h2>
            <div className="h-px w-12 bg-green-500"></div>
          </div>
          <p className="text-slate-500 font-medium max-w-2xl">
            Pioneering mechanical and control solutions engineered for real savings.
          </p>
        </div>

        <div className="md:w-full flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {[
            {
              title: "Improved yield",
              desc: "Stable and optimized grinding preserves grain structure, leading to higher recovery rates and less heat-related waste.",
              icon: "/images/power-saving/Improved_Efficiency.png" 
            },
            {
              title: "Improved lifetime",
              desc: "Balanced loads reduce thermal stress and mechanical vibration on key components, extending equipment life.",
              icon: "/images/power-saving/improved_lifetime.png"
            },
            {
              title: "Reduced operational cost",
              desc: "Intelligent load control limits spikes and optimizes power factor, saving up to 30-40% on monthly electricity bills.",
              icon: "/images/power-saving/reduced_operation_cost.png"
            }
          ].map((benefit, idx) => (
            <div key={idx} className="w-[74vw] max-w-[290px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex gap-4 sm:gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 relative transform group-hover:-translate-y-2 transition-transform duration-300">
                <Image src={benefit.icon} alt={benefit.title} fill className="object-contain drop-shadow-sm" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-heading font-extrabold text-[#0a3118] mb-2 sm:mb-3">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
          <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f6f6f4] relative z-10">
        <div className="w-full mx-auto">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="max-w-2xl space-y-2.5 relative z-10 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-white leading-tight tracking-tight">
                Save energy. Save costs. Increase efficiency.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed">
                Upgrade your plant with intelligent power-saving solutions from RS Choyal Group.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

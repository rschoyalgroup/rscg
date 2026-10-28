"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Disc, ShieldCheck, Crosshair, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EmeryStones() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1c2722] font-sans relative overflow-hidden">
      
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/emerystone/emerystone_desktop_cropped.png" 
              alt="Emery Stones Division" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark-charcoal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>

          {/* Mobile Background Image (1080x1920 -> 9:16) */}
          <div className="block md:hidden absolute inset-0">
            <Image 
              src="/hero/emerystone/emerystone_mobile.png" 
              alt="Emery Stones Division" 
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
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
              <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
              Emery stones division
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Emery Stones
            </h1>
            
            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              High-performance emery stones engineered for precision grinding, consistent flour quality, and long service life across commercial stone mills.
            </p>

            {/* CTA */}
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE EMERY STONES <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-row divide-x divide-slate-100 overflow-hidden">
          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><Crosshair className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Precision grinding</h3>
            <p className="text-xs text-slate-500 leading-relaxed">High-performance emery stones engineered for precise grinding.</p>
          </div>
          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><Sparkles className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Consistent finish</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Consistent flour quality across commercial stone mills.</p>
          </div>
          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Long-lasting performance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Long service life across commercial stone mills.</p>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 -mt-13 w-full">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><Crosshair className="w-6 h-6" /></div>
            <h3 className="font-bold text-base text-slate-800 leading-snug">Precision grinding</h3>
            <p className="text-xs text-slate-500 leading-relaxed">High-performance emery stones engineered for precise grinding.</p>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><Sparkles className="w-6 h-6" /></div>
            <h3 className="font-bold text-base text-slate-800 leading-snug">Consistent finish</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Consistent flour quality across commercial stone mills.</p>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><ShieldCheck className="w-6 h-6" /></div>
            <h3 className="font-bold text-base text-slate-800 leading-snug">Long-lasting performance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Long service life across commercial stone mills.</p>
          </div>
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Editorial Quote Section */}
      <section className="w-full pb-10 pt-2 md:pt-4 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 border-b border-slate-200/50 md:-mt-12 lg:-mt-14 relative z-20">
        <div className="w-full max-w-[1440px] mx-auto text-center mt-6">
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-medium italic">
            "Your favourite recipe will be made with the great taste of 100% whole grain goodness and all the nutrition from every grain with Our flour mills."
          </p>
        </div>
      </section>

      {/* Select Category Grid */}
      <section id="categories" className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
              Select your category
            </h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-8 max-w-7xl mx-auto">
            {/* Category 1: Daniya Type */}
            <Link 
              href="/emery-stones/daniya-type"
              className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                <img 
                  src="/emery-stone-dresser/daniya_emery_stone.png" 
                  alt="Horizontal Emery Stones - Daniya Type"
                  className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5 sm:p-6 text-left flex-1 flex flex-col">
                <h3 className="text-sm sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                  Horizontal emery stones - Daniya type
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 sm:mt-2 font-normal leading-relaxed line-clamp-2">
                  Designed and manufactured with premium abrasives to maintain natural wheat aroma & taste.
                </p>
                <div className="mt-auto pt-3 sm:pt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Category 2: Agate/Sheller Type */}
            <Link 
              href="/emery-stones/agate-sheller-type"
              className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                <img 
                  src="/emery-stone-dresser/agate_emery_stone.png" 
                  alt="Horizontal Emery Stones - Agate/Sheller Type"
                  className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5 sm:p-6 text-left flex-1 flex flex-col">
                <h3 className="text-sm sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                  Horizontal emery stones - Agate/sheller type
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 sm:mt-2 font-normal leading-relaxed line-clamp-2">
                  Agate shelling stones optimized for de-husking, pulse splitting, and industrial mill pre-cleaning.
                </p>
                <div className="mt-auto pt-3 sm:pt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Category 3: Emery Stone Dresser */}
            <Link 
              href="/emery-stones/emery-stone-dresser"
              className="col-span-2 lg:col-span-1 w-[calc(50%-0.4375rem)] sm:w-[calc(50%-1rem)] lg:w-full mx-auto group flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-2xl hover:border-brand-primary/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                <img 
                  src="/emery-stone-dresser/emery_stone_dresser.png" 
                  alt="Emery Stone Dresser"
                  className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3.5 sm:p-6 text-left flex-1 flex flex-col">
                <div>
                  <h3 className="text-sm sm:text-xl font-heading font-extrabold text-slate-800 group-hover:text-brand-primary transition-colors leading-snug">
                    Emery stone dresser
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1.5 sm:mt-2 font-normal leading-relaxed line-clamp-2">
                    Engineered to restore and maintain the cutting profile of emery stones for consistent performance.
                  </p>
                </div>
                <div className="mt-auto pt-3 sm:pt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                  <span>View Product</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

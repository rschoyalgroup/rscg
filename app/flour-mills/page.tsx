"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Cpu, Settings2, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { flourMillsProducts } from "./flourMillsData";

export default function FlourMills() {
  const router = useRouter();
  const productsSectionRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    {
      name: "Digital Mills",
      image: "/category-selection-img/digital_supplementimg.png",
      desc: "Touch screen PLC-driven smart grinders.",
      filter: "Digital Mills"
    },
    {
      name: "Semi-Automatic",
      image: "/category-selection-img/semiautomatic_supplementalimg.png",
      desc: "Sensor-controlled modern mill plants.",
      filter: "Semi-Automatic"
    },
    {
      name: "Horizontal Mills / Sheller",
      image: "/category-selection-img/horizontalmill_supplementimg.png",
      desc: "High capacity gear and pulley drive experts.",
      filter: "Horizontal Mills / Sheller"
    }
  ];

  const allowedProductIds = [
    "wonder-mill",
    "horizontal-mill",
    "ultra-mini-horizontal-mill",
    "iquadra-mill",
    "atta-expert"
  ];

  const flourMillsMainProducts = allowedProductIds
    .map(id => flourMillsProducts.find(p => p.id === id))
    .filter((p): p is (typeof flourMillsProducts)[0] => Boolean(p));

  const filteredProducts = activeTab === "All" 
    ? flourMillsMainProducts 
    : flourMillsMainProducts.filter(p => p.category === activeTab);

  const handleCategorySelect = (categoryFilter: string) => {
    setActiveTab(categoryFilter);
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary/20">
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/flourmill/flourmill_desktop_cropped.png" 
              alt="Flour Milling Plants" 
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
              src="/hero/flourmill/flourmill_mobile.png" 
              alt="Flour Milling Plants" 
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
              Commercial milling
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Flour mills & grinding plants
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Advanced stone milling technology engineered for high-capacity continuous production, uniform flour quality, and long-term reliability.
            </p>
            
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={() => productsSectionRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-row divide-x divide-slate-100 overflow-hidden">
          
          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><Cpu className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Digital mills</h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">Touch screen PLC-driven smart grinders for high capacity and efficiency.</p>
          </div>

          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><Settings2 className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Semi-automatic & sheller mills</h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">Sensor-controlled modern mill plants engineered for precision grinding.</p>
          </div>

          <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-3"><Wifi className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-2">Operate from anywhere</h3>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">Track status and remote working easily with connected milling technology.</p>
          </div>

        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 -mt-13 w-full">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><Cpu className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Digital mills</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">Touch screen PLC-driven smart grinders for high capacity and efficiency.</p>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><Settings2 className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Semi-automatic &amp; sheller mills</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">Sensor-controlled modern mill plants engineered for precision grinding.</p>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5">
            <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><Wifi className="w-6 h-6" /></div>
            <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Operate from anywhere</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">Track status and remote working easily with connected milling technology.</p>
          </div>

          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      <section className="pt-6 sm:pt-12 md:pt-6 xl:pt-16 pb-24 bg-slate-50 relative md:-mt-12 lg:-mt-16">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-850 tracking-tight">
              Select your category
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our specific engineering ranges to find the right grinding solution.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-auto md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pt-2 pb-6 md:py-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat.filter)}
                className="w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/70 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer"
              >
                <div className="relative w-full aspect-square sm:aspect-[4/3] bg-slate-50 border-b border-slate-100">
                  <Image 
                    src={cat.image} 
                    alt={cat.name}
                    fill
                    className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 sm:p-8 w-full flex flex-col items-center">
                  <h3 className="font-heading font-bold text-slate-800 group-hover:text-brand-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </button>
            ))}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>

        </div>
      </section>

      <section ref={productsSectionRef} className="py-24 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 space-y-12">
          
          {/* Tab Filter bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-slate-200/60 pb-6">
            {["All", "Digital Mills", "Semi-Automatic", "Horizontal Mills / Sheller"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                  activeTab === tab
                    ? "bg-brand-primary text-white scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap justify-center gap-3.5 sm:gap-6 lg:gap-8 pt-4 w-full">
            {filteredProducts.map((prod) => (
              <Link
                key={prod.id}
                href={`/flour-mills/${prod.id}`}
                className="w-[calc(50%-7px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.34px)] group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                  <span className="hidden sm:inline-block absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-[10px] font-black text-brand-primary px-2.5 py-1 rounded-full border border-slate-200/50 shadow-sm">
                    {prod.category}
                  </span>
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                  <Image 
                    src={prod.heroImage} 
                    alt={prod.title} 
                    fill
                    className="object-contain p-3 sm:p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>

                <div className="p-3.5 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-xs sm:text-base text-slate-500 mt-1.5 sm:mt-3 line-clamp-2 leading-relaxed font-normal">
                      {prod.desc}
                    </p>
                  </div>
                  
                  <div className="mt-3 sm:mt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                    <span>View Product</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Link to Contact CTA Banner */}
      <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 relative z-10">
        <div className="w-full mx-auto">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="max-w-2xl space-y-2.5 relative z-10 text-center lg:text-left">
              <span className="text-xs font-bold text-[#f5a623] tracking-widest">
                Get in touch
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-white leading-tight tracking-tight">
                Ready to submit specifications for a proposal?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed">
                Tell us about your processing space, layout constraints, power limits, and capacity requirements. Our technical sales team will compile a layout and detailed pricing offer.
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
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { PackageCheck, MessageCircle, CheckCircle, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmeryCTASection from "@/components/EmeryCTASection";
import { useQuote } from "@/components/QuoteContext";

interface StoneSize {
  name: string;
  code: string;
  thickness: string;
  weight: string;
  recommendation: string;
}

export default function AgateShellerTypeStones() {
  const { addToQuote } = useQuote();

  const sizes: StoneSize[] = [
    { name: "1200 mm / 30\"", code: "1200MM", thickness: "260 mm", weight: "approx. 495 kg", recommendation: "Large-Scale Soybean Milling" }
  ];

  const handleAddToQuote = (sizeItem: StoneSize) => {
    const itemKey = `emery-stone-agate-${sizeItem.code.toLowerCase()}`;

    addToQuote({
      id: itemKey,
      name: `Horizontal Emery Stones - Agate/Sheller Type (${sizeItem.name})`,
      image: "/emery-stone-dresser/agate_emery_stone.png",
      category: "Emery Stones",
      size: sizeItem.code
    }, 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb] text-[#1c2722] font-sans relative overflow-x-clip">

      {/* Background decoration */}

      <Header />

      {/* Main Content Section */}
      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-16 flex-1 relative z-10">

        {/* Hero Product Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-start gap-6 sm:gap-8 xl:gap-12 bg-white p-5 sm:p-8 xl:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">

          {/* Left: Images */}
          <div className="flex flex-col gap-6 xl:sticky xl:top-28 self-start h-fit w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] xl:aspect-auto xl:h-[calc(100vh-11rem)] xl:min-h-[280px] xl:max-h-[480px] bg-white rounded-2xl flex items-center justify-center p-8 border border-slate-100 shadow-xs">
              <span className="absolute top-6 left-6 z-10 bg-slate-100 text-[10px] font-bold text-slate-500 px-3 py-1.5 rounded-full border border-slate-200">
                Emery stones
              </span>
              <img
                src="/emery-stone-dresser/agate_emery_stone.png"
                alt="Agate/Sheller Type Horizontal Emery Stones"
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
              Horizontal emery stones
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-[#14663a] mb-6">
              Agate / sheller type
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-sm sm:text-base font-medium">
              These stones are primarily used in soybean and oil extraction plants for breaking soybeans and similar products. Choyal Emery Stones are designed and manufactured with high quality emery & grain to maintain aroma & taste of the flour. Our Emery stones are made on an automatic casting plant to maintain standards and quality. Our high quality emery stones are globally accepted.
            </p>

            {/* Key Performance Advantages */}
            <div className="space-y-4 mb-10 pb-10 border-b border-slate-200/60">
              <h3 className="text-xs font-bold text-slate-400 tracking-widest">
                Key performance advantages
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Preserves grain aroma and vital proteins",
                  "Perfect mechanical balancing reduces noise",
                  "Premium hard binders for extreme longevity"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enquiry & trust tags (shown before size options) */}
              {/* WhatsApp Enquiry Button */}
            <div>
              <Link
                href={`https://wa.me/919240289259?text=${encodeURIComponent('Hello, I am interested in Horizontal Emery Stones - Agate/Sheller Type and would like to receive more details.')}`}
                className="h-12 w-full flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp enquiry
              </Link>
            </div>

            <div className="flex flex-nowrap sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 pt-3 mb-8 pb-8 border-b border-slate-200/60">
              <div className="flex-1 sm:flex-none min-w-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-1.5 py-2 sm:px-3.5 rounded-xl text-center">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#1eb557] shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-bold text-slate-700 leading-tight">1 year warranty</span>
              </div>
              <div className="flex-1 sm:flex-none min-w-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-1.5 py-2 sm:px-3.5 rounded-xl text-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1eb557] shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-bold text-slate-700 leading-tight">Worldwide delivery</span>
              </div>
              <div className="flex-1 sm:flex-none min-w-0 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-1.5 py-2 sm:px-3.5 rounded-xl text-center">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1eb557] shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-bold text-slate-700 leading-tight">After sales support</span>
              </div>
            </div>
            {/* Select Size & Options */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-heading font-extrabold text-slate-800">
                  Select size & options
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Select your required sheller stone size parameters to add to your enquiry list.
                </p>
              </div>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {sizes.map((sizeItem) => (
                  <div
                    key={sizeItem.code}
                    className="p-3.5 sm:p-4 border border-slate-100 rounded-2xl bg-slate-50/50 flex flex-row items-center justify-between gap-3 sm:gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">{sizeItem.name} Sheller Pair</h4>
                      <span className="text-[10px] text-brand-primary font-bold tracking-wider block pt-0.5">
                        Best for: {sizeItem.recommendation}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 justify-end">
                      <button
                        onClick={() => handleAddToQuote(sizeItem)}
                        className="bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-4 py-2.5 rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-[0_4px_14px_rgba(247,176,50,0.3)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] whitespace-nowrap"
                      >
                        <PackageCheck className="h-3.5 w-3.5 text-slate-900" />
                        <span>Add to quote</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Link to Contact CTA Banner */}
      <EmeryCTASection />

      <Footer />

    </div>
  );
}

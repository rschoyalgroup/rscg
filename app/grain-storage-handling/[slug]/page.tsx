"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { CheckCircle2, CheckCircle, ShieldCheck, MessageCircle, Settings2, Replace, LayoutTemplate, Box, PackageCheck, Maximize, TrendingUp, Anchor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { silosData, SiloProduct, SiloCapacity, SiloFeature } from "../silosData";

const IconMap: Record<string, any> = {
  ShieldCheck,
  Settings2,
  Replace,
  LayoutTemplate,
  Box,
  Maximize,
  TrendingUp,
  Anchor,
  CheckCircle2
};

export default function SiloDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = silosData.find((p) => p.slug === slug);
  const { addToQuote } = useQuote();

  const [activeTab, setActiveTab] = useState(0);
  const [addedHeroQuote, setAddedHeroQuote] = useState(false);
  const [addedModel, setAddedModel] = useState<string | null>(null);

  if (!product) {
    notFound();
  }

  const handleHeroAddToQuote = () => {
    addToQuote({
      id: product.slug,
      name: product.title,
      image: product.image
    }, 1);
    setAddedHeroQuote(true);
    setTimeout(() => setAddedHeroQuote(false), 2000);
  };

  const handleAddToQuote = (capacity: SiloCapacity) => {
    addToQuote({
      id: capacity.model,
      name: `${product.title} - ${capacity.model} (${capacity.capacity})`,
      image: product.image
    }, 1);
    setAddedModel(capacity.model);
    setTimeout(() => setAddedModel(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] text-slate-800 font-sans selection:bg-brand-primary/20">
      <Header />

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto pt-28 sm:pt-32 md:pt-36 pb-12">
        {/* Top Product Details */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-start gap-6 sm:gap-8 xl:gap-12 bg-white p-5 sm:p-8 xl:p-10 rounded-3xl border border-slate-200 shadow-sm mb-16">
          <div className="relative w-full h-[300px] sm:h-[380px] xl:h-[calc(100vh-11rem)] xl:min-h-[280px] xl:max-h-[460px] xl:sticky xl:top-28 self-start bg-slate-50 rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex">
              <span className="text-xs font-black tracking-widest text-[#eab308] bg-amber-50 px-3 py-1 rounded-md">
                {product.category}
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0a4c2a] leading-tight mb-2">
                {product.title}
              </h1>
              <h3 className="text-lg font-bold text-[#14663a]">
                {product.subtitle}
              </h3>
            </div>

            <div
              className="text-base text-slate-600 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br/>') }}
            />

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleHeroAddToQuote}
                className="h-12 min-h-[48px] sm:flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
              >
                <PackageCheck className="w-4 h-4 text-slate-900" />
                <span>{addedHeroQuote ? "Added to quote!" : "Add to quote list"}</span>
              </button>

              <Link
                href={`https://wa.me/919240289259?text=${encodeURIComponent(`Hi, I would like to enquire about ${product.title}`)}`}
                className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp enquiry
              </Link>
            </div>

            <div className="flex flex-nowrap sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 pt-3">
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
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-black text-[#0a4c2a] mb-2">Key features</h2>
            <p className="text-slate-500">Engineered for high-efficiency plant integration and low-residue handling</p>
          </div>

          <div className="flex md:flex-wrap md:justify-center gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
            {product.keyFeatures.map((feature, idx) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <div key={idx} className="w-[72vw] max-w-[280px] md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#16a34a] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1510] text-sm mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>
        </div>

        {/* Available Capacities */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-black text-[#0a4c2a] mb-2">Available capacities</h2>
              <p className="text-sm text-slate-500">Select your required material line and model capacity to add to your quote enquiry.</p>
            </div>

            {product.capacitySections.length > 1 && (
              <div className="flex p-1 bg-slate-50 rounded-lg border border-slate-200 self-stretch md:self-auto shrink-0 overflow-x-auto">
                {product.capacitySections.map((section, idx) => {
                   let shortTitle = section.title.replace(/Available\s+capacities\s+in\s+/i, '').replace(/Available\s+/i, '');
                   if (shortTitle.includes("Mild-Steel") && !shortTitle.includes("(MS)")) shortTitle = shortTitle.replace("Mild-Steel Models", "Mild-Steel Models (MS)");
                   if (shortTitle.includes("Stainless-Steel") && !shortTitle.includes("(SS)")) shortTitle = shortTitle.replace("Stainless-Steel Models", "Stainless-Steel Models (SS)");
                   return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 md:flex-none whitespace-nowrap px-4 py-2 text-xs md:text-sm font-bold rounded-md transition-all duration-200 ${activeTab === idx ? 'bg-[#0B1510] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    {shortTitle}
                  </button>
                )})}
              </div>
            )}
          </div>

          <div className="space-y-4">
            {product.capacitySections[activeTab]?.items.map((cap, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:border-slate-200 transition-colors">
                    <div className="space-y-3 flex-1">
                      <h4 className="font-bold text-[#0B1510]">{cap.model} / {cap.capacity} Silo</h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Capacity: {cap.capacity}</span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Material: {cap.material}</span>
                      </div>
                      {cap.bestFor && (
                        <div className="text-[10px] font-bold text-[#16a34a] tracking-widest">
                          Best for: {cap.bestFor}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0 border-slate-100">
                      <button
                        onClick={() => handleAddToQuote(cap)}
                        className="h-10 px-5 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all whitespace-nowrap cursor-pointer"
                      >
                        <PackageCheck className="w-4 h-4 text-slate-900" /> {addedModel === cap.model ? "Added to quote!" : "Add to quote"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ChevronRight, Box, Info, ShieldCheck, CheckCircle, MessageCircle, PackageCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { grainProcessingData } from "../grainProcessingData";

export default function GrainProcessingProductPage() {
  const params = useParams();
  const product = grainProcessingData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const { addToQuote } = useQuote();
  const [activeModelTab, setActiveModelTab] = React.useState(0);
  const [addedMessage, setAddedMessage] = React.useState(false);

  const handleAddToQuote = () => {
    addToQuote({
      id: product.slug,
      name: product.title,
      image: product.image
    }, 1);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] font-sans text-slate-800">
      <Header />

      <main className="w-full pb-12 lg:pb-24">

        {/* Main Content Container */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto pt-28 sm:pt-32 md:pt-36">

        {/* Top Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-6 md:gap-8 lg:gap-12 xl:gap-20 mb-12 lg:mb-24">

          {/* Left Column: Image & Note */}
          <div className="flex flex-col gap-4 md:sticky md:top-28 self-start">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-sm aspect-[4/3] sm:aspect-square lg:aspect-auto lg:h-[calc(100vh-16rem)] lg:min-h-[260px] lg:max-h-[480px]">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full p-4 sm:p-6"
              />
            </div>
            <div className="flex items-start gap-3 bg-[#f6f9f1] border border-[#e5eddb] rounded-2xl p-4">
              <Info className="w-4 h-4 text-[#4a5f36] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#4a5f36] leading-relaxed font-medium">
                * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
              </p>
            </div>
          </div>

          {/* Right Column: Info & Actions */}
          <div className="flex flex-col justify-start space-y-5 lg:space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
                {product.title}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#14663a]">
                {product.subtitle}
              </h2>
            </div>

            <div className="text-slate-600 leading-relaxed whitespace-pre-line text-sm sm:text-[15px]">
              {product.description}
            </div>

            {/* Stats Row */}
            {product.stats && product.stats.length > 0 && (
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
                {product.stats.map((stat, idx) => (
                  <div key={idx} className={`flex-1 flex flex-col items-center text-center space-y-1 ${idx !== (product.stats?.length ?? 0) - 1 ? 'border-r border-slate-100' : ''}`}>
                    <span className="text-[10px] font-bold text-slate-400 tracking-widest">{stat.label}</span>
                    <span className="text-sm font-black text-[#0B1510]">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="space-y-4 lg:space-y-6 pt-1 lg:pt-4">
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch sm:items-center md:items-stretch lg:items-center gap-3 sm:gap-4">
                <button
                  onClick={handleAddToQuote}
                  className="h-12 min-h-[48px] sm:flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
                >
                  <PackageCheck className="w-4 h-4 text-slate-900" />
                  {addedMessage ? "Added to quote!" : "Add to quote list"}
                </button>

                <a
                  href={`https://wa.me/919240289259?text=${encodeURIComponent(`Hi, I would like to enquire about ${product.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-full sm:w-auto md:w-full lg:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp enquiry
                </a>
              </div>



              <div className="flex flex-nowrap sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 pt-2">
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
        </div>

        {/* Key Features Section */}
        {product.keyFeatures && product.keyFeatures.length > 0 && (
          <div className="mb-12 lg:mb-24">
            <div className="text-center space-y-2 mb-6 lg:mb-12">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0a4c2a]">Key features</h3>
              <p className="text-slate-500 font-medium">Built for continuous, high efficiency processing</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4 lg:gap-6">
              {product.keyFeatures.map((feature, idx) => {
                const Icon = require("lucide-react")[feature.icon] || Box;
                return (
                  <div key={idx} className="lg:w-[calc(25%-18px)] bg-white border border-slate-100 p-4 sm:p-5 lg:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f0fdf4] text-[#16a34a] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-[13px] sm:text-sm leading-snug mb-1 sm:mb-2">{feature.title}</h4>
                    {feature.description && (
                      <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Models Section */}
        {product.models && product.models.length > 0 && (
          <div className="mb-12 lg:mb-24 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 mb-6 lg:mb-10 pb-4 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0B1510]">Available models</h3>

              <div className="flex p-1 bg-slate-50 rounded-lg border border-slate-200 self-stretch md:self-auto shrink-0 overflow-x-auto">
                {product.models.map((model, mIdx) => (
                  <button
                    key={mIdx}
                    onClick={() => setActiveModelTab(mIdx)}
                    className={`flex-1 md:flex-none whitespace-nowrap px-4 py-2 text-xs md:text-sm font-bold rounded-md transition-all duration-200 ${activeModelTab === mIdx ? 'bg-[#0f2e1a] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-4 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{product.models[activeModelTab]?.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">Compact and efficient milling model</p>
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-white border-b border-slate-50 text-slate-500 tracking-widest text-[10px] font-black">
                  <tr>
                    <th className="hidden sm:table-cell px-6 py-4 w-16 text-center">#</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Parameter</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {product.models[activeModelTab]?.specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="hidden sm:table-cell px-6 py-4 text-center text-slate-300 font-medium text-xs">{(idx + 1).toString().padStart(2, '0')}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 w-[45%] sm:w-1/3 font-bold text-slate-700 text-[13px] sm:text-sm">{spec.parameter}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-[#0a4c2a] font-medium text-[13px] sm:text-sm">{spec.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technical Specifications Section */}
        {product.specs && product.specs.length > 0 && (
          <div className="mb-12 lg:mb-24 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-6 lg:mb-10">
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#0a4c2a]">Technical specifications</h3>
              <p className="text-slate-500 font-medium">Standard engineering configuration and parameters</p>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 tracking-widest text-[10px] font-black">
                    <tr>
                      <th className="hidden sm:table-cell px-6 py-4 w-16 text-center">#</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">Parameter</th>
                      <th className="px-4 sm:px-6 py-3 sm:py-4">
                        {product.slug === 'drum-sieve' ? 'Dia 700 mm' : 'Specification'}
                      </th>
                      {product.slug === 'drum-sieve' && (
                        <th className="px-4 sm:px-6 py-3 sm:py-4">Dia 900 mm</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="hidden sm:table-cell px-6 py-4 text-center text-slate-400 font-medium">{idx + 1}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-slate-700 text-[13px] sm:text-sm">{spec.parameter}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600 text-[13px] sm:text-sm">{spec.specification}</td>
                        {product.slug === 'drum-sieve' && (
                          <td className="px-4 sm:px-6 py-3 sm:py-4 text-slate-600 text-[13px] sm:text-sm">{spec.col3}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

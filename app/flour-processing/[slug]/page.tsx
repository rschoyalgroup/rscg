"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ChevronRight, Box, Info, ShieldCheck, CheckCircle, MessageCircle, PackageCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { flourProcessingData } from "../flourProcessingData";

export default function FlourProcessingProductPage() {
  const params = useParams();
  const product = flourProcessingData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const { addToQuote } = useQuote();
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
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-start gap-6 sm:gap-8 xl:gap-20 mb-12 lg:mb-24">

          {/* Left Column: Image & Note */}
          <div className="contents xl:flex xl:flex-col xl:gap-4 xl:sticky xl:top-28 xl:self-start xl:w-full">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-sm aspect-[4/3] sm:aspect-[16/9] xl:aspect-auto xl:h-[calc(100vh-16rem)] xl:min-h-[260px] xl:max-h-[480px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain w-full h-full p-4 sm:p-6"
                />
            </div>
            <div className="order-last xl:order-none flex items-start gap-3 bg-[#f6f9f1] border border-[#e5eddb] rounded-2xl p-4">
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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
                  className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
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

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
              {product.keyFeatures.map((feature, idx) => {
                const Icon = require("lucide-react")[feature.icon] || Box;
                return (
                  <div key={idx} className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.67px)] lg:w-[calc(25%-18px)] bg-white border border-slate-100 p-4 sm:p-5 lg:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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

        {/* Technical Specifications Section */}
        {product.specs && product.specs.length > 0 && (
          <div className="mb-12 lg:mb-24 max-w-5xl mx-auto">
            <div className="mb-5 sm:mb-6">
              <h3 className="text-xl sm:text-3xl font-heading font-black text-[#0a4c2a]">
                Technical specifications
              </h3>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-4 py-4 sm:px-6 sm:py-5 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                  {product.title} specifications
                </h4>
              </div>

              {/* Phones: one card per model, so no column is hidden off-screen */}
              <div className="sm:hidden divide-y divide-slate-100">
                {product.specs.map((spec, idx) => {
                  const rows: [string, string | undefined][] =
                    product.slug === 'vibro-sifter'
                      ? [['Capacity', spec.specification], ['Deck type', spec.extra], ['Power', spec.col6]]
                      : product.slug === 'plan-sifter'
                      ? [['Length', spec.specification], ['Width', spec.col3], ['Height', spec.col4], ['Capacity', spec.col5], ['Power', spec.col6]]
                      : [['Specification', spec.specification]];
                  return (
                    <div key={idx} className="px-4 py-4">
                      <div className="font-bold text-slate-900 text-sm mb-2.5">{spec.parameter}</div>
                      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {rows.filter(([, v]) => v).map(([k, v]) => (
                          <div key={k} className="min-w-0">
                            <dt className="text-[11px] font-bold tracking-wider text-slate-400">{k}</dt>
                            <dd className="text-[13px] text-slate-700 font-medium break-words">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}
              </div>

              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left text-[13px] sm:text-sm whitespace-nowrap">
                  <thead className="bg-white border-b border-slate-100 text-slate-400 tracking-wider text-[11px] font-bold">
                    <tr>
                      <th className="hidden sm:table-cell px-3 py-3 sm:px-4 sm:py-4 lg:px-6 w-12 text-center">#</th>
                      <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
                        {product.slug === 'vibro-sifter' ? 'Vibro sifter size' :
                         product.slug === 'plan-sifter' ? 'Plan sifter size' : 'Parameter'}
                      </th>
                      <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
                        {product.slug === 'vibro-sifter' ? 'Capacity' :
                         product.slug === 'plan-sifter' ? 'Length' : 'Specification'}
                      </th>
                      {product.slug === 'vibro-sifter' && (<><th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Deck type</th><th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Power</th></>)}
                      {product.slug === 'plan-sifter' && (
                        <>
                          <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Width</th>
                          <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Height</th>
                          <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Capacity</th>
                          <th className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6">Power</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="hidden sm:table-cell px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-center text-slate-400 font-medium text-xs">{idx + 1}</td>
                        <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 font-bold text-slate-800">{spec.parameter}</td>
                        <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.specification}</td>
                        {product.slug === 'vibro-sifter' && (<><td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600">{spec.extra}</td><td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.col6}</td></>)}
                        {product.slug === 'plan-sifter' && (
                          <>
                            <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.col3}</td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.col4}</td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.col5}</td>
                            <td className="px-3 py-3 sm:px-4 sm:py-4 lg:px-6 text-slate-600 font-medium">{spec.col6}</td>
                          </>
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

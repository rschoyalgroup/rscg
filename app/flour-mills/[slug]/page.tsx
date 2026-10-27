"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  ShoppingBag,
  FileText,
  Minus,
  Plus,
  Zap,
  Activity,
  Settings,
  Info,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
  MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { flourMillsProducts } from "../flourMillsData";
import { useQuote } from "@/components/QuoteContext";

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { addToQuote } = useQuote();
  const resolvedParams = use(params);

  const product = flourMillsProducts.find(p => p.id === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(product.heroImage);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [addedMessage, setAddedMessage] = useState(false);

  const handleAddToQuote = () => {
    // Add the selected model variant to the quote
    const model = product.models[selectedModelIndex] || product.models[0];
    const modelId = `${product.id}-${model?.name || 'base'}`;
    addToQuote({
      id: modelId,
      name: `${product.title}${product.models.length > 1 ? ` - ${model.name}` : ''}`,
      category: product.category,
      image: model?.image || product.heroImage,
    }, 1);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const tagColors = [
    "bg-[#0070f3]", // Blue
    "bg-[#79c500]", // Light Green
    "bg-[#f5a623]", // Orange
    "bg-[#0a4c2a]", // Dark Green
  ];

  return (
    <main className="min-h-screen bg-[#f9fafb] selection:bg-brand-primary/20 flex flex-col">
      <Header />

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto pt-28 sm:pt-32 md:pt-36 pb-12 flex-1">

        {/* Hero Product Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-start gap-6 sm:gap-8 xl:gap-12 bg-white p-5 sm:p-8 xl:p-10 rounded-3xl border border-slate-200 shadow-sm mb-12 lg:mb-16">

          {/* Left: Images */}
          <div className="flex flex-col gap-4 xl:sticky xl:top-28 self-start w-full">
            <div className={`relative w-full aspect-[4/3] sm:aspect-[16/9] xl:aspect-auto ${product.showThumbnails !== false && product.keyComponents.length > 0 ? 'xl:h-[calc(100vh-22rem)] xl:min-h-[240px] xl:max-h-[440px]' : 'xl:h-[calc(100vh-15rem)] xl:min-h-[260px] xl:max-h-[480px]'} bg-white rounded-2xl flex items-center justify-center p-4 sm:p-6 lg:p-8`}>
              <span className="absolute top-0 left-0 z-10 bg-slate-100 text-xs font-bold text-slate-600 px-3.5 py-1.5 rounded-full border border-slate-200">
                {product.category}
              </span>
              <img
                src={activeImage}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 lg:p-8"
              />
            </div>

            {/* Component Thumbnails */}
            {product.showThumbnails !== false && product.keyComponents.length > 0 && (
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <button
                  onClick={() => setActiveImage(product.heroImage)}
                  className={`flex flex-col items-center gap-1.5 cursor-pointer group shrink-0 w-[84px] xl:w-[92px] snap-start`}
                >
                  <div className={`relative aspect-square w-full bg-white rounded-xl border flex items-center justify-center p-2 transition-all ${activeImage === product.heroImage ? 'border-brand-primary shadow-sm ring-1 ring-brand-primary/50' : 'border-slate-200 hover:border-slate-300'}`}>
                    <img src={product.heroImage} alt={product.title} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[11px] text-center font-semibold text-slate-600 leading-tight line-clamp-2">
                    {product.title}
                  </span>
                </button>

                {product.keyComponents.slice(0, 5).map((comp, idx) => (
                  <button
                    key={idx}
                    onClick={() => comp.image && setActiveImage(comp.image)}
                    className={`flex flex-col items-center gap-1.5 cursor-pointer group shrink-0 w-[84px] xl:w-[92px] snap-start`}
                  >
                    <div className={`relative aspect-square w-full bg-white rounded-xl border flex items-center justify-center p-2 transition-all ${activeImage === comp.image ? 'border-brand-primary shadow-sm ring-1 ring-brand-primary/50' : 'border-slate-200 hover:border-slate-300'}`}>
                      {comp.image ? (
                        <img src={comp.image} alt={comp.title} className="w-full h-full object-contain mix-blend-multiply" />
                      ) : (
                        <Settings className="w-6 h-6 text-slate-300" />
                      )}
                    </div>
                    <span className="text-[11px] text-center font-semibold text-slate-600 leading-tight line-clamp-2">
                      {comp.title}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Disclaimer */}
            {product.productDisclaimer && (
              <div className="flex gap-3 bg-[#f8f9fa] rounded-2xl p-4 border border-slate-200 mt-1">
                <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  * {product.productDisclaimer}
                </p>
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-start xl:pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight mb-2">
              {product.title}
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#14663a] mb-4 lg:mb-6">
              {product.subtitle}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base lg:text-[17px]">
              {product.desc}
            </p>

            {product.keyHighlights && product.keyHighlights.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 lg:mb-10">
                {product.keyHighlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 ${tagColors[idx % tagColors.length]} text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm inline-flex items-center justify-center text-center`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {product.technicalSpecs && Object.keys(product.technicalSpecs).length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-bold text-[#0a4c2a] mb-4">Key specifications</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                  {Object.entries(product.technicalSpecs).map(([key, val], idx) => (
                    <li key={idx} className="pl-1"><span className="font-semibold text-slate-800">{key}:</span> {val}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Capacity Stats Grid */}
            {product.heroStats.length > 0 && (
            <div className={`grid gap-2.5 sm:gap-3 mb-8 lg:mb-10 ${product.heroStats.length <= 2 ? 'grid-cols-2' : product.heroStats.length === 4 || product.heroStats.length === 8 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3'}`}>
              {product.heroStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-center bg-white border border-slate-200 rounded-2xl px-3 py-3 sm:px-3 sm:py-3 xl:px-4 xl:py-4 shadow-sm min-w-0">
                  {stat.topLabel && (
                    <div className="pb-2 mb-2 border-b border-slate-100">
                      <p className="text-[11px] sm:text-xs text-slate-600 font-bold tracking-wide leading-snug">{stat.topLabel}</p>
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center flex-1">
                    <p className="text-lg sm:text-xl xl:text-[22px] font-black text-[#0a4c2a] leading-tight break-words">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1 leading-snug">{stat.label}</p>
                    {stat.sublabel && (
                      <p className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5">{stat.sublabel}</p>
                    )}
                  </div>
                  {(stat.bottomValue || stat.bottomLabel) && (
                    <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col items-center justify-center">
                      {stat.bottomValue && <p className="text-base sm:text-lg font-black text-slate-800">{stat.bottomValue}</p>}
                      {stat.bottomLabel && <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">{stat.bottomLabel}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}

            {/* Variant Selector */}
            {product.models && product.models.length > 1 && (
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h4 className="text-base font-bold text-slate-800 mb-3">Select model</h4>
                <div className="flex flex-col gap-3">
                  {product.models.map((mod, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedModelIndex(idx);
                        if (mod.image) setActiveImage(mod.image);
                      }}
                      className={`text-left p-4 sm:p-5 rounded-xl border transition-all flex items-start gap-4 ${
                        selectedModelIndex === idx
                          ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary/20 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`mt-1 shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedModelIndex === idx ? 'border-brand-primary bg-brand-primary' : 'border-slate-300 bg-white'}`}>
                        {selectedModelIndex === idx && <div className="w-2 h-2 rounded-full bg-white shadow-sm" />}
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold text-base mb-1.5 ${selectedModelIndex === idx ? 'text-brand-primary' : 'text-slate-800'}`}>
                        {mod.name}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                        {mod.tableData && (mod.tableData['Size'] || mod.tableData['Size Available']) && (
                          <div className="text-xs sm:text-sm text-slate-600">
                            <span className="font-semibold text-slate-500">Size:</span> {mod.tableData['Size'] || mod.tableData['Size Available']}
                          </div>
                        )}
                        {mod.tableData && mod.tableData['Capacity'] && !mod.tableData['Hopper Capacity'] && (
                          <div className="text-xs sm:text-sm text-slate-600">
                            <span className="font-semibold text-slate-500">Cap:</span> {mod.tableData['Capacity']}
                          </div>
                        )}
                        {mod.tableData && mod.tableData['Hopper Capacity'] && (
                          <div className="text-xs sm:text-sm text-slate-600">
                            <span className="font-semibold text-slate-500">Hopper Cap:</span> {mod.tableData['Hopper Capacity']}
                          </div>
                        )}
                        {mod.tableData && (mod.tableData['Power Load'] || (mod.tableData['Power (600 mm)'] && mod.tableData['Power (750 mm)'])) && (
                          <div className="text-xs sm:text-sm text-slate-600">
                            <span className="font-semibold text-slate-500">Power:</span> {mod.tableData['Power Load'] || "15 HP / 25 HP / 40 HP"}
                          </div>
                        )}
                      </div>
                    </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 pt-2">
              <button
                onClick={handleAddToQuote}
                className="h-12 min-h-[48px] sm:flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
              >
                <PackageCheck className="w-4 h-4 text-slate-900" />
                <span>{addedMessage ? "Added to Quote!" : "Add to Quote List"}</span>
              </button>

              <a
                href={`https://wa.me/919240289259?text=${encodeURIComponent(`Hi, I would like to enquire about ${product.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            <div className="flex flex-nowrap sm:flex-wrap items-stretch sm:items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-4 pt-4">
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

        {/* Core Capabilities */}
        {product.coreCapabilities.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0a4c2a] mb-5 sm:mb-6 tracking-tight">Core capabilities</h3>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
              {product.coreCapabilities.map((cap, idx) => {
                const colors = [
                  { text: "text-[#79c500]", bg: "bg-[#79c500]/10", Icon: Activity },
                  { text: "text-[#0070f3]", bg: "bg-[#0070f3]/10", Icon: Settings },
                  { text: "text-[#f5a623]", bg: "bg-[#f5a623]/10", Icon: Zap }
                ];
                const c = colors[idx % colors.length];
                const Icon = c.Icon;

                return (
                  <div key={idx} className={`w-[78vw] max-w-[320px] md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none self-stretch bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col ${
                    idx === product.coreCapabilities.length - 1 && product.coreCapabilities.length % 2 === 1 && product.coreCapabilities.length > 1
                      ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-12px)] lg:col-span-1 lg:w-auto lg:justify-self-stretch"
                      : "md:w-auto"
                  }`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${c.bg} ${c.text}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className={`font-bold text-lg leading-tight ${c.text}`}>{cap.title}</h4>
                    </div>
                    <ul className="space-y-3 flex-1 pl-2">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm sm:text-[15px] text-slate-700">
                          <span className="text-slate-400 font-bold text-lg leading-none mt-0.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* Key Components */}
        {product.keyComponents.length > 0 && (
          <div className="mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0a4c2a] mb-5 sm:mb-6 tracking-tight">{product.componentsTitle || "Key components"}</h3>
            <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${product.keyComponents.length >= 3 ? 'md:grid-cols-3' : ''} ${
              product.keyComponents.length === 1 ? 'lg:grid-cols-1 max-w-sm' :
              product.keyComponents.length === 2 ? 'lg:grid-cols-2 max-w-2xl' :
              product.keyComponents.length === 3 ? 'lg:grid-cols-3' :
              product.keyComponents.length === 4 ? 'lg:grid-cols-4' :
              product.keyComponents.length === 5 ? 'lg:grid-cols-5' :
              'lg:grid-cols-6'
            }`}>
              {product.keyComponents.map((comp, idx) => {
                const isCover = comp.title.includes("Control Console");
                return (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                  {comp.image && (
                    <div className="relative w-full aspect-[3/2] bg-[#f8f9fa] border-b border-slate-100 flex items-center justify-center overflow-hidden">
                      <img src={comp.image} alt={comp.title} className={`w-full h-full mix-blend-multiply object-contain object-center p-0`} />
                    </div>
                  )}
                  <div className="p-3 sm:p-4 flex-1 flex flex-col items-center justify-center">
                    <h4 className="font-semibold text-slate-800 text-xs sm:text-sm md:text-base text-center leading-snug px-1">{comp.title}</h4>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Available Models */}
        {product.showDetailedModels !== false && product.models.length > 0 && (
          <div className="mb-16">
            {product.detailedModelsTitle && (
              <h3 className={`text-2xl font-heading font-extrabold mb-8 tracking-tight ${product.modelsLayout === 'zigzag' ? 'text-center text-slate-900 tracking-wider' : 'text-[#0a4c2a]'}`}>{product.detailedModelsTitle}</h3>
            )}
            <div className={`grid gap-6 ${
              product.models.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' :
              product.models.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
              product.models.length === 4 ? 'grid-cols-1 md:grid-cols-2' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {product.modelsLayout === 'zigzag' ? (
                product.models.map((model, idx) => {
                  const isReverse = idx % 2 !== 0;
                  // Split name for the special "Emery" styling if applicable
                  let namePrefix = "";
                  let namePill = model.name;
                  if (model.name.startsWith("Emery ")) {
                    namePrefix = "Emery ";
                    namePill = model.name.substring(6);
                  }

                  return (
                    <div key={idx} className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row ${isReverse ? 'sm:flex-row-reverse' : ''} h-full p-6 items-center`}>
                      {model.image && (
                        <div className="w-full sm:w-1/2 flex-shrink-0 flex items-center justify-center p-4">
                          <img src={model.image} alt={model.name} className="w-full max-w-[220px] object-contain mix-blend-multiply" />
                        </div>
                      )}
                      <div className="w-full sm:w-1/2 flex flex-col p-4 justify-center">
                        <h4 className="text-2xl font-bold tracking-tight mb-4 flex flex-wrap items-center gap-2">
                          {namePrefix ? (
                            <>
                              <span className="text-[#c1121f] italic">{namePrefix.trim()}</span>
                              <span className="bg-[#f5a623] text-white text-sm md:text-base px-3 py-1 rounded-md italic shadow-sm">{namePill}</span>
                            </>
                          ) : (
                            <span className="text-red-600">{model.name}</span>
                          )}
                        </h4>
                        {model.description && (
                          <div className="text-base text-slate-700 font-medium leading-relaxed">
                            {model.description}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                product.models.map((model, idx) => {
                  const isBlue = model.name.toLowerCase().includes("miller");
                  const colorTitle = isBlue ? "text-[#0070f3]" : "text-red-500";
                  const isThreeCol = product.models.length === 3 || product.models.length > 4;

                  return (
                    <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col h-full p-4 sm:p-6 xl:p-7">
                      <div className="pb-3 sm:pb-4 text-center">
                        <h4 className={`text-lg sm:text-xl lg:text-2xl font-heading font-extrabold tracking-tight ${colorTitle}`}>
                          {model.name}
                        </h4>
                      </div>
                      <div className={`flex-1 flex flex-col ${isThreeCol ? 'sm:flex-row md:flex-col 2xl:flex-row' : 'sm:flex-row md:flex-col xl:flex-row'} gap-4 sm:gap-6 items-center`}>

                        {model.image && (
                          <div className={`w-full ${isThreeCol ? 'sm:w-[34%] md:w-full 2xl:w-[36%]' : 'sm:w-[34%] md:w-full xl:w-[38%]'} flex-shrink-0 flex items-center justify-center p-1 sm:p-2`}>
                            <img src={model.image} alt={model.name} className="w-full max-w-[150px] sm:max-w-[180px] max-h-[140px] sm:max-h-[190px] object-contain mix-blend-multiply" />
                          </div>
                        )}

                        <div className="flex-1 w-full min-w-0">
                          {model.description && (
                            <div className="text-sm text-slate-600 mb-4 font-medium leading-relaxed">
                              {model.description}
                            </div>
                          )}
                          {model.tableData && (
                            <div className="flex flex-col border border-slate-200/80 rounded-xl overflow-hidden shadow-xs w-full">
                              {Object.entries(model.tableData).map(([key, val], i) => (
                                <div key={key} className={`flex items-center justify-between gap-3 border-b border-slate-200/60 last:border-b-0 px-3 sm:px-3.5 py-2.5 text-xs sm:text-[13px] xl:text-sm ${i % 2 === 0 ? 'bg-[#f8fafd]' : 'bg-white'}`}>
                                  <span className="font-medium text-slate-600 leading-snug">{key}</span>
                                  <span className="font-semibold text-slate-800 text-right leading-snug">{val}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {model.featuresList && (
                            <div className="flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white w-full">
                              {model.featuresList.map((feat, i) => (
                                <div key={i} className={`flex border-b border-slate-200 last:border-b-0 px-3 sm:px-3.5 py-2.5 items-start text-xs sm:text-[13px] xl:text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9fa]'}`}>
                                  <div className="text-[#0a4c2a] mt-0.5 mr-2 shrink-0">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <div className="font-medium text-slate-700 leading-snug">
                                    {feat}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#f5a623] flex items-center justify-center shrink-0 border-4 border-white/20">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight mb-1">
                Smart milling. Smarter business.
              </h3>
              <p className="text-white/80 font-medium text-sm sm:text-base">
                Save power. Increase production. Deliver consistent quality.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative z-10 whitespace-nowrap bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-200 shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  Leaf, 
  Cpu,
  Box,
  Archive,
  Factory,
  Scale,
  Wind,
  Database,
  RotateCw,
  Gauge,
  Filter,
  PackageCheck,
  Zap,
  Info,
  Target, Minus, Plus, CheckCircle, CheckCircle2, MessageCircle,
  ListFilter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

// Data Structure
const modelsData = {
  V400: {
    name: "V400",
    description: "Engineered for precision and performance, the V400 series delivers consistent flour quality with efficient batch processing technology.",
    capacity: "40 - 60 Kg/hr",
    variants: {
      Eco: {
        name: "Eco",
        subtitle: "Manual feeding",
        image: "/images/vending-machines/floura_eco.png",
        specs: [
          { label: "Size (L X W X H)", value: "8'-1'' x 3' x 7'-5\"", icon: Box },
          { label: "Root Blower System", value: "Yes", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "180 kg", icon: Database },
          { label: "Feeding System", value: "Manual", icon: Factory },
          { label: "Mill Type", value: '16" Vertical Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "40-60 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Mechanical", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "13 HP / 9.7 kW", icon: Zap },
        ]
      },
      Auto: {
        name: "Auto",
        subtitle: "Automatic feeding",
        image: "/images/vending-machines/floura_prime.jpg", // Fallback image for Auto since specific one wasn't provided, or assume prime is Auto
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "No", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "135 kg", icon: Database },
          { label: "Feeding System", value: "Auto Feeding", icon: Factory },
          { label: "Mill Type", value: '16" Vertical Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "40-60 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Mechanical", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "17 HP / 12.7 kW", icon: Zap },
        ]
      }
    }
  },
  H500: {
    name: "H500",
    description: "Designed for high-capacity industrial demands, the H500 series provides unmatched throughput and automated reliability for commercial-scale operations.",
    capacity: "100 - 120 Kg/hr",
    variants: {
      Eco: {
        name: "Eco",
        subtitle: "Manual feeding",
        image: "/images/vending-machines/floura_eco.png", 
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "Yes", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "180 kg", icon: Database },
          { label: "Feeding System", value: "Manual Feeding", icon: Factory },
          { label: "Mill Type", value: '20" Horizontal Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "100-120 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Hydraulic", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "17 HP / 12.7 kW", icon: Zap },
        ]
      },
      Auto: {
        name: "Auto",
        subtitle: "Automatic feeding",
        image: "/images/vending-machines/floura_prime.jpg",
        specs: [
          { label: "Size (L X W X H)", value: '10\' x 3\'-4" x 9\'-2"', icon: Box },
          { label: "Root Blower System", value: "No", icon: Wind },
          { label: "Grain Storage Bins Qty.", value: "3", icon: Archive },
          { label: "Capacity of Each Bin", value: "135 kg", icon: Database },
          { label: "Feeding System", value: "Auto Feeding", icon: Factory },
          { label: "Mill Type", value: '20" Horizontal Mill', icon: RotateCw },
          { label: "Weighing System", value: "Yes", icon: Scale },
          { label: "Grinding Capacity", value: "100-120 kg/hr", icon: Gauge },
          { label: "Pressure System", value: "Hydraulic", icon: Settings },
          { label: "Flour Sieving", value: "Yes", icon: Filter },
          { label: "Pouch Sealing", value: "Yes", icon: PackageCheck },
          { label: "Required Power", value: "19 HP / 14.2 kW", icon: Zap },
        ]
      }
    }
  }
};

type ModelKey = keyof typeof modelsData;
type VariantKey = "Eco" | "Auto";

export default function BatchProductionPage() {
  const { addToQuote } = useQuote();
  const [activeModel, setActiveModel] = useState<ModelKey>("V400");
  const [activeVariant, setActiveVariant] = useState<VariantKey>("Eco");
  const [addedMessage, setAddedMessage] = useState(false);

  const currentModelData = modelsData[activeModel];
  const currentVariantData = currentModelData.variants[activeVariant];

  // Helper for rendering left and right columns of specs
  const leftSpecs = currentVariantData.specs.filter((_, i) => i % 2 === 0);
  const rightSpecs = currentVariantData.specs.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen bg-white text-brand-foreground font-sans">
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/vending-machines/vending_machine_desktop_cropped.png" 
              alt="Batch Production Systems" 
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
              src="/hero/vending-machines/vending-machine-mobile.png" 
              alt="Batch Production Systems" 
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
              Batch production
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Batch production <span className="text-[#f7b032]">systems</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Engineered solutions for efficient, hygienic, and scalable batch processing in modern flour and food operations.
            </p>
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('configurator-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE SOLUTIONS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 -mb-16 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7 flex flex-row items-center justify-between gap-4 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <BarChart3 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Consistent batch output</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Uncompromised quality.</p>
            </div>
          </div>
          
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Hygienic processing</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Sanitary design standards.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Settings className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Commercial grade</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Robust and dependable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Consistent batch output</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Uncompromised quality.</p>
            </div>
          </div>
          
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Hygienic processing</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Sanitary design standards.</p>
            </div>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Commercial grade</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Robust and dependable.</p>
            </div>
          </div>

          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Main Interactive Configurator Section */}
      <section id="configurator-section" className="w-full pt-4 md:pt-10 lg:pt-12 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative">
        {/* Breadcrumb equivalent / header */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">
          <span>Home</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span>Batch Production Systems</span> <ArrowRight className="w-3 h-3 text-slate-300" />
          <span className="text-slate-900">{activeModel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Product Image & Note */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-sm aspect-square p-8">
              <Image
                src={currentVariantData.image}
                alt={`${activeModel} ${activeVariant}`}
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="flex items-start gap-3 bg-[#f6f9f1] border border-[#e5eddb] rounded-2xl p-5">
              <Info className="w-5 h-5 text-[#4a5f36] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#4a5f36] leading-relaxed font-medium">
                * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Selection */}
          <div className="flex flex-col space-y-10 py-4 justify-start">
            
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl font-heading font-black text-[#0a4c2a] tracking-tight">
                Floura
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                Floura is a high-performance flour mill with batch production designed for efficient commercial grinding, high flour extraction, and effortless operation. Built for modern atta mills, Floura combines robust engineering with user-friendly operation to provide reliable performance and better control over the milling process.
              </p>
            </div>

            {/* Model Selection */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                  <Archive className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">1. Choose model</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(Object.keys(modelsData) as ModelKey[]).map((mod) => {
                  const isActive = activeModel === mod;
                  return (
                    <button
                      key={mod}
                      onClick={() => {
                        setActiveModel(mod);
                        // Ensure the active variant exists for the new model (both have Eco and Auto here, so it's fine)
                      }}
                      className={`relative flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer group ${
                        isActive 
                          ? "border-[#154627] bg-[#154627] text-white shadow-lg" 
                          : "border-slate-200 bg-white hover:border-[#154627]/40 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className="flex flex-col flex-1">
                        <span className="font-black text-xl">{mod}</span>
                        <span className={`text-sm mt-1 font-medium ${isActive ? "text-[#C1C9C3]" : "text-slate-500"}`}>
                          {modelsData[mod].capacity}
                        </span>
                      </div>
                      <div className={`p-3 rounded-xl ${isActive ? "bg-white/10" : "bg-slate-100 group-hover:bg-[#154627]/5"}`}>
                        <Factory className={`w-8 h-8 ${isActive ? "text-white" : "text-[#154627]/60"}`} />
                      </div>
                      
                      {isActive && (
                        <div className="absolute -top-3 -right-3 bg-white rounded-full p-0.5">
                          <CheckCircle2 className="w-6 h-6 text-[#154627] fill-[#154627]/10" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Variant Selection */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                  <ListFilter className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">2. Choose variant</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(["Eco", "Auto"] as VariantKey[]).map((vari) => {
                  const isActive = activeVariant === vari;
                  const Icon = vari === "Eco" ? Leaf : Cpu;
                  
                  return (
                    <button
                      key={vari}
                      onClick={() => setActiveVariant(vari)}
                      className={`relative flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer group ${
                        isActive 
                          ? "border-[#154627] bg-[#154627] text-white shadow-lg" 
                          : "border-slate-200 bg-white hover:border-[#154627]/40 hover:bg-slate-50 text-slate-800"
                      }`}
                    >
                      <div className="flex flex-col flex-1">
                        <span className="font-black text-xl">{vari}</span>
                        <span className={`text-sm mt-1 font-medium ${isActive ? "text-[#C1C9C3]" : "text-slate-500"}`}>
                          {vari === "Eco" ? "Manual feeding" : "Automatic feeding"}
                        </span>
                      </div>
                      <div className={`p-3 rounded-xl ${isActive ? "bg-white/10" : "bg-slate-100 group-hover:bg-[#154627]/5"}`}>
                        <Icon className={`w-8 h-8 ${isActive ? "text-[#8CD5A1]" : "text-[#154627]/60"}`} />
                      </div>
                      
                      {isActive && (
                        <div className="absolute -top-3 -right-3 bg-white rounded-full p-0.5">
                          <CheckCircle2 className="w-6 h-6 text-[#154627] fill-[#154627]/10" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button 
                  type="button"
                  onClick={() => {
                    addToQuote({
                      id: `floura-${activeModel.toLowerCase()}-${activeVariant.toLowerCase()}`,
                      name: `Floura ${activeModel} (${activeVariant})`,
                      image: currentVariantData.image,
                      category: "Vending Machines",
                      size: `${activeModel} · ${activeVariant} · ${currentModelData.capacity}`
                    }, 1);
                    setAddedMessage(true);
                    setTimeout(() => setAddedMessage(false), 2000);
                  }}
                  className="h-12 min-h-[48px] sm:flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
                >
                  <PackageCheck className="w-4 h-4 text-slate-900" />
                  {addedMessage ? "Added to Quote!" : "Add to Quote List"}
                </button>
                
                <a 
                  href={`https://wa.me/919240289259?text=${encodeURIComponent(`Hi, I would like to enquire about Floura ${activeModel} (${activeVariant}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Enquiry
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-[#1eb557]" /> 
                  <span className="text-[13px] font-bold text-slate-700">1 year warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#1eb557]" /> 
                  <span className="text-[13px] font-bold text-slate-700">Worldwide delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1eb557]/10 border border-[#1eb557]/20 px-3.5 py-2 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#1eb557]" /> 
                  <span className="text-[13px] font-bold text-slate-700">After sales support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-24 bg-white">
        <div className="w-full bg-[#FAFAFA] rounded-3xl border border-slate-200/70 p-6 sm:p-10 shadow-sm transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4 border-b border-slate-200 pb-6">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-slate-900 flex items-center gap-2">
              Specifications 
              <span className="text-[#154627] bg-[#154627]/10 px-3 py-1 rounded-full text-lg ml-2">
                ( {activeModel} {activeVariant} )
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
            {/* Left Specs Column */}
            <div className="flex flex-col divide-y divide-slate-200/60">
              {leftSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="flex items-center justify-between py-4 group hover:bg-white rounded-lg px-2 transition-colors -mx-2">
                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-[#154627] group-hover:bg-[#154627]/5 transition-colors">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      {spec.label}
                    </div>
                    <div className="font-bold text-slate-900 text-sm text-right max-w-[50%]">
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Specs Column */}
            <div className="flex flex-col divide-y divide-slate-200/60">
              {rightSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="flex items-center justify-between py-4 group hover:bg-white rounded-lg px-2 transition-colors -mx-2">
                    <div className="flex items-center gap-4 text-slate-600 font-medium text-sm">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:text-[#154627] group-hover:bg-[#154627]/5 transition-colors">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      {spec.label}
                    </div>
                    <div className="font-bold text-slate-900 text-sm text-right max-w-[50%]">
                      {spec.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

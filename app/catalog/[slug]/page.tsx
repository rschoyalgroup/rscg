"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, PackageCheck, MessageCircle, ChevronLeft, ChevronRight, CheckCircle2, Factory, Wheat, Headset, Settings, ShieldCheck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { productsData, categoriesData } from "../productsData";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { addToQuote } = useQuote();

  const slug = params.slug as string;

  useEffect(() => {
    const flourProcessingSlugs = [
      "entoleter", "vibro-sifter", "plan-sifter"
    ];
    if (flourProcessingSlugs.includes(slug)) {
      router.replace(`/flour-processing/${slug}`);
      return;
    }

    const grainProcessingSlugs = [
      "magnetic-separator", "intensive-dampener", "horizontal-scourer",
      "bran-finisher", "emery-polisher", "emery-roll", "drum-sieve"
    ];
    if (grainProcessingSlugs.includes(slug)) {
      router.replace(`/grain-processing/${slug}`);
      return;
    }

    const siloMap: Record<string, string> = {
      "grain-silo": "grain-silo-ms",
      "conditioning-silo": "conditioning-silo",
      "atta-silo": "atta-flour-silo",
      "bran-silo": "bran-refraction-silo"
    };
    if (siloMap[slug]) {
      router.replace(`/grain-storage-handling/${siloMap[slug]}`);
      return;
    }

    const powerSavingSlugs = [
      "wonder-miller", "iquadra-smart-mill", "neomatic",
      "floura", "emery-stone-dresser"
    ];
    if (powerSavingSlugs.includes(slug)) {
      router.replace(`/power-saving/${slug}`);
      return;
    }
  }, [slug, router]);

  const product = productsData.find((p) => p.slug === slug);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [addedMessage, setAddedMessage] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'description' | 'additionalInfo'>('description');

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 340; // width + gap
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    setSelectedVariantIndex(0);
    setAddedMessage(false);
    setActiveTab('description');
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-brand-bg text-slate-800 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-8 pt-32 space-y-4">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="text-slate-500">The product you are looking for does not exist in our sitemap catalog.</p>
          <Link href="/catalog" className="bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-6 py-2.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] text-xs sm:text-sm uppercase tracking-wide">
            Back to catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToQuote = () => {
    const variant = product.variants[selectedVariantIndex] || { name: product.title, size: "Standard" };

    addToQuote({
      id: `${product.slug}-${selectedVariantIndex}`,
      name: `${product.title} - ${variant.name}`,
      image: variant.image || product.image,
      category: categoriesData[product.category as keyof typeof categoriesData]?.name || "Products",
      size: variant.size
    }, 1);

    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const variant = product.variants[selectedVariantIndex] || { name: product.title, size: "Standard" };
    const message = `Hello, I am interested in your product: *${product.title}* (${variant.name}) and would like to receive more details.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919240289259?text=${encodedMessage}`, '_blank');
  };

  const activeCategory = categoriesData[product.category as keyof typeof categoriesData];

  // Related products: same category first, then others to fill up to 8 items
  const sameCategoryProducts = productsData.filter((p) => p.category === product.category && p.slug !== product.slug);
  const otherProducts = productsData.filter((p) => p.category !== product.category && p.slug !== product.slug);
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 8);

  if (product.overview) {
    return (
      <div className="min-h-screen bg-slate-50 text-brand-foreground font-sans">
        <Header />

        {/* Title Area */}
        <div className="w-full pt-28 sm:pt-32 md:pt-36 pb-6 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full max-w-6xl mx-auto border-b border-slate-300 pb-4">
            <h1 className="text-3xl font-heading font-black text-[#134e4a]">
              {product.title}
            </h1>
          </div>
        </div>

        {/* Top Area: Overview + Image */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-4">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Overview and Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-[#134e4a]">Overview</h2>
                <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
                  {product.overview}
                </p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-[#134e4a]">Key features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {product.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Image */}
            <div className="bg-white/50 rounded-lg flex items-center justify-center p-8 aspect-[4/3] border border-slate-200 shadow-sm relative overflow-hidden">
              <img src={product.variants?.[0]?.image || product.image} alt={product.title} className="max-w-full max-h-full object-contain drop-shadow-lg z-10" />
            </div>

          </div>
        </div>

        {/* Middle Banner */}
        <div className="w-full py-4 mt-6">
          <div className="w-full max-w-6xl mx-auto flex flex-nowrap sm:flex-wrap items-stretch sm:items-center justify-end gap-2 sm:gap-3">
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

        {/* Bottom Area: Specs and Applications */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8 mb-12">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Technical Specs Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center border-b border-slate-300 pb-2">
                 <h2 className="text-2xl font-heading font-bold text-[#134e4a] pr-4 bg-[#F7F9F6]">Technical specifications</h2>
              </div>
              <div className="bg-slate-100/50 rounded-xl overflow-hidden border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-200/60 text-[#134e4a] text-left">
                      <th className="px-4 py-3 font-bold w-1/2">Parameter</th>
                      <th className="px-4 py-3 font-bold w-1/2 border-l border-white/50">≡ Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/50">
                    {product.specifications && Object.keys(product.specifications).length > 0 ? (
                      Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={idx} className="hover:bg-white/50 transition-colors">
                          <td className="px-4 py-3 flex items-center gap-3 font-medium text-slate-800">
                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">{idx + 1}</span>
                            {key}
                          </td>
                          <td className="px-4 py-3 font-medium text-slate-700 border-l border-white/50 bg-white/30">{value}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="px-4 py-8 text-center text-slate-500 font-medium">No specifications available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Applications & Buttons */}
            <div className="lg:col-span-5 space-y-8">
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-[#134e4a]">Applications</h2>
                  <div className="space-y-3 bg-white/50 p-6 rounded-2xl border border-slate-200">
                    {product.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-600/10 flex items-center justify-center shrink-0">
                          <Wheat className="w-4 h-4 text-emerald-700" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-slate-200">
                <button
                  onClick={handleAddToQuote}
                  className="h-12 flex-1 w-full sm:w-auto flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
                >
                  <PackageCheck className="w-4 h-4 text-slate-900" />
                  {addedMessage ? "Added to quote!" : "Add to quote list"}
                </button>
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp enquiry
                </button>
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

        {/* CTA Banner */}
        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-12">
           <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-[#17462c] to-[#297a49] flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 lg:px-12 shadow-xl relative border border-white/10">
             <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
             <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 relative z-10 text-center lg:text-left">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center shrink-0">
                  <Settings className="w-6 h-6 text-[#f7b032]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black text-white">Smart milling. Smarter business.</h3>
                  <p className="text-white/85 text-sm font-medium">Save power. Increase production. Deliver consistent quality.</p>
                </div>
             </div>
             <button onClick={() => router.push('/contact')} className="relative z-10 inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 hidden sm:flex transition-all duration-200 whitespace-nowrap text-xs sm:text-sm uppercase tracking-wide cursor-pointer">
                <span>Discuss your requirement</span>
                <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-foreground font-sans">
      <Header />

      {/* Main Details Section */}
      <section className="w-full pt-28 sm:pt-32 md:pt-36 pb-12 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Product Image (col-span-5) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <div className="bg-white rounded-[32px] border border-slate-200/60 p-6 lg:p-8 shadow-xs flex items-center justify-center aspect-square lg:aspect-auto lg:h-[calc(100vh-16rem)] lg:min-h-[260px] lg:max-h-[460px] relative overflow-hidden">
              <img
                src={product.variants[selectedVariantIndex]?.image || product.image}
                alt={product.title}
                className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-6 left-6 bg-brand-primary/10 text-brand-primary border border-brand-primary/15 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider">
                {activeCategory?.name}
              </span>
            </div>

            {/* Disclaimer card */}
            <div className="bg-white/40 border border-slate-200/40 rounded-2xl p-4 text-center text-[11px] text-slate-400 font-semibold leading-relaxed">
              * Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups.
            </div>
          </div>

          {/* Right Column: Title, Variants, Actions, and Tabs (col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h1>
            </div>

            {/* Variants Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 tracking-widest">
                  Available models & specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.variants.map((v, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex justify-between items-start ${
                        selectedVariantIndex === idx
                          ? "bg-white border-brand-primary shadow-md ring-2 ring-brand-primary/10"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-black text-slate-800">
                          {v.name}
                        </div>
                        <div className="text-xs text-slate-400 font-semibold">
                          Specs: {v.specs}
                        </div>
                      </div>
                      <div className={`h-4 w-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        selectedVariantIndex === idx
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-slate-300"
                      }`}>
                        {selectedVariantIndex === idx && <Check className="h-2.5 w-2.5" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions: Add to Quote List & WhatsApp Enquiry (1.png style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleAddToQuote}
                className="h-12 flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
              >
                <PackageCheck className="w-4 h-4 text-slate-900" />
                {addedMessage ? "Added to quote!" : "Add to quote list"}
              </button>

              <button
                onClick={handleWhatsAppEnquiry}
                className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp enquiry
              </button>
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

            {/* Tabs Section: Description & Additional Information */}
            <div className="border border-slate-200/60 rounded-[32px] bg-white overflow-hidden shadow-xs">
              {/* Tab Header Row */}
              <div className="flex border-b border-slate-100 bg-slate-50/50">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest transition-all cursor-pointer border-b-2 ${
                    activeTab === "description"
                      ? "border-brand-primary text-brand-primary bg-white"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("additionalInfo")}
                  className={`px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold tracking-widest transition-all cursor-pointer border-b-2 ${
                    activeTab === "additionalInfo"
                      ? "border-brand-primary text-brand-primary bg-white"
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Additional information
                </button>
              </div>

              {/* Tab Content Box */}
              <div className="p-6 sm:p-8">
                {activeTab === "description" ? (
                  <div
                    className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed font-medium space-y-4
                      [&>p]:leading-relaxed [&>p]:mb-4
                      [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-4
                      [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-4
                      [&>li]:text-slate-600
                      [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mt-6 [&>h2]:mb-3"
                    dangerouslySetInnerHTML={{ __html: product.description || "No description available." }}
                  />
                ) : (
                  <div className="space-y-4">
                    {product.additionalInfo && Object.keys(product.additionalInfo).length > 0 ? (
                      <div className="border border-slate-100 rounded-2xl overflow-hidden w-full">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            {Object.entries(product.additionalInfo).map(([key, value]) => (
                              <tr key={key} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="bg-slate-50/60 px-4 sm:px-6 py-4 text-xs sm:text-sm font-bold text-slate-500 tracking-wider w-1/3 border-r border-slate-100">
                                  {key}
                                </td>
                                <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm text-slate-600 font-semibold">
                                  {value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm font-semibold">No additional information parameters available.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 border-t border-slate-200/50 bg-slate-50/20 overflow-hidden">
        <div className="w-full mx-auto space-y-8">

          {/* Hide Scrollbars Utility */}
          <style dangerouslySetInnerHTML={{ __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}} />

          {/* Header Row */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900 tracking-tight">
              Related products
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollSlider('left')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollSlider('right')}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {relatedProducts.map((p) => {
              const cat = categoriesData[p.category as keyof typeof categoriesData];
              return (
                <div
                  key={p.slug}
                  className="w-[280px] sm:w-[320px] shrink-0 snap-start"
                >
                  <Link
                    href={`/catalog/${p.slug}`}
                    className="group bg-white rounded-[32px] border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center p-6 relative border-b border-slate-100 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1">
                        <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-base transition-colors leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-bold tracking-wider">
                          {cat?.name || "Products"}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto">
                        <span>View product</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

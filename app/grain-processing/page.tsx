"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Shield, Layers, Settings, ShoppingCart, Filter, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";

export default function GrainProcessingPage() {

  const { addToQuote } = useQuote();

  const advancedProducts = [
    {
      id: 1,
      title: "Magnetic Separator",
      slug: "magnetic-separator",
      image: "/images/grain-processing/magnetic-separator.png",
      description: "Removes all ferrous impurities from grain streams with powerful rare-earth magnets, ensuring product purity and equipment safety."
    },
    {
      id: 2,
      title: "Intensive Dampener",
      slug: "intensive-dampener",
      image: "/images/grain-processing/intensive-dampener.png",
      description: "Achieves uniform and efficient moisture addition for precise grain conditioning, optimizing the milling process."
    },
    {
      id: 3,
      title: "Bran Finisher",
      slug: "bran-finisher",
      image: "/images/grain-processing/bran-finisher.png",
      description: "Effectively separates remaining endosperm from bran particles, increasing flour yield and reducing waste."
    },
    {
      id: 4,
      title: "Horizontal Scourer",
      slug: "horizontal-scourer",
      image: "/images/grain-processing/horizontal-scourer.png",
      description: "Uses high-speed abrasive action to scour and polish grain surfaces, removing dust, dirt, and mold for cleaner grain."
    },
    {
      id: 5,
      title: "Emery Polisher",
      slug: "emery-polisher",
      image: "/images/grain-processing/emery-polisher.png",
      description: "An advanced machine for high-precision polishing of grains, enhancing visual appearance and value."
    },
    {
      id: 6,
      title: "Emery Roll",
      slug: "emery-roll",
      image: "/images/grain-processing/emery-roll.png",
      description: "A key component featuring precision-machined emery segments for aggressive grain scouring and hulling."
    },
    {
      id: 7,
      title: "Drum Sieve",
      slug: "drum-sieve",
      image: "/images/grain-processing/drum-sieve.png",
      description: "A rotating drum with screens for large-scale, continuous sifting and separation of materials."
    }
  ];

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
              src="/hero/grain-processing/grain_process_desktop_cropped.png"
              alt="Grain Processing Solutions"
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
              src="/hero/grain-processing/grain_process_mobile.png"
              alt="Grain Processing Solutions"
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
              Grain processing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Grain processing solutions
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              High-performance machines for cleaner grain, better separation, and optimized milling efficiency.
            </p>
            <div className="pt-2 sm:pt-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE MACHINES <ArrowRight className="w-4 h-4" />
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
              <Filter className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Cleaner separation</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Advanced separators &amp; multistage screening.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Maximum yield</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Optimized processing with minimal grain loss.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Settings className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Precision engineering</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Heavy-duty build with automated controls.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10 mb-2">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Filter className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Cleaner separation</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Advanced separators &amp; multistage screening.</p>
            </div>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Maximum yield</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Optimized processing with minimal grain loss.</p>
            </div>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Precision engineering</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Heavy-duty build with automated controls.</p>
            </div>
          </div>

          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Intro Description Section */}
      <section className="w-full pt-4 md:pt-20 lg:pt-24 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white relative z-10">
        <div className="w-full mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Precision Cleaning for Superior Flour Quality
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              Effective grain cleaning is essential for producing high-quality flour. RS Group offers advanced cleaning and separation solutions that remove dust, stones, sand, straw, metal particles, and other impurities from wheat and various grains. Our precision-engineered machinery and industry expertise ensure efficient impurity removal, improved grain quality, and a reliable foundation for consistent milling performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products" className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="w-full mx-auto space-y-10">

          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
              Our advanced milling and cleaning products
            </h2>
            <p className="text-slate-600 font-medium">
              Innovative and automated solutions for flour &amp; feed
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 w-full">
            {advancedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/grain-processing/${product.slug}`}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
              >
                {/* Image Area - Clean rounded background matching catalog page */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-1 sm:p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Content - Responsive sizing for 2-col mobile & 3-col desktop */}
                <div className="p-3.5 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-xs sm:text-base text-slate-500 mt-1.5 sm:mt-3 line-clamp-2 leading-relaxed font-normal">
                      {product.description}
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
        </div>
      </section>

      {/* Get in Touch Landscape Banner */}
      <section className="relative w-full h-[240px] sm:h-[320px] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-[url('/images/plants/srivari_3.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-900/45" />
        <div className="relative w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto z-10 flex flex-col items-center text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight">
            Need a customized cleaning line setup?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
          >
            <span>Discuss your requirement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>



      <Footer />
    </div>
  );
}

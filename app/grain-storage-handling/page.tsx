"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Database, Archive, RefreshCw, Factory, Settings2, LayoutTemplate, ShieldCheck, Headset, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const handlingCards = [
  {
    title: "Atta Flour Silo",
    slug: "atta-flour-silo",
    image: "/images/silos/atta-silo.png",
    sub: "Flour storage silo"
  },
  {
    title: "Bran / Refraction Silo",
    slug: "bran-refraction-silo",
    image: "/images/silos/bran-silo.png",
    sub: "Mild-steel storage silo"
  },
  {
    title: "Conditioning Silo",
    slug: "conditioning-silo",
    image: "/images/silos/conditioning-silo.png",
    sub: "Conditioned grain holding"
  },
  {
    title: "Grain Silo - MS",
    slug: "grain-silo-ms",
    image: "/images/silos/grain-silo.png",
    sub: "Heavy-duty storage silo"
  }
];

export default function GrainStorageHandlingPage() {


  return (
    <div className="min-h-screen bg-white text-brand-foreground font-sans">
      <Header />

      {/* Hero Banner Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/silo/silo_hero_desktop_cropped.png" 
              alt="Silos Storage and Handling" 
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
              src="/hero/silo/silo_hero_mobile.png" 
              alt="Silos Storage and Handling" 
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
              Silos division
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Storage & handling silos
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Storage and handling silos engineered for reliable material flow, controlled conditioning, and efficient plant performance. Explore bran, atta, conditioning, and grain silos designed for smooth mill operations.
            </p>
            <div className="pt-2 sm:pt-4">
              <Link 
                href="#products" 
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE SILOS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7 flex flex-row items-center justify-between gap-4 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Database className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Bran, atta &amp; grain</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Conditioning silos</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0 shadow-xs">
              <RefreshCw className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Controlled flow</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Storage &amp; conveying</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Factory className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Turnkey silos</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Built for milling plants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10 mb-2">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Bran, atta &amp; grain</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Conditioning silos</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Controlled flow</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Storage &amp; conveying</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#22c55e] flex items-center justify-center flex-shrink-0">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Turnkey silos</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Built for milling plants</p>
            </div>
          </div>
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Intro Description Section */}
      <section className="w-full pt-4 md:pt-20 lg:pt-24 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="w-full mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Grain storage &amp; handling is crucial for maintaining the quality of grain
          </h2>
          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 max-w-4xl">
            <p>
              RS Group offers reliable grain storage and handling solutions designed for efficiency and long-term preservation.
            </p>
            <p>
              Our silos storage systems are manufactured keeping in mind the standard of safety and quality of the storage system. Our engineering team designs customized silo systems to meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products" className="w-full py-8 px-6 sm:px-12 lg:px-16 xl:px-24 scroll-mt-24">
        <div className="w-full mx-auto space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8 w-full">
            {handlingCards.map((card) => (
              <Link 
                key={card.slug}
                href={`/grain-storage-handling/${card.slug}`}
                className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
              >
                {/* Image Area - Clean rounded background matching catalog page */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-contain p-1 sm:p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Content - Responsive sizing for 2-col mobile & 3-col desktop */}
                <div className="p-3.5 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-base text-slate-500 mt-1.5 sm:mt-3 line-clamp-2 leading-relaxed font-normal">
                      {card.sub}
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

      {/* Detailed Silo Solutions CTA Section */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 relative z-10">
        <div className="w-full bg-white rounded-3xl sm:rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col">
          
          {/* Top Main Content Area */}
          <div className="flex flex-col xl:flex-row items-stretch">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 p-6 sm:p-10 xl:p-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#eab308] tracking-widest">
                  <span className="w-10 h-[3px] bg-[#eab308]"></span>
                  Silo solutions
                </div>
                <h2 className="text-3xl sm:text-5xl xl:text-6xl font-heading font-black text-[#0a3118] leading-[1.1] tracking-tight">
                  Let’s design the right<br className="hidden xl:block"/> silo for your plant.
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed max-w-xl text-base sm:text-lg">
                  From capacity planning to layout, materials and integration - our experts help you build efficient, future-ready storage systems.
                </p>
              </div>

              {/* 4 Features Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <Headset className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Expert<br/>consultation</h4>
                  <p className="text-xs text-slate-500 font-medium">Get recommendations tailored to your process and capacity.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Custom<br/>design & layout</h4>
                  <p className="text-xs text-slate-500 font-medium">Optimized designs that fit your plant and operations.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">Reliable<br/>performance</h4>
                  <p className="text-xs text-slate-500 font-medium">Engineered for safety, smooth flow and long-lasting use.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <Settings2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-[#0a3118] text-sm leading-tight">End-to-end<br/>support</h4>
                  <p className="text-xs text-slate-500 font-medium">From selection to installation and after-sales service.</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative min-h-[260px] sm:min-h-[380px] xl:min-h-[500px] overflow-hidden bg-[#f4f2eb]">
              <Image
                src="/images/silos/silo_cta_image.png"
                alt="Silo Solutions Design"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Bottom Contact Strip */}
          <div className="flex flex-col xl:flex-row border-t border-slate-200 bg-slate-50">
            {/* Dark Green CTA box */}
            <div className="bg-[#0a3118] p-6 sm:p-8 xl:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 xl:w-[45%] rounded-br-[2.5rem] sm:rounded-br-[4rem] xl:rounded-br-[0] xl:rounded-tr-[4rem] relative overflow-hidden">
               <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-white z-10">
                 <Phone className="w-6 h-6" />
               </div>
               <div className="z-10 w-full sm:w-auto">
                 <h3 className="text-white font-heading font-extrabold text-xl lg:text-2xl mb-4">
                   Ready to discuss your<br className="hidden sm:block"/> silo requirements?
                 </h3>
                 <Link 
                   href="/contact"
                   className="flex sm:inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
                 >
                   <span>Discuss your requirement</span>
                   <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
               <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
                 <Database className="w-48 h-48 text-white" />
               </div>
            </div>

            {/* Quick Contact Info */}
            <div className="flex-1 bg-slate-50 p-6 sm:p-8 xl:p-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-5 sm:gap-6">
               <div className="flex items-center gap-4 min-w-0">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-xs text-slate-500 font-bold tracking-wider">Call us</p>
                   <p className="text-sm font-extrabold text-[#0a3118]">+91 91161 44665</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 min-w-0">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-xs text-slate-500 font-bold tracking-wider">Email us</p>
                   <p className="text-sm font-extrabold text-[#0a3118] break-all">info@rschoyalgroup.com</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 min-w-0">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                   <MessageCircle className="w-5 h-5" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-xs text-slate-500 font-bold tracking-wider">Chat on WhatsApp</p>
                   <p className="text-sm font-extrabold text-[#0a3118]">+91 91161 44665</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>



      <Footer />
    </div>
  );
}

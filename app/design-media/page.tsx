"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle2, ClipboardCheck, Lightbulb, Headset, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function DesignMediaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroProofPoints = [
    {
      title: "Technical design",
      desc: "Precision engineering layouts, schematic drafting"
    },
    {
      title: "Design for manufacturing",
      desc: "Optimizing component geometries for cost effective production"
    },
    {
      title: "Packaging design",
      desc: "Structural packaging, creative branding and production-ready artwork"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header onRequestCallback={() => setIsModalOpen(true)} />

        {/* Hero Section - Standardized responsive hero */}
        <section className="w-full relative z-10 bg-[#0B1510] text-white aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex flex-col justify-center">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src="/design_media/design_desktop_cropped.png" 
                alt="Design & Media Studio" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/90 via-[#0B1510]/55 to-transparent z-10 w-full" />
            </div>

            {/* Mobile Background Image (1080x1920) */}
            <div className="block md:hidden absolute inset-0">
              <Image 
                src="/design_media/design_mobile.png" 
                alt="Design & Media Studio" 
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/90 via-[#0B1510]/65 to-[#0B1510]/40 z-10 w-full" />
            </div>
          </div>

          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 flex-1 flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
            <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Standard Eyebrow */}
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                Design & media studio
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                Ideas engineered. Stories crafted.
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Our design studio combines engineering expertise with creative thinking to deliver technical design, 3D visualization, and packaging solutions.
              </p>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
                >
                  EXPLORE DESIGN STUDIO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Desktop Proof Points White Container - Full Width Overlapping Hero Bottom */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full px-6 sm:px-12 lg:px-16 xl:px-24 z-30 translate-y-1/2">
              <div className="w-full bg-white rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-slate-100">
                <div className="grid grid-cols-3 divide-x divide-slate-200">
                  {heroProofPoints.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 sm:p-5 hover:bg-[#E8F5E9]/70 rounded-xl transition-colors duration-200 cursor-default text-left space-y-1.5"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#0B1510] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Mobile Proof Points - Horizontal Swipeable Slider */}
        <div className="block md:hidden relative z-30 -mt-11 w-full">
          <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
            {heroProofPoints.map((item, idx) => (
              <div
                key={idx}
                className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5"
              >
                <h3 className="text-base font-bold text-[#0B1510] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Technical Design Section */}
        <section className="w-full pt-6 sm:pt-12 md:pt-36 lg:pt-40 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            <div className="space-y-6 lg:pr-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/technical_design.png" 
                    alt="Technical Design Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl font-heading font-black text-[#133020]">
                    Technical Design
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                Our engineers translate complex requirements into practical, manufacturable solutions.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "CAD design",
                  "Design for manufacture and assembly",
                  "Material and process selection",
                  "Cost reduction and value engineering"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 text-sm sm:text-base text-slate-700 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#D3994B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full">
              <Image 
                src="/images/design-media/images/technicaldesign_supplementalimg.png" 
                alt="Technical Design Software" 
                fill
                className="object-cover" 
              />
            </div>

          </div>
        </section>

        {/* Design for Manufacturing Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white/60">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full order-2 lg:order-1">
              <Image 
                src="/images/design-media/images/designformanufacture_supplementalimg.png" 
                alt="Design for Manufacturing Plant" 
                fill
                className="object-cover" 
              />
            </div>

            <div className="space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/design_for_manufacture.png" 
                    alt="Design for Manufacturing Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl font-heading font-black text-[#133020]">
                    Design for Manufacturing
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                We design plants and machinery that are not only efficient to operate, but also reliable and economical to manufacture.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 pb-2">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#133020] shrink-0">
                    <ClipboardCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black font-heading text-[#133020]">275+</h4>
                    <p className="text-xs font-bold text-slate-500 tracking-wide leading-tight mt-0.5">Turnkey projects<br/>designed & delivered</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-[#F9F6F0] flex items-center justify-center text-[#D3994B] shrink-0">
                    <Lightbulb className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black font-heading text-[#133020]">42+</h4>
                    <p className="text-xs font-bold text-slate-500 tracking-wide leading-tight mt-0.5">Innovations<br/>developed</p>
                  </div>
                </div>
              </div>

              {/* Contact Prompt */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-[#133020] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                  <Headset className="w-5 h-5 stroke-[1.5]" />
                </div>
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  If you would like to discuss your requirement with our experts, fill out our <Link href="/contact" className="text-[#D3994B] font-bold hover:underline">contact form</Link> and we will reach out to you.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Packaging Design Section */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            <div className="space-y-6 lg:pr-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/design_media/clean-icons/packaging_design.png" 
                    alt="Packaging Design Icon" 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl xl:text-5xl font-heading font-black text-[#133020]">
                    Packaging design
                  </h2>
                  <div className="w-12 h-1 bg-[#D3994B] mt-2" />
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  We create packaging that helps products stand out, communicate trust, and build a consistent brand presence.
                </p>
                <p>
                  From start-ups to established companies, we develop packaging systems that are attractive, practical, and aligned with the product.
                </p>
              </div>
            </div>
            
            <div className="rounded-[28px] overflow-hidden shadow-xl border border-slate-100 relative h-[320px] sm:h-[440px] lg:h-[480px] w-full">
              <Image 
                src="/images/design-media/images/packagingdesign.png" 
                alt="Packaging Design Examples" 
                fill
                className="object-cover" 
              />
            </div>

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[28px] p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 text-center lg:text-left border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 max-w-2xl relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 border-white/20 bg-white/10 rounded-full flex items-center justify-center text-[#f5a623]">
                <Headset className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Let's build something exceptional
                </h3>
                <p className="text-base text-white/90 leading-relaxed font-normal">
                  From engineering drawings to 3D presentations and packaging, our team can help bring your ideas to life.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer text-nowrap whitespace-nowrap shrink-0"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </section>

      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c2722]/65 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md animate-scale-in">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 transition-colors shadow-xs cursor-pointer border border-slate-200/40"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
            <LeadForm className="shadow-black/75 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/10" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

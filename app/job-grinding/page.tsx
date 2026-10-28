"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Package, Settings, Clock, Beaker, Crosshair, ShieldCheck, Leaf, HeadphonesIcon, Shield, Building2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timelineSteps = [
  {
    number: 1,
    title: "Wheat testing",
    desc: "Raw wheat is thoroughly tested for moisture, impurities, protein, and overall quality. Only premium-grade wheat is selected to ensure consistent flour performance."
  },
  {
    number: 2,
    title: "Pre cleaning",
    desc: "Large impurities such as stones, straw, dust, and foreign materials are removed. This initial cleaning protects equipment and prepares the wheat for processing."
  },
  {
    number: 3,
    title: "First cleaning",
    desc: "Advanced cleaning machines eliminate finer impurities and unwanted particles. This step enhances wheat purity before conditioning."
  },
  {
    number: 4,
    title: "Final cleaning",
    desc: "A final purification process removes any remaining contaminants. It ensures the wheat is completely clean and ready for milling."
  },
  {
    number: 5,
    title: "Conditioning",
    desc: "Water is added to the wheat and allowed to rest for optimal moisture balance. This improves bran separation and enhances flour quality during milling."
  },
  {
    number: 6,
    title: "Grinding",
    desc: "Conditioned wheat is carefully ground using precision roller mills. The process produces fine flour while preserving its natural quality."
  },
  {
    number: 7,
    title: "Sieving",
    desc: "Ground material is separated into flour, bran, and semolina using fine sieves. This ensures uniform particle size and consistent product quality."
  },
  {
    number: 8,
    title: "Redressing",
    desc: "The flour undergoes additional refining to improve texture and purity. This step delivers a smoother, cleaner, and more consistent final product."
  },
  {
    number: 9,
    title: "Lab testing",
    desc: "Finished flour is tested for quality, safety, and compliance with industry standards. Every batch is verified to ensure consistent performance and customer satisfaction."
  },
  {
    number: 10,
    title: "Packing",
    desc: "The finished flour is hygienically packed in food-grade packaging. Secure packaging preserves freshness, quality, and shelf life during storage and transport."
  }
];

export default function JobGrindingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Standardized responsive hero */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image
                src="/hero/job-grinding/job-grinding-desktop-cropped.png"
                alt="Job Grinding"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Dark-charcoal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
            </div>

            {/* Mobile Background Image (1080x1920 -> 9:16) */}
            <div className="block md:hidden absolute inset-0">
              <Image
                src="/hero/job-grinding/job-grinding-mobile.png"
                alt="Job Grinding"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Mobile gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/65 to-[#0B1510]/40"></div>
            </div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
            <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                Services
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                Job Grinding
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Flexible contract grinding services for grains, spices, pulses, and food ingredients - delivering consistent particle size, hygienic processing, and dependable commercial output.
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => document.getElementById('job-grinding-overview')?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm tracking-wide cursor-pointer"
                >
                  Explore job grinding <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
        <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-row divide-x divide-slate-100 overflow-hidden">

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">
                Custom batch sizes
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Flexible processing
              </p>
            </div>

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">
                Consistent grinding
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Reliable particle control
              </p>
            </div>

            <div className="flex-1 p-5 lg:p-6 xl:p-8 hover:bg-[#e6f4ea] transition-colors cursor-pointer group flex flex-col items-center justify-start text-center">
              <h3 className="font-heading font-black text-lg lg:text-xl xl:text-2xl text-slate-800 group-hover:text-brand-primary transition-colors mb-1.5">
                Fast turnaround
              </h3>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Commercial-scale support
              </p>
            </div>

          </div>
        </div>

        {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
        <div className="block md:hidden relative z-30 -mt-13 w-full">
          <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Custom batch sizes</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Flexible processing</p>
            </div>

            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Consistent grinding</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Reliable particle control</p>
            </div>

            <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1">
              <h3 className="font-heading font-black text-lg text-slate-800 leading-snug">Fast turnaround</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">Commercial-scale support</p>
            </div>

            <div className="w-2 shrink-0" aria-hidden="true" />
          </div>
        </div>

        {/* Intro & Process Overview */}
        <section id="job-grinding-overview" className="w-full pt-6 sm:pt-12 md:pt-10 lg:pt-14 xl:pt-16 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 relative md:-mt-12 lg:-mt-16 overflow-hidden">

          {/* Faded Gear Watermark */}
          <div className="absolute right-[-10%] top-[10%] opacity-5 pointer-events-none">
            <Settings className="w-[500px] h-[500px] text-brand-primary" />
          </div>

          {/* Breadcrumbs */}
          <div className="text-sm font-medium text-slate-500 flex items-center gap-2 mb-10 relative z-10">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="hover:text-brand-primary transition-colors">Services</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-800 font-semibold">Job Grinding</span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-stretch relative z-10">
            {/* Left Column: Heading & Content Paragraphs */}
            <div className="xl:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#133020] leading-tight">
                Our job grinding process is designed to make every batch clear, controlled, and dependable.
              </h2>
              <div className="h-1 w-16 bg-[#D3994B]"></div>
              <div className="text-slate-600 space-y-5 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  From understanding your raw material and required particle size to trials, grinding, quality checks, and final dispatch, each stage is planned to deliver consistent results while protecting product quality.
                </p>
                <p>
                  Our <span className="whitespace-nowrap font-bold text-slate-800">40 TPD</span> Flour Milling Facility in Ajmer is more than a plant plain - it's an experience centre designed to help you make confident, informed decisions.
                </p>
                <p>
                  See a wide range of milling machines in action, evaluate process performance, conduct R&amp;D, and get practical operator training.
                </p>
                <p>
                  From process trials to skill-building, everything you need to validate the right solution - before you invest.
                </p>
              </div>
            </div>

            {/* Right Column: Facility Details Card + 3 Cards Side-by-Side */}
            <div className="xl:col-span-6 flex flex-col gap-5 sm:gap-6 min-w-0">
              {/* Facility Details Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 p-6 sm:p-8">
                <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f4ea] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#307954]" />
                  </div>
                  <h3 className="font-heading font-black text-[#133020] text-lg sm:text-xl">Facility details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:divide-x sm:divide-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 shrink-0 border border-slate-100">
                      <img src="/images/job-grinding/facility-details/capacity-clean.png" alt="Capacity" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 tracking-wider block mb-1">Capacity:</span>
                      <p className="font-black text-[#133020] text-xl sm:text-2xl whitespace-nowrap">40 TPD</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:pl-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 shrink-0 border border-slate-100">
                      <img src="/images/job-grinding/facility-details/location-clean.png" alt="Location" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 tracking-wider block mb-1">Location:</span>
                      <p className="font-black text-[#133020] text-base sm:text-lg whitespace-nowrap">Ajmer, Rajasthan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Facility Services Cards (Row of 3) */}
              <div className="flex sm:grid sm:grid-cols-3 xl:flex-1 gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 scroll-pl-6 sm:scroll-pl-0 pt-2 pb-6 sm:py-0">
                {[
                  {
                    title: "Job grinding",
                    desc: "From understanding your raw material particle size to trials, grinding product.",
                    icon: "/images/job-grinding/facility-services/job-grinding-clean.png"
                  },
                  {
                    title: "Custom recipe design",
                    desc: "We adjust dampening and sifting streams to achieve exact gluten.",
                    icon: "/images/job-grinding/facility-services/custom-recipe-design-clean.png"
                  },
                  {
                    title: "Compliant facility",
                    desc: "Our plant is fully solar-powered, dust-free, and high test of quality standards.",
                    icon: "/images/job-grinding/facility-services/compliant-facility-clean.png"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="w-[78vw] max-w-[290px] sm:w-auto sm:max-w-none shrink-0 sm:shrink snap-start sm:snap-align-none bg-white rounded-2xl p-6 text-center shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-slate-200/70 hover:shadow-md hover:border-slate-200 transition-all flex flex-col items-center justify-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center">
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-heading font-black text-[#133020] text-sm sm:text-base mb-2.5 leading-snug tracking-tight">{service.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{service.desc}</p>
                  </div>
                ))}
                <div className="w-2 shrink-0 sm:hidden" aria-hidden="true" />
              </div>
            </div>
          </div>

        </section>

        {/* The Flour Milling Process */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16 sm:mb-20">
            <span className="text-xs font-black text-slate-500 tracking-widest">
              Milling process
            </span>
            <h3 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
              The flour milling process
            </h3>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center vertical spine line */}
            <div className="absolute left-6 md:left-1/2 top-3 bottom-6 w-[2px] bg-slate-400 md:-translate-x-1/2 z-0" />

            <div className="space-y-12 sm:space-y-16">
              {timelineSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex items-start md:justify-between w-full">

                    {/* Circle Number Badge (centred on the step's title connector line) */}
                    <div className="absolute left-6 md:left-1/2 -top-3 md:-top-2.5 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center shadow-xs">
                        <div className="w-8 h-8 rounded-full bg-[#133020] text-white flex items-center justify-center font-heading font-bold text-sm">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Left Side (for odd steps) */}
                    <div className={`hidden md:block w-1/2 pr-10 lg:pr-14 ${isLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      {isLeft && (
                        <div className="w-full flex flex-col items-start">
                          <h4 className="font-heading font-black text-[#133020] text-lg leading-7 tracking-wide mb-1 pl-4">
                            {step.title}
                          </h4>
                          <div className="flex items-center w-full my-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0" />
                            <div className="h-[2px] w-full bg-slate-400" />
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2 pl-4">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Desktop Right Side (for even steps) */}
                    <div className={`hidden md:block w-1/2 pl-10 lg:pl-14 ${!isLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      {!isLeft && (
                        <div className="w-full flex flex-col items-start">
                          <h4 className="font-heading font-black text-[#133020] text-lg leading-7 tracking-wide mb-1">
                            {step.title}
                          </h4>
                          <div className="flex items-center w-full my-1">
                            <div className="h-[2px] w-full bg-slate-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-slate-600 shrink-0" />
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2 pr-4">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile View (All steps on right of spine) */}
                    <div className="block md:hidden w-full pl-16 pr-2">
                      <h4 className="font-heading font-black text-[#133020] text-base leading-6 tracking-wide mb-1">
                        {step.title}
                      </h4>
                      <div className="flex items-center w-full my-1">
                        <div className="h-[2px] w-full bg-slate-400" />
                        <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1.5">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Offered Grid */}
        <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-16">
            <h3 className="text-3xl font-heading font-black text-slate-900">
              Services offered
            </h3>
            <p className="text-base text-slate-600 font-medium">
              Explore setup options, mill training courses, and product trial runs.
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pt-2 pb-6 md:py-0">
            {[
              {
                title: "Job grinding setup",
                desc: "With zero machinery investment, get your atta brand setup easily. Receive freshly milled premium flour packed in your custom sacks.",
                imgPath: "/images/job-grinding/services-offered/jobgrinding_setup.png"
              },
              {
                title: "Product trials",
                desc: "We determine parameters, evaluate yield, quality, and consistency to find the best outcome.",
                imgPath: "/images/job-grinding/services-offered/product-trials.png"
              },
              {
                title: "Training facility",
                desc: "We offer world-class practical courses on flour milling technology for operators. Full plant audit to ensure peak performance and compliance.",
                imgPath: "/images/job-grinding/services-offered/training-facility.png"
              }
            ].map((service, idx) => (
              <div key={idx} className="w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none bg-white border border-slate-200/70 rounded-3xl lg:rounded-[32px] overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden p-2.5 lg:p-3 pb-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                     <img src={service.imgPath} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-5 md:p-5 lg:p-8 space-y-2 lg:space-y-3 flex-1 flex flex-col">
                  <h4 className="text-lg lg:text-xl font-heading font-black text-[#133020] leading-snug">{service.title}</h4>
                  <p className="text-sm lg:text-base text-slate-600 font-normal leading-relaxed">{service.desc}</p>
                  <ArrowRight className="w-4 h-4 text-[#D3994B] mt-auto! pt-2 box-content" />
                </div>
              </div>
            ))}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 pb-20">
          <div className="relative w-full rounded-[32px] overflow-hidden bg-[#0A120D] shadow-xl flex flex-col justify-end min-h-[460px]">
            {/* Background Image positioned to the right so chute and pouring flour are crisp and visible */}
            <div className="absolute inset-0 bg-[url('/images/job-grinding/footer-job-grinding-/jobgrinding_services.png')] bg-cover bg-right md:bg-[center_right] z-0" />

            {/* Desktop Gradient: Reduced green, smooth dark gradient on the left half leaving the right side clear */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B1510] via-[#0B1510]/85 via-48% to-transparent z-0" />

            {/* Mobile Gradient */}
            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#0B1510]/95 via-[#0B1510]/80 to-[#0B1510]/40 z-0" />

            <div className="relative z-10 p-6 sm:p-12 lg:p-14 space-y-8 flex flex-col justify-between h-full">

              <div className="space-y-4 max-w-2xl">
                <span className="text-xs sm:text-sm font-black text-[#f7b032] tracking-widest">
                  Job grinding services
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-white leading-tight">
                  Have a product you need ground?
                </h2>
                <p className="text-base text-slate-200 max-w-xl font-normal leading-relaxed">
                  Share your raw material, required particle size, batch quantity, and quality specifications with our team. We will help you identify the right grinding process for trial production or commercial-scale requirements.
                </p>
              </div>

              {/* Icons Row - Horizontal swipeable on mobile, flex-wrap on desktop */}
              <div className="flex items-start gap-4 sm:gap-8 lg:gap-10 overflow-x-auto sm:overflow-visible sm:flex-wrap no-scrollbar -mx-6 px-8 sm:mx-0 sm:px-0 scroll-pl-8 sm:scroll-pl-0 pt-2 pb-2">
                {[
                  { icon: Beaker, label: "Trial to bulk\nquantities" },
                  { icon: Crosshair, label: "Process\nrecommendation" },
                  { icon: ShieldCheck, label: "Consistent\nquality" },
                  { icon: Leaf, label: "Hygienic\nhandling" },
                  { icon: HeadphonesIcon, label: "Expert\nsupport" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 text-center group shrink-0 w-[84px] sm:w-auto snap-start">
                    <div className="w-12 h-12 rounded-full border border-[#f7b032]/50 bg-[#f7b032]/10 flex items-center justify-center shadow-xs group-hover:border-[#f7b032] group-hover:scale-105 transition-all">
                      <item.icon className="w-5 h-5 text-[#f7b032]" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-200 leading-tight whitespace-pre-line">{item.label}</span>
                  </div>
                ))}
                <div className="w-2 shrink-0 sm:hidden" aria-hidden="true" />
              </div>

              <div className="flex flex-col xl:flex-row xl:items-center gap-6 border-t border-white/10 pt-8 justify-between">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
                  <a
                    href="https://wa.me/919240289259?text=Hello%2C%20I%20am%20interested%20in%20your%20Job%20Grinding%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold tracking-wide text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                  >
                    <span className="text-center">Discuss your grinding requirement</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                  <Link
                    href="/contact"
                    className="bg-black/40 hover:bg-black/60 border border-white/20 hover:border-[#f7b032]/50 text-white backdrop-blur-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-sm"
                  >
                    <span className="text-center">Schedule a product trial</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>

                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 w-full sm:max-w-md xl:max-w-sm">
                  <p className="text-white font-bold text-xs sm:text-sm leading-tight mb-1">
                    Trusted by businesses worldwide
                  </p>
                  <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-normal">
                    Delivering dependable grinding solutions with quality, consistency, reliability, and confidentiality
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
}

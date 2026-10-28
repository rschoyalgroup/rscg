"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workflowSteps = [
  {
    title: "Plan",
    desc: "Reports, approvals, layouts, feasibility, and business planning.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/plan.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Build",
    desc: "Plant setup, engineering, automation, and execution.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/build.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Launch",
    desc: "Training, operational support, and growth guidance.",
    iconPath: "/images/services/grain360/new_icons/how 360 helps/launch.png",
    iconBg: "bg-[#EAF3EA]"
  }
];

const coreServices = [
  {
    title: "Project development",
    desc: "Concept development, plant planning, layout support, feasibility, and project execution guidance.",
    iconPath: "/images/services/grain360/new_icons/our core services/project_deveopment.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Design & engineering",
    desc: "Plant layouts, technical detailing, system planning, and engineering coordination.",
    iconPath: "/images/services/grain360/new_icons/our core services/design_and_engineering-green.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Licensing & certifications",
    desc: "Support for registrations, approvals, certifications, and statutory compliance.",
    iconPath: "/images/services/grain360/new_icons/our core services/licensing.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Operations & consultancy",
    desc: "Support for process optimization, quality improvement, and day-to-day plant operations.",
    iconPath: "/images/services/grain360/new_icons/our core services/operation.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Staff & operator training",
    desc: "Hands-on training for teams operating, managing, and maintaining the plant.",
    iconPath: "/images/services/grain360/new_icons/our core services/staff_and_operator_training.png",
    iconBg: "bg-[#EAF3EA]"
  },
  {
    title: "Technology upgradation",
    desc: "Modernization of existing plants with improved systems, automation, and digital capabilities.",
    iconPath: "/images/services/grain360/new_icons/our core services/technology_upgrade-green.png",
    iconBg: "bg-[#EAF3EA]"
  }
];

const additionalServices = [
  { title: "Government registrations", iconPath: "/images/services/grain360/new_icons/additional services/governmentregister.png" },
  { title: "Project & bankable reports", iconPath: "/images/services/grain360/new_icons/additional services/project report.png" },
  { title: "Subsidies & policies guidance", iconPath: "/images/services/grain360/new_icons/additional services/subsidaries.png" },
  { title: "Process automation", iconPath: "/images/services/grain360/new_icons/additional services/process automation.png" },
];

export default function Grain360Page() {
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
                src="/hero/grain360/grain360_desktop_cropped.png"
                alt="Grain360 Services & Solutions"
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
                src="/hero/grain360/grain360_mobile.png"
                alt="Grain360 Services & Solutions"
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
                Services & solutions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                Grain360
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                End-to-end services to help you plan, launch, and grow your grain or flour processing business under one roof.
              </p>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => document.getElementById('grain360-services')?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
                >
                  EXPLORE SERVICES <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="grain360-services" className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24">

          {/* Intro Section: One Partner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A3A29]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7 text-[#1A3A29]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#1A3A29] leading-tight">
                  One partner for setting up your business
                </h2>
              </div>
              <div className="text-slate-600 space-y-4 text-base sm:text-lg leading-relaxed sm:pl-[72px] font-normal">
                <p>
                  Starting a food or flour business involves many moving parts - from project planning and plant setup to licensing, training, and operations support. <strong>Grain360 brings all of these services together under one roof.</strong>
                </p>
                <p>
                  Instead of coordinating multiple vendors, you get a single partner to guide your journey from idea to commissioning and beyond.
                </p>
              </div>
            </div>

            {/* Why Grain360 Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/70">
              <h3 className="text-xl font-heading font-black text-slate-800 mb-6">
                Why Grain360?
              </h3>
              <ul className="space-y-4">
                {[
                  "Single point of contact",
                  "Project & bankable reports",
                  "Licensing & registrations support",
                  "Plant setup & commissioning",
                  "Post-launch guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#2E6B4A] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Workflow Section: How Grain360 helps */}
          <div className="mb-14 lg:mb-24">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-center text-[#1A3A29] mb-8 sm:mb-14">
              How Grain360 helps
            </h3>

            <div className="w-full">
              <div className="flex md:grid md:grid-cols-3 lg:flex lg:flex-row items-stretch justify-between gap-3 sm:gap-4 lg:gap-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
                {workflowSteps.map((step, idx) => (
                  <Fragment key={idx}>
                    {/* Step Card - Equalized with flex-1 across all 3 cards */}
                    <div className="w-[74vw] max-w-[290px] shrink-0 snap-start md:w-auto md:max-w-none md:shrink lg:flex-1 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 xl:p-9 flex flex-col xl:flex-row items-start gap-4 xl:gap-6 shadow-sm hover:shadow-md border border-slate-200/70 transition-all duration-300 lg:min-h-[170px]">
                      <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0 p-3 sm:p-4 shadow-xs`}>
                        <img src={step.iconPath} alt={step.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-black text-lg lg:text-2xl text-slate-800 mb-1 lg:mb-1.5 leading-snug">{step.title}</h4>
                        <p className="text-sm lg:text-lg text-slate-600 font-normal leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Arrow between steps (shown on lg+) */}
                    {idx < workflowSteps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center w-10 xl:w-16 shrink-0" aria-hidden="true">
                        <ArrowRight className="w-6 h-6 xl:w-7 xl:h-7 text-slate-300 stroke-[2.5]" />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div className="mb-14 lg:mb-24">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-[#1A3A29] mb-6 sm:mb-12">
              Our core services
            </h3>

            <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
              {coreServices.map((service, idx) => (
                <div key={idx} className="w-[74vw] max-w-[290px] md:w-full md:max-w-none shrink-0 md:shrink snap-start bg-white rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-start gap-4 sm:gap-5 shadow-sm border border-slate-200/70 hover:shadow-md hover:border-[#D3994B]/30 transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${service.iconBg} flex items-center justify-center shrink-0 p-2.5 sm:p-3 shadow-xs`}>
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-lg text-slate-800 mb-1.5 leading-tight">{service.title}</h4>
                    <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Support Areas */}
          <div className="mb-20">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-center text-[#1A3A29] mb-10">
              Additional support areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white pl-4 pr-6 py-3 rounded-full shadow-sm border border-slate-200/60 hover:bg-slate-50 transition-colors w-full max-w-[335px] sm:w-[300px] lg:w-[335px] shrink-0"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EAF3EA] flex items-center justify-center p-2 shrink-0 shadow-xs">
                    <img src={service.iconPath} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-slate-700 whitespace-nowrap">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-3xl p-6 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/10 shadow-xl">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-4 lg:gap-6 max-w-2xl text-center lg:text-left">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Phone className="w-8 h-8 text-[#f5a623]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-3xl font-heading font-black text-white leading-tight">
                  Planning to start or upgrade your plant?
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-normal">
                  Talk to our team for end-to-end business, technical, and operational support.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
}

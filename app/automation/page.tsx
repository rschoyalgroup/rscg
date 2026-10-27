"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Settings, CheckCircle2, Factory, MonitorSmartphone, TrendingUp, DollarSign, Database, Settings2, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/automation/automation_desktop_cropped.png" 
              alt="Automation Control System" 
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
              src="/hero/automation/automation-mobile.png" 
              alt="Automation Control System" 
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
              Automation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Advanced control systems
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Intelligent automation that ensures consistent quality, real-time monitoring, and efficient mill performance across modern operations.
            </p>
            <div className="pt-2 sm:pt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                ENQUIRE NOW <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7 flex flex-row items-center justify-between gap-4 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4 px-3 group hover:bg-[#eaf1ec] p-3.5 rounded-xl transition-colors cursor-default">
            <div className="w-13 h-13 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base lg:text-[17px] font-bold text-slate-900 leading-snug">Centralized Control</h4>
              <p className="text-sm text-slate-600 font-medium mt-0.5">Complete mill operation from single control panel.</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 px-3 group hover:bg-[#eaf1ec] p-3.5 rounded-xl transition-colors cursor-default">
            <div className="w-13 h-13 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Settings2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base lg:text-[17px] font-bold text-slate-900 leading-snug">PLC-Based Automation</h4>
              <p className="text-sm text-slate-600 font-medium mt-0.5">Reliable control across every milling stage.</p>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 px-3 group hover:bg-[#eaf1ec] p-3.5 rounded-xl transition-colors cursor-default">
            <div className="w-13 h-13 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base lg:text-[17px] font-bold text-slate-900 leading-snug">Flexible Upgradation</h4>
              <p className="text-sm text-slate-600 font-medium mt-0.5">Modernize existing mills without complete rebuilding.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10 mb-2">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Centralized Control</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Complete mill operation from single control panel.</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Settings2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">PLC-Based Automation</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Reliable control across every milling stage.</p>
            </div>
          </div>
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Flexible Upgradation</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Modernize existing mills without complete rebuilding.</p>
            </div>
          </div>
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Future-Proof Flour Milling */}
      <section className="w-full pt-4 md:pt-2 xl:pt-28 pb-20 lg:pb-28 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Content Left */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118]">
              Smarter Control for Every Milling Stage
            </h2>
            <div className="w-16 h-1 bg-[#f97316] mb-6"></div>
            
            <div className="space-y-5 text-slate-600 font-medium leading-relaxed">
              <p>
                RS Choyal Group designs and delivers complete automation solutions for flour mills, supporting both new turnkey plants and the modernization of existing milling facilities. Our solutions are designed to bring greater control, consistency and operational efficiency across the entire milling process.
              </p>
              <p>
                PLC-based automation system connects and coordinates the different stages of the mill, allowing operators to monitor and control the complete plant from a single control room. This centralized approach provides better process visibility, simplifies day-to-day operations and helps maintain consistent milling performance.
              </p>
              <p>
                For new plants, we provide complete automation as part of the turnkey setup. For existing mills, we offer step-by-step automation and upgradation, allowing key systems and processes to be modernized without requiring a complete plant rebuild.
              </p>
            </div>
          </div>

          {/* Quick Links Right */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-heading font-extrabold text-[#0a3118] mb-6">
                Quick links
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "About us", href: "/about" },
                  { label: "Products", href: "/catalog" },
                  { label: "Turnkey solutions", href: "/turnkey-projects" },
                  { label: "Power saving", href: "/power-saving" },
                  { label: "Flour mill", href: "/flour-mills" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="flex items-center gap-3 text-slate-700 hover:text-[#0a3118] font-bold transition-colors group">
                      <div className="bg-[#0B1510] text-white rounded-full p-1 group-hover:bg-[#f97316] transition-colors">
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Automation */}
      <section className="w-full py-20 bg-slate-50 border-y border-slate-200/60 px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Benefits of automation
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Transforming traditional grinding with intelligent software systems.
          </p>
        </div>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-8 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-8 sm:scroll-pl-12 md:scroll-pl-0 pb-4 sm:pb-0">
          {[
            { 
              title: "Increased yield", 
              desc: "Auto-pressure adjustments ensure steady grinding quality irrespective of grain variety, hardness, or raw input density.",
              img: "/images/automation/increased_yield.png",
              icon: TrendingUp
            },
            { 
              title: "Reliable engineering", 
              desc: "Robust PLC panels, industrial-grade sensors, and automated safety interlocks ensure continuous, trouble-free plant operation.",
              img: "/images/automation/reliable_engineering.png",
              icon: ShieldCheck
            },
            { 
              title: "Reduced operation cost", 
              desc: "Minimizes manual oversight requirements and stone dressing downtime by automatically compensating for stone surface wear.",
              img: "/images/automation/reduce_cost.png",
              icon: DollarSign
            },
            { 
              title: "Data-driven decisions", 
              desc: "Live dashboards, performance logs, and production insights help teams make faster and smarter operational decisions.",
              img: "/images/automation/datadriven_decision.png",
              icon: Database
            },
            { 
              title: "Improved performance", 
              desc: "Continuous monitoring and intelligent controls enhance stability, flour consistency, and overall plant output.",
              img: "/images/automation/improve_performance.png",
              icon: Settings2
            }
          ].map((benefit, idx) => (
            <div key={idx} className="w-[74vw] max-w-[290px] sm:w-full sm:max-w-none shrink-0 sm:shrink snap-start sm:snap-align-none bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-40 w-full">
                <div className="absolute inset-0 overflow-hidden">
                  <Image src={benefit.img} alt={benefit.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#0B1510] text-white rounded-full flex items-center justify-center border-4 border-white z-10 shadow-sm">
                  <benefit.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="pt-8 px-6 pb-8 flex-1 flex flex-col">
                <h4 className="text-lg font-heading font-extrabold text-[#0a3118] mb-3">{benefit.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 sm:hidden" aria-hidden="true" />
        </div>
      </section>

      {/* Services Offered */}
      <section className="w-full py-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white">
        <div className="w-full text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0a3118] mb-4">
            Services offered
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Expert systems engineering to retrofit or scale your operations.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
          {[
            {
              title: "Digital plant",
              desc: "Control your entire mill from a single, centralized PLC dashboard featuring automation, data logging, and performance tracking.",
              img: "/images/automation/Digital_Plant.png",
              icon: MonitorSmartphone
            },
            {
              title: "Choyal remote support",
              desc: "Instant cloud troubleshooting, remote diagnostics, alerts, and online support by our automation experts anywhere, anytime.",
              img: "/images/automation/Choyal_Remote_Support.png",
              icon: Zap
            },
            {
              title: "MIS development",
              desc: "Custom MIS dashboards and reports for production, efficiency, maintenance, and energy usage to support better decision-making.",
              img: "/images/automation/MIS_Development.png",
              icon: Database
            }
          ].map((service, idx) => (
            <div key={idx} className={`w-[78vw] max-w-[320px] md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none self-stretch bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col xl:flex-row group hover:shadow-md transition-shadow ${idx === 2 ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-12px)] lg:col-span-1 lg:w-full lg:justify-self-stretch" : "md:w-full"}`}>
              <div className="relative min-h-[200px] xl:min-h-[160px] xl:w-[60%] flex-shrink-0 overflow-hidden">
                <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 sm:p-5 xl:w-[40%] flex flex-col justify-start xl:justify-center flex-1">
                <div className="w-8 h-8 bg-[#0B1510]/10 text-[#0B1510] rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                  <service.icon className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-extrabold text-[#0B1510] mb-2">{service.title}</h4>
                <p className="text-xs text-slate-600 font-medium leading-normal">{service.desc}</p>
              </div>
            </div>
          ))}
          <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f6f6f4] relative z-10">
        <div className="w-full mx-auto">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 text-center lg:text-left relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Settings className="w-8 h-8 text-[#f5a623] animate-spin-slow" />
              </div>
              <div className="space-y-1.5 max-w-xl">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-heading font-black text-white leading-tight tracking-tight">
                  Automate. Monitor. Optimize.
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed">
                  Upgrade your mill with intelligent automation for higher efficiency and consistent quality.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 flex justify-center lg:justify-end">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Cpu, Layers, Activity, Building, CheckCircle, FileText, Workflow, Wrench, Users, RefreshCw, Sparkles, ChevronRight, Phone, Mail, Clock, X, Maximize2, BarChart3, MapPin, ClipboardCheck, Gauge, Factory } from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function TurnkeyProjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statPoints = [
    {
      icon: ClipboardCheck,
      title: "From concept to commissioning",
      desc: "Complete project support from initial planning through installation and plant start-up."
    },
    {
      icon: Gauge,
      title: "Up to 1000 TPD",
      desc: "Scalable plant solutions designed for a wide range of production capacities."
    },
    {
      icon: Factory,
      title: "End-to-end plant solutions",
      desc: "Integrated engineering, fabrication, automation, installation, and commissioning."
    }
  ];

  const projectCapabilities = [
    {
      id: 1,
      title: "Consultancy",
      desc: "Capacity planning, process flow mapping, and site feasibility for efficient plant execution.",
      image: "/images/turnkey/scope/Consultancy.jpg",
      icon: <Building className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Field layout design",
      desc: "3D plant layouts optimized for grain flow, space use, utility routing, and maintainability.",
      image: "/images/turnkey/scope/field layout design.jpg",
      icon: <Workflow className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Engineering design",
      desc: "Mechanical, structural, utility, and process engineering for reliable plant execution.",
      image: "/images/turnkey/scope/engineering design.jpg",
      icon: <Settings className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Fabrication",
      desc: "Complete plant fabrication, including steel structures, silos, air ducts, elevator casings, and PEB buildings.",
      image: "/images/turnkey/scope/fabricaton.jpg",
      icon: <Wrench className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Erection & commissioning",
      desc: "On-site erection, dry runs, testing, and commissioning support for smooth plant start-up.",
      image: "/images/turnkey/scope/Erection & commissioning.jpg",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Training",
      desc: "Hands-on training for millers, operators, and maintenance teams on efficient plant operation.",
      image: "/images/turnkey/scope/Training.jpg",
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Automation",
      desc: "Process and plant automation with PLC controls, sensors, digital monitoring, and intelligent systems.",
      image: "/images/turnkey/scope/Automation.jpg",
      icon: <Cpu className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Retro-fitting",
      desc: "Upgrade legacy mills with digital mills, VFD drives, digital monitoring, and smarter controls.",
      image: "/images/turnkey/scope/retro fitting.jpg",
      icon: <RefreshCw className="h-5 w-5" />
    },
    {
      id: 9,
      title: "Product development",
      desc: "Product and recipe development support with process optimization and quality improvement.",
      image: "/images/turnkey/scope/product development.jpg",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  const turnkeySolutions = [
    { title: "Whole wheat atta plant", image: "/images/turnkey/capabilities/atta plant.jpg" },
    { title: "Gram flour (besan) plant", image: "/images/turnkey/capabilities/GRAM FLOUR.jpg" },
    { title: "Soya pulse plant", image: "/images/turnkey/capabilities/SOYA PULSE.jpg" },
    { title: "Multi grain flour grinding plant", image: "/images/turnkey/capabilities/MULTIGRAIN Flour.jpg" },
    { title: "Spices & herbal grinding plant", image: "/images/turnkey/capabilities/spices & herbs.jpg" },
    { title: "Pulse plant", image: "/images/turnkey/capabilities/pulses.jpg" },
    { title: "Flour & spice blending system", image: "/images/turnkey/capabilities/flour & spice bending.jpg" },
    { title: "Quinoa plant", image: "/images/turnkey/capabilities/quinoa.jpg" },
    { title: "Semolina plant", image: "/images/turnkey/capabilities/semolina.jpg" },
    { title: "Teff plant", image: "/images/turnkey/capabilities/teff.jpg" },
    { title: "Maida plant", image: "/images/turnkey/capabilities/maida.jpg" },
    { title: "Psyllium husk plant", image: "/images/turnkey/capabilities/psyillum husk.jpg" }
  ];

  const highlightedProjects = [
    {
      title: "Carr's Flour",
      desc: "40 TPD atta plant",
      location: "United Kingdom",
      image: "/images/projects/case_studies/carrs-flour/carr-flour-desktop.png",
      logo: "/images/projects/case_studies/logos/carr_flour_mill.png",
      slug: "carrs-flour"
    },
    {
      title: "Al Ghurair Foods",
      desc: "120 TPD atta plant",
      location: "Dubai, UAE",
      image: "/images/projects/case_studies/al-ghurair-foods/al-ghurair-desktop.png",
      logo: "/images/projects/case_studies/logos/al_ghurair.png",
      slug: "al-ghurair-foods"
    },
    {
      title: "Bakhresa Group",
      desc: "40 TPD atta plant",
      location: "Tanzania, East Africa",
      image: "/images/projects/case_studies/bakhresa-group/bakhresa-desktop.png",
      logo: "/images/projects/case_studies/logos/bakhresa.png",
      slug: "bakhresa-group"
    },
    {
      title: "Winnie's pure health",
      desc: "40 TPD atta plant",
      location: "Kenya, East Africa",
      image: "/images/projects/case_studies/winnies-pure-health/winnie-desktop.png",
      logo: "/images/projects/case_studies/logos/winnie_pure_health.png",
      slug: "winnies-pure-health"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      
      {/* Header */}
      <Header onRequestCallback={() => setIsModalOpen(true)} />

      {/* Hero Section - Standardized responsive hero */}
      <section className="w-full relative z-20 bg-[#0B1510] text-white aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex flex-col justify-center">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/turnkey/turnkey_desktop_cropped.png" 
              alt="RS Choyal Turnkey Plant" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark-charcoal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent z-10 w-full"></div>
          </div>

          {/* Mobile Background Image (1079x1920) */}
          <div className="block md:hidden absolute inset-0">
            <Image 
              src="/hero/turnkey/turnkey_mobile.png" 
              alt="RS Choyal Turnkey Plant" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Dark-charcoal gradient overlay for mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/40 to-transparent z-10 w-full"></div>
          </div>
        </div>

        <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 relative z-20 flex-1 flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
          
          <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
            
            {/* Standard Eyebrow */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
              <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
              Turnkey projects division
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Turnkey projects
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Customized and automated solutions for grain cleaning, grinding, and sorting plants up to 1000 TPD capacity, delivered end-to-end.
            </p>
            
            <div className="pt-2 sm:pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                REQUEST A PROJECT QUOTE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Desktop Proof Points White Container - 50/50 Overlapping Hero Bottom */}
          <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full max-w-5xl mx-auto px-6 lg:px-8 z-30 translate-y-1/2">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-7 border border-slate-100">
              <div className="grid grid-cols-3 divide-x divide-slate-200">
                {statPoints.map((stat, idx) => (
                  <div key={idx} className="p-4 sm:p-5 hover:bg-[#E8F5E9]/60 rounded-xl transition-colors duration-200 cursor-pointer text-left space-y-1.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><stat.icon className="w-6 h-6" /></div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1510] leading-snug">
                      {stat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mobile Proof Points - Horizontal Swipeable Slider with Next-Card Peek */}
      <div className="block md:hidden relative z-30 -mt-13 w-full">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          {statPoints.map((stat, idx) => (
            <div
              key={idx}
              className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 text-left space-y-1.5"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs mb-2"><stat.icon className="w-5.5 h-5.5" /></div>
              <h3 className="text-base font-bold text-[#0B1510] leading-snug">
                {stat.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Intro details */}
      <section className="w-full pt-6 sm:pt-12 md:pt-36 lg:pt-44 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c2722]">
            Engineering the Future of Smart Flour Milling
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At RS Choyal, our turnkey projects are designed with state-of-the-art technologies that set new benchmarks in the milling industry. We combine <span className="font-bold">60+ years of grinding heritage</span> with modern electronics to engineer plants that achieve up to <span className="font-bold">30% electricity savings</span>, optimized layout flows, low maintenance, and exceptionally clean operations.
          </p>
        </div>
      </section>

      {/* End-to-End Project Capabilities Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white border-t border-slate-100 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              End-to-end project capabilities
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              From concept to commissioning, we deliver turnkey grain processing and flour milling solutions built for performance, efficiency, and long-term reliability.
            </p>
          </div>

          <div className="flex lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 lg:pb-0">
            {projectCapabilities.map((cap) => (
              <div 
                key={cap.id} 
                className="w-[74vw] max-w-[290px] lg:w-full lg:max-w-none shrink-0 lg:shrink snap-start lg:snap-align-none bg-white rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:border-brand-secondary/40 hover:shadow-md transition-all duration-300 flex flex-row group"
              >
                {/* Image Half */}
                <div className="w-[40%] relative shrink-0 min-h-[160px]">
                  <Image 
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content Half */}
                <div className="p-4 sm:p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      {cap.icon}
                    </div>
                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-800 leading-tight">
                      {cap.id}. {cap.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="w-4 shrink-0 lg:hidden" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* Solutions Available For Section */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 border-t border-slate-100 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest">
              Versatile capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Turnkey solutions available for
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We design and build plants for a wide range of agricultural and industrial applications.
            </p>
          </div>

          <div className="flex sm:flex-wrap sm:justify-center gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 sm:pb-0">
            {turnkeySolutions.map((sol, idx) => (
              <div 
                key={idx} 
                className="w-[68vw] max-w-[260px] sm:w-[calc(50%-9px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-13px)] xl:w-[calc(20%-13px)] shrink-0 snap-start flex items-center p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-200"
              >
                <div className="w-16 h-16 relative flex-shrink-0 mr-4 rounded-full overflow-hidden border border-slate-100 shadow-sm">
                  <Image src={sol.image} alt={sol.title} fill className="object-cover" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">{sol.title}</span>
              </div>
            ))}
            <div className="w-4 shrink-0 sm:hidden" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="w-full py-16 lg:py-24 px-6 sm:px-12 lg:px-16 xl:px-24 bg-white border-t border-slate-100 relative z-10">
        <div className="w-full max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-brand-primary tracking-widest">
              Our completed installations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1c2722] leading-tight">
              Our turnkey projects
            </h2>
          </div>

          <div className="flex md:grid md:grid-cols-2 gap-4 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
            {highlightedProjects.map((proj, idx) => (
              <Link 
                key={idx} 
                href={`/projects/${proj.slug}`}
                className="w-[74vw] max-w-[290px] md:w-full md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group flex flex-col xl:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="xl:w-[40%] h-48 sm:h-64 md:h-60 xl:h-auto relative overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 sm:p-7 xl:p-8 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-tight mb-2">
                        {proj.title}
                      </h3>
                      <div className="flex items-center text-xs font-bold text-slate-500 gap-1 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                        {proj.location}
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-5 flex flex-col items-start gap-3.5">
                    <div className="h-12 sm:h-14 relative w-40 sm:w-44">
                      <Image src={proj.logo} alt={proj.title} fill className="object-contain object-left" />
                    </div>
                    <div className="text-xs font-black text-brand-primary uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap group-hover:text-brand-secondary transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="w-4 shrink-0 md:hidden" aria-hidden="true" />
          </div>

        </div>
      </section>



      {/* Footer */}
      <Footer />

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

    </div>
  );
}

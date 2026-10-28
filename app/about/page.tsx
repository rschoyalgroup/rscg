"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Info,
  Users,
  Eye,
  Heart,
  Milestone,
  Landmark,
  HelpCircle,
  Network,
  Building,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  Cpu,
  Workflow,
  Filter,
  Database,
  X,
  Zap,
  Globe,
  MapPin,
  ChevronDown,
  ChevronRight,
  UserCheck,
  Clock,
  Compass
} from "lucide-react";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import JourneyTimeline from "@/components/JourneyTimeline";
import DisciplinesProcess from "@/components/DisciplinesProcess";
import GroupCompaniesMarquee from "@/components/GroupCompaniesMarquee";
import LeadershipSection from "@/components/LeadershipSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import PhilosophySection from "@/components/PhilosophySection";
import RnDSection from "@/components/RnDSection";
import CSRSection from "@/components/CSRSection";
import WhyRSCGSection from "@/components/WhyRSCGSection";
import OurNetworkSection from "@/components/OurNetworkSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";



const timelineMilestones = [
  {
    year: "1960",
    title: "Foundation of Choyal Group",
    desc: "B.M. Choyal along with R.D. Sharma lays the foundation of our legacy by starting the company with a vision to revolutionize the grain milling industry in India."
  },
  {
    year: "1965",
    title: "Our Journey Begins",
    desc: "The company is formally incorporated as “Shri Vishvakarma Industries”, marking the beginning of a new chapter in industrial excellence and innovation."
  },
  {
    year: "1970",
    title: "International Outreach",
    desc: "We became the first company from India in the grain milling sector to export emery stone globally. Our commitment to quality and innovation was recognized with the 'Certificate for Excellence in Export', which we proudly received year after year."
  },
  {
    year: "1978",
    title: "Inauguration of First Factory Unit",
    desc: "We set up our first manufacturing unit at Saradhana in Ajmer under our Pvt. Ltd. company, later known as SVIPL, marking a key step in our industrial journey."
  },
  {
    year: "2000",
    title: "Fully Automated Emery Stone Plant",
    desc: "We launched our automatic modeling workshop, kickstarting a new era of innovation in emery stone manufacturing. This milestone enhanced precision, consistency, and efficiency in our production process."
  },
  {
    year: "2010",
    title: "World’s First Patented Digital Flour Mill",
    desc: "After years of dedicated R&D, we developed the world’s first fully automatic digital stone mill, redefining precision and revolutionizing traditional stone milling."
  },
  {
    year: "2011",
    title: "Turnkey Solutions for Every Need",
    desc: "We launched our complete turnkey solutions, offering end-to-end services in milling. To date, we’ve successfully delivered 250+ turnkey projects worldwide."
  },
  {
    year: "2013",
    title: "Patented Emery Stone Dressing Machine",
    desc: "We introduced a patented emery stone dressing machine, combining innovation and efficiency to transform stone maintenance."
  },
  {
    year: "2018",
    title: "Venturing into Groceries",
    desc: "We ventured into the grocery sector, embracing new opportunities and learning valuable lessons that continue to shape our growth and resilience."
  },
  {
    year: "2021",
    title: "World’s First Patented Digital Fresh Flour Grinding Machine",
    desc: "We introduced the world’s first patented digital fresh flour grinding machine, powered by smart technology to make fresh flour easily accessible worldwide."
  },
  {
    year: "2025",
    title: "A New Chapter Begins",
    desc: "The Choyal legacy evolves into two independent entities, allowing each to focus on specialized innovation and targeted growth. Introducing Choyal Grinding Solutions Pvt. Ltd., a new company under the R.S. Choyal Group, dedicated to advancing cutting-edge grinding technologies."
  }
];

export default function AboutPage() {
  const { setIsDrawerOpen } = useQuote();
  const [activeTab, setActiveTab] = useState("about-us");

  const aboutSubmenuSections = [
    { id: "about-us", label: "About Us" },
    { id: "leadership", label: "Leadership" },
    { id: "mission-vision", label: "Mission and Vision" },
    { id: "philosophy", label: "Our Philosophy" },
    { id: "research-development", label: "R&D and Innovation" },
    { id: "social-responsibility", label: "Social Responsibility" },
    { id: "why-rsc", label: "Why RSCG" },
    { id: "network", label: "Our Network" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  // Monitor scroll to set active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      // If near top of page (hero or intro), active tab is always "about-us"
      const leadershipElem = document.getElementById("leadership");
      const leadershipTop = leadershipElem ? leadershipElem.getBoundingClientRect().top + window.scrollY : 1200;

      if (scrollPosition < leadershipTop) {
        setActiveTab("about-us");
        return;
      }

      for (let i = aboutSubmenuSections.length - 1; i >= 0; i--) {
        const item = aboutSubmenuSections[i];
        if (item.id === "about-us") continue;
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "about-us" || id === "hero" || id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setActiveTab("about-us");
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // accounting for floating header with submenu
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
      setActiveTab(id);
    }
  };

  // Handle initial mount and dynamic hash routing, ensuring page opens/reloads at top
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent browser from restoring scroll position to middle of page on refresh
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let t1: NodeJS.Timeout | undefined;
    let t2: NodeJS.Timeout | undefined;
    let timer: NodeJS.Timeout | undefined;

    const hash = window.location.hash.substring(1);
    if (!hash || hash === "about-us" || hash === "top") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      t1 = setTimeout(() => window.scrollTo(0, 0), 50);
      t2 = setTimeout(() => window.scrollTo(0, 0), 150);
    } else {
      timer = setTimeout(() => {
        scrollToSection(hash);
      }, 150);
    }

    const handleHash = () => {
      const currentHash = window.location.hash.substring(1);
      if (currentHash && currentHash !== "about-us" && currentHash !== "top") {
        scrollToSection(currentHash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveTab("about-us");
      }
    };

    window.addEventListener("hashchange", handleHash);

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (timer) clearTimeout(timer);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-foreground font-sans selection:bg-brand-primary selection:text-white">
      <Header
        showGroupCompanyLogo
        submenu={{
          items: aboutSubmenuSections,
          activeId: activeTab,
          onItemClick: scrollToSection,
        }}
      />

      {/* Hero Banner with Slideshow & Running Stats */}
      <AboutHero onScrollToSection={scrollToSection} />

      {/* Main Content Sections */}
      <div className="w-full">

        

        {/* 1. ABOUT US */}
        <section id="about-us" className="w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-white relative scroll-mt-48 overflow-hidden">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto flex flex-col justify-between">
            {/* Top 2-Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
              
              {/* Left Column: Heading & Introduction */}
              <div className="lg:col-span-6 space-y-6 xl:pr-6">
                <div>
                  <span className="text-xs font-bold text-[#0B2C1C]/70 tracking-widest block mb-3">
                    What is Choyal
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-black tracking-tight leading-[1.16] text-[#0B2C1C]">
                    A milling company that grew{" "}
                    <span className="text-[#E67E22]">beyond the mill.</span>
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    The journey began by challenging India’s dependence on imported abrasive products and flour-milling technology. Stones became machines. Machines evolved into complete plants. And complete plants brought new requirements: silos, PEB structures, controls, testing, training and service.
                  </p>
                  <p>
                    Over time, this became more than a collection of capabilities. It became one connected approach to designing, building and supporting grain-processing systems that perform as a whole.
                  </p>
                </div>
              </div>

              {/* Right Column: 3 System Principles (01, 02, 03) */}
              <div className="lg:col-span-6 space-y-8 pt-2">
                
                {/* 01 */}
                <div className="flex items-start gap-5 group">
                  <span className="text-xl sm:text-2xl font-black text-[#E67E22] shrink-0 font-heading">
                    01
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2C1C] tracking-tight">
                      Flour quality is a system outcome.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Consistent flour is never the result of one machine alone. It comes from the way storage, cleaning, conditioning, milling, handling, controls and people work together.
                    </p>
                  </div>
                </div>

                {/* 02 */}
                <div className="flex items-start gap-5 group">
                  <span className="text-xl sm:text-2xl font-black text-[#E67E22] shrink-0 font-heading">
                    02
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2C1C] tracking-tight">
                      Technology must work for the operator.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Good engineering does more than increase capability. It makes production clearer, simpler and more consistent, giving operators the control and confidence to run the mill effectively.
                    </p>
                  </div>
                </div>

                {/* 03 */}
                <div className="flex items-start gap-5 group">
                  <span className="text-xl sm:text-2xl font-black text-[#E67E22] shrink-0 font-heading">
                    03
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2C1C] tracking-tight">
                      Reliability begins after handover.
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      A system proves its value on the shop floor, across shifts, seasons, maintenance cycles and changing business needs. True performance is not simply delivered; it is built to endure.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Campus Cutout Image - full bleed touching left, right and bottom browser edges */}
          <div className="mt-8 sm:mt-12 w-full leading-none -mb-px p-0 overflow-hidden">
            <img
              src="/images/about/what-is-choyal/rscg-campus.webp"
              alt="Choyal Group Manufacturing Campus"
              className="w-full h-auto object-cover sm:object-contain block align-bottom select-none pointer-events-none"
            />
          </div>
        </section>

        {/* 2. JOURNEY TIMELINE */}
        <JourneyTimeline />

        {/* 3. DISCIPLINES & PROCESS */}
        <DisciplinesProcess />

        {/* 4. GROUP COMPANIES & DIVISIONS MARQUEE */}
        <GroupCompaniesMarquee />

        {/* 5. LEADERSHIP */}
        <LeadershipSection />

        {/* 6. VISION & MISSION */}
        <VisionMissionSection />



        {/* 7. PHILOSOPHY */}
        <PhilosophySection />



        {/* 8. RESEARCH & INNOVATION */}
        <RnDSection />





        {/* 9. SOCIAL RESPONSIBILITY (CSR) */}
        <CSRSection />



        {/* 10. WHY RSC GROUP */}
        <WhyRSCGSection />



        {/* 11. OUR NETWORK */}
        <OurNetworkSection />



        {/* 12. OUR INFRASTRUCTURE (ECOSYSTEM WALKTHROUGH) */}
        <WalkthroughSection />



        {/* --- Pre-Footer CTA Section --- */}
        <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-slate-50 relative z-10">
          <div className="w-full mx-auto">
            <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-white/10 relative overflow-hidden">
              {/* Background Texture matching Wonder Mill */}
              <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

              {/* Left Content */}
              <div className="max-w-3xl space-y-2.5 relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight tracking-tight">
                  Come and see how the thinking becomes a plant.
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Visit the factory, workshop, Experience Centre and training facility in Ajmer or bring us the next milling problem worth solving.
                </p>
              </div>

              {/* Right Action Button */}
              <div className="relative z-10 shrink-0">
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

      </div>

      <Footer />
    </div>
  );
}

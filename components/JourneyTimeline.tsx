"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  /** CSS object-position for the cropped frame (defaults to centre) */
  imagePosition?: string;
}

const milestones: Milestone[] = [
  {
    year: "1960",
    title: "Foundation of Choyal Group",
    description:
      "B.M. Choyal along with R.D. Sharma lays the foundation of our legacy by starting the company with a vision to revolutionize the grain milling industry in India.",
    image: "/images/about/timeline/Journey/1960.png",
  },
  {
    year: "1965",
    title: "Our journey begins",
    description:
      'The company is formally incorporated as "Shri Vishvakarma Industries", marking the beginning of a new chapter in industrial excellence and innovation.',
    image: "/images/about/timeline/Journey/1965.png",
  },
  {
    year: "1970",
    title: "International outreach",
    description:
      'Became the first company from India in the grain milling sector to export emery stone globally. Our commitment to quality earned multiple accolades.',
    image: "/images/about/timeline/Journey/1970.png",
  },
  {
    year: "1978",
    title: "Inauguration of first factory unit",
    description:
      "We set up our first manufacturing unit at Saradhana in Ajmer under our Pvt. Ltd. company, marking a key milestone in our industrial footprint.",
    image: "/images/about/timeline/Journey/1978.png",
    imagePosition: "50% 0%", // keep the faces along the top of the photo in frame
  },
  {
    year: "2000",
    title: "Fully automated emery stone plant",
    description:
      "We launched our automatic modeling workshop, kickstarting an era of high-precision manufacturing, consistency, and operational scale.",
    image: "/images/about/timeline/Journey/2000.png",
  },
  {
    year: "2010",
    title: "World's first patented digital flour mill",
    description:
      "Developed the world's first fully automatic digital stone mill, redefining precision and setting global benchmarks for stone milling.",
    image: "/images/about/timeline/Journey/2010.png",
  },
  {
    year: "2011",
    title: "Turnkey solutions for every need",
    description:
      "Launched end-to-end milling turnkey solutions. To date, we have successfully engineered and delivered 275+ turnkey plants globally.",
    image: "/images/about/timeline/Journey/2011.png",
  },
  {
    year: "2013",
    title: "Patented emery stone dressing machine",
    description:
      "Introduced a patented stone dressing mechanism, combining automation and precision to revolutionize stone maintenance.",
    image: "/images/about/timeline/Journey/2013.png",
  },
  {
    year: "2018",
    title: "Venturing into groceries",
    description:
      "Diversified into the grocery retail segment, gaining critical consumer insights that continue to sharpen our end-to-end food processing expertise.",
    image: "/images/about/timeline/Journey/2018.png",
  },
  {
    year: "2021",
    title: "World's 1st patented digital fresh flour grinder",
    description:
      "Introduced a smart digital grinder designed to make fresh, nutrient-dense flour easily accessible across community touchpoints.",
    image: "/images/about/timeline/Journey/2021.png",
    imagePosition: "50% 0%",
  },
  {
    year: "2025",
    title: "A new chapter begins",
    description:
      "The Choyal legacy evolves into specialized entities, launching Choyal Grinding Solutions Pvt. Ltd. dedicated to cutting-edge grinding technologies.",
    image: "/images/about/timeline/Journey/2025.png",
  },
  {
    year: "2026",
    title: "Digital milling evolution",
    description:
      "A new approach to milling, combining technology, performance, and smarter operations for modern flour mills.",
    image: "/images/about/timeline/Journey/2026.png",
  },
];

// Single Digit with 3D Flip Animation
function DigitSlot({ char }: { char: string }) {
  const [displayChar, setDisplayChar] = useState(char);
  const [animClass, setAnimClass] = useState<"" | "flip-out" | "flip-in">("");
  const prevCharRef = useRef(char);

  useEffect(() => {
    if (prevCharRef.current !== char) {
      prevCharRef.current = char;
      setAnimClass("flip-out");

      const t1 = setTimeout(() => {
        setDisplayChar(char);
        setAnimClass("flip-in");

        const t2 = setTimeout(() => {
          setAnimClass("");
        }, 450);

        return () => clearTimeout(t2);
      }, 260);

      return () => clearTimeout(t1);
    }
  }, [char]);

  return (
    <span className={`digit-slot ${animClass}`}>
      <span>{displayChar}</span>
    </span>
  );
}

export default function JourneyTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedItem, setDisplayedItem] = useState(milestones[0]);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const yearNavRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isManualClickRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const currentIndexRef = useRef(0);

  // Transition to a specific milestone
  const goToMilestone = useCallback((index: number, animate: boolean = true) => {
    if (index < 0) index = 0;
    if (index > milestones.length - 1) index = milestones.length - 1;
    if (index === currentIndexRef.current && animate) return;

    currentIndexRef.current = index;
    setCurrentIndex(index);

    const targetItem = milestones[index];

    if (animate) {
      isAnimatingRef.current = true;
      setIsFadingOut(true);
      setIsImageChanging(true);

      setTimeout(() => {
        setDisplayedItem(targetItem);
        setIsFadingOut(false);
        setIsFadingIn(true);

        setTimeout(() => {
          setIsImageChanging(false);
        }, 70);

        setTimeout(() => {
          setIsFadingIn(false);
          isAnimatingRef.current = false;
        }, 600);
      }, 200);
    } else {
      setDisplayedItem(targetItem);
    }

    // Scroll active button into view on mobile/tablet
    if (typeof window !== "undefined" && window.innerWidth < 1280 && btnRefs.current[index]) {
      btnRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, []);

  // Handle year click
  const handleClickYear = (index: number) => {
    if (index === currentIndexRef.current) return;
    isManualClickRef.current = true;
    goToMilestone(index, true);

    if (typeof window !== "undefined" && window.innerWidth >= 1280 && trackRef.current) {
      const track = trackRef.current;
      const trackRect = track.getBoundingClientRect();
      const trackTop = window.scrollY + trackRect.top;
      const totalDist = track.offsetHeight - window.innerHeight;
      const stickyOffset = 148;
      const targetScroll =
        trackTop - stickyOffset + (index / (milestones.length - 1)) * totalDist;

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isManualClickRef.current = false;
    }, 900);
  };

  // Scroll Synchronization
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined" || window.innerWidth < 1280 || isManualClickRef.current)
        return;
      const track = trackRef.current;
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      const totalDist = track.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      const stickyOffset = 148;
      const scrolled = stickyOffset - trackRect.top;
      const progress = Math.min(Math.max(scrolled / totalDist, 0), 1);
      const targetIndex = Math.min(
        milestones.length - 1,
        Math.max(0, Math.floor(progress * (milestones.length - 1) + 0.5))
      );

      if (targetIndex !== currentIndexRef.current) {
        goToMilestone(targetIndex, true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goToMilestone]);

  // Keyboard navigation when timeline is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((document.activeElement as HTMLElement)?.tagName)) return;

      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        handleClickYear(Math.min(milestones.length - 1, currentIndexRef.current + 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        handleClickYear(Math.max(0, currentIndexRef.current - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <style jsx global>{`
        .digit-slot {
          display: inline-block;
          position: relative;
          transform-style: preserve-3d;
        }

        .digit-slot span {
          display: inline-block;
          backface-visibility: hidden;
          transform-origin: center center;
          will-change: transform, opacity, filter;
        }

        .digit-slot.flip-out span {
          animation: flipOutDigit 0.3s cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        .digit-slot.flip-in span {
          animation: flipInDigit 0.45s cubic-bezier(0, 0, 0.2, 1) forwards;
        }

        @keyframes flipOutDigit {
          0% {
            transform: rotateY(0deg);
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            transform: rotateY(-90deg);
            opacity: 0.1;
            filter: blur(3px);
          }
        }

        @keyframes flipInDigit {
          0% {
            transform: rotateY(90deg);
            opacity: 0.1;
            filter: blur(3px);
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes pureFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-pure-fade-in {
          animation: pureFadeIn 0.8s ease-in-out forwards;
        }

        /* Short desktop screens (e.g. 1280x720 laptops): tighten the heading so the pinned stage fits the viewport */
        @media (min-width: 1280px) and (max-height: 800px) {
          .journey-head {
            margin-bottom: 0.5rem !important;
          }
          .journey-head h2 {
            font-size: 28px !important;
            margin-bottom: 0 !important;
          }
          .journey-head p {
            display: none;
          }
        }
      `}</style>

      {/* Outer Track with 380vh scroll space on desktop */}
      <div
        id="journey"
        ref={trackRef}
        className="relative w-full xl:h-[380vh] bg-slate-50 scroll-mt-36"
      >
        {/* Sticky Viewport Stage */}
        <section className="relative xl:sticky xl:top-[148px] w-full xl:h-[calc(100vh-148px)] xl:max-h-[920px] xl:overflow-hidden bg-slate-50 flex flex-col justify-center py-10 sm:py-14 xl:py-6">
          <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto flex flex-col justify-center my-auto">
            {/* Header: Eyebrow + Title + Subtitle */}
            <div className="journey-head w-full mb-5 lg:mb-4 xl:mb-7">
              <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#0B2C1C] mb-1 xl:mb-2">
                Our heritage &amp; legacy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[40px] font-heading font-black tracking-tight leading-[1.15] text-[#0B2C1C] mb-1.5 xl:mb-2.5">
                Six decades of innovation.{" "}
                <br className="hidden sm:inline" />
                One continuous <span className="text-[#FFAA17]">milling evolution.</span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-[15px] xl:text-base text-slate-600 max-w-2xl leading-relaxed">
                Our journey has never been about replacing tradition. It has been about building
                upon it, one innovation, one generation, and one breakthrough at a time.
              </p>
            </div>

            {/* Timeline Stage Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[130px_minmax(0,1fr)] xl:grid-cols-[140px_minmax(0,1fr)] gap-6 lg:gap-8 xl:gap-14 items-center">
              {/* Left Column: Year Navigation */}
              <nav
                ref={yearNavRef}
                aria-label="Milestone Years"
                className="relative flex flex-row lg:flex-col justify-start lg:justify-center gap-2 lg:gap-1 xl:gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none border-b lg:border-b-0 border-slate-200/70"
              >
                {/* Desktop subtle vertical timeline line - centered at x=6px */}
                <div className="hidden lg:block absolute left-[6px] -translate-x-1/2 top-2.5 bottom-2.5 w-[1.5px] bg-slate-300 pointer-events-none" />

                {milestones.map((m, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={m.year}
                      ref={(el) => {
                        btnRefs.current[idx] = el;
                      }}
                      onClick={() => handleClickYear(idx)}
                      className={`relative z-10 text-left cursor-pointer transition-all duration-300 flex items-center shrink-0 ${
                        isActive
                          ? "text-[#0B2C1C] font-bold text-xs lg:text-[13px]"
                          : "text-slate-400 hover:text-[#0B2C1C] font-medium text-xs lg:text-[13px]"
                      } px-3 py-1.5 lg:px-0 lg:py-0.5 xl:py-1 lg:pl-6 rounded-full lg:rounded-none ${
                        isActive ? "bg-white shadow-2xs lg:shadow-none lg:bg-transparent" : "bg-transparent"
                      }`}
                    >
                      {/* Year Indicator Dot (Desktop) - centered at x=6px on the line */}
                      <span
                        className={`hidden lg:block absolute left-[6px] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-[9px] h-[9px] bg-[#FFAA17] ring-2 ring-[#FFAA17]/40 shadow-xs"
                            : "w-[7px] h-[7px] bg-slate-50 border border-slate-300 hover:border-slate-400"
                        }`}
                      />
                      <span
                        className={`transition-transform duration-300 inline-block ${
                          isActive ? "lg:translate-x-1 text-[#0B2C1C]" : ""
                        }`}
                      >
                        {m.year}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Column: Timeline Content Card */}
              <div className="relative w-full min-h-[280px] lg:min-h-0 flex items-center">
                {/* Subtle blueprint grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25 select-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)`,
                    backgroundSize: "85px 85px",
                    maskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
                  }}
                />

                <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.25fr] gap-6 lg:gap-10 xl:gap-12 items-center">
                  {/* Left inside card: Year Digits + Title + Description */}
                  <div className="space-y-3 lg:space-y-4 lg:pr-4">
                    {/* Big Year with 3D Flip */}
                    <div
                      className="text-[52px] sm:text-[64px] lg:text-[76px] xl:text-[96px] font-semibold text-[#0B2C1C] leading-[0.85] tracking-[-0.06em] select-none inline-flex"
                      style={{ perspective: "800px" }}
                      aria-label={milestones[currentIndex].year}
                    >
                      {milestones[currentIndex].year.split("").map((digitChar, dIdx) => (
                        <DigitSlot key={dIdx} char={digitChar} />
                      ))}
                    </div>

                    {/* Milestone Title & Description with Pure Fade */}
                    <div
                      className={`space-y-2 lg:space-y-3 transition-opacity duration-200 ${
                        isFadingOut
                          ? "opacity-0"
                          : isFadingIn
                          ? "animate-pure-fade-in"
                          : "opacity-100"
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-[32px] font-semibold text-slate-900 tracking-tight leading-[1.2]">
                        {displayedItem.title}
                      </h3>
                      <p className="text-xs sm:text-sm lg:text-[15px] xl:text-base text-slate-600 leading-relaxed max-w-xl">
                        {displayedItem.description}
                      </p>
                    </div>
                  </div>

                  {/* Right inside card: Visual Milestone Image Frame + Mobile Arrows */}
                  <div className="relative flex flex-col items-center justify-center lg:items-end lg:justify-end w-full gap-4">
                    <div className="relative w-full max-w-[420px] sm:max-w-[460px] xl:max-w-none xl:w-auto rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-900/5 border border-slate-200/90 flex items-center justify-center">
                      <img
                        src={displayedItem.image}
                        alt={`${displayedItem.year} - ${displayedItem.title}`}
                        style={{ objectPosition: displayedItem.imagePosition ?? "50% 50%" }}
                        className={`w-full aspect-square h-auto xl:w-auto xl:h-[min(460px,calc(100vh-148px-300px))] 2xl:h-[min(500px,calc(100vh-148px-300px))] object-cover block select-none transition-all duration-700 cubic-bezier(0.22, 1, 0.36, 1) ${
                          isImageChanging
                            ? "opacity-0 scale-105"
                            : "opacity-100 scale-100"
                        }`}
                      />
                    </div>

                    {/* Mobile Prev / Next Year Navigation Arrows */}
                    <div className="flex xl:hidden items-center justify-center gap-3 pt-1 w-full">
                      <button
                        type="button"
                        onClick={() => handleClickYear(Math.max(0, currentIndex - 1))}
                        disabled={currentIndex === 0}
                        aria-label="Previous year"
                        className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-[#0B2C1C] hover:bg-[#0B2C1C] hover:text-white disabled:opacity-35 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleClickYear(Math.min(milestones.length - 1, currentIndex + 1))}
                        disabled={currentIndex === milestones.length - 1}
                        aria-label="Next year"
                        className="w-11 h-11 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-[#0B2C1C] hover:bg-[#0B2C1C] hover:text-white disabled:opacity-35 disabled:pointer-events-none transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

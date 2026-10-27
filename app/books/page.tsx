"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, BookMarked, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { booksData } from "./booksData";

export default function BooksPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Use a small buffer (e.g., 2px) for floating point inaccuracies
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-brand-foreground font-sans">
      <Header />

      {/* Hero Section - Standardized responsive hero */}
      <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Full-bleed Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Background Image (1920x820) */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/hero/books/books_desktop_cropped.png" 
              alt="Books on Flour Milling" 
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
              src="/hero/books/books-mobile.png" 
              alt="Books on Flour Milling" 
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            {/* Mobile gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/40 to-transparent"></div>
          </div>
        </div>

        {/* Banner Text Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-24 sm:pb-28 md:pb-32">
          <div className="max-w-3xl space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
              <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
              Flour milling books
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
              Books on <span className="text-[#f7b032]">flour milling</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Practical knowledge, technical expertise, and decades of industry insight - authored to help millers, entrepreneurs, and plant teams build better Flour operations.
            </p>
            <div className="pt-2 sm:pt-4">
              <button 
                onClick={() => {
                  const el = document.getElementById('order-books');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer"
              >
                EXPLORE BOOKS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Key Proof Points Bar (50/50 Overlapping Hero Bottom) */}
      <div className="hidden md:block relative z-30 -translate-y-1/2 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-7 flex flex-row items-center justify-between gap-4 divide-x divide-slate-100">
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Technical expertise</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Deep industry knowledge.</p>
            </div>
          </div>
          
          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <BookMarked className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Practical guidance</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Actionable insights.</p>
            </div>
          </div>

          <div className="w-full flex items-center gap-4.5 px-4 group hover:bg-[#eaf1ec] p-4 rounded-xl transition-colors cursor-default">
            <div className="w-14 h-14 rounded-2xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-slate-900 leading-snug">Industry legacy</h4>
              <p className="text-sm lg:text-[15px] text-slate-600 font-medium mt-0.5">Decades of experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Key Proof Points Bar - Horizontal Swipeable Slider */}
      <div className="block md:hidden relative z-30 w-full -mt-10 mb-4">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 scroll-pl-5 pt-3 pb-7">
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Technical expertise</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Deep industry knowledge.</p>
            </div>
          </div>
          
          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Practical guidance</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Actionable insights.</p>
            </div>
          </div>

          <div className="w-[78vw] max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] p-5 border border-slate-200/70 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f0fdf4] text-[#0A4446] flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Industry legacy</h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">Decades of experience.</p>
            </div>
          </div>

          <div className="w-2 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Main Content Section */}
      <section id="order-books" className="w-full pt-4 md:pt-2 xl:pt-28 pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#F8F9FA]">
        <div className="w-full mx-auto space-y-12">
          
          <div className="text-center w-full flex items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900">
              Order books
            </h2>
          </div>

          {/* Product Grid / Slider */}
          <div className="relative w-full group/slider">
            {/* Slider Controls */}
            {canScrollLeft && (
              <div 
                onClick={() => scroll('left')}
                className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg cursor-pointer hover:bg-slate-50 transition-colors opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700" />
              </div>
            )}
            
            {canScrollRight && (
              <div 
                onClick={() => scroll('right')}
                className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg cursor-pointer hover:bg-slate-50 transition-colors opacity-0 group-hover/slider:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-slate-700" />
              </div>
            )}

            <div 
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 -mt-3 pt-3 pb-10 scroll-pl-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style dangerouslySetInnerHTML={{__html: `
                .overflow-x-auto::-webkit-scrollbar { display: none; }
              `}} />
              {booksData.map((book) => {
                return (
                  <Link 
                    key={book.slug}
                    href={`/books/${book.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-amber-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-start"
                  >
                    {/* Sale Tag */}
                    {book.comingSoon ? (
                      <span className="absolute top-4 right-4 z-10 bg-slate-800 text-white text-[11px] font-black tracking-wider px-3 py-1 shadow-sm rounded-sm">
                        Coming soon
                      </span>
                    ) : (
                      <span className="absolute top-4 right-4 z-10 bg-[#D3994B] text-[#133020] text-[11px] font-black tracking-wider px-3 py-1 shadow-sm rounded-sm">
                        Sale
                      </span>
                    )}

                    {/* Image Container */}
                    <div className="aspect-[4/5] w-full flex items-center justify-center p-6 relative overflow-hidden bg-white border-b border-slate-100">
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="object-contain max-h-[88%] max-w-[88%] group-hover:scale-105 transition-transform duration-500 ease-out z-10 relative mix-blend-multiply"
                      />
                    </div>

                    {/* Details Container */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#F2F1ED]">
                      <div className="space-y-2">
                        <h3 className="font-heading font-bold text-slate-800 text-lg leading-snug line-clamp-2 min-h-[50px]">
                          {book.title}
                        </h3>
                        <p className="text-[10px] text-slate-500 font-extrabold tracking-widest mt-2 mb-1">
                          Publications
                        </p>
                        {/* Price Section */}
                        <div className="flex flex-col gap-0.5 pt-1">
                          {book.comingSoon ? (
                            <span className="text-base text-slate-500 font-bold italic">Coming Soon</span>
                          ) : (
                            <>
                              <span className="text-xs text-slate-600 font-medium">
                                MRP: <strong className="font-bold text-slate-800">₹{book.originalPrice.toLocaleString('en-IN')}.00</strong>
                              </span>
                              <span className="text-sm text-slate-800 font-medium">
                                Best Price: <strong className="font-black text-slate-900">₹{book.salePrice.toLocaleString('en-IN')}.00</strong>
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center text-xs font-bold text-slate-800 group-hover:text-[#D3994B] group-hover:translate-x-1 transition-all duration-300 gap-1 mt-auto pt-2">
                        <span>Read summary</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

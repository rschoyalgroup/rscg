"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PackageCheck, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuote } from "@/components/QuoteContext";
import { booksData } from "../booksData";

export default function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const initialBook = booksData.find((b) => b.slug === resolvedParams.slug);

  if (!initialBook) {
    notFound();
  }

  const { addToQuote } = useQuote();
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [addedMessage, setAddedMessage] = useState(false);

  const currentVariant = initialBook.variants ? initialBook.variants[activeVariantIndex] : null;
  const displayImage = currentVariant ? currentVariant.image : initialBook.image;
  const displayTitle = currentVariant ? (currentVariant.slugSuffix === "hindi" ? `${initialBook.title} (Hindi Version)` : `${initialBook.title}`) : initialBook.title;

  const handleAddToQuote = () => {
    addToQuote({
      id: currentVariant ? `${initialBook.slug}-${currentVariant.slugSuffix}` : initialBook.slug,
      name: displayTitle,
      image: displayImage,
      category: "Books & Publications"
    }, 1);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const handleWhatsAppEnquiry = () => {
    const message = `Hello, I am interested in your book: *${displayTitle}* and would like to receive more details.`;
    window.open(`https://wa.me/919240289259?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      {/* Main Container with Marble Background Pattern */}
      <main className="flex-1 relative w-full overflow-x-clip bg-[#FAFAFA] pt-28 sm:pt-32 lg:pt-36"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-start w-full min-h-[85vh]">
          
          {/* Left Column (Book Visualization) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-28 self-start flex flex-col items-center justify-center p-6 sm:p-8 lg:px-12 lg:pt-0 lg:pb-6">
            
            {/* Book Display Container */}
            <div className="relative z-10 w-full max-w-xl mx-auto flex items-center justify-center">
              {/* Book Image */}
              <div className="relative w-full h-auto z-10 hover:scale-102 transition-transform duration-500 origin-center flex items-center justify-center">
                <img
                  src={displayImage}
                  alt={displayTitle}
                  className="w-full h-auto lg:max-h-[calc(100vh-9rem)] object-contain mx-auto"
                />
              </div>
            </div>

            {/* Book Versions (directly below the main book image) */}
            {initialBook.variants && initialBook.variants.length > 0 && (
              <div className="w-full flex justify-center gap-4 pt-5 sm:pt-6">
                {initialBook.variants.map((variant, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActiveVariantIndex(idx)}
                    className={`cursor-pointer flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all w-24 sm:w-28 ${activeVariantIndex === idx ? 'border-[#1A3A29] bg-white shadow-md scale-105' : 'border-transparent hover:bg-slate-100 hover:scale-105 opacity-70 hover:opacity-100'}`}
                  >
                    <div className="w-full aspect-[3/4] relative bg-white shadow-sm rounded-md overflow-hidden">
                      <Image src={variant.image} alt={variant.label} fill className="object-cover" />
                    </div>
                    <span className={`text-xs font-bold text-center ${activeVariantIndex === idx ? 'text-[#1A3A29]' : 'text-slate-600'}`}>{variant.label}</span>
                  </button>
                ))}
              </div>
            )}
            
          </div>

          {/* Right Column (Book Content) */}
          <div className="w-full lg:w-1/2 relative p-6 sm:p-10 lg:p-12 xl:p-14 pt-0 lg:pt-0 xl:pt-0 flex flex-col justify-start">
            <div className="max-w-2xl space-y-8">
              
              <div className="space-y-2 border-b border-slate-200/70 pb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
                  {displayTitle}
                </h1>
                {initialBook.comingSoon ? (
                  <p className="text-2xl sm:text-3xl font-bold text-slate-500 italic pt-2">
                    Coming soon
                  </p>
                ) : (
                  <div className="pt-2 space-y-1">
                    <p className="text-lg sm:text-xl text-slate-600 font-medium">
                      MRP: <span className="font-bold text-slate-800">₹{initialBook.originalPrice.toLocaleString('en-IN')}.00</span>
                    </p>
                    <p className="text-xl sm:text-2xl text-slate-800 font-medium">
                      Best Price: <span className="font-extrabold text-slate-900">₹{initialBook.salePrice.toLocaleString('en-IN')}.00</span>
                    </p>
                  </div>
                )}
              </div>

              {/* About the Book */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900">About the book</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 prose-ul:my-2 prose-li:my-0.5 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: initialBook.aboutBook.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              {/* About the Author */}
              <div className="space-y-4 pt-4 border-t border-slate-200/70">
                <h2 className="text-xl font-bold text-slate-900">About the author</h2>
                <div 
                  className="prose prose-slate prose-sm sm:prose-base prose-strong:text-slate-900 text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: initialBook.aboutAuthor.replace(/\n/g, '<br/>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }}
                />
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {initialBook.comingSoon ? (
                  <button disabled className="h-12 min-h-12 shrink-0 sm:flex-1 w-full bg-slate-200 text-slate-500 font-bold px-6 sm:px-8 rounded-lg cursor-not-allowed">
                    Coming soon
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleAddToQuote}
                      className="h-12 min-h-12 shrink-0 sm:flex-1 w-full flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 px-6 sm:px-8 rounded-lg font-bold text-sm shadow-[0_4px_14px_rgba(247,176,50,0.35)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.5)] transition-all cursor-pointer"
                    >
                      <PackageCheck className="w-4 h-4 text-slate-900" />
                      {addedMessage ? "Added to quote!" : "Add to quote"}
                    </button>

                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="h-12 w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#22c55e] text-[#16a34a] hover:bg-[#f0fdf4] px-6 rounded-lg font-bold text-sm shadow-sm transition-all whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp enquiry
                    </button>
                  </>
                )}
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

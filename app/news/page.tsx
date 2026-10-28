"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsData } from "./newsData";

export default function NewsPage() {

  // Helper to extract first paragraph as excerpt
  const getExcerpt = (contentArray: any[]) => {
    const firstParagraph = contentArray.find(c => c.type === 'paragraph');
    if (firstParagraph && firstParagraph.text) {
      const text = firstParagraph.text;
      return text.length > 100 ? text.substring(0, 97) + "..." : text;
    }
    return "";
  };

  // Helper to format date like "14 APR 2015"
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Standardized responsive hero */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] min-h-[580px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[700px] flex items-center overflow-hidden">
          {/* Full-bleed Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Desktop Background Image (1920x820) */}
            <div className="hidden md:block absolute inset-0">
              <Image 
                src="/hero/news/news_desktop_v2.png" 
                alt="News & Updates" 
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
                src="/hero/news/news_mobile_v2.png" 
                alt="News & Updates" 
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
                Latest articles & insights
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-heading font-black text-white leading-[1.15] tracking-tight">
                News & Updates
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                Stay informed with the latest announcements, product launches, industry insights, and milestones from RS Choyal Group.
              </p>
            </div>
          </div>
        </section>

        {/* Main Section */}
        <section className="relative w-full py-20 z-10 bg-white">
          <div className="relative z-10 px-6 sm:px-12 lg:px-16 xl:px-24 w-full">


            {/* News Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {newsData.map((item) => {
                const cardImage = item.images.length > 0 ? item.images[0].local_path : "/images/other_3.webp";
                return (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group bg-white rounded-[24px] border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={cardImage}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide uppercase">
                          {item.displayDate || formatDate(item.date)}
                        </div>
                        <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-brand-primary transition-colors leading-snug line-clamp-3">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3 font-normal">
                          {getExcerpt(item.content)}
                        </p>
                      </div>

                      <div className="pt-6 mt-auto">
                        <div className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#4A7264] hover:text-[#133020] transition-colors border-b border-transparent hover:border-[#133020]">
                          Read more <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import { Award, Calendar, GraduationCap, Heart, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherLeadersSection from "@/components/OtherLeadersSection";

export default function ExChairmanPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-r from-[#17462c] to-[#297a49] pt-36 sm:pt-40 lg:pt-44 pb-14 sm:pb-16 lg:pb-20 px-6 sm:px-12 lg:px-16 xl:px-24 overflow-hidden border-b border-[#17462c]/30">
          {/* Background Texture matching Homepage CTA */}
          <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 w-full">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Late Mr. B. M. Choyal
              </h1>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-2xl leading-relaxed">
                Co-Founder &amp; Ex-Chairman of Shri Vishvakarma Industries
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Sidebar Card */}
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="bg-white border border-slate-200/80 p-6 rounded-[28px] shadow-sm space-y-6 md:space-y-0 md:flex md:items-center md:gap-8 lg:block lg:space-y-6">
                  <div className="w-full md:w-[38%] md:shrink-0 lg:w-full relative rounded-2xl overflow-hidden border border-slate-100 bg-[#EAEAEA]">
                    <img
                      src="/images/about/leadership/B.M%20Choyal.jpg"
                      alt="Late Mr. B. M. Choyal"
                      className="w-full h-auto block opacity-95"
                    />
                  </div>
                  <div className="space-y-4 md:flex-1 md:min-w-0">
                    <div>
                      <h2 className="text-xl font-heading font-black text-slate-900">Late Mr. B. M. Choyal</h2>
                      <p className="text-brand-primary text-xs font-bold tracking-wider mt-1">Co-Founder &amp; Ex-Chairman</p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-3">
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <Calendar className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>Born: July 28, 1926</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>Nava City, Distt. Nagaur, Rajasthan</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <Award className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>Title: &apos;Bhamashah&apos;</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Biography Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-brand-primary tracking-wider">
                  Legacy &amp; heritage
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                  A pioneer in milling engineering
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Late Mr. B. M. Choyal was born on 28 July 1926 in Nava city, Distt. Nagaur, Rajasthan. At just 16 years of age, he bravely stepped up to shoulder the responsibility of supporting his family and mentoring his younger brother.
                </p>
                <p>
                  He began his career working in wood pattern making and dedicating himself to researching and innovating alternative materials, which ultimately led to the development of high-quality artificial emery stones.
                </p>
                <p>
                  In 1959, he formally entered the emery mill stone business, and in 1965, co-founded <strong>Shri Vishvakarma Industries</strong>, setting the foundation for what would become a highly respected enterprise in milling technologies.
                </p>
                <p>
                  Appointed as Chairman of the group in 1977, Mr. Choyal personally oversaw production standards, product quality control, and manufacturing workflow improvements, guiding the company through its formative years of expansion.
                </p>
                <p>
                  Beyond his remarkable business acumen, he was widely recognized for his philanthropic initiatives in girls&apos; education, local medical support, merit-based student scholarships, and establishing cow shelters (Gau Shalas) in his hometown.
                </p>
                <p>
                  His compassionate contributions earned him the respected title of &apos;Bhamashah&apos; in his native region of Nawa, and his legacy continues to inspire the values of trust, quality, and community support across all RS Choyal Group companies.
                </p>
              </div>

              {/* Pillars of Legacy */}
              <div className="bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-[28px] mt-8">
                <h4 className="text-lg sm:text-xl font-heading font-black text-slate-900 mb-6">
                  Key legacy contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Support for education</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Pioneered local educational opportunities, specifically funding schools and scholarships for girls in Rajasthan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Social well-being</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Established cow shelters (Gau Shalas) and healthcare resources to benefit underprivileged communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Leadership Section */}
      <OtherLeadersSection />
    </div>

    <Footer />
    </div>
  );
}

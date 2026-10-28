"use client";

import { Award, Calendar, GraduationCap, Gavel, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherLeadersSection from "@/components/OtherLeadersSection";

export default function ExMdPage() {
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
                Late Shri R. D. Sharma
              </h1>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-2xl leading-relaxed">
                Co-Founder &amp; Ex-Managing Director of Shri Vishvakarma Industries
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
                      src="/images/about/leadership/R.D%20Sharma.jpg"
                      alt="Late Shri R. D. Sharma"
                      className="w-full h-auto block opacity-95"
                    />
                  </div>
                  <div className="space-y-4 md:flex-1 md:min-w-0">
                    <div>
                      <h2 className="text-xl font-heading font-black text-slate-900">Late Shri R. D. Sharma</h2>
                      <p className="text-brand-primary text-xs font-bold tracking-wider mt-1">Co-Founder &amp; Ex-Managing Director</p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-3">
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <Calendar className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>Born: January 5, 1939</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <GraduationCap className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>B.Com, D.A.V. College, Ajmer (1961)</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                        <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>Nava City, Distt. Nagaur, Rajasthan</span>
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
                  A visionary leader and legal champion
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Late Mr. R. D. Sharma was born on 5 January 1939 in Nava city, Distt. Nagaur, Rajasthan. He pursued higher education with dedication, successfully completing his Bachelor of Commerce from the prestigious D.A.V. College, Ajmer in 1961. He formally entered the emery mill stones business in 1959.
                </p>
                <p>
                  In 1965, he co-founded <strong>Shri Vishvakarma Industries</strong>, working alongside his brother to build the operational backbone of the business. In 1977, he was officially appointed as the Managing Director of the group, taking complete charge of operational management and legal affairs.
                </p>
                <p>
                  Mr. Sharma was a true pioneer in international commerce. He was the first Indian businessman in the milling sector to export emery stones and flour mills globally, introducing Indian milling technology to the international market and establishing early trade routes.
                </p>
                <p>
                  Beyond expanding the company&apos;s commercial footprint, Mr. Sharma was a deeply progressive leader committed to employee welfare. He proactively reformed internal labor policies, amending regulations to provide maximum possible Provident Fund benefits to the workers.
                </p>
                <p>
                  He is also famously remembered in the industry for fighting and winning a landmark national lawsuit that exempted emery stones from excise duty. This legal victory not only saved his business substantial costs but also protected the entire Indian mill stone manufacturing sector from a heavy tax burden.
                </p>
                <p>
                  His integrity, legal acumen, and operational foresight left an indelible mark on the RS Choyal Group, setting a high benchmark for employee-first corporate responsibility and global vision.
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
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Export pioneer</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        First entrepreneur to export Indian-made emery stones and milling systems to foreign nations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <Gavel className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Industry legal victory</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Won a historic legal battle exempting emery stones from excise duty, saving the wider milling trade.
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

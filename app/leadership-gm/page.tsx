"use client";

import { PenTool, Wheat, Sprout, MonitorSmartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OtherLeadersSection from "@/components/OtherLeadersSection";

export default function LeadershipGmPage() {
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
                Vibhuti Choyal
              </h1>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-white/90 font-normal max-w-2xl leading-relaxed">
                General Manager - Products &amp; Services
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Sidebar Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white border border-slate-200/80 p-6 rounded-[28px] shadow-sm space-y-6">
                <div className="w-full relative rounded-2xl overflow-hidden border border-slate-100 bg-[#EAEAEA]">
                  <img
                    src="/images/about/leadership/Vibhuti%20Choyal.jpg"
                    alt="Vibhuti Choyal"
                    className="w-full h-auto block opacity-95"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-black text-slate-900">Vibhuti Choyal</h2>
                  <p className="text-brand-primary text-xs font-bold tracking-wider mt-1">
                    General Manager - Products &amp; Services
                  </p>
                </div>
              </div>
            </div>

            {/* Right Biography Content */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold text-brand-primary tracking-wider">
                  Current leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-slate-950 leading-tight">
                  Design-led leadership &amp; innovation
                </h3>
              </div>

              <div className="text-slate-700 font-medium space-y-6 text-sm sm:text-base leading-relaxed">
                <p>
                  Vibhuti Choyal brings a distinctive blend of design thinking, global experience, and entrepreneurial vision to the Choyal legacy. A graduate of the Glasgow School of Art with a Master&apos;s degree, she has built expertise across service design, user experience (UX), and innovation, working on projects that connect human needs with technology and business strategy.
                </p>
                <p>
                  Her professional journey includes experience at Designit and involvement in fintech and defence-tech UX projects in the United Kingdom, where she applied user-centred design principles to complex digital experiences. This international exposure has shaped her approach to creating intuitive, purposeful, and impactful products.
                </p>
                <p>
                  Within the family business, she served as Manager at R.S. Choyal Group, bringing a fresh design-led perspective to an established milling engineering enterprise. She subsequently founded <strong>Floura</strong>, a farm-to-table fresh flour venture that leverages Choyal&apos;s patented fresh-flour grinding and vending technology to deliver customised, freshly ground flour in as little as six minutes. The venture reflects her vision of connecting traditional milling expertise with modern consumer expectations for freshness, convenience, and transparency.
                </p>
                <p>
                  Her leadership extends beyond entrepreneurship. She serves as a Director at Mavian Agritech Ltd, an Advisory Board Member at IAMTHECODE Foundation, and a Curator with the Global Shapers Community, an initiative of the World Economic Forum, at the Ajmer Hub. These roles reflect her engagement with agritech, technology-led development, and community-driven initiatives.
                </p>
                <p>
                  At the intersection of heritage and innovation, Vibhuti bridges more than six decades of Choyal&apos;s milling engineering expertise with contemporary design thinking. Her work brings a strong focus on usability, product strategy, and customer experience to the group&apos;s evolving digital ecosystem, including ProMiller&apos;s digital tools. By combining international design experience with an understanding of the family business, she helps connect industrial expertise with modern technology and user-centred innovation.
                </p>
              </div>

              {/* Key focus areas */}
              <div className="bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-[28px] mt-8">
                <h4 className="text-lg sm:text-xl font-heading font-black text-slate-900 mb-6">
                  Key focus areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Design-led innovation</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Applying service design and user-centred thinking to Choyal&apos;s products and services.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <Wheat className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Fresh flour, on demand</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Founded Floura, delivering customised, freshly ground flour in as little as six minutes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <MonitorSmartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Digital ecosystem</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Bringing usability, product strategy and customer experience to tools such as ProMiller.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3.5">
                    <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900">Agritech &amp; community</h5>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed mt-1">
                        Director at Mavian Agritech, Advisory Board Member at IAMTHECODE and Global Shapers Curator, Ajmer Hub.
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

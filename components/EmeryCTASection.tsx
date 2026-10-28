import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, ThumbsUp, Wrench } from "lucide-react";

export default function EmeryCTASection() {
  return (
    <section className="w-full relative z-10 overflow-hidden bg-[#0a3118] py-20 lg:py-28">
      {/* Background Image spanning full width */}
      <div className="absolute inset-0">
        <Image 
          src="/images/last_section.png"
          alt="Emery stone performance"
          fill
          className="object-cover object-right sm:object-[80%_center] lg:object-right"
          priority
        />
        {/* Dark gradient overlay on the left side to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510] via-[#0B1510]/80 lg:via-[#0B1510]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
        <div className="max-w-2xl">
          <p className="text-[#f7b032] text-xs font-bold tracking-widest mb-4">Emery stone expertise</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight mb-6">
            Built for consistent performance.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-12 font-medium leading-relaxed">
            Engineered for precise grinding, dependable flour quality, and long-lasting durability.
          </p>

          {/* 4 Icons Row */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-12 mb-12">
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#f7b032] backdrop-blur-sm">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">Precision<br/>Grinding</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#f7b032] backdrop-blur-sm">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">Flour<br/>Quality</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#f7b032] backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">Long<br/>Durability</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#f7b032] backdrop-blur-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">Expert<br/>Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            {/* Primary CTA (Amber solid with hover glow) */}
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto uppercase tracking-wide"
            >
              ENQUIRE NOW <ArrowRight className="w-4 h-4" />
            </Link>
            
            {/* Secondary CTA (Dark with border) */}
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-sm font-bold px-8 py-4 rounded transition-all hover:border-[#f7b032]/50 text-sm w-full sm:w-auto uppercase tracking-wide"
            >
              TALK TO OUR EMERY STONE EXPERT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Trust Box (Bottom Right) */}
      <div className="hidden xl:flex absolute bottom-12 right-12 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-sm flex-col gap-2 shadow-2xl">
        <h4 className="text-white font-bold text-sm tracking-wider">Trusted worldwide</h4>
        <p className="text-slate-300 text-xs leading-relaxed">
          Delivering unparalleled grinding conditions with quality, consistency, and reliability.
        </p>
      </div>
    </section>
  );
}

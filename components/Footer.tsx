"use client";

import Link from "next/link";
import { Phone, Mail, Globe, MapPin, Factory } from "lucide-react";

const aboutLinks = [
  { name: "About us", href: "/about" },
  { name: "Leadership", href: "/about#leadership" },
  { name: "Mission and vision", href: "/about#mission-vision" },
  { name: "Our philosophy", href: "/about#philosophy" },
  { name: "R&D and innovation", href: "/about#research-development" },
  { name: "Social responsibility", href: "/about#social-responsibility" },
  { name: "Why RSCG", href: "/about#why-rsc" },
  { name: "Our network", href: "/about#network" },
];

const productLinks = [
  { name: "Turnkey solutions", href: "/turnkey-projects" },
  { name: "Flour mills", href: "/flour-mills" },
  { name: "Automation", href: "/automation" },
  { name: "Power saving", href: "/power-saving" },
  { name: "Emery stones", href: "/emery-stones" },
  { name: "Grain storage & handling", href: "/grain-storage-handling" },
  { name: "Grain processing", href: "/grain-processing" },
];

const serviceLinks = [
  { name: "Grain 360", href: "/choyal-360" },
  { name: "Facility center", href: "/facility-centre" },
  { name: "Job grinding", href: "/job-grinding" },
  { name: "Consultancy", href: "/consultancy" },
  { name: "Training", href: "/training" },
  { name: "Design and media", href: "/design-media" },
];

const certBadges = [
  { name: "Certified", src: "/images/footer/icons/certified.png" },
  { name: "ISO 9001:2008 Certified", src: "/images/footer/icons/ISO 9001_2008 certified.png" },
  { name: "Enabled", src: "/images/footer/icons/enabled.png" },
  { name: "ISO 9001:2015", src: "/images/footer/icons/ISO 9001_2015.png" },
  { name: "Touch", src: "/images/footer/icons/touch-dark.png" },
  { name: "Solar Energy", src: "/images/footer/icons/solar energy.png" },
  { name: "Energy Saver", src: "/images/footer/icons/energy saver.png" },
  { name: "ISO 22000:200", src: "/images/footer/icons/ISO 22000_200.png" },
];

export default function Footer() {
  return (
    <footer className="w-full pt-10 sm:pt-14 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f6f6f4] text-[#3e4d46] border-t border-slate-300/80 relative z-10">
      <div className="w-full mx-auto space-y-8 sm:space-y-12">
        
        {/* ================= 5-COLUMN MAIN GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 gap-y-8 lg:gap-10">
          
          {/* Col 1: About Us (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-black text-[#133a25] tracking-wider">
              About us
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[15px] font-medium text-slate-600">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-black text-[#133a25] tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[15px] font-medium text-slate-600">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-black text-[#133a25] tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[15px] font-medium text-slate-600">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations & Contact (3.5 cols) */}
          <div className="col-span-2 order-last md:order-none md:col-span-1 lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-black text-[#133a25] tracking-wider">
              Locations &amp; contact
            </h4>
            
            <div className="space-y-3 sm:space-y-4 text-sm font-medium text-slate-600">
              {/* Corporate Headquarters */}
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-emerald-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-[#1c2722] text-sm sm:text-base block">Corporate Headquarters</span>
                  <span className="text-slate-600 leading-relaxed text-sm">
                    Choyal Tower, Shalimar Colony, Adarsh Nagar, Ajmer – 305008, Rajasthan, India
                  </span>
                </div>
              </div>
              
              {/* Factory Unit */}
              <div className="flex items-start gap-3">
                <Factory className="h-4.5 w-4.5 text-emerald-700 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-[#1c2722] text-sm sm:text-base block">Factory Unit</span>
                  <span className="text-slate-600 leading-relaxed text-sm">
                    Choyal Grinding Solution Pvt. Ltd., Arjunpura – Khalsa, District Ajmer-305203, Rajasthan, India
                  </span>
                </div>
              </div>

              {/* Call, Mail & Web */}
              <div className="pt-1 sm:pt-2 space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-3">
                  <Phone className="h-4.5 w-4.5 text-emerald-700 flex-shrink-0" />
                  <a href="tel:+919240289259" className="text-slate-800 hover:text-brand-primary font-bold text-sm sm:text-base transition-colors">
                    +91 92402 89259
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-emerald-700 flex-shrink-0" />
                  <a href="mailto:info@rschoyalgroup.com" className="text-slate-600 hover:text-brand-primary text-sm sm:text-base transition-colors">
                    info@rschoyalgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4.5 w-4.5 text-emerald-700 flex-shrink-0" />
                  <a href="https://www.rschoyalgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-primary text-sm sm:text-base transition-colors">
                    www.rschoyalgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Social Media (2.5 cols) */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-sm sm:text-base font-black text-[#133a25] tracking-wider">
              Social media
            </h4>
            <p className="text-sm text-slate-600 font-medium">
              Connect with us on official channels:
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary/40 transition-all duration-200 hover:scale-105"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM DIVIDER & CERTIFICATIONS ================= */}
        <div className="border-t border-slate-200/80 pt-6 sm:pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
          
          {/* Left: Copyright & Tagline */}
          <div className="space-y-1.5">
            <p className="text-sm sm:text-base font-bold text-slate-800">
              Copyright 2026 © RS Choyal Group
            </p>
            <p className="text-sm text-slate-500 italic">
              We never forget how much you rely on Choyal
            </p>
          </div>

          {/* Right: 8 Certification & Feature Badges */}
          <div className="w-full lg:w-auto grid grid-cols-4 sm:flex sm:flex-wrap items-start justify-items-center sm:justify-start lg:justify-end gap-3 sm:gap-4">
            {certBadges.map((badge) => (
              <div key={badge.name} className="flex flex-col items-center group w-16 sm:w-18">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 transition-transform duration-200 group-hover:scale-110">
                  <img
                    src={encodeURI(badge.src)}
                    alt={badge.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-xs text-slate-700 font-semibold text-center mt-1.5 leading-tight line-clamp-2">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

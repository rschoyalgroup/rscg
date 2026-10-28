"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, ArrowRight, Factory, Box } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "./projectsData";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    '/images/projects/hero/hero1.jpg',
    '/images/projects/hero/hero2.jpg',
    '/images/projects/hero/hero3.jpg',
    '/images/projects/hero/hero4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to extract first paragraph as excerpt
  const getExcerpt = (contentArray: any[]) => {
    // Find the first paragraph that has actual content and isn't just a label
    const validParagraphs = contentArray.filter(c => 
      c.type === 'paragraph' && 
      c.text && 
      c.text.length > 30 &&
      !c.text.toLowerCase().includes('project overview:')
    );
    
    if (validParagraphs.length > 0) {
      const text = validParagraphs[0].text;
      return text.length > 130 ? text.substring(0, 127) + "..." : text;
    }
    return "";
  };

  // Filter projects based on search query matching title, location, client, or content
  const filteredProjects = projectsData.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesClient = project.client.toLowerCase().includes(query);
    const matchesLocation = project.location.toLowerCase().includes(query);
    const matchesContent = project.content.some(
      (paragraph) => 
        paragraph.text?.toLowerCase().includes(query) || 
        paragraph.items?.some(i => i.toLowerCase().includes(query))
    );
    return matchesTitle || matchesClient || matchesLocation || matchesContent;
  });

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Matches exact aspect ratio so images are never cut off */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] md:min-h-[520px] lg:min-h-[560px] pt-24 sm:pt-28 flex items-center overflow-hidden bg-[#0B1510]">
          {/* Full-bleed Background Slideshow */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {heroImages.map((src, index) => (
              <div 
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image 
                  src={src} 
                  alt="Case Studies & Projects" 
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            ))}
            {/* Dark-charcoal gradient overlay */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0B1510]/85 via-[#0B1510]/40 to-transparent z-10"></div>
            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#0B1510]/85 via-[#0B1510]/65 to-[#0B1510]/40 z-10"></div>
          </div>

          <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                Case studies & projects
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-heading font-black text-white leading-[1.1] tracking-tight">
                Transforming ideas <br />
                <span className="text-white">into reality</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                From concept to completion, discover the projects we&apos;ve successfully executed with precision and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Main Listing Section */}
        <section className="w-full py-12 px-6 sm:px-12 lg:px-16 xl:px-24 z-10">
          {/* Breadcrumbs & Search bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-6 border-b border-slate-200/50">
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
              <span className="text-slate-400">/</span>
              <span className="text-slate-800 font-semibold">Our projects</span>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 bg-white rounded-2xl border border-slate-200/60 p-1 shadow-xs">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search projects by country, client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-sm bg-slate-50 border border-slate-100 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              />
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200/50 p-16 text-center text-slate-500 space-y-4 max-w-lg mx-auto">
              <Factory className="h-12 w-12 mx-auto text-slate-300" />
              <h3 className="text-xl font-bold text-slate-800">No installations found</h3>
              <p className="text-base text-slate-500">No project case studies matched your query. Try searching for a different region or client.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProjects.map((project) => {
                const coverImage = project.images.length > 0 ? project.images[0] : "/images/plants/turnkey_solutions_cropped.webp";
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group cursor-pointer flex flex-col h-full space-y-4"
                  >
                    {/* Cover Image */}
                    <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={coverImage}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/plants/turnkey_solutions.webp";
                        }}
                      />
                    </div>

                    {/* Metadata and Content */}
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3.5">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 tracking-wider">
                          <MapPin className="h-4 w-4 text-brand-primary" />
                          <span>{project.location || "Global"}</span>
                        </div>
                        <h3 className="text-2xl font-heading font-black text-slate-800 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                          {project.title}
                        </h3>
                        {project.capacity && (
                          <div className="text-sm font-bold text-[#133020] flex items-start gap-2 bg-slate-100/60 p-3 rounded-xl border border-slate-100">
                            <Box className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{project.capacity}</span>
                          </div>
                        )}
                        <p className="text-base text-slate-600 leading-relaxed line-clamp-3 font-normal">
                          {getExcerpt(project.content)}
                        </p>
                      </div>

                      <div className="pt-3 flex items-center gap-2 text-sm font-black text-brand-primary group-hover:text-[#D3994B] transition-colors tracking-widest">
                        <span>View case study</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}

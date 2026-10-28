"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Factory, MapPin, Calendar, Box, Cpu, FileText, CheckCircle, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectsData } from "../projectsData";


export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const currentProject = projectsData.find((project) => project.slug === slug);



  // Carousel state for project gallery images
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] text-slate-800 flex flex-col justify-between">
        <div>
          <Header />
          <div className="flex-1 flex flex-col items-center justify-center p-16 space-y-4 max-w-lg mx-auto text-center">
            <Factory className="h-12 w-12 text-slate-300" />
            <h2 className="text-2xl font-bold">Project case study not found</h2>
            <p className="text-slate-500">The project case study you are looking for does not exist or has been moved.</p>
            <Link href="/projects" className="bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-6 py-2.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] text-xs sm:text-sm tracking-wide">
              Back to projects
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get other projects to display at the bottom (excluding current one)
  const otherProjects = projectsData.filter((p) => p.slug !== slug);

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1));
  };

  const totalImages = currentProject.images.length;
  const currentImage = currentProject.images[activeImageIdx];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-brand-foreground font-sans flex flex-col justify-between">
      <div>
        <Header />

        {/* Hero Section - Matches exact aspect ratio so images are never cut off */}
        <section className="relative w-full aspect-[9/16] md:aspect-[1920/820] md:min-h-[480px] flex items-center overflow-hidden bg-[#0B1510]">
           {/* Project background image (Desktop & Mobile) */}
           <div className="absolute inset-0 w-full h-full">
             <img
               src={currentProject.heroDesktop || currentProject.images[0] || "/images/turnkey_projects_hero.png"}
               alt={currentProject.title}
               className="hidden md:block w-full h-full object-cover object-center"
             />
             <img
               src={currentProject.heroMobile || currentProject.images[0] || "/images/turnkey_projects_hero.png"}
               alt={currentProject.title}
               className="block md:hidden w-full h-full object-cover object-center"
             />
           </div>

           {/* Lightened gradient overlay: top transparent, bottom slightly tinted for text contrast */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1510]/85 via-[#0B1510]/30 to-transparent z-10" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#0B1510]/60 via-[#0B1510]/20 to-transparent z-10" />

           {/* Hero content */}
           <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 xl:px-24 pt-24 pb-12 sm:pb-14">
             <div className="max-w-2xl space-y-3 sm:space-y-4">
               <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#f7b032] tracking-widest">
                 <span className="w-8 sm:w-10 h-[3px] bg-[#f7b032]"></span>
                 Case study
               </div>

               <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-heading font-black text-white leading-[1.1] tracking-tight">
                 {currentProject.title}
               </h1>

               {currentProject.location && (
                 <p className="text-base sm:text-xl font-bold text-[#f7b032] tracking-wide">
                   {currentProject.location}
                 </p>
               )}

             </div>
           </div>
        </section>

        {/* Quick Facts Bar - slight overlap with hero (never covers hero text) */}
        <div className="relative z-30 -mt-10 sm:-mt-12 lg:-mt-14 w-full mx-auto px-4 sm:px-12 lg:px-16 xl:px-24">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
              {[
                { label: "Client", value: currentProject.client, Icon: Factory },
                { label: "Location", value: currentProject.location, Icon: MapPin },
                { label: "Plant capacity", value: currentProject.capacity, Icon: Factory },
                { label: "Project type", value: currentProject.projectType, Icon: Box },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="flex flex-row items-start text-left gap-2.5 sm:gap-4 lg:px-4 min-w-0">
                  <div className="bg-slate-50 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider mb-0.5 sm:mb-1">{label}</span>
                    <span className="text-[12px] sm:text-[13px] font-black text-slate-800 leading-snug break-words">{value || "N/A"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 pt-10 sm:pt-12 lg:pt-16 pb-16 lg:pb-24">
          <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 sm:gap-10 xl:gap-16">
             <div className="space-y-6 xl:order-1 order-2">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-[32px] font-heading font-black text-[#133020] leading-tight">Project overview</h2>
                  <div className="w-12 h-[3px] bg-[#D3994B] mt-4" />
                </div>

                <div className="space-y-6">
                  {currentProject.content
                    .filter((block) => {
                      const txt = block.text?.toLowerCase().trim() || "";
                      return txt.replace(/:$/, '') !== 'project overview' && !txt.startsWith('location:') && !txt.startsWith('heading:');
                    })
                    .map((block, idx) => {
                      if (block.type === 'heading') {
                        return <h3 key={idx} className="text-xl font-heading font-black text-[#133020] mt-8 mb-4">{block.text}</h3>;
                      }
                      if (block.type === 'list') {
                        return (
                          <ul key={idx} className="list-disc pl-5 space-y-2.5 text-[15px] sm:text-base text-slate-700 font-medium">
                            {block.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+):/, '<strong>$1:</strong>') }}></li>)}
                          </ul>
                        );
                      }
                      return <p key={idx} className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-medium">{block.text}</p>;
                    })}
                </div>

             </div>

             <div className="xl:order-2 order-1 relative">
                <div className="aspect-[4/3] sm:aspect-[16/9] xl:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-xl xl:sticky xl:top-32">
                   <img src={currentProject.images[0] || currentImage} alt="Project Overview" className="object-cover w-full h-full" />
                </div>
             </div>
          </div>
        </section>

        {/* Project Gallery */}
        {totalImages > 1 && (
          <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-[32px] font-heading font-black text-[#133020] leading-tight">Project gallery</h2>
              <div className="w-12 h-[3px] bg-[#D3994B] mt-4" />
            </div>

            <div className={`flex md:grid ${currentProject.images.slice(1).length === 5 ? 'md:grid-cols-3 xl:grid-cols-5' : 'md:grid-cols-4'} gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0`}>
              {currentProject.images.slice(1).map((img, idx) => (
                <div key={idx} className="w-[68vw] max-w-[260px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative group cursor-pointer" onClick={() => setActiveImageIdx(idx + 1)}>
                  <img src={img} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
              <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-12 pb-24">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 text-white relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Background Texture matching Homepage CTA */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-white/10 relative z-10">
              <div className="space-y-3 z-10 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">Want to start your plant?</h2>
                <p className="text-white/80 font-medium text-sm sm:text-base">Let's build your next successful milling plant together.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm tracking-wide cursor-pointer whitespace-nowrap z-10"
              >
                <span>Discuss your requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center z-10 relative pt-2">
               <div className="flex flex-col items-center gap-3.5 group">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-[#f7b032]/40 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                   <CheckCircle className="text-[#f7b032] w-7 h-7 sm:w-8 sm:h-8" />
                 </div>
                 <span className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                   60+ years of<br/><span className="whitespace-nowrap">engineering excellence</span>
                 </span>
               </div>
               <div className="flex flex-col items-center gap-3.5 group">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-[#f7b032]/40 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                   <Factory className="text-[#f7b032] w-7 h-7 sm:w-8 sm:h-8" />
                 </div>
                 <span className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                   1200+ digital<br/><span className="whitespace-nowrap">mills installed</span>
                 </span>
               </div>
               <div className="flex flex-col items-center gap-3.5 group">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-[#f7b032]/40 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                   <MapPin className="text-[#f7b032] w-7 h-7 sm:w-8 sm:h-8" />
                 </div>
                 <span className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                   25+ countries<br/><span className="whitespace-nowrap">covered</span>
                 </span>
               </div>
               <div className="flex flex-col items-center gap-3.5 group">
                 <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-[#f7b032]/40 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                   <Box className="text-[#f7b032] w-7 h-7 sm:w-8 sm:h-8" />
                 </div>
                 <span className="text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                   End-to-end<br/><span className="whitespace-nowrap">turnkey support</span>
                 </span>
               </div>
            </div>
          </div>
        </section>

        {/* Other Reference Projects Section */}
        {otherProjects.length > 0 && (
          <section className="w-full py-16 px-6 sm:px-12 lg:px-16 xl:px-24 border-t border-slate-200/50 bg-slate-50/20 overflow-hidden">
            <div className="w-full space-y-8">
              <h2 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                Read other case studies
              </h2>

              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:-mx-12 sm:px-12 md:mx-0 md:px-0 scroll-pl-6 sm:scroll-pl-12 md:scroll-pl-0 pb-4 md:pb-0">
                {otherProjects.map((p) => {
                  const cardCover = p.images.length > 0 ? p.images[0] : "/images/plants/turnkey_solutions.webp";
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="w-[74vw] max-w-[290px] md:w-auto md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none group bg-white rounded-3xl border border-slate-200/60 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-secondary/35 transition-all duration-300 flex flex-col h-full cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center relative border-b border-slate-100 overflow-hidden">
                        <img
                          src={cardCover}
                          alt={p.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-brand-muted font-bold block flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-brand-primary" />
                            {p.location}
                          </span>
                          <h3 className="font-heading font-black text-slate-800 group-hover:text-brand-primary text-sm transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs font-black text-brand-primary group-hover:translate-x-1 transition-transform duration-300 gap-1 mt-auto tracking-wider">
                          <span>Read case study</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}

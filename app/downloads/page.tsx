"use client";

import { useState, useEffect, useMemo, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  CheckCircle,
  Search,
  X,
  Menu,
  ArrowRight,
  ArrowUpDown
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  downloadCategories,
  downloadsData,
  downloadGroups,
  getDownloadGroup,
  DownloadItem,
} from "./downloadsData";

function CategoryIcon({ id, className = "w-4 h-4 shrink-0" }: { id: string; className?: string }) {
  switch (id) {
    case "all":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "about-company":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21h18M5 21V5l7-3 7 3v16M9 8h.01M15 8h.01M9 12h.01M15 12h.01M10 21v-5h4v5" />
        </svg>
      );
    case "turnkey-projects":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM14 2v6h6M8 13h8M8 17h8" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22zM4 4.5v15A2.5 2.5 0 0 1 6.5 17H20M8 6h8M8 10h8" />
        </svg>
      );
    case "digital-flour-mill":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM14 2v6h6M8 13h8M8 17h8" />
        </svg>
      );
    case "semi-automatic-flour-mill":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2z" />
        </svg>
      );
    case "horizontal-flour-mill":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
        </svg>
      );
    case "flour-processing":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5" />
          <circle cx="17" cy="17" r="2.5" />
        </svg>
      );
    case "conveying-system":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
        </svg>
      );
    case "emery-stone-dresser":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v5M20 12h-5M12 20v-5M4 12h5" />
        </svg>
      );
    case "vending-machine":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h3M15 15h1" />
        </svg>
      );
    case "automatic-machines":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2z" />
        </svg>
      );
    case "semi-automatic-machines":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 2h9l5 5v15H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM14 2v6h6M8 13h8M8 17h8" />
        </svg>
      );
  }
}

function DownloadsContent() {
  const searchParams = useSearchParams();
  const fileQuery = searchParams.get("file");

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "az">("default");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<{ title: string; show: boolean } | null>(null);
  const initialTriggerRef = useRef(false);

  // Filter & sort resources
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = downloadsData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  // Active Category Name
  const activeCategoryObj = useMemo(() => {
    return downloadCategories.find((c) => c.id === activeCategory);
  }, [activeCategory]);

  // "All" view: grouped into 4 sections; a single category: one section
  const sections = useMemo(() => {
    if (activeCategory !== "all") {
      return [{ title: activeCategoryObj?.name || "Resources", items: filteredItems }];
    }
    return downloadGroups
      .map((title) => ({ title, items: filteredItems.filter((item) => getDownloadGroup(item) === title) }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, activeCategoryObj, filteredItems]);

  // Function to track and trigger download
  const handleDownload = (item: DownloadItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    // 1. Update URL cleanly without reload
    const newUrl = `/downloads?file=${item.id}`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    // 2. Track download count on server
    try {
      fetch("/api/track-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileId: item.id, title: item.title }),
      }).catch((err) => console.error("Tracking error:", err));

      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "download_brochure", {
          file_id: item.id,
          file_name: item.title,
          category: item.categoryLabel,
        });
      }
    } catch {
      // Ignore background errors
    }

    // 3. Show confirmation toast
    setToastMessage({ title: item.title, show: true });
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);

    // 4. Trigger direct browser download
    const targetUrl = item.fileUrl || item.driveUrl;
    const link = document.createElement("a");
    link.href = targetUrl;
    link.download = `${item.title}.pdf`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle direct link with ?file=[id] on page mount
  useEffect(() => {
    if (!fileQuery || initialTriggerRef.current) return;
    initialTriggerRef.current = true;

    const matchedItem = downloadsData.find(
      (item) => item.id.toLowerCase() === fileQuery.toLowerCase()
    );

    if (matchedItem) {
      setActiveCategory("all");
      setHighlightedId(matchedItem.id);

      setTimeout(() => {
        const el = document.getElementById(`card-${matchedItem.id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);

      setTimeout(() => {
        setHighlightedId(null);
      }, 5000);
    }
  }, [fileQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#EAF0EB] selection:text-[#0E3321]">
      <Header />

      {/* Main 2-Column Layout */}
      <div className="w-full flex-1 border-t border-[#E2E8F0] relative px-6 sm:px-12 lg:px-16 xl:px-24 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20">
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-10 xl:gap-14">

          {/* ================= DESKTOP SIDEBAR ================= */}
          <aside className="hidden lg:flex flex-col justify-between bg-white border-r border-[#E2E8F0] pr-4 xl:pr-8 py-1 sticky top-[125px] h-[calc(100vh-150px)] overflow-hidden">
            <div className="flex flex-col min-h-0 flex-1">
              {/* Category Label */}
              <div className="px-3.5 mb-4 text-xs font-extrabold tracking-[0.14em] text-[#015435] select-none uppercase">
                Resource Library
              </div>

              {/* Side Nav */}
              <nav
                className="flex-1 overflow-y-auto pr-1 space-y-1 overscroll-contain scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
                aria-label="Download categories"
              >
                {downloadCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-sm text-left transition-all duration-200 group cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[#EAF0EB] to-[#F3F4F2] text-[#0E3321] font-bold shadow-[inset_3px_0_0_#FFAA17]"
                          : "text-slate-600 hover:bg-[#F3F4F2] hover:text-[#0E3321] font-medium"
                      }`}
                    >
                      <CategoryIcon
                        id={cat.id}
                        className={`w-[18px] h-[18px] transition-colors shrink-0 ${
                          isActive ? "text-[#0E3321]" : "text-slate-400 group-hover:text-[#0E3321]"
                        }`}
                      />
                      <span className="leading-snug">{cat.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Need Help Box */}
            <div className="pt-5 mt-4 border-t border-[#E2E8F0] px-3.5">
              <div className="text-xs font-extrabold tracking-[0.14em] text-[#015435] mb-2 uppercase">
                Need Help?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Looking for a specific document or product resource?
              </p>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-bold text-[#0E3321] hover:text-[#FFAA17] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Contact our team</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </aside>

          {/* ================= MOBILE DRAWER ================= */}
          {mobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className="w-[280px] sm:w-[320px] bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-4">
                  <div className="text-xs font-extrabold tracking-[0.14em] text-[#0E3321] uppercase">
                    Resource Library
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1 flex-1">
                  {downloadCategories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] text-sm text-left transition-all ${
                          isActive
                            ? "bg-[#EAF0EB] text-[#0E3321] font-bold shadow-[inset_3px_0_0_#FFAA17]"
                            : "text-slate-600 hover:bg-[#F3F4F2] hover:text-[#0E3321]"
                        }`}
                      >
                        <CategoryIcon id={cat.id} className="w-4 h-4 text-slate-400" />
                        <span className="leading-snug">{cat.name}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-5 mt-6 border-t border-[#E2E8F0]">
                  <div className="text-xs font-extrabold tracking-[0.14em] text-[#0E3321] mb-1.5 uppercase">
                    Need Help?
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Looking for a specific document or product resource?
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs sm:text-sm font-bold text-[#0E3321] inline-flex items-center gap-1.5"
                  >
                    <span>Contact our team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ================= MAIN CONTENT ================= */}
          <main className="min-w-0 py-1">

            {/* Mobile Category Toggle Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between gap-3 bg-white border border-[#E2E8F0] rounded-xl p-3.5 shadow-xs">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex-1 min-w-0 inline-flex items-center gap-2 text-sm font-bold text-[#0E3321] text-left"
              >
                <Menu className="w-4 h-4 text-[#FFAA17] shrink-0" />
                <span className="hidden sm:inline shrink-0">Category:</span>
                <span className="min-w-0 truncate text-slate-600 font-semibold">{activeCategoryObj?.name || "All"}</span>
              </button>
              <span className="shrink-0 whitespace-nowrap text-xs sm:text-sm text-slate-500 font-medium">
                {filteredItems.length} items
              </span>
            </div>

            {/* Intro Section */}
            <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#015435] tracking-wide block mb-2 select-none">
                  Resource Centre
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
                  Downloads &amp; <span className="text-[#FFAA17]">Resources</span>
                </h1>
                <div className="w-12 h-1 bg-[#FFAA17] rounded-full my-4" />
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                  Explore our brochures, product catalogues and technical resources to learn more about our milling solutions.
                </p>
              </div>

              <div className="text-sm sm:text-base text-slate-600 font-semibold whitespace-nowrap self-start sm:self-end pb-1">
                {String(filteredItems.length).padStart(2, "0")} resources
              </div>
            </section>

            {/* Search & Sort Row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-9">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documents..."
                  aria-label="Search documents"
                  className="w-full h-12 pl-12 pr-10 bg-white border border-[#E2E8F0] rounded-xl text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0E3321] focus:ring-3 focus:ring-[#0E3321]/10 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="h-12 flex items-center gap-2 px-3.5 bg-white border border-[#E2E8F0] rounded-xl self-start sm:self-auto">
                <ArrowUpDown className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "default" | "az")}
                  aria-label="Sort resources"
                  className="bg-transparent text-sm text-slate-600 font-semibold outline-none cursor-pointer hover:text-slate-900 transition-colors py-1"
                >
                  <option value="default">Sort: Default</option>
                  <option value="az">Sort: A to Z</option>
                </select>
              </div>
            </div>

            {/* Resource Sections */}
            <div className="space-y-12" aria-live="polite">
              {sections.map((section) => (
                <section key={section.title}>
                  <div className="flex items-center justify-between mb-4 sm:mb-5 pb-2.5 border-b-[1.5px] border-slate-100">
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#0E3321] tracking-tight">
                      {section.title}
                    </h2>
                    <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">
                      {section.items.length} {section.items.length === 1 ? "file" : "files"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-5">
                    {section.items.map((item) => {
                      const isCardHighlighted = highlightedId === item.id;
                      return (
                        <article
                          key={item.id}
                          id={`card-${item.id}`}
                          onClick={() => handleDownload(item)}
                          className={`bg-white border rounded-xl sm:rounded-[14px] p-2.5 sm:p-3.5 min-w-0 flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group ${
                            isCardHighlighted
                              ? "border-[#FFAA17] ring-4 ring-[#FFAA17]/30 shadow-lg scale-[1.02]"
                              : "border-[#E2E8F0] hover:border-[#0E3321]/20 hover:shadow-[0_16px_34px_rgba(9,39,26,0.11)]"
                          }`}
                        >
                          {/* Cover Thumbnail */}
                          <div className="w-full aspect-[481/281] rounded-lg sm:rounded-[10px] relative overflow-hidden mb-3 sm:mb-4 bg-[#F3F4F2]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>

                          {/* Card Content (full title & description, never truncated) */}
                          <h3 className="text-[13px] sm:text-[15px] font-bold text-[#0F172A] leading-snug mb-1.5 group-hover:text-[#0E5A36] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-[11px] sm:text-[13px] text-[#475569] leading-relaxed mb-3 sm:mb-4 font-normal">
                            {item.desc}
                          </p>

                          {/* Card Bottom: download button with file type and size shown below it */}
                          <div className="mt-auto pt-2.5 sm:pt-3 border-t border-[#E2E8F0] flex flex-col items-stretch gap-1.5">
                            <button
                              onClick={(e) => handleDownload(item, e)}
                              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0E5A36] hover:bg-[#176B43] text-white text-[11px] sm:text-xs font-bold px-3 py-2 rounded-lg shadow-[0_4px_10px_rgba(14,90,54,0.14)] hover:shadow-[0_8px_18px_rgba(14,51,33,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group/btn"
                              title={`Download ${item.title}`}
                            >
                              <Download className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-y-0.5" />
                              <span>Download</span>
                            </button>

                            <span className="text-[10px] sm:text-xs text-[#94A3B8] font-semibold text-center whitespace-nowrap">
                              {item.format} · {item.size}
                            </span>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <div className="py-16 px-6 text-center bg-white border border-dashed border-slate-300 rounded-xl text-slate-500 text-sm">
                  <p className="font-semibold text-slate-700 mb-1">No documents found</p>
                  <p className="text-xs text-slate-500">
                    Try another search keyword or switch to another category.
                  </p>
                  {(searchQuery || activeCategory !== "all") && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5A36] hover:underline"
                    >
                      Reset filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Floating Download Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E3321] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-emerald-500/30 flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-left">
            <p className="text-[11px] text-emerald-300 font-semibold uppercase tracking-wider">
              Downloading Brochure
            </p>
            <p className="text-xs font-bold text-white max-w-xs truncate">
              {toastMessage.title}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default function DownloadsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <DownloadsContent />
    </Suspense>
  );
}

"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  X, 
  Menu, 
  ArrowRight,
  ArrowUpDown,
  Workflow,
  Layers,
  Filter,
  Database,
  Cpu,
  ShoppingBag,
  Factory,
  BookOpen,
  LayoutGrid
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  catalogCategories, 
  productsData, 
  ProductItem, 
  CatalogCategory 
} from "./productsData";

function CategoryIcon({ id, className = "w-4 h-4 shrink-0" }: { id: string; className?: string }) {
  switch (id) {
    case "all":
      return <LayoutGrid className={className} />;
    case "flour-mills":
      return <Workflow className={className} />;
    case "emery-stones":
      return <Layers className={className} />;
    case "grain-processing":
      return <Filter className={className} />;
    case "flour-processing":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h5" />
          <circle cx="17" cy="17" r="2.5" />
        </svg>
      );
    case "grain-storage-handling":
      return <Database className={className} />;
    case "power-saving":
      return <Cpu className={className} />;
    case "vending-machines":
      return <ShoppingBag className={className} />;
    case "turnkey-projects":
      return <Factory className={className} />;
    case "books":
      return <BookOpen className={className} />;
    default:
      return <Workflow className={className} />;
  }
}

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"default" | "az">("default");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync category from URL param if present
  useEffect(() => {
    if (categoryParam) {
      const exists = catalogCategories.some((c) => c.id === categoryParam);
      if (exists) {
        setActiveCategory(categoryParam);
      }
    }
  }, [categoryParam]);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    let list = productsData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        (item.features && item.features.some(f => f.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "az") {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  // Active Category Name
  const activeCategoryObj = useMemo(() => {
    return catalogCategories.find((c) => c.id === activeCategory);
  }, [activeCategory]);

  const activeCategoryLabel = activeCategory === "all" ? "All Products" : activeCategoryObj?.name || "Products";

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: productsData.length,
    };
    catalogCategories.forEach((cat) => {
      if (cat.id !== "all") {
        counts[cat.id] = productsData.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-[#EAF0EB] selection:text-[#0E3321]">
      <Header />

      {/* Main 2-Column Layout */}
      <div className="w-full flex-1 border-t border-[#E2E8F0] relative px-6 sm:px-12 lg:px-16 xl:px-24 pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-20">
        <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)] gap-8 lg:gap-12 xl:gap-14">
          
          {/* ================= DESKTOP SIDEBAR ================= */}
          <aside className="hidden lg:flex flex-col justify-between bg-white border-r border-[#E2E8F0] pr-6 xl:pr-8 py-1 sticky top-[125px] h-[calc(100vh-150px)] overflow-hidden">
            <div className="flex flex-col min-h-0 flex-1">
              {/* Category Label */}
              <div className="px-3.5 mb-4 text-xs font-extrabold tracking-[0.14em] text-[#015435] select-none uppercase">
                Product Categories
              </div>

              {/* Side Nav */}
              <nav 
                className="flex-1 overflow-y-auto pr-1 space-y-1 overscroll-contain scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
                aria-label="Product categories"
              >
                {catalogCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count = categoryCounts[cat.id] ?? 0;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[10px] text-sm text-left transition-all duration-200 group cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[#EAF0EB] to-[#F3F4F2] text-[#0E3321] font-bold shadow-[inset_3px_0_0_#FFAA17]"
                          : "text-slate-600 hover:bg-[#F3F4F2] hover:text-[#0E3321] font-medium"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CategoryIcon 
                          id={cat.id} 
                          className={`w-[18px] h-[18px] transition-colors shrink-0 ${
                            isActive ? "text-[#0E3321]" : "text-slate-400 group-hover:text-[#0E3321]"
                          }`} 
                        />
                        <span className="leading-snug">{cat.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2 ${
                        isActive 
                          ? "bg-white text-[#0E3321] shadow-2xs" 
                          : "bg-slate-100 text-slate-500 group-hover:bg-white"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Need Custom Setup? Box */}
            <div className="pt-5 mt-4 border-t border-[#E2E8F0] px-3.5">
              <div className="text-xs font-extrabold tracking-[0.14em] text-[#015435] mb-2 uppercase">
                Need Custom Setup?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Looking for customized machinery specs or complete turnkey plant engineering?
              </p>
              <Link 
                href="/contact" 
                className="text-xs sm:text-sm font-bold text-[#0E3321] hover:text-[#FFAA17] inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Contact our engineers</span>
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
                    Product Categories
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1 flex-1">
                  {catalogCategories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    const count = categoryCounts[cat.id] ?? 0;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[10px] text-sm text-left transition-all ${
                          isActive
                            ? "bg-[#EAF0EB] text-[#0E3321] font-bold shadow-[inset_3px_0_0_#FFAA17]"
                            : "text-slate-600 hover:bg-[#F3F4F2] hover:text-[#0E3321]"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <CategoryIcon id={cat.id} className="w-4 h-4 text-slate-400" />
                          <span className="leading-snug">{cat.name}</span>
                        </div>
                        <span className="text-xs text-slate-400 font-semibold ml-2">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </nav>

                <div className="pt-5 mt-6 border-t border-[#E2E8F0]">
                  <div className="text-xs font-extrabold tracking-[0.14em] text-[#0E3321] mb-1.5 uppercase">
                    Need Custom Setup?
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    Looking for customized machinery specs or complete turnkey plant engineering?
                  </p>
                  <Link 
                    href="/contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs sm:text-sm font-bold text-[#0E3321] inline-flex items-center gap-1.5"
                  >
                    <span>Contact our engineers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ================= MAIN CONTENT ================= */}
          <main className="min-w-0 py-1">
            
            {/* Mobile Category Toggle Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between bg-white border border-[#E2E8F0] rounded-xl p-3.5 shadow-xs">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0E3321] cursor-pointer"
              >
                <Menu className="w-4 h-4 text-[#FFAA17]" />
                <span>Category:</span>
                <span className="text-slate-600 font-semibold">{activeCategoryLabel}</span>
              </button>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">
                {filteredProducts.length} items
              </span>
            </div>

            {/* Intro Section */}
            <section className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#015435] tracking-wide block mb-2 select-none uppercase">
                  Machinery &amp; Equipment
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0F172A] tracking-tight leading-tight">
                  Product &amp; <span className="text-[#FFAA17]">Equipment Catalog</span>
                </h1>
                <div className="w-12 h-1 bg-[#FFAA17] rounded-full my-4" />
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                  Explore our complete range of patented digital flour mills, precision emery stones, processing systems, and grain storage solutions.
                </p>
              </div>

              <div className="text-sm sm:text-base text-slate-600 font-semibold whitespace-nowrap self-start sm:self-end pb-1">
                {String(filteredProducts.length).padStart(2, "0")} products
              </div>
            </section>

            {/* Search Input Bar */}
            <div className="relative mb-7">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by model, technology, or application..."
                aria-label="Search products"
                className="w-full h-13 pl-12 pr-10 bg-white border border-[#E2E8F0] rounded-xl text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0E3321] focus:ring-3 focus:ring-[#0E3321]/10 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Section Heading & Sorting Row */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#0E3321] tracking-tight">
                {activeCategoryLabel}
              </h2>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "default" | "az")}
                  aria-label="Sort products"
                  className="bg-transparent text-sm text-slate-600 font-semibold outline-none cursor-pointer hover:text-slate-900 transition-colors py-1"
                >
                  <option value="default">Sort: Featured</option>
                  <option value="az">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid - 2 columns on mobile, 3 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8" aria-live="polite">
              {filteredProducts.map((product) => {
                return (
                  <Link
                    key={product.slug}
                    href={product.url}
                    className="group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300 text-left cursor-pointer"
                  >
                    {/* Image Area - Clean rounded background, no pill, matching product page */}
                    <div className="relative aspect-square sm:aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-3 sm:p-6">
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 pointer-events-none"></div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-1 sm:p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Content - Responsive sizing for 2-col mobile & 3-col desktop */}
                    <div className="p-3.5 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm sm:text-2xl font-heading font-extrabold text-slate-850 tracking-tight leading-snug group-hover:text-brand-primary transition-colors">
                          {product.title}
                        </h3>

                        <p className="text-xs sm:text-base text-slate-500 mt-1.5 sm:mt-3 line-clamp-2 leading-relaxed font-normal">
                          {product.shortDescription || product.overview || product.description}
                        </p>
                      </div>

                      {/* Card Bottom Link */}
                      <div className="mt-3 sm:mt-6 flex items-center justify-between text-brand-primary font-bold text-xs sm:text-base">
                        <span>View Product</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-16 px-6 text-center bg-white border border-dashed border-slate-300 rounded-xl text-slate-500 text-sm">
                  <p className="font-semibold text-slate-700 mb-1">No products found</p>
                  <p className="text-xs text-slate-500">
                    Try another search keyword or switch to another category.
                  </p>
                  {(searchQuery || activeCategory !== "all") && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0E5A36] hover:underline cursor-pointer"
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

      <Footer />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0E3321]"></div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}

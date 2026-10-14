"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Globe, 
  Settings, 
  Cpu, 
  Layers, 
  Activity, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  X,
  Phone,
  Mail,
  MapPin,
  Building,
  Clock,
  Workflow,
  Filter,
  Database,
  BookOpen,
  Wheat,
  Flame,
  Store,
  Warehouse,
  Handshake,
  Lightbulb,
  Coins,
  History,
  Star,
  User
} from "lucide-react";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import MillingSolutionsSection from "@/components/MillingSolutionsSection";
import { productsData, categoriesData } from "@/app/catalog/productsData";


interface GlowCardProps {
  children: React.ReactNode;
}

function GlowCard({ children }: GlowCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-brand-primary to-brand-secondary text-white border border-white/10 shadow-md shadow-black/[0.08] hover:shadow-lg hover:shadow-black/[0.12] transition-all duration-300">
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface ClientPartner {
  name: string;
  src: string;
}

const internationalClients: ClientPartner[] = [
  { name: "Square Bangladesh", src: "/images/clients/client-logo-indian/17.png" },
  { name: "Noor Ghazal", src: "/images/clients/client-logo-indian/11.png" },
  { name: "Al Ghurair Foods", src: "/images/clients/client-logo-indian/21.png" },
  { name: "IFFCO", src: "/images/clients/client-logo-indian/5.png" },
  { name: "Prima Sri Lanka", src: "/images/clients/client-logo-indian/1.png" },
  { name: "SR Foods Nepal", src: "/images/clients/client-logo-indian/10.png" },
  { name: "Carr's", src: "/images/clients/client-logo-indian/3.png" },
  { name: "Tesco", src: "/images/clients/client-logo-indian/2.png" },
  { name: "Azam", src: "/images/clients/client-logo-indian/4.png" },
  { name: "Bakhresa", src: "/images/clients/client-logo-indian/18.png" },
  { name: "Sam Mills", src: "/images/clients/client-logo-indian/16.png" },
  { name: "Baker's Dream", src: "/images/clients/client-logo-indian/7.png" },
  { name: "ZAMS Milling", src: "/images/clients/client-logo-indian/14.png" },
  { name: "Coralbell Global", src: "/images/clients/client-logo-indian/15.png" },
  { name: "QFM Qatar Flour Mills", src: "/images/clients/client-logo-indian/20.png" },
  { name: "CFL", src: "/images/clients/client-logo-indian/19.png" },
  { name: "il molino", src: "/images/clients/client-logo-indian/6.png" },
  { name: "Madhoor", src: "/images/clients/client-logo-indian/8.png" },
  { name: "Winnie's PureHealth", src: "/images/clients/client-logo-indian/9.png" },
  { name: "Noor Gold", src: "/images/clients/client-logo-indian/12.png" },
  { name: "Riverbank Foods", src: "/images/clients/client-logo-indian/13.png" },
];

const domesticClients: ClientPartner[] = [
  { name: "Rishta", src: "/images/clients/client-logo-international/7.png" },
  { name: "Purity & Trust", src: "/images/clients/client-logo-international/42.png" },
  { name: "Anupama Aahar", src: "/images/clients/client-logo-international/3.png" },
  { name: "Patanjali", src: "/images/clients/patanjali.jpg" },
  { name: "Tansukh", src: "/images/clients/client-logo-international/2.png" },
  { name: "Desigold", src: "/images/clients/client-logo-international/4.png" },
  { name: "BioLife", src: "/images/clients/client-logo-international/5.png" },
  { name: "Sangale Agro Foods", src: "/images/clients/client-logo-international/6.png" },
  { name: "Le Marche", src: "/images/clients/client-logo-international/1.png" },
  { name: "Pitamber", src: "/images/clients/client-logo-international/14.png" },
  { name: "Shabri Organics", src: "/images/clients/client-logo-international/15.png" },
  { name: "Grow Fresh", src: "/images/clients/client-logo-international/16.png" },
  { name: "Jeeni Millet Health Mix", src: "/images/clients/client-logo-international/19.png" },
  { name: "Karuna Agro Industries", src: "/images/clients/client-logo-international/20.png" },
  { name: "Srilalitha", src: "/images/clients/client-logo-international/22.png" },
  { name: "Naga", src: "/images/clients/client-logo-international/23.png" },
  { name: "Goyal Proteins", src: "/images/clients/client-logo-international/24.png" },
  { name: "Rajan Agro", src: "/images/clients/client-logo-international/25.png" },
  { name: "Kalyani's & Mundra", src: "/images/clients/client-logo-international/26.png" },
  { name: "Kitchen Xpress", src: "/images/clients/client-logo-international/27.png" },
  { name: "ITC Limited", src: "/images/clients/itc.jpg" },
  { name: "India Gate", src: "/images/clients/indiagate.jpg" },
  { name: "Shakti Bhog", src: "/images/clients/shaktibhog.jpg" },
  { name: "Pillsbury", src: "/images/clients/pillsbury.jpg" },
  { name: "Raj Bhog", src: "/images/clients/client-logo-international/8.png" },
  { name: "RSY", src: "/images/clients/client-logo-international/9.png" },
  { name: "Healthfull", src: "/images/clients/client-logo-international/10.png" },
  { name: "Samayshri Agro", src: "/images/clients/client-logo-international/12.png" },
  { name: "Annveda", src: "/images/clients/client-logo-international/18.png" },
  { name: "Ripuraj", src: "/images/clients/client-logo-international/21.png" },
  { name: "RR", src: "/images/clients/client-logo-international/28.png" },
  { name: "Vadera Industries", src: "/images/clients/client-logo-international/29.png" },
  { name: "Rathi Agro Products", src: "/images/clients/client-logo-international/30.png" },
  { name: "Sri Bhagyalakshmi", src: "/images/clients/client-logo-international/31.png" },
  { name: "Shri Sitaram", src: "/images/clients/client-logo-international/32.png" },
  { name: "King Porus Flour", src: "/images/clients/client-logo-international/33.png" },
  { name: "Seroo", src: "/images/clients/client-logo-international/34.png" },
  { name: "Bardana Traders", src: "/images/clients/client-logo-international/35.png" },
  { name: "Simran Agritech", src: "/images/clients/client-logo-international/36.png" },
  { name: "Samastipur", src: "/images/clients/client-logo-international/38.png" },
  { name: "TWF", src: "/images/clients/client-logo-international/39-twf.png" },
  { name: "Hi-Tech Organic Food", src: "/images/clients/client-logo-international/40.png" },
  { name: "Vedic Arotech", src: "/images/clients/client-logo-international/41.png" },
  { name: "PB", src: "/images/clients/client-logo-international/43.png" },
  { name: "SG Food Mart", src: "/images/clients/client-logo-international/44.png" },
  { name: "Hindustan Agro Products", src: "/images/clients/client-logo-international/45.png" },
  { name: "Godhum", src: "/images/clients/client-logo-international/47.png" },
  { name: "Uttarakhand Gramya Vikas Samiti", src: "/images/clients/client-logo-international/48.png" },
  { name: "Roxy", src: "/images/clients/client-logo-international/24(1).png" },
];

function ClientLogoCard({ client }: { client: ClientPartner }) {
  return (
    <div className="flex items-center justify-center h-[72px] sm:h-[84px] md:h-[96px] w-36 sm:w-44 md:w-52 px-3 sm:px-4 shrink-0 select-none transition-transform duration-300 hover:scale-105">
      <img
        src={encodeURI(client.src)}
        alt={client.name}
        className="max-h-[58px] sm:max-h-[70px] md:max-h-[82px] max-w-full w-auto object-contain mix-blend-multiply"
        loading="lazy"
      />
    </div>
  );
}


const infraSlides = [
  {
    image: "/images/about-unit-2.jpg",
    title: "Factory Unit",
    caption: "Factory & Office: State-of-the-art facility for building flour mills, turnkey projects, and pre-fabricated buildings."
  },
  {
    image: "/images/other_img_9479.webp",
    title: "Choyal Corporate Office",
    caption: "Corporate Office: Choyal Corporate Tower – central hub for Marketing, Sales, IT, Media, and Finance operations."
  },
  {
    image: "/images/atta_plant_150tpd.webp",
    title: "CHARGE Training School",
    caption: "CHARGE (Training School): Choyal Hub for Agribusiness Research, Growth and Entrepreneurship – supporting innovation and sustainable agribusiness."
  },
  {
    image: "/images/mill_close_up.png",
    title: "Workshop",
    caption: "Workshop: Advanced manufacturing floor equipped with high-precision engineering machinery."
  },
  {
    image: "/images/wondermill_internal.webp",
    title: "Pilot Plant",
    caption: "Pilot Plant: A fully digital 40 TPD whole wheat flour mill that showcases modern milling technology in action."
  }
];

const turnkeyRangeData = [
  {
    title: "Chakki Atta Plant",
    icon: "Wheat",
    image: "/images/plants/150_ton_per_day_atta_plant.webp",
    description: "High-yield commercial Chakki Atta installations engineered for premium quality whole-grain stone ground flour.",
    items: [
      "Whole Wheat Flour",
      "Barley & Amaranth Flour",
      "Millets Plant",
      "Multigrain Flours",
      "Pulse Flour (Besan)",
      "Rice Flour Milling",
      "Soya Flour Plant",
      "Daliya (Broken Wheat) Plant",
      "Cleaning, Sorting & Packing",
      "Blending, Storage & Handling"
    ]
  },
  {
    title: "Roller Flour Mill Plant",
    icon: "Settings",
    image: "/images/plants/40_tpd_milling.webp",
    description: "Highly automated, high-precision roller milling technology designed for high-capacity industrial flour processing.",
    items: [
      "Maida Plant",
      "Semolina (Suji) Plant",
      "Rawa Plant",
      "Biscuit Flour Plant",
      "Maize Flour & Maize Grit"
    ]
  },
  {
    title: "Spice Plant",
    icon: "Flame",
    image: "/images/plants/20230601_130138.webp",
    description: "Robust specialized machinery designed for cool-grinding, sorting, and packaging aromatic spices and herbs.",
    items: [
      "Red Chilly Milling",
      "Turmeric Grinding",
      "Coriander Processing",
      "Garam Masala Setup",
      "Spice & Herbal Grinding",
      "Spice Blending System",
      "Recipe Development",
      "Mix Spices Plant",
      "Instant Masala Plant"
    ]
  },
  {
    title: "Pulse / Dal Plant",
    icon: "Layers",
    image: "/images/plants/samayshri_agro_2.webp",
    description: "Optimized grading, de-husking, splitting, and polishing lines to minimize grain breakage and maximize yield.",
    items: [
      "Pulse Cleaning & Sorting",
      "Pulse Processing Plant",
      "Pulse Grinding Plant",
      "Storage and Handling",
      "Automation & Modernization"
    ]
  },
  {
    title: "Franchisee Stores",
    icon: "Store",
    image: "/images/plants/tablet_controlled_plant.webp",
    description: "Micro-milling setups and retail grind-on-demand store designs to support direct-to-consumer fresh flour businesses.",
    items: [
      "Fresh Ground Flour Grinding Machine",
      "Fresh Ground Spice Grinding Machine",
      "Grocery Retail Store Layout",
      "Food Products Merchandising",
      "Wholesale Product Distribution"
    ]
  },
  {
    title: "Pre-Engineering Buildings (PEB)",
    icon: "Warehouse",
    image: "/images/plants/20221110_131216.webp",
    description: "Quick-deploy, cost-effective structural steel framing for factories, warehousing, and milling facility sheds.",
    items: [
      "Industrial Sheds",
      "Storage Warehouses",
      "Flour Mills PEB Structures",
      "Porta Hut Systems"
    ]
  },
  {
    title: "Storage, Automation & Software",
    icon: "Cpu",
    image: "/images/plants/turnkey_solutions.webp",
    description: "Smart software-driven storage, flow balancing, blending silos, and comprehensive custom digital dashboards for mills.",
    items: [
      "Grain Silo & Blending Silo",
      "Conditioning & Refraction Silo",
      "Atta Silo & Bran Silo",
      "Weighing Systems & Flow Balancer",
      "Flour Mill Automation Systems",
      "Custom Flour Mill Software",
      "E-Commerce Website Setup",
      "POS Systems & Executive Dashboards"
    ]
  }
];

const renderTurnkeyIcon = (iconName: string) => {
  switch (iconName) {
    case "Wheat": return <Wheat className="h-5 w-5" />;
    case "Settings": return <Settings className="h-5 w-5" />;
    case "Flame": return <Flame className="h-5 w-5" />;
    case "Store": return <Store className="h-5 w-5" />;
    case "Warehouse": return <Warehouse className="h-5 w-5" />;
    case "Cpu": return <Cpu className="h-5 w-5" />;
    default: return <Layers className="h-5 w-5" />;
  }
};

const galleryMedia = [
  // Row 1
  { src: "/images/atta_plant.png", title: "Industrial Atta Plant Setup" },
  { src: "/images/plants/samayshri_agro_1.webp", title: "Samayshri Agro Processing Line" },
  { src: "/images/plants/srivari_1.webp", title: "Srivari Milling Factory" },
  { src: "/images/wondermill_internal.webp", title: "Wonder Mill Smart Internal Setup" },
  { src: "/images/plants/sg_foods_1.webp", title: "SG Foods Processing Plant" },
  { src: "/images/other_20221110_1.webp", title: "Choyal Milling Machine Installation" },
  { src: "/images/qatar.webp", title: "Al-Jazeera Flour Mills Doha Plant" },
  { src: "/images/plants/40_tpd_milling.webp", title: "40 TPD Fully Automated Flour Mill" },
  // Row 2
  { src: "/images/about-unit-2.jpg", title: "Choyal Corporate Headquarters & Factory Floor" },
  { src: "/images/plants/banka_and_banka_foods_18.webp", title: "Banka & Banka Foods Facility" },
  { src: "/images/plants/dsc_4263.webp", title: "Industrial Grinding Chakki Installation" },
  { src: "/images/atta_plant_150tpd.webp", title: "150 TPD Agribusiness Atta Plant" },
  { src: "/images/plants/samayshri_agro_2.webp", title: "Samayshri Agro Packaging Section" },
  { src: "/images/other_20221110_3.webp", title: "Choyal Heavy-Duty Fabricated Plant" },
  { src: "/images/zams_milling.webp", title: "Zams Milling Setup" },
  { src: "/images/stone_dresser_cutter.png", title: "Precision Emery Stone Dresser & Cutter" }
];

function WhyRSCGOrbital() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          // 780px is base canvas size. Keep a cushion so the rightmost card ("Quality") never touches edge
          const targetSize = Math.min(780, width - 12);
          setScale(Math.max(0.58, Math.min(1, targetSize / 780)));
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const scaledWidth = scale !== null ? Math.round(780 * scale) : undefined;
  const scaledHeight = scale !== null ? Math.round(710 * scale) : undefined;

  return (
    <div ref={containerRef} className="hidden md:flex items-center justify-center lg:justify-end w-full">
      <div 
        style={
          scaledWidth && scaledHeight 
            ? { width: `${scaledWidth}px`, height: `${scaledHeight}px` } 
            : undefined
        }
        className={`relative shrink-0 transition-all duration-150 ease-out ${
          scale === null ? "w-[520px] h-[475px] xl:w-[650px] xl:h-[590px] 2xl:w-[780px] 2xl:h-[710px]" : ""
        }`}
      >
        <div
          style={
            scale !== null
              ? { 
                  width: "780px", 
                  height: "780px", 
                  transform: `scale(${scale}) translateY(-15px)`, 
                  transformOrigin: "top left" 
                }
              : { width: "780px", height: "780px" }
          }
          className={`absolute top-0 left-0 ${
            scale === null ? "scale-[0.667] -translate-y-2.5 xl:scale-[0.833] 2xl:scale-100 origin-top-left" : ""
          }`}
        >
          {/* Concentric Golden Orbit Rings & Ambience */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full bg-amber-200/25 blur-3xl" />
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 780 780" fill="none">
              {/* Inner subtle concentric circle */}
              <circle cx="390" cy="390" r="130" stroke="#FDE68A" strokeWidth="1.5" strokeOpacity="0.7" />
              
              {/* Primary Golden Circular Orbit Path (passes smoothly behind card centers) */}
              <circle cx="390" cy="390" r="280" stroke="#E5A93C" strokeWidth="2.5" strokeOpacity="0.95" />
              
              {/* Outer subtle concentric circle */}
              <circle cx="390" cy="390" r="365" stroke="#FDE68A" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Central WHY RSCG Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-[#FFFDF8] via-[#FFF9ED] to-[#FEF3C7] border-2 border-amber-300 shadow-[0_8px_25px_rgba(245,158,11,0.18)] flex flex-col items-center justify-center text-center z-10">
            <span className="text-slate-900 font-extrabold text-xs xl:text-sm tracking-[0.22em]">
              Why RSCG
            </span>
          </div>

          {/* 5 Orbital Cards positioned in a mathematically regular circle */}
          {[
            {
              title: "Trust",
              desc: "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind.",
              icon: "/images/why-rscg-section/icons/trust.png",
              x: 390,
              y: 110
            },
            {
              title: "Quality",
              desc: "Quality and excellence define our product range. We provide solutions built to deliver dependable performance.",
              icon: "/images/why-rscg-section/icons/quality.png",
              x: 656,
              y: 304
            },
            {
              title: "Innovation",
              desc: "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales.",
              icon: "/images/why-rscg-section/icons/innovation.png",
              x: 555,
              y: 617
            },
            {
              title: "Economical solutions",
              desc: "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth.",
              icon: "/images/why-rscg-section/icons/economical-solutions.png",
              x: 225,
              y: 617
            },
            {
              title: "Experience",
              desc: "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project.",
              icon: "/images/why-rscg-section/icons/experience.png",
              x: 124,
              y: 304
            }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: "translate(-50%, -50%)"
              }}
              className="absolute w-[210px] z-20 group"
            >
              <div className="relative pt-5">
                {/* Circular Icon Badge centered directly on top border */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border-2 border-amber-300 flex items-center justify-center p-2 z-10 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>

                {/* Card Body seamlessly joined under the icon badge */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl pt-7 pb-4.5 px-4 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-amber-100/90 text-center flex flex-col items-center hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                  <h3 className="font-bold text-slate-900 text-[14.5px] tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[12px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const infraSliderRef = useRef<HTMLDivElement>(null);
  const [selectedInfra, setSelectedInfra] = useState<typeof infraSlides[0] | null>(null);
  const [activeTurnkeyTab, setActiveTurnkeyTab] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % galleryMedia.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + galleryMedia.length) % galleryMedia.length);
    }
  };

  const scrollInfraLeft = () => {
    if (infraSliderRef.current) {
      const cardWidth = infraSliderRef.current.firstElementChild?.clientWidth || 300;
      infraSliderRef.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" });
    }
  };

  const scrollInfraRight = () => {
    if (infraSliderRef.current) {
      const cardWidth = infraSliderRef.current.firstElementChild?.clientWidth || 300;
      infraSliderRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeExpertise, setActiveExpertise] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  const toggleExpertise = (index: number) => {
    setActiveExpertise(activeExpertise === index ? null : index);
  };

  const featuredSlugs = [
    "wonder-mill-with-wonder-miller",
    "iquadra-mill",
    "floura",
    "miller-lite"
  ];
  const featuredProducts = featuredSlugs.map(slug => 
    productsData.find(p => p.slug === slug)
  ).filter(Boolean);

  const rotatingPhrases = [
    "Turnkey Solutions",
    "Stone Milling",
    "Mill Digitalization"
  ];
  const [displayedHeroIndex, setDisplayedHeroIndex] = useState(0);
  const [heroAnimPhase, setHeroAnimPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroAnimPhase("out");
      setTimeout(() => {
        setDisplayedHeroIndex((prev) => (prev + 1) % rotatingPhrases.length);
        setHeroAnimPhase("in");
      }, 380);
    }, 3500);

    return () => clearInterval(interval);
  }, [rotatingPhrases.length]);





  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const stats = [
    { value: "60+", label: "Years of Engineering Legacy" },
    { value: "5,000+", label: "Installations Worldwide" },
    { value: "20+", label: "Countries Served" },
    { value: "45+", label: "Patents & Certifications" },
  ];

  const divisions = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Wonder Mill Smart IoT Mills",
      description: "Patented digital stone mills integrated with smart tablet-driven control systems, recipe-based milling, and up to 30% electricity savings.",
      linkText: "Explore Smart Mills",
      href: "/stone-dresser"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Emery Stone Dresser",
      description: "The world's first patented digital stone dressing system. Automatically profiles and dresses emery stones, reducing labor and downtime.",
      linkText: "Explore Stone Dresser",
      href: "/stone-dresser"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Turnkey Atta & Flour Plants",
      description: "Complete industrial milling plants from 20 TPD to 150+ TPD. Fully automated layouts from grain cleaning to packaging.",
      linkText: "Explore Turnkey Plants",
      href: "#"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Choyal Emery Grinding Stones",
      description: "Manufactured with premium abrasives and proprietary binder formulas. Engineered for low temperature grinding and durability.",
      linkText: "Explore Grinding Stones",
      href: "#"
    }
  ];

  const testimonials = [
    {
      author: "Mr. Altaf Inamdar",
      company: "Shahi Flour Mills, Gulbarga, Karnataka",
      quote: "Team Choyal has been very supportive since the initial idea of our project. They have been elemental in providing services like designing and commissioning till implementation. Your support for startups like us has provided us a helping hand constantly.",
      rating: 5
    },
    {
      author: "Mr. Kamaljeet Singh",
      company: "B&B Flour Mills, Ropar, Punjab",
      quote: "We are very satisfied with our project with Choyal. Choyal's consistent quality has helped us to gain momentum in the market. We are running our project for 5 years with just basic maintenance.",
      rating: 5
    },
    {
      author: "Samuel Ndwiga",
      role: "Technical Director",
      company: "Nairobi Agro-Processors, Kenya",
      quote: "RS Choyal delivered our 100 TPD Turnkey Wheat Mill plant on schedule. Their heavy engineering works are robust, and the local maintenance partners keep our downtime close to zero. The training they provided at Choyal School of Milling was invaluable.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (isTestimonialHovered) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isTestimonialHovered, testimonials.length]);

  const faqs = [
    {
      q: "What industrial solutions does RS Choyal Group provide?",
      a: "RS Choyal Group provides turnkey commercial flour mill setups, Wonder Mill smart IoT digital stone mills, automated Emery Stone Dressers, and premium emery grinding stones. Services include design, manufacturing, installation, and AMC."
    },
    {
      q: "How does the Wonder Mill save up to 30% electricity?",
      a: "The Wonder Mill uses optimized grinding, automated load balancing, and sensor-driven controls to regulate grinding pressure and reduce power wastage."
    },
    {
      q: "Does Choyal Group support international installations and shipping?",
      a: "Yes. Choyal supports installations across East/West Africa, GCC countries and South Asia, with export support, custom layout engineering, on-site commissioning, and warranty support."
    },
    {
      q: "Where are the manufacturing facilities located?",
      a: "The heavy engineering and grinding stone manufacturing facilities are located at Arjunpura – Khalsa, District Ajmer-305203, Rajasthan, India"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg text-[#1c2722] font-sans relative overflow-hidden">
      
      {/* Background Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none select-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none select-none"></div>
      <div className="absolute top-[40%] right-[30%] w-[30%] aspect-square bg-brand-tertiary/5 rounded-full blur-[100px] pointer-events-none select-none"></div>

      {/* Navigation Header */}
      <Header />

      {/* Keyframe styles for text fade-up animation */}
      <style jsx>{`
        @keyframes heroTextFadeUpIn {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroTextFadeUpOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-28px);
          }
        }
        .animate-hero-fade-in {
          animation: heroTextFadeUpIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-hero-fade-out {
          animation: heroTextFadeUpOut 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* --- Full Width Homepage Hero Section --- */}
      <main
        ref={heroRef}
        className="w-full relative z-10 min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] h-[90vh] max-h-[960px] flex flex-col justify-end overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 border-b border-[#1c2722]/5"
      >
        {/* Background Factory Aerial Drone Video with Instant Poster Fallback */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/contact/factory.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        >
          <source src="/hero/homepage/hero.mp4" type="video/mp4" />
        </video>

        {/* Balanced Gradient Overlays: Clear landscape & sky on top, smooth dark gradient at bottom for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 via-45% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 xl:px-24 mx-auto">
          <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-end justify-between">
            {/* Left Column: Heading with Rotating Text & Subtitle */}
            <div className="xl:col-span-7 space-y-4 sm:space-y-5 text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-md">
                <span className="block text-white">We bring precision to</span>
                <span className="block h-[1.28em] relative overflow-hidden mt-1 sm:mt-1.5">
                  <span
                    key={displayedHeroIndex}
                    className={`block text-[#f7b032] whitespace-nowrap ${
                      heroAnimPhase === "in"
                        ? "animate-hero-fade-in"
                        : "animate-hero-fade-out"
                    }`}
                  >
                    {rotatingPhrases[displayedHeroIndex]}
                  </span>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 leading-relaxed font-normal max-w-xl drop-shadow-sm pt-1">
                A legacy of engineering excellence, delivering advanced milling technology, turnkey solutions, and industrial systems across global markets.
              </p>
            </div>

            {/* Right Column: 3 Glassmorphism Stat Cards */}
            <div className="xl:col-span-5 flex xl:justify-end pb-1">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full sm:w-auto sm:max-w-[520px] xl:max-w-none">
                {[
                  { number: "60+", label: "Years of experience" },
                  { number: "275+", label: "Turnkey solutions delivered" },
                  { number: "6+", label: "Patented technology" },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl flex flex-col justify-center min-w-0 sm:min-w-[130px] xl:min-w-[145px] hover:bg-white/15 transition-all duration-300"
                  >
                    <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-[#f7b032] tracking-tight leading-none mb-1.5 sm:mb-2 drop-shadow-xs">
                      {card.number}
                    </span>
                    <span className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- End-to-End Milling Solutions & The Choyal Core Section --- */}
      <MillingSolutionsSection />

      {/* --- Our Expertise & Capabilities Section --- */}
      <section id="our-expertise" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Eyebrow & Subtitle */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Our expertise & capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-[#1c2722] leading-[1.12]">
              Solutions built around<br />
              <span className="text-amber-500">milling needs.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md pt-1">
              Complete end-to-end execution, consultancy, plant engineering, and strategic regulatory compliance tailored to your scale.
            </p>
          </div>

          {/* Right Column: Accordion Items with smooth grid-template-rows transition */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80 min-h-[460px] sm:min-h-[500px]">
            {[
              {
                id: "01",
                title: "Project planning & development",
                desc: "Complete project development, land appraisal, conceptual planning, DPR preparation, techno-economic studies, commissioning, and handover."
              },
              {
                id: "02",
                title: "Plant operations & engineering",
                desc: "Operational consultancy, production optimisation, bottleneck resolution, plant layouts, structural design, electrical and civil engineering, and load assessments."
              },
              {
                id: "03",
                title: "Automation & technology",
                desc: "SCADA, PLCs, smart telemetry, custom automation, modern machinery, energy-efficient drives, and IoT-based upgrades for existing plants."
              },
              {
                id: "04",
                title: "Training & compliance",
                desc: "Hands-on staff training, SOPs, safety practices, factory registrations, environmental permissions, and statutory compliance."
              },
              {
                id: "05",
                title: "Subsidies & policy advisory",
                desc: "Guidance on central and state incentives, capital subsidies, government schemes, grants, and applicable industrial policies."
              },
              {
                id: "06",
                title: "Quality & maintenance",
                desc: "Quality-control systems, preventive audits, ISO alignment, breakdown support, preventive servicing, and Annual Maintenance Contracts."
              }
            ].map((item, idx) => {
              const isOpen = activeExpertise === idx;
              return (
                <div key={idx} className="py-5 sm:py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleExpertise(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-sm sm:text-base font-extrabold text-amber-500 tracking-wider w-7 sm:w-9 shrink-0">
                        {item.id}
                      </span>
                      <h3 className={`text-sm sm:text-[15px] lg:text-base font-extrabold tracking-wide transition-colors ${
                        isOpen ? "text-[#1c2722]" : "text-[#1c2722] group-hover:text-[#015435]"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? "bg-amber-500 text-white shadow-sm" 
                        : "border border-slate-200/90 bg-white text-slate-500 group-hover:border-slate-300 group-hover:text-slate-700 shadow-2xs"
                    }`}>
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <div 
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-11 sm:pl-15 pr-4 pt-2.5 pb-1 text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- Industrial Solutions Section --- */}
      <section id="industrial-solutions" className="w-full px-4 sm:px-8 lg:px-6 xl:px-12 2xl:px-20 py-16 sm:py-20 lg:py-28 relative z-10 bg-[#FAF9F5] border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto space-y-12 sm:space-y-16">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Industrial solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              Comprehensive milling<br className="hidden sm:inline" /> & grain <span className="text-amber-500">solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Precision engineering for maximum flour yield, efficient energy use, and dependable industrial performance.
            </p>
          </div>

          {/* 10 Solutions 3-Column Grid (Horizontally swipable on mobile, grid on md+) */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 md:w-full overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 scroll-pl-4 sm:scroll-pl-8 md:scroll-pl-0 pb-4 md:pb-0">
            {[
              {
                id: "01",
                title: "Turnkey solutions",
                desc: "End-to-end milling solutions covering planning, engineering, machinery, installation, automation, and commissioning.",
                cta: "View Solutions",
                href: "/turnkey-projects",
                icon: "/images/industrial-solutions/turnkey-solutions.png"
              },
              {
                id: "02",
                title: "Flour mills",
                desc: "Complete flour milling systems designed for consistent quality, efficient production across different capacities.",
                cta: "View Flour Mills",
                href: "/flour-mills",
                icon: "/images/industrial-solutions/flour-mill.png"
              },
              {
                id: "03",
                title: "Emery stones & dressing",
                desc: "Precision-made emery stones and professional dressing solutions consistent grinding performance and long service life.",
                cta: "View Stones & Dressers",
                href: "/emery-stones",
                icon: "/images/industrial-solutions/emery-stones.png"
              },
              {
                id: "04",
                title: "Power saving",
                desc: "Energy-efficient solutions designed to reduce power consumption, and improve overall operating efficiency.",
                cta: "View Power Systems",
                href: "/power-saving",
                icon: "/images/industrial-solutions/power-save.png"
              },
              {
                id: "05",
                title: "Automation",
                desc: "Smart automation and control systems that connect machinery and plant operations for greater control and visibility.",
                cta: "View Automation",
                href: "/automation",
                icon: "/images/industrial-solutions/automation.png"
              },
              {
                id: "06",
                title: "Grain storage & handling systems",
                desc: "Integrated silos and handling systems for safe storage and smooth movement of grain throughout the plant.",
                cta: "View Silos & Handling",
                href: "/grain-storage-handling",
                icon: "/images/industrial-solutions/grain-storage.png"
              },
              {
                id: "07",
                title: "Grain processing",
                desc: "Complete grain-processing solutions covering cleaning, grading, conditioning, and preparation for efficient milling.",
                cta: "View Processing",
                href: "/grain-processing",
                icon: "/images/industrial-solutions/grain-process.png"
              },
              {
                id: "08",
                title: "Flour processing",
                desc: "Advanced grinding, sifting, separation, and refining solutions for consistent flour quality and controlled particle size.",
                cta: "View Grinding & Sifting",
                href: "/flour-processing",
                icon: "/images/industrial-solutions/flour-process.png"
              },
              {
                id: "09",
                title: "Vending machine",
                desc: "Efficient vending solutions that take freshly processed flour from production to convenient distribution and sale.",
                cta: "View Vending Machines",
                href: "/vending-machines",
                icon: "/images/industrial-solutions/vending-machine.png"
              },
              {
                id: "10",
                title: "Books",
                desc: "Practical knowledge and resources covering flour milling, grain processing and the craft behind the industry.",
                cta: "View Publications",
                href: "/books",
                icon: "/images/industrial-solutions/books.png"
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className={`w-[74vw] max-w-[290px] md:w-full md:max-w-none shrink-0 md:shrink snap-start md:snap-align-none bg-gradient-to-br from-white via-[#FCFBF8] to-[#F8F5EC] rounded-[22px] sm:rounded-[24px] p-4.5 sm:p-5 xl:p-6 border border-[#f7b032]/45 hover:border-[#f7b032] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(247,176,50,0.12)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group min-h-[195px] sm:min-h-[205px] xl:min-h-[220px] ${idx === 9 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex flex-row items-stretch justify-between gap-3 sm:gap-4 h-full">
                  {/* Left: Text Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[11px] sm:text-xs font-bold text-amber-500 tracking-wider block mb-1">
                        {card.id}
                      </span>
                      <h3 className="text-base sm:text-[17px] xl:text-lg font-bold text-slate-900 tracking-tight leading-snug mb-1.5 group-hover:text-[#015435] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-[12.5px] sm:text-[13px] xl:text-[13.5px] 2xl:text-[14px] leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-3 xl:pt-4 mt-auto">
                      <Link 
                        href={card.href}
                        className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] xl:text-sm font-semibold text-slate-900 group-hover:text-amber-600 transition-colors whitespace-nowrap"
                      >
                        <span>{card.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Icon Illustration with Gradient Wash Effect */}
                  <div className="w-[84px] sm:w-[96px] lg:w-[92px] xl:w-[110px] 2xl:w-[124px] h-[84px] sm:h-[96px] lg:h-[92px] xl:h-[110px] 2xl:h-[124px] shrink-0 relative flex items-center justify-end select-none pointer-events-none self-center">
                    <div 
                      className="relative w-full h-full transition-transform duration-500 group-hover:scale-105"
                      style={{
                        WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.38) 22%, #000 65%)',
                        maskImage: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.38) 22%, #000 65%)'
                      }}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        className="object-contain object-right"
                        sizes="(max-width: 640px) 84px, (max-width: 1024px) 96px, 124px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* --- Rooted in Tradition / Why RSC Section --- */}
      <section id="why-rsc" className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 sm:py-10 lg:py-12 relative z-10 bg-[#FAF8F5] border-t border-slate-200/50 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between">
          
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Our core values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[46px] 2xl:text-[54px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              Experience that endures.<br />
              <span className="text-amber-500">Innovation that evolves.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg pt-1">
              Built on decades of engineering knowledge and industry experience, RSCG combines deep-rooted milling expertise with modern technology to create dependable solutions. Every system is designed around practical performance, efficiency, and long-term value.
            </p>
          </div>

          {/* Right Column: Orbital Circular Diagram */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end select-none py-6 lg:py-0 min-w-0 w-full">
            
            {/* Desktop Orbital Diagram (visible lg and up) */}
            <WhyRSCGOrbital />

            {/* Mobile View (stacked cards; tablets use the orbital diagram) */}
            <div className="block md:hidden w-full space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFFDF8] via-[#FFF9ED] to-[#FEF3C7] border-2 border-amber-200 shadow-md flex flex-col items-center justify-center text-center">
                  <span className="text-slate-900 font-extrabold text-xs tracking-[0.2em]">
                    Why RSCG
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                {[
                  {
                    icon: "/images/why-rscg-section/icons/trust.png",
                    title: "Trust",
                    desc: "Trust is indispensable to Choyal. We believe in fair and transparent business, giving our clients peace of mind."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/quality.png",
                    title: "Quality",
                    desc: "Quality and excellence define our product range. We provide solutions built to deliver dependable performance."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/innovation.png",
                    title: "Innovation",
                    desc: "Driven by rigorous R&D, we develop advanced milling solutions for different budgets and industrial scales."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/economical-solutions.png",
                    title: "Economical solutions",
                    desc: "We provide cost-effective solutions designed to maximise operational efficiency and support profitable growth."
                  },
                  {
                    icon: "/images/why-rscg-section/icons/experience.png",
                    title: "Experience",
                    desc: "With 60+ years of experience, we bring deep milling expertise, proven technology, and skilled teams to every project."
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`relative bg-white rounded-2xl pt-7 pb-4 px-4 shadow-sm border border-amber-100/70 text-center flex flex-col items-center ${
                      idx === 4 ? "sm:col-span-2 sm:max-w-xs sm:mx-auto" : ""
                    }`}
                  >
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-md border border-amber-100 flex items-center justify-center p-2">
                      <Image src={item.icon} alt={item.title} width={24} height={24} className="object-contain" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-[15px] tracking-tight mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-[12.5px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* --- Turnkey Solutions Section --- */}
      <section id="turnkey-projects-showcase" className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-200/60 overflow-hidden">
        <div className="w-full mx-auto space-y-10 sm:space-y-12">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <span className="text-sm font-bold text-[#015435] tracking-wide block">
              Turnkey solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
              From vision to a mill<br className="hidden sm:inline" /> in <span className="text-amber-500">action.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
              Completed turnkey projects shaped from the ground up - from the first concept to a fully operational mill.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            
            {/* Left Tall Feature Card: Carr's Flour */}
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[300px] sm:min-h-[360px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-between p-6 sm:p-7 lg:p-8 bg-slate-900 border border-slate-100">
              <Image 
                src="/images/turnkey-section/carrs-flour-mill.png" 
                alt="Carr's Flour" 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 z-10 pointer-events-none" />

              {/* Top-Right Location Badge */}
              <div className="relative z-20 flex justify-end">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800">Meldon, UK</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 space-y-3 lg:space-y-4 pt-6 lg:pt-12">
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Carr's Flour
                </h3>
                <div>
                  <Link 
                    href="/projects/carrs-flour" 
                    className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-5 py-2.5 lg:px-6 lg:py-3 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs lg:text-sm uppercase tracking-wide cursor-pointer group/btn"
                  >
                    <span>EXPLORE PROJECT</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 2 Stacked Feature Cards */}
            <div className="flex flex-col gap-6 lg:gap-7 h-full">
              
              {/* Card 1: Al Ghurair Foods */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[300px] sm:min-h-[360px] lg:min-h-[275px] flex-1 flex flex-col justify-between p-6 sm:p-7 bg-slate-900 border border-slate-100">
                <Image 
                  src="/images/turnkey-section/al-ghurair.png" 
                  alt="Al Ghurair Foods" 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none" />

                {/* Top-Right Location Badge */}
                <div className="relative z-20 flex justify-end">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Dubai, UAE</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-3 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Al Ghurair Foods
                  </h3>
                  <div>
                    <Link 
                      href="/projects/al-ghurair-foods" 
                      className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-5 py-2.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wide cursor-pointer group/btn"
                    >
                      <span>EXPLORE PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Patanjali Foods */}
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden group shadow-lg min-h-[300px] sm:min-h-[360px] lg:min-h-[275px] flex-1 flex flex-col justify-between p-6 sm:p-7 bg-slate-900 border border-slate-100">
                <Image 
                  src="/images/turnkey-section/patanjali-foods.png" 
                  alt="Patanjali Foods" 
                  fill 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none" />

                {/* Top-Right Location Badge */}
                <div className="relative z-20 flex justify-end">
                  <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Haridwar, India</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-20 space-y-3 pt-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                    Patanjali Foods
                  </h3>
                  <div>
                    <Link 
                      href="/projects/patanjali-ayurveda" 
                      className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-5 py-2.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs uppercase tracking-wide cursor-pointer group/btn"
                    >
                      <span>EXPLORE PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Center CTA */}
          <div className="flex justify-center pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-8 py-3.5 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm uppercase tracking-wide cursor-pointer group/btn"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-[#F6F6F2] border-t border-slate-200/60 overflow-hidden">
        

        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-between relative">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-bold text-[#015435] tracking-wide block">
                Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
                What our clients are<br className="hidden sm:inline" /> saying
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              Experiences shared by our clients who trusted us with their industrial projects and milling solutions.
            </p>
          </div>

          {/* Right Column: 3D Stacked Carousel Deck */}
          <div 
            className="lg:col-span-7 relative w-full flex flex-col items-center justify-center lg:items-end select-none"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[660px] h-[440px] sm:h-[460px] flex items-center justify-center">
            {testimonials.map((t, idx) => {
              const diff = (idx - activeTestimonial + testimonials.length) % testimonials.length;
              
              let positionClasses = "";
              let clickHandler = () => {};

              if (diff === 0) {
                // Center active card
                positionClasses = "z-20 scale-100 opacity-100 translate-x-0 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.14)] border border-slate-100 pointer-events-auto";
              } else if (diff === 1) {
                // Next card (Right)
                positionClasses = "z-10 scale-[0.88] opacity-50 sm:opacity-60 translate-x-[42%] sm:translate-x-[50%] md:translate-x-[54%] shadow-md border border-slate-200/60 cursor-pointer hover:opacity-80 pointer-events-auto";
                clickHandler = () => setActiveTestimonial(idx);
              } else {
                // Prev card (Left)
                positionClasses = "z-10 scale-[0.88] opacity-50 sm:opacity-60 -translate-x-[42%] sm:-translate-x-[50%] md:-translate-x-[54%] shadow-md border border-slate-200/60 cursor-pointer hover:opacity-80 pointer-events-auto";
                clickHandler = () => setActiveTestimonial(idx);
              }

              return (
                <div
                  key={idx}
                  onClick={clickHandler}
                  className={`absolute top-1/2 -translate-y-1/2 w-[270px] sm:w-[310px] md:w-[340px] h-[370px] sm:h-[390px] p-6 sm:p-7 rounded-[24px] bg-white transition-all duration-500 ease-out flex flex-col justify-between ${positionClasses}`}
                >
                  {/* Top Avatar with Verified Green Badge */}
                  <div className="flex items-center">
                    <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200/60 flex items-center justify-center relative shrink-0">
                      <User className="w-5 h-5 text-slate-700" />
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#015435] border-2 border-white flex items-center justify-center">
                        <Check className="w-2 h-2 text-white stroke-[3]" />
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed font-normal my-auto py-2">
                    “{t.quote}”
                  </p>

                  {/* Star Rating & Author Info */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                        {t.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 line-clamp-1">
                        {t.role ? `${t.role}, ` : ""}{t.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            {/* Pagination Dots below the cards */}
            <div className="flex items-center justify-center gap-2 pt-3 w-full max-w-[580px] lg:max-w-[620px] xl:max-w-[660px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === i ? "w-7 bg-[#015435]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- Accordion FAQ Section --- */}
      <section className="w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-20 lg:py-28 relative z-10 bg-white border-t border-slate-100 overflow-hidden">
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center justify-between">
          
          {/* Left Column: Heading & Accordion Items */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-sm sm:text-base font-bold text-[#015435] tracking-wide block">
                Frequently asked questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-[#1c2722] leading-[1.15]">
                Building the future of milling:{" "}
                <span className="text-amber-500 block sm:inline">every query answered</span>
              </h2>
            </div>

            <div className="space-y-3.5 sm:space-y-4 pt-1">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-[22px] transition-[box-shadow,border-color] duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-7 flex justify-between items-center text-left focus:outline-none cursor-pointer gap-4 group"
                  >
                    <span className="text-[#1c2722] font-bold text-base sm:text-lg leading-snug group-hover:text-[#015435] transition-colors">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      activeFaq === idx 
                        ? "bg-amber-100 text-amber-700 rotate-180" 
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/80"
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>
                  
                  <div 
                    className={`faq-accordion-content overflow-hidden ${
                      activeFaq === idx ? "is-open" : ""
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-7 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/90">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase with Blob, Floating Images & Vector Accents */}
          <div className="lg:col-span-5 self-center my-auto relative flex items-center justify-center lg:justify-end min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] select-none py-6 lg:py-0">
            
            {/* Background Organic Amber Blob */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <div className="w-[340px] sm:w-[420px] lg:w-[460px] h-[340px] sm:h-[400px] bg-gradient-to-tr from-amber-300/40 via-amber-200/50 to-amber-100/30 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] filter blur-xl opacity-90 transform scale-105" />
              <svg
                viewBox="0 0 500 500"
                className="absolute w-[360px] sm:w-[440px] lg:w-[480px] h-[360px] sm:h-[420px] text-amber-200/40 fill-current"
              >
                <path d="M421.5,317.5Q386,385,317.5,422.5Q249,460,183.5,422.5Q118,385,86,317.5Q54,250,86,182.5Q118,115,183.5,78Q249,41,317.5,78Q386,115,421.5,182.5Q457,250,421.5,317.5Z" />
              </svg>
            </div>

            {/* Bottom-Left Vector Accent: Amber Dot Cluster Matrix */}
            <div className="absolute bottom-4 left-2 sm:left-6 lg:left-0 z-0 pointer-events-none">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400" viewBox="0 0 80 80" fill="currentColor">
                {Array.from({ length: 7 }).map((_, row) =>
                  Array.from({ length: 7 }).map((_, col) => {
                    const dx = col - 3;
                    const dy = row - 3;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist <= 3.2) {
                      return (
                        <circle
                          key={`dot-${row}-${col}`}
                          cx={col * 11 + 7}
                          cy={row * 11 + 7}
                          r={dist > 2.2 ? 1.6 : 2.2}
                          opacity={0.35 + (3.2 - dist) * 0.2}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>
            </div>

            {/* Image Collage Grid */}
            <div className="relative z-10 w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[500px] grid grid-cols-2 gap-3 sm:gap-4 items-stretch">
              
              {/* Left Column: 2 Stacked Cards */}
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* Card 1: Engineer with Tablet */}
                <div className="relative aspect-square rounded-2xl sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-white/80">
                  <Image
                    src="/images/faq/img3.png"
                    alt="Digital Plant Automation & Control"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, 250px"
                    priority
                  />
                </div>

                {/* Card 2: Emery Stone Machine */}
                <div className="relative aspect-square rounded-2xl sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-white/80">
                  <Image
                    src="/images/faq/img2.png"
                    alt="Emery Stone Dressing Precision Engineering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 180px, 250px"
                  />
                </div>
              </div>

              {/* Right Column: 1 Tall Card Spanning Both Rows */}
              <div className="relative h-full min-h-[220px] rounded-2xl sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-white/80">
                <Image
                  src="/images/faq/img1.png"
                  alt="Modern Milling Plant & Engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 260px"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- Logos and Media Gallery Section (Hidden for now) --- */}
      {/* 
      <section id="logos-gallery" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full mx-auto">
          
          <div className="relative w-full space-y-6 marquee-container mask-gradient">
            
            <div className="flex w-full overflow-hidden select-none gap-4">
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee">
                {galleryMedia.slice(0, 8).map((img, idx) => (
                  <div 
                    key={`row1-${idx}`}
                    onClick={() => openLightbox(idx)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee" aria-hidden="true">
                {galleryMedia.slice(0, 8).map((img, idx) => (
                  <div 
                    key={`row1-dup-${idx}`}
                    onClick={() => openLightbox(idx)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full overflow-hidden select-none gap-4">
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee-reverse">
                {galleryMedia.slice(8, 16).map((img, idx) => (
                  <div 
                    key={`row2-${idx}`}
                    onClick={() => openLightbox(idx + 8)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 min-w-full shrink-0 animate-marquee-reverse" aria-hidden="true">
                {galleryMedia.slice(8, 16).map((img, idx) => (
                  <div 
                    key={`row2-dup-${idx}`}
                    onClick={() => openLightbox(idx + 8)}
                    className="relative w-[280px] sm:w-[320px] h-[180px] sm:h-[210px] rounded-3xl overflow-hidden cursor-pointer group shadow-xs hover:shadow-md transition-all duration-300 shrink-0 bg-slate-50 border border-slate-200/40"
                  >
                    <Image 
                      src={img.src} 
                      alt={img.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <span className="text-white text-xs sm:text-sm font-bold tracking-tight">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
      */}
      {/* --- Prestigious Clients Section (Redesigned & Rearranged) --- */}
      <section className="w-full py-16 lg:py-24 bg-[#FBFBF9] border-t border-slate-200/50 overflow-hidden relative z-10">
        <div className="w-full space-y-12 lg:space-y-16">
          
          {/* Subsection 1: International Markets */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center px-6 sm:px-12 space-y-1.5">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#015435] block">
                International markets
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#133a25] tracking-tight">
                Global Clients
              </h2>
            </div>

            <div className="marquee-container">
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full">
                  {internationalClients.map((client, idx) => (
                    <ClientLogoCard key={`intl-1-${idx}`} client={client} />
                  ))}
                </div>
                <div className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full" aria-hidden="true">
                  {internationalClients.map((client, idx) => (
                    <ClientLogoCard key={`intl-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subsection 2: Domestic Markets */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center px-6 sm:px-12 space-y-1.5">
              <span className="text-xs sm:text-sm font-black tracking-widest text-[#015435] block">
                Domestic markets
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#133a25] tracking-tight">
                National &amp; regional Clients
              </h2>
            </div>

            <div className="marquee-container">
              <div className="flex overflow-hidden w-full select-none gap-5 sm:gap-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#FBFBF9] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#FBFBF9] to-transparent z-20 pointer-events-none" />

                <div 
                  className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full"
                  style={{ animationDuration: `${((55 * domesticClients.length) / internationalClients.length).toFixed(1)}s` }}
                >
                  {domesticClients.map((client, idx) => (
                    <ClientLogoCard key={`dom-1-${idx}`} client={client} />
                  ))}
                </div>
                <div 
                  className="flex shrink-0 animate-marquee items-center gap-5 sm:gap-6 min-w-full"
                  style={{ animationDuration: `${((55 * domesticClients.length) / internationalClients.length).toFixed(1)}s` }}
                  aria-hidden="true"
                >
                  {domesticClients.map((client, idx) => (
                    <ClientLogoCard key={`dom-2-${idx}`} client={client} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Pre-Footer CTA Section --- */}
      <section className="w-full py-10 sm:py-14 px-6 sm:px-12 lg:px-16 xl:px-24 bg-[#f6f6f4] relative z-10">
        <div className="w-full mx-auto">
          <div className="w-full bg-gradient-to-r from-[#17462c] to-[#297a49] rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 border border-white/10 relative overflow-hidden">
            {/* Background Texture matching Wonder Mill */}
            <div className="absolute inset-0 opacity-20 bg-[url('/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            {/* Left Content */}
            <div className="max-w-3xl space-y-2.5 relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-tight tracking-tight">
                Come and see how the thinking becomes a plant.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed max-w-2xl">
                Visit the factory, workshop, Experience Centre and training facility in Ajmer or bring us the next milling problem worth solving.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b032] hover:bg-yellow-500 text-slate-900 font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_4px_14px_rgba(247,176,50,0.4)] hover:shadow-[0_6px_20px_rgba(247,176,50,0.6)] hover:-translate-y-0.5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap"
              >
                <span>Discuss Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer Component --- */}
      <Footer />



      {/* Lightbox Modal for Infrastructure Slider */}
      {selectedInfra && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedInfra(null)}
        >
          <button 
            onClick={() => setSelectedInfra(null)}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center gap-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image 
                src={selectedInfra.image} 
                alt={selectedInfra.title} 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="text-center max-w-2xl px-6 text-white">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                {selectedInfra.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedInfra.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Double Row Gallery */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md transition-opacity duration-300 animate-fade-in cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevLightboxImage(); }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10 select-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl flex flex-col items-center gap-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image 
                src={galleryMedia[lightboxIdx].src} 
                alt={galleryMedia[lightboxIdx].title} 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="text-center max-w-2xl px-6 text-white mb-4">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                {galleryMedia[lightboxIdx].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Image {lightboxIdx + 1} of {galleryMedia.length}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextLightboxImage(); }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer border border-white/10 select-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}


    </div>
  );
}

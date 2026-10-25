import { ShieldCheck, Settings2, Replace, LayoutTemplate, Zap, Box, Maximize, TrendingUp, Anchor, CheckCircle2, Factory, Shield, Heart, Droplets, Fan, Cog, Hammer, RotateCw } from "lucide-react";

export interface StatInfo {
  label: string;
  value: string;
}

export interface FeatureInfo {
  title: string;
  description?: string;
  icon: any;
}

export interface GrainModel {
  name: string;
  specs: SpecInfo[];
}

export interface SpecInfo {
  parameter: string;
  specification: string;
  col3?: string;
}

export interface AppInfo {
  label: string;
  icon: any;
}

export interface GrainProcessingProduct {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: StatInfo[];
  keyFeatures: FeatureInfo[];
  specs?: SpecInfo[];
  models?: GrainModel[];
  applications: AppInfo[];
}

export const grainProcessingData: GrainProcessingProduct[] = [
  {
    slug: "magnetic-separator",
    title: "Magnetic Separator",
    subtitle: "High-intensity magnetic separation for grain processing",
    description: "The Permanent Drum-Type Magnetic Separator is designed to remove tramp iron and ferrous contamination from free-flowing bulk materials such as grain, flour, food products, and other processed materials.\n\nIt helps improve end-product purity, recover valuable metal contaminants, and protect downstream machinery from damage. A vibratory hopper regulates material feeding for consistent flow, while the geared drive supports reliable continuous operation.",
    image: "/images/grain-processing/magnetic-separator.png",
    keyFeatures: [
      { title: "High-intensity permanent magnetic drum", icon: "Zap" },
      { title: "Magnetic strength up to 10,000 gauss", icon: "Settings2" },
      { title: "Removes tramp iron and ferrous contamination", icon: "ShieldCheck" },
      { title: "Improves product purity", icon: "CheckCircle2" },
      { title: "Protects downstream machinery", icon: "Shield" },
      { title: "Vibratory hopper for controlled feeding", icon: "TrendingUp" },
      { title: "Suitable for continuous bulk processing", icon: "RotateCw" }
    ],
    specs: [
      { parameter: "Magnetic Roll Size", specification: "100 mm × 1000 mm" },
      { parameter: "Magnetic Strength", specification: "Up to 10,000 Gauss" },
      { parameter: "Drive Motor", specification: "1 HP Geared Motor" },
      { parameter: "Feeding System", specification: "Vibratory Hopper" },
      { parameter: "Separator Type", specification: "Permanent Drum-Type" }
    ],
    applications: [
      { label: "Grain cleaning plants", icon: "Factory" },
      { label: "Flour mills", icon: "Factory" },
      { label: "Food-processing plants", icon: "Heart" },
      { label: "Seed-processing lines", icon: "LayoutTemplate" },
      { label: "Bulk-material handling systems", icon: "Box" },
      { label: "Protection of downstream equipment", icon: "Shield" }
    ]
  },
  {
    slug: "intensive-dampener",
    title: "Intensive Dampener",
    subtitle: "Precision grain conditioning system",
    description: "The Intensive Dampener is engineered for precise and uniform grain conditioning before milling. It ensures consistent water distribution across the grain, helping achieve the required moisture level for improved milling performance and product quality.\n\nThe machine supports water addition of up to 8% and features a self-emptying design that reduces residual material, cleaning requirements, and routine maintenance. A high-performance electric motor ensures reliable and continuous operation.",
    image: "/images/grain-processing/intensive-dampener.png",
    keyFeatures: [
      { title: "Precise and uniform grain dampening", icon: "Droplets" },
      { title: "Consistent water distribution", icon: "Droplets" },
      { title: "Supports moisture addition of up to 8%", icon: "Zap" },
      { title: "Improves grain conditioning and milling efficiency", icon: "TrendingUp" },
      { title: "Self-emptying design", icon: "Replace" },
      { title: "Reduced sanitation and maintenance requirements", icon: "Settings2" },
      { title: "Suitable for continuous processing", icon: "RotateCw" },
      { title: "High-performance rotor (960 RPM)", icon: "RotateCw" },
      { title: "Powered by a high-performance electric motor", icon: "Zap" }
    ],
    models: [
      {
        name: "SVID-SS-2400",
        specs: [
          { parameter: "Capacity", specification: "6–8 TPH" },
          { parameter: "Power", specification: "12.5 HP" },
          { parameter: "Speed", specification: "960 RPM" },
          { parameter: "Drive", specification: "Electric Motor" }
        ]
      },
      {
        name: "SVID-SS-1800",
        specs: [
          { parameter: "Capacity", specification: "4–6 TPH" },
          { parameter: "Power", specification: "10 HP" },
          { parameter: "Speed", specification: "960 RPM" },
          { parameter: "Drive", specification: "Electric Motor" }
        ]
      }
    ],
    applications: [
      { label: "Wheat-conditioning sections", icon: "Factory" },
      { label: "Flour-milling plants", icon: "Factory" },
      { label: "Grain-processing lines", icon: "Settings2" },
      { label: "Pre-milling moisture adjustment", icon: "Droplets" },
      { label: "Automated conditioning systems", icon: "Cog" }
    ]
  },
  {
    slug: "horizontal-scourer",
    title: "Horizontal Scourer",
    subtitle: "High-efficiency grain surface cleaning",
    description: "The Horizontal Scourer is designed to remove adhering dust, husk, and surface impurities from grain before further processing.\n\nIts gentle yet effective scouring action helps reduce bacterial contamination, remove insect fragments, and improve grain hygiene without damaging grain quality. Powered by an electric motor, the machine is built for reliable and continuous operation in commercial grain-processing and flour-milling plants.",
    image: "/images/grain-processing/horizontal-scourer.png",
    keyFeatures: [
      { title: "Removes adhering dust and husk", icon: "Fan" },
      { title: "Improves grain surface cleanliness", icon: "Replace" },
      { title: "Helps reduce bacterial contamination", icon: "ShieldCheck" },
      { title: "Removes insect fragments through gentle scouring", icon: "Shield" },
      { title: "Preserves grain quality", icon: "CheckCircle2" },
      { title: "Supports consistent downstream processing", icon: "TrendingUp" },
      { title: "Suitable for continuous commercial operation", icon: "RotateCw" },
      { title: "Powered by a high-performance electric motor", icon: "Zap" }
    ],
    models: [
      {
        name: "S-1800",
        specs: [
          { parameter: "Capacity", specification: "4–5 TPH" },
          { parameter: "Power", specification: "10–15 kW" },
          { parameter: "Drive", specification: "Electric Motor" }
        ]
      },
      {
        name: "S-2400",
        specs: [
          { parameter: "Capacity", specification: "6–8 TPH" },
          { parameter: "Power", specification: "15–20 kW" },
          { parameter: "Drive", specification: "Electric Motor" }
        ]
      }
    ],
    applications: [
      { label: "Wheat-cleaning sections", icon: "Factory" },
      { label: "Flour-milling plants", icon: "Factory" },
      { label: "Grain-processing line", icon: "TrendingUp" },
      { label: "Pre-conditioning grain cleaning", icon: "Heart" },
      { label: "Commercial grain hygiene systems", icon: "Shield" }
    ]
  },
  {
    slug: "bran-finisher",
    title: "Bran Finisher",
    subtitle: "Efficient flour recovery from bran",
    description: "The Bran Finisher is designed to recover flour particles still adhering to bran after milling. By separating this residual flour from the bran, it helps increase overall flour yield, reduce product loss, and improve milling efficiency.\n\nSuitable for common wheat, durum wheat, and rye mills, the machine delivers cleaner bran while supporting reliable and continuous plant operation.",
    image: "/images/grain-processing/bran-finisher.png",
    keyFeatures: [
      { title: "Recovers adhering flour from bran", icon: "TrendingUp" },
      { title: "Increases flour yield", icon: "CheckCircle2" },
      { title: "Reduces product loss", icon: "ShieldCheck" },
      { title: "Delivers cleaner bran", icon: "Replace" },
      { title: "Suitable for wheat and rye", icon: "Box" }
    ],
    applications: [
      { label: "Common wheat mills", icon: "Factory" },
      { label: "Durum wheat mills", icon: "Factory" },
      { label: "Rye mills", icon: "Factory" }
    ]
  },
  {
    slug: "emery-polisher",
    title: "Emery Polisher",
    subtitle: "Precision de-hulling and grain polishing",
    description: "The Emery Polisher is designed for efficient de-hulling and surface polishing of wheat and other grains. It is especially suitable for whole wheat atta plants, where controlled polishing helps improve grain cleanliness, finish, and overall product quality.\n\nThe polishing intensity can be adjusted externally through a slide-control mechanism, allowing operators to fine-tune the processing effect according to the grain type and required output.",
    image: "/images/grain-processing/emery-polisher.png",
    keyFeatures: [
      { title: "Efficient de-hulling of wheat and other grains", icon: "RotateCw" },
      { title: "Ideal for whole wheat atta milling plants", icon: "Factory" },
      { title: "Adjustable polishing intensity", icon: "Settings2" },
      { title: "External slide-control mechanism", icon: "Settings2" },
      { title: "Uniform grain finishing", icon: "CheckCircle2" },
      { title: "Improved grain cleanliness and product quality", icon: "CheckCircle2" },
      { title: "Durable construction for commercial operation", icon: "Hammer" },
      { title: "Designed for continuous and consistent performance", icon: "TrendingUp" }
    ],
    models: [
      {
        name: "Model 12\" × 30\" - High Capacity",
        specs: [
          { parameter: "Capacity", specification: "2–2.5 TPH" },
          { parameter: "Main Motor Power", "specification": "20 HP" },
          { parameter: "Auxiliary Motor Power", "specification": "3 HP" },
          { parameter: "Machine Size", "specification": "12\" × 30\"" }
        ]
      },
      {
        name: "Model 12\" × 30\" - Standard Capacity",
        specs: [
          { parameter: "Capacity", specification: "1.5–2 TPH" },
          { parameter: "Main Motor Power", "specification": "15 HP" },
          { parameter: "Auxiliary Motor Power", "specification": "3 HP" },
          { parameter: "Machine Size", "specification": "12\" × 30\"" }
        ]
      }
    ],
    applications: [
      { label: "Whole wheat atta plants", icon: "Factory" },
      { label: "Wheat-cleaning and preparation sections", icon: "Settings2" },
      { label: "Grain de-hulling systems", icon: "Replace" },
      { label: "Grain polishing lines", icon: "RotateCw" },
      { label: "Commercial flour-milling plants", icon: "Factory" }
    ]
  },
  {
    slug: "emery-roll",
    title: "Emery Roll",
    subtitle: "High-performance de-hulling",
    description: "The Emery Roll is a high-performance de-hulling machine designed for efficient removal of bran and outer husk from wheat and other grains. It ensures uniform processing, improves flour quality, and enhances milling efficiency. The machine is widely used in whole wheat atta plants and dal processing units for consistent and reliable grain conditioning.",
    image: "/images/grain-processing/emery-roll.png",
    keyFeatures: [
      { title: "Efficient de-hulling of wheat and other grains", icon: "Hammer" },
      { title: "Adjustable processing effect through external slide control", icon: "Settings2" },
      { title: "Heavy-duty and durable construction", icon: "Shield" },
      { title: "High-capacity operation with consistent performance", icon: "TrendingUp" },
      { title: "Suitable for continuous industrial applications", icon: "RotateCw" }
    ],
    models: [
      {
        name: "SVCS-1",
        specs: [
          { parameter: "Length", specification: "1730 MM" },
          { parameter: "Width", specification: "650 MM" },
          { parameter: "Height", specification: "1100 MM" },
          { parameter: "Capacity", specification: "2-3 Ton/hr" },
          { parameter: "Power", specification: "10 kW" },
          { parameter: "Air Qty", specification: "25-30 m³/min" },
          { parameter: "Size", specification: "14\" × 33\"" }
        ]
      },
      {
        name: "SVER-1",
        specs: [
          { parameter: "Length", specification: "2100 MM" },
          { parameter: "Width", specification: "750 mm" },
          { parameter: "Height", specification: "1200 MM" },
          { parameter: "Capacity", specification: "5-6 Ton/hr" },
          { parameter: "Power", specification: "15-20 kW" },
          { parameter: "Air Qty", specification: "35-40 m³/min" },
          { parameter: "Size", specification: "16\" × 33\"" }
        ]
      }
    ],
    applications: [
      { label: "Wheat de-hulling", icon: "Replace" },
      { label: "Whole wheat atta plants", icon: "Factory" },
      { label: "Dal processing plants", icon: "Factory" },
      { label: "Grain cleaning & conditioning", icon: "Droplets" },
      { label: "Flour milling industries", icon: "Factory" }
    ]
  },
  {
    slug: "drum-sieve",
    title: "Drum Sieve",
    subtitle: "Continuous sifting and separation",
    description: "A rotating drum with screens for large-scale, continuous sifting and separation of materials.\n\nDesigned for durable, heavy-duty processing in mills, this sieve separates large impurities like straw, wood, and stones from the grain stream effectively.",
    image: "/images/grain-processing/drum-sieve.png",
    keyFeatures: [
      { title: "Continuous sifting and separation", icon: "RotateCw" },
      { title: "Removes large impurities", icon: "ShieldCheck" },
      { title: "Heavy-duty processing", icon: "Hammer" },
      { title: "Interchangeable screens", icon: "Settings2" }
    ],
    specs: [
      { parameter: "Diameter", specification: "700 mm", col3: "900 mm" },
      { parameter: "Capacity", specification: "6–8 TPH", col3: "10–12 TPH" }
    ],
    applications: [
      { label: "Flour mills", icon: "Factory" },
      { label: "Grain reception", icon: "Box" },
      { label: "Bulk storage pre-cleaning", icon: "Shield" }
    ]
  }
];

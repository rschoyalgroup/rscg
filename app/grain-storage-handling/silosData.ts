import { ShieldCheck, Settings2, Replace, LayoutTemplate, Box, Maximize, TrendingUp, Anchor, CheckCircle2 } from "lucide-react";

export interface SiloFeature {
  title: string;
  description: string;
  icon: any;
}

export interface SiloCapacity {
  model: string;
  capacity: string;
  material: string;
  bestFor?: string;
}

export interface CapacitySection {
  title: string;
  items: SiloCapacity[];
}

export interface SiloProduct {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  keyFeatures: SiloFeature[];
  capacitySections: CapacitySection[];
}

export const silosData: SiloProduct[] = [
  {
    slug: "bran-refraction-silo",
    category: "Storage & discharge systems",
    title: "Bran / Refraction Silo",
    subtitle: "Mild-steel storage silo",
    description: "A durable mild-steel silo designed for the storage and controlled discharge of bran and refraction material in flour milling plants.\n\nBuilt for long service life, the silo supports intelligent level monitoring, efficient material flow, and low-residue discharge. Its modular construction allows customization across different capacities, plant layouts, and future expansion requirements.",
    image: "/images/silos/bran-silo.png",
    keyFeatures: [
      { title: "Durable construction", description: "Heavy-duty mild-steel construction provides reliable performance and long operational life in demanding milling environments.", icon: "ShieldCheck" },
      { title: "Intelligent monitoring", description: "Compatible with level sensors and monitoring systems to reduce manual checking, labour dependency, and the risk of overflow or material shortage.", icon: "Settings2" },
      { title: "Efficient discharge", description: "Designed for smooth material flow and low residual buildup, supporting cleaner operation and more consistent downstream feeding.", icon: "Replace" },
      { title: "Modular & expandable", description: "Available in multiple capacities with customizable modules to suit different plant layouts, storage requirements, and future expansion plans.", icon: "LayoutTemplate" }
    ],
    capacitySections: [
      {
        title: "Available capacities",
        items: [
          { model: "MS-1", capacity: "1 Ton", material: "Mild Steel" },
          { model: "MS-2", capacity: "2 Ton", material: "Mild Steel" },
          { model: "MS-5", capacity: "5 Ton", material: "Mild Steel" },
          { model: "MS-10", capacity: "10 Ton", material: "Mild Steel" },
          { model: "MS-15", capacity: "15 Ton", material: "Mild Steel" }
        ]
      }
    ]
  },
  {
    slug: "atta-flour-silo",
    category: "Storage & discharge systems",
    title: "Atta Flour Silo",
    subtitle: "Mild-steel & stainless-steel flour storage silo",
    description: "A high-capacity storage silo designed for hygienic holding, controlled discharge, and reliable handling of finished atta flour in commercial milling plants.\n\nAvailable in both mild-steel and stainless-steel configurations, the silo can be customized to suit different plant capacities, material-handling systems, hygiene requirements, and future expansion plans.",
    image: "/images/silos/atta-silo.png",
    keyFeatures: [
      { title: "Reliable flour storage", description: "Designed to safely store finished atta while supporting consistent quality and uninterrupted downstream operations.", icon: "Box" },
      { title: "Mild-steel & stainless-steel options", description: "Choose mild steel for durable and cost-effective bulk storage or stainless steel for enhanced hygiene, corrosion resistance, and food-contact applications.", icon: "LayoutTemplate" },
      { title: "Controlled discharge", description: "The discharge design supports smooth flour flow, reduced material buildup, and consistent feeding to packing or further processing systems.", icon: "Replace" },
      { title: "Intelligent monitoring", description: "Compatible with level sensors, load cells, alarms, and plant-monitoring systems for better stock visibility and reduced manual intervention.", icon: "Settings2" },
      { title: "Modular & customizable", description: "Available in multiple capacities with configurable dimensions, discharge systems, support structures, and automation options.", icon: "Maximize" },
      { title: "Easy plant integration", description: "Can be integrated with flour conveying, blending, packing, weighing, and centralized plant-automation systems.", icon: "TrendingUp" }
    ],
    capacitySections: [
      {
        title: "Available mild-steel models",
        items: [
          { model: "MS-5", capacity: "5 Ton", material: "Mild Steel" },
          { model: "MS-10", capacity: "10 Ton", material: "Mild Steel" },
          { model: "MS-15", capacity: "15 Ton", material: "Mild Steel" },
          { model: "MS-20", capacity: "20 Ton", material: "Mild Steel" },
          { model: "MS-25", capacity: "25 Ton", material: "Mild Steel" },
          { model: "MS-30", capacity: "30 Ton", material: "Mild Steel" },
          { model: "MS-40", capacity: "40 Ton", material: "Mild Steel" },
          { model: "MS-50", capacity: "50 Ton", material: "Mild Steel" }
        ]
      },
      {
        title: "Available stainless-steel models",
        items: [
          { model: "SS-5", capacity: "5 Ton", material: "Stainless Steel" },
          { model: "SS-10", capacity: "10 Ton", material: "Stainless Steel" },
          { model: "SS-15", capacity: "15 Ton", material: "Stainless Steel" },
          { model: "SS-20", capacity: "20 Ton", material: "Stainless Steel" },
          { model: "SS-25", capacity: "25 Ton", material: "Stainless Steel" },
          { model: "SS-30", capacity: "30 Ton", material: "Stainless Steel" },
          { model: "SS-40", capacity: "40 Ton", material: "Stainless Steel" },
          { model: "SS-50", capacity: "50 Ton", material: "Stainless Steel" }
        ]
      }
    ]
  },
  {
    slug: "conditioning-silo",
    category: "Storage & discharge systems",
    title: "Conditioning Silo",
    subtitle: "Controlled moisture distribution",
    description: "A purpose-built silo designed for holding conditioned grain for a controlled resting period before milling. It supports uniform moisture absorption across the grain kernel, helping improve grinding performance, flour quality, and process consistency.\n\nAvailable in mild-steel and stainless-steel configurations, the silo can be customized for different plant capacities, conditioning times, material-handling systems, and hygiene requirements.",
    image: "/images/silos/conditioning-silo.png",
    keyFeatures: [
      { title: "Uniform moisture distribution", description: "Provides controlled holding time after water addition, allowing moisture to penetrate the grain more evenly before milling.", icon: "CheckCircle2" },
      { title: "Improved milling performance", description: "Proper conditioning helps soften the bran layer, improve separation, support smoother grinding, and reduce unnecessary process stress.", icon: "TrendingUp" },
      { title: "Controlled material flow", description: "Designed for reliable filling, storage, and discharge to maintain continuous feeding to the next processing stage.", icon: "Replace" },
      { title: "Intelligent monitoring", description: "Compatible with level sensors, load cells, temperature monitoring, alarms, and centralized plant-automation systems.", icon: "Settings2" },
      { title: "Multiple material options", description: "Available in mild steel for durable, cost-effective storage and stainless steel for enhanced hygiene and corrosion resistance.", icon: "LayoutTemplate" },
      { title: "Custom-built for each plant", description: "Capacity, dimensions, number of compartments, outlet configuration, support structure, and automation can be adapted to the plant layout and conditioning process.", icon: "Maximize" }
    ],
    capacitySections: [
      {
        title: "Available capacities in mild-steel models",
        items: [
          { model: "MS-5", capacity: "5 Ton", material: "Mild Steel" },
          { model: "MS-10", capacity: "10 Ton", material: "Mild Steel" },
          { model: "MS-15", capacity: "15 Ton", material: "Mild Steel" },
          { model: "MS-20", capacity: "20 Ton", material: "Mild Steel" },
          { model: "MS-25", capacity: "25 Ton", material: "Mild Steel" },
          { model: "MS-30", capacity: "30 Ton", material: "Mild Steel" },
          { model: "MS-40", capacity: "40 Ton", material: "Mild Steel" },
          { model: "MS-50", capacity: "50 Ton", material: "Mild Steel" },
          { model: "MS-60", capacity: "60 Ton", material: "Mild Steel" },
          { model: "MS-80", capacity: "80 Ton", material: "Mild Steel" },
          { model: "MS-100", capacity: "100 Ton", material: "Mild Steel" }
        ]
      },
      {
        title: "Available capacities in stainless-steel models",
        items: [
          { model: "SS-5", capacity: "5 Ton", material: "Stainless Steel" },
          { model: "SS-10", capacity: "10 Ton", material: "Stainless Steel" },
          { model: "SS-15", capacity: "15 Ton", material: "Stainless Steel" },
          { model: "SS-20", capacity: "20 Ton", material: "Stainless Steel" },
          { model: "SS-25", capacity: "25 Ton", material: "Stainless Steel" },
          { model: "SS-30", capacity: "30 Ton", material: "Stainless Steel" },
          { model: "SS-40", capacity: "40 Ton", material: "Stainless Steel" },
          { model: "SS-50", capacity: "50 Ton", material: "Stainless Steel" },
          { model: "SS-60", capacity: "60 Ton", material: "Stainless Steel" },
          { model: "SS-80", capacity: "80 Ton", material: "Stainless Steel" },
          { model: "SS-100", capacity: "100 Ton", material: "Stainless Steel" }
        ]
      }
    ]
  },
  {
    slug: "grain-silo-ms",
    category: "Storage & discharge systems",
    title: "Grain Silo",
    subtitle: "Heavy-duty storage silo",
    description: "A heavy-duty mild-steel silo designed for the safe storage and controlled handling of wheat and other grains in commercial milling plants.\n\nBuilt for dependable bulk storage, the silo supports smooth filling and discharge, efficient use of plant space, and integration with grain-cleaning, conditioning, conveying, and automation systems.",
    image: "/images/silos/grain-silo.png",
    keyFeatures: [
      { title: "Durable mild-steel construction", description: "Heavy-duty MS construction provides reliable performance, structural strength, and long service life in demanding milling environments.", icon: "ShieldCheck" },
      { title: "Safe bulk grain storage", description: "Designed to hold grain securely while supporting organized inventory management and continuous plant operation.", icon: "Box" },
      { title: "Smooth filling and discharge", description: "Optimized inlet and outlet arrangements support controlled grain flow, reduced material buildup, and consistent feeding to downstream equipment.", icon: "Replace" },
      { title: "Intelligent monitoring", description: "Compatible with level sensors, load cells, temperature monitoring, alarms, and centralized plant-control systems.", icon: "Settings2" },
      { title: "Modular and customizable", description: "Available in multiple capacities with customizable dimensions, support structures, discharge systems, and automation options.", icon: "LayoutTemplate" },
      { title: "Easy plant integration", description: "Can be connected with conveyors, bucket elevators, cleaning lines, conditioning systems, and complete flour-milling plants.", icon: "Anchor" }
    ],
    capacitySections: [
      {
        title: "Available capacities",
        items: [
          { model: "MS-5", capacity: "5 Ton", material: "Mild Steel" },
          { model: "MS-10", capacity: "10 Ton", material: "Mild Steel" },
          { model: "MS-15", capacity: "15 Ton", material: "Mild Steel" },
          { model: "MS-20", capacity: "20 Ton", material: "Mild Steel" },
          { model: "MS-25", capacity: "25 Ton", material: "Mild Steel" },
          { model: "MS-30", capacity: "30 Ton", material: "Mild Steel" },
          { model: "MS-40", capacity: "40 Ton", material: "Mild Steel" },
          { model: "MS-50", capacity: "50 Ton", material: "Mild Steel" },
          { model: "MS-60", capacity: "60 Ton", material: "Mild Steel" },
          { model: "MS-80", capacity: "80 Ton", material: "Mild Steel" },
          { model: "MS-100", capacity: "100 Ton", material: "Mild Steel" }
        ]
      }
    ]
  }
];

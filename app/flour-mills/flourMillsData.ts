export interface CoreCapability {
  title: string;
  items: string[];
}

export interface KeyComponent {
  title: string;
  description: string;
  image?: string;
}

export interface ProductModel {
  name: string;
  image?: string;
  tableData?: Record<string, string>;
  featuresList?: string[];
  description?: string;
}

export interface HeroStat {
  value: string;
  label: string;
  sublabel?: string;
  topLabel?: string;
  bottomValue?: string;
  bottomLabel?: string;
}

export interface DetailedProduct {
  id: string; // slug
  title: string;
  category: "Digital Mills" | "Semi-Automatic" | "Horizontal Mills / Sheller" | "Accessories" | "Power Saving Components";
  subtitle: string;
  parentUrl?: string;
  parentName?: string;
  desc: string;
  heroImage: string;
  
  keyHighlights: string[];
  heroStats: HeroStat[];
  
  coreCapabilities: CoreCapability[];
  keyComponents: KeyComponent[];
  models: ProductModel[];
  
  componentsTitle?: string;
  showThumbnails?: boolean;
  showDetailedModels?: boolean;
  detailedModelsTitle?: string;
  modelsLayout?: "default" | "zigzag";

  technicalSpecs?: Record<string, string>;
  productDisclaimer?: string;
}

export const flourMillsProducts: DetailedProduct[] = [
  {
    id: "wonder-mill",
    title: "Wonder Mill",
    category: "Digital Mills",
    subtitle: "Digital Stone Flour Mill",
    desc: "Wonder Mill is a patented automated stone flour mill with Wonder Miller control technology. Built for efficient commercial grinding, it helps save power, improve flour quality, and increase production with intelligent automation.\n\nWiFi-enabled monitoring, PLC-based control, and data logging make operation simple and reliable for modern flour milling plants.",
    heroImage: "/images/plants/flour-mills/products/Wonder mill/wondermill with wondermiller.png",
    keyHighlights: [
      "WiFi Enabled",
      "30% Power Saving",
      "Data Logging",
      "Android & iOS Connectivity"
    ],
    heroStats: [
      { value: "200–250", label: "Kg/Hr Grinding Capacity", sublabel: "600 mm / 24\"" },
      { value: "450–500", label: "Kg/Hr Grinding Capacity", sublabel: "750 mm / 30\"" },
      { value: "650–700", label: "Kg/Hr Grinding Capacity", sublabel: "1200 mm / 48\"" },
      { value: "30%", label: "Power Saving" },
      { value: "32", label: "Recipe Inbuilt" },
      { value: "15 / 25 / 40 HP", label: "Power Load Options" }
    ],
    coreCapabilities: [
      {
        title: "Energy Efficiency & Performance",
        items: [
          "Up to 30% power saving",
          "Automated grain feeding",
          "Optimized milling performance",
          "VFD-based feed control",
          "Emergency manual control"
        ]
      },
      {
        title: "Smart Automation & Control",
        items: [
          "Integrated Wonder Miller PLC-based control panel",
          "7\" TFT touchscreen",
          "Customized software support",
          "Data logging system",
          "Run hours and output tracking"
        ]
      },
      {
        title: "Connectivity & Monitoring",
        items: [
          "Electricity consumption tracking",
          "WiFi and Ethernet enabled",
          "Remote access and control",
          "Android & iOS compatibility"
        ]
      }
    ],
    keyComponents: [
      {
        title: "Heavy Duty Emery Stone",
        description: "High-performance emery stones engineered for consistent grinding, durability, and flour quality.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/1.png"
      },
      {
        title: "Integrated Magnet",
        description: "Removes metallic impurities before grinding to protect machinery and improve product safety.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/2.png"
      },
      {
        title: "VFD Feeder with Conical Hopper",
        description: "Provides controlled and uniform grain feeding for consistent mill loading and performance.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/3.png"
      },
      {
        title: "Stainless Steel Grinding Chamber",
        description: "Supports hygienic processing, durability, easy cleaning, and reliable commercial operation.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/4.png"
      },
      {
        title: "Touch Screen Panel Compatible with Mobile",
        description: "Allows operators to view mill status, settings, alarms, and performance information through a digital interface.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/5.png"
      },
      {
        title: "Wonder Miller Control Console",
        description: "Centralized control system for operating, monitoring, and managing multiple Wonder Mills.",
        image: "/images/plants/flour-mills/products/Wonder mill/parts/6.png"
      }
    ],
    models: [
      {
        name: "Wonder Mill",
        image: "/images/plants/flour-mills/products/Wonder mill/wondermill1_supplementimg.png",
        tableData: {
          "Size Available": "600 / 750 / 1200 mm",
          "Hopper Capacity": "100-150 kg",
          "Pressure Type": "Hydraulic",
          "Screw Feeder": "0.5 HP, VFD Controlled",
          "Power (600 mm)": "15 HP 960 RPM",
          "Power (750 mm)": "25 HP 960 RPM",
          "Power (1200 mm)": "40 HP 960 RPM"
        }
      },
      {
        name: "Wonder Mill Neo",
        image: "/images/plants/flour-mills/products/Wonder mill/wondermill neo.png",
        tableData: {
          "Size Available": "600 / 750 / 1200 mm",
          "Hopper Capacity": "100-150 kg",
          "Pressure Type": "Pneumatic",
          "Screw Feeder": "0.5 HP, VFD Controlled",
          "Power (600 mm)": "15 HP 960 RPM",
          "Power (750 mm)": "25 HP 960 RPM",
          "Power (1200 mm)": "40 HP 960 RPM"
        }
      },
      {
        name: "Wonder Miller",
        image: "/images/plants/flour-mills/products/Wonder mill/wondermiller.png",
        featuresList: [
          "Digital PLC control system",
          "7\" TFT HMI touch screen",
          "30 pre-set grinding recipes",
          "Power saving parameters",
          "3-step control, alarm & shutdown",
          "Data logging"
        ]
      }
    ],
    productDisclaimer: "Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request. Contact our engineering team for personalized setups."
  },
  {
    id: "iquadra-mill",
    title: "iQuadra Mill",
    category: "Digital Mills",
    subtitle: "Auto & Semi-Automatic Flour Mill",
    desc: "iQuadra Mill is a smart soya cracking and flour milling solution engineered for precise grinding, higher output, power saving, and reliable automation. Designed for modern soya-processing plants, it combines intelligent control, uniform grain feeding, real-time monitoring, and a compact construction suitable for continuous commercial operation.",
    heroImage: "/images/plants/flour-mills/products/iQuadra/iquadra_mainimg.png",
    keyHighlights: [
      "Best for Soya Plants",
      "Wi-Fi Enabled",
      "Android Enabled",
      "Compact & Efficient"
    ],
    heroStats: [
      { value: "2–2.5", label: "Ton/Hr Grinding Capacity" },
      { value: "30 HP", label: "Power Load" },
      { value: "30%", label: "Power Saving" }
    ],
    coreCapabilities: [
      {
        title: "Grinding Performance & Efficiency",
        items: [
          "Up to 30% power saving",
          "Higher grinding output",
          "Reduced starch damage",
          "Maximum milling efficiency"
        ]
      },
      {
        title: "Smart Automation & Control",
        items: [
          "7-inch HMI touchscreen panel",
          "Android-based control",
          "PLC automation system",
          "30 pre-set grinding recipes"
        ]
      },
      {
        title: "Connectivity & Monitoring",
        items: [
          "Ethernet connectivity",
          "Real-time data logging",
          "Online quality monitoring",
          "Alarm & safety notifications"
        ]
      },
      {
        title: "Precision Grinding Technology",
        items: [
          "Two-way stone-gap adjustment",
          "Gravity-meter control",
          "Hydraulic automatic pressure",
          "Consistent grinding quality"
        ]
      },
      {
        title: "Advanced Grain Feeding",
        items: [
          "VFD-controlled screw feeder",
          "High-strength magnetic separator",
          "Uniform grain feeding"
        ]
      },
      {
        title: "Easy Maintenance & Reliable Design",
        items: [
          "Low maintenance design",
          "Space-saving construction",
          "Long motor life",
          "Built for continuous operation"
        ]
      }
    ],
    keyComponents: [
      {
        title: "Two Pairs of Emery Stones",
        description: "Two integrated pairs of heavy-duty emery stones support high-capacity grinding and consistent output.",
        image: "/images/plants/flour-mills/products/iQuadra/iQuadra1_supplementimg.png"
      },
      {
        title: "Heavy-Duty Emery Stone",
        description: "Engineered for durability, accurate cracking, consistent grinding, and long operational life.",
        image: "/images/plants/flour-mills/products/iQuadra/iQuadra2_supplementalimg.png"
      },
      {
        title: "Transparent Grain Intake Pipe",
        description: "Allows operators to visually monitor grain movement and feeding consistency.",
        image: "/images/plants/flour-mills/products/iQuadra/iquadra3_supplementalimg.png"
      },
      {
        title: "Feeding Conveyor",
        description: "Provides controlled grain feeding while removing metallic contaminants before grinding.",
        image: "/images/plants/flour-mills/products/iQuadra/iquadra4_supplementimg.png"
      },
      {
        title: "Geared Drive Motor",
        description: "Designed for dependable continuous-duty commercial operation.",
        image: "/images/plants/flour-mills/products/iQuadra/iquadra5_supplementimg.png"
      }
    ],
    models: [
      {
        name: "iQuadra Mill",
        image: "/images/plants/flour-mills/products/iQuadra/iquadra_mainimg.png",
        tableData: {
          "Application": "Soya cracking and flour milling",
          "Grinding capacity": "2–2.5 ton/hr",
          "Power load": "30 HP",
          "Operating speed": "960 RPM",
          "Emery-stone pairs": "2",
          "Control type": "Automatic and semi-automatic",
          "Pressure system": "Hydraulic automatic pressure",
          "Feeding system": "VFD-controlled screw feeder",
          "Connectivity": "Wi-Fi and Ethernet",
          "Control interface": "Android-enabled 7-inch HMI touchscreen",
          "Recipe memory": "30 pre-set grinding recipes"
        }
      }
    ],
    productDisclaimer: "Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request."
  },
  {
    id: "atta-expert",
    title: "Atta Expert",
    category: "Semi-Automatic",
    subtitle: "Semi-Automatic Stone Mill",
    desc: "Atta Expert is a semi-automatic stone flour mill engineered for precise grinding, higher output, and reliable commercial performance. Equipped with a VFD-controlled feeder and multiple pressure-system options, it provides uniform grain feeding, consistent flour quality, and easier day-to-day operation.",
    heroImage: "/images/plants/flour-mills/products/semi automatic/pneumatic_expert.png",
    keyHighlights: [
      "15% Power Saving",
      "VFD-Controlled Feeder",
      "Semi-Automatic Operation",
      "High Performance"
    ],
    heroStats: [
      { topLabel: 'Size - 600 mm/24"', value: "150-200", label: "(Kg/Hr) Grinding Capacity" },
      { topLabel: 'Size - 750 mm/30"', value: "400-450", label: "(Kg/Hr) Grinding Capacity" },
      { topLabel: 'Size - 1200 mm/48"', value: "600-650", label: "(Kg/Hr) Grinding Capacity" },
      { value: "15%", label: "Power Saving" },
      { value: "15 HP", label: "Power Load" },
      { value: "25 HP", label: "Power Load" },
      { value: "40 HP", label: "Power Load" },
      { value: "3", label: "Models Available" }
    ],
    coreCapabilities: [
      {
        title: "Energy Efficiency & Performance",
        items: [
          "Up to 15% power saving",
          "VFD-based feed control",
          "Optimized milling performance",
          "Consistent grinding quality"
        ]
      },
      {
        title: "Smart Automation & Control",
        items: [
          "Semi-automatic operation",
          "Feeder-motor control panel included",
          "Manual, hydraulic, and pneumatic pressure options",
          "Simple operator controls"
        ]
      },
      {
        title: "Reliability & Monitoring",
        items: [
          "Easy operation and low maintenance",
          "High-performance construction",
          "Reliable commercial operation"
        ]
      }
    ],
    keyComponents: [
      {
        title: "Heavy-Duty Emery Stone",
        description: "Durable emery stones engineered for consistent grinding, stable flour quality, and long operating life.",
        image: "/images/plants/flour-mills/products/semi automatic/expert1_supplementimg.png"
      },
      {
        title: "Integrated Magnet",
        description: "Helps remove metallic impurities before grinding.",
        image: "/images/plants/flour-mills/products/semi automatic/expert2_supplementalimg.png"
      },
      {
        title: "VFD Feeder",
        description: "Provides controlled and uniform grain feeding.",
        image: "/images/plants/flour-mills/products/semi automatic/expert3_supplementimg.png"
      },
      {
        title: "Stainless-Steel Grinding Chamber",
        description: "Supports hygienic processing and durability.",
        image: "/images/plants/flour-mills/products/semi automatic/expert4_supplementimg.png"
      },
      {
        title: "Heavy-Duty Spiral Bevel Gear",
        description: "Patented heavy-duty drive component.",
        image: "/images/plants/flour-mills/products/semi automatic/expert5_supplementalimg.png"
      }
    ],
    models: [
      {
        name: "Atta Expert (Manual)",
        image: "/images/plants/flour-mills/products/semi automatic/manual_supplementalimg.png",
        tableData: {
          "Size Available": "600mm/750mm/1200mm",
          "Hopper Capacity": "100-150 Kg",
          "Pressure Type": "Manual",
          "Screw Feeder": "0.5 HP, VFD Controlled",
          "Power (600 mm)": "15 HP 960 RPM",
          "Power (750 mm)": "25 HP 960 RPM",
          "Power (1200 mm)": "40 HP 960 RPM"
        }
      },
      {
        name: "Atta Expert (Hydraulic)",
        image: "/images/plants/flour-mills/products/semi automatic/hydraulicattaexpert.png",
        tableData: {
          "Size Available": "600mm/750mm/1200mm",
          "Hopper Capacity": "100-150 Kg",
          "Pressure Type": "Hydraulic",
          "Screw Feeder": "0.5 HP, VFD Controlled",
          "Power (600 mm)": "15 HP 960 RPM",
          "Power (750 mm)": "25 HP 960 RPM",
          "Power (1200 mm)": "40 HP 960 RPM"
        }
      },
      {
        name: "Atta Expert (Pneumatic)",
        image: "/images/plants/flour-mills/products/semi automatic/pneumatic_expert.png",
        tableData: {
          "Size Available": "600mm/750mm/1200mm",
          "Hopper Capacity": "100-150 Kg",
          "Pressure Type": "Pneumatic",
          "Screw Feeder": "0.5 HP, VFD Controlled",
          "Power (600 mm)": "15 HP 960 RPM",
          "Power (750 mm)": "25 HP 960 RPM",
          "Power (1200 mm)": "40 HP 960 RPM"
        }
      }
    ],
    productDisclaimer: "Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request."
  },
  {
    id: "horizontal-mill",
    title: "Horizontal Mill",
    category: "Horizontal Mills / Sheller",
    subtitle: "Compact flour mill and sheller engineered for precision grinding.",
    desc: "A compact flour mill and sheller engineered for precision grinding, controlled grain feeding, and dependable commercial performance. Suited for small plants, it delivers flour quality through a manual pressure system and flexible hopper configurations.",
    heroImage: "/horizontal-mills/squaremagnet_supplementalimg.png",
    showThumbnails: false,
    componentsTitle: "Models Available",
    showDetailedModels: false,
    keyHighlights: [
      "Compact",
      "Best for small quantity production",
      "Manual Pressure System"
    ],
    heroStats: [
      { value: "600–800", label: "Kg/Hr Grinding Capacity" },
      { value: "15 / 40 HP", label: "Power Load Options" },
      { value: "Manual", label: "Pressure System" }
    ],
    coreCapabilities: [
      {
        title: "Grinding Performance",
        items: [
          "Hassle-free grinding operation",
          "Uniform flour quality",
          "Coarse, medium, and fine grinding"
        ]
      },
      {
        title: "Grain Feeding System",
        items: [
          "Traditional hopper option",
          "VFD grain-feeding hopper"
        ]
      },
      {
        title: "Grinding Control",
        items: [
          "Manual pressure wheel",
          "Easy stone adjustment"
        ]
      }
    ],
    keyComponents: [
      {
        title: "Square Mill with Magnet",
        description: "Compact footprint and robust design.",
        image: "/horizontal-mills/squaremagnet_supplementalimg.png"
      },
      {
        title: "Square Mill with Traditional Hopper",
        description: "Classic feeding configuration.",
        image: "/horizontal-mills/traditionalhopper_supplementalimg.png"
      },
      {
        title: "Square Mill with VFD Feeder",
        description: "Controlled grain feeding.",
        image: "/horizontal-mills/vfdfeeder_supplementlimg.png"
      },
      {
        title: "Sheller",
        description: "High capacity processing.",
        image: "/horizontal-mills/sheller_supplementimg.png"
      }
    ],
    models: [
      {
        name: "Square Mill with Magnet",
        image: "/horizontal-mills/squaremagnet_supplementalimg.png",
        tableData: {
          "Capacity": "600–800 kg/hr",
          "Power Load": "15 or 40 HP",
          "Pressure Type": "Manual"
        }
      },
      {
        name: "Square Mill with Traditional Hopper",
        image: "/horizontal-mills/traditionalhopper_supplementalimg.png",
        tableData: {
          "Capacity": "600–800 kg/hr",
          "Power Load": "15 or 40 HP",
          "Pressure Type": "Manual"
        }
      },
      {
        name: "Square Mill with VFD Feeder",
        image: "/horizontal-mills/vfdfeeder_supplementlimg.png",
        tableData: {
          "Capacity": "600–800 kg/hr",
          "Power Load": "15 or 40 HP",
          "Pressure Type": "Manual"
        }
      },
      {
        name: "Sheller",
        image: "/horizontal-mills/sheller_supplementimg.png",
        tableData: {
          "Capacity": "600–800 kg/hr",
          "Power Load": "15 or 40 HP",
          "Pressure Type": "Manual"
        }
      }
    ],
    productDisclaimer: "Dimensions, parameters, and capacities shown are for standard models. Customizable specs are available upon request."
  },
  {
    id: "ultra-mini-horizontal-mill",
    title: "Ultra Mini Horizontal Mill",
    category: "Horizontal Mills / Sheller",
    subtitle: "A compact flour mill designed for precision grinding.",
    desc: "A compact flour mill designed for precision grinding and continuous performance, built with premium components and an easy-to-operate system for consistent flour quality and reliable daily operation.",
    heroImage: "/horizontal-mills/ultramini/ultramini_supplementalimg.png",
    showThumbnails: false,
    detailedModelsTitle: "Models Available",
    keyHighlights: [
      "20–25 kg/hr Capacity",
      "2 HP Power Load",
      "Compact Design"
    ],
    // Capacity and power load are already shown in the coloured highlight tags above
    heroStats: [],
    coreCapabilities: [
      {
        title: "Grinding Performance & Efficiency",
        items: [
          "Consistent fine grinding quality",
          "Optimized grinding performance",
          "Low vibration operation",
          "Suitable for continuous small-capacity use"
        ]
      },
      {
        title: "Safety & Reliability",
        items: [
          "Easy-to-operate pressure system",
          "Safe grinding mechanism",
          "Reliable daily performance",
          "User-friendly operation"
        ]
      },
      {
        title: "Premium Components",
        items: [
          "SKF quality bearings",
          "High-performance motor",
          "Durable internal system"
        ]
      },
      {
        title: "Smart Design & Engineering",
        items: [
          "Enhanced machine efficiency",
          "Advanced mechanical structure",
          "Optimized operational stability",
          "Heavy-duty construction"
        ]
      }
    ],
    keyComponents: [],
    models: [
      {
        name: "Mini",
        image: "/horizontal-mills/ultramini/mini_supplementalimg.png",
        tableData: {
          "Size of Mill": "350mm (14\")",
          "RPM": "600",
          "Required HP Single Phase": "2",
          "Diameter of Pulley (mm)": "250",
          "Stone Thickness (mm)": "200",
          "Gross Weight Approx": "128kg"
        }
      },
      {
        name: "Ultra Mini",
        image: "/horizontal-mills/ultramini/ultramini_supplementalimg.png",
        tableData: {
          "Size of Mill": "350mm (14\")",
          "RPM": "600",
          "Required HP Single Phase": "2",
          "Diameter of Pulley (mm)": "250",
          "Stone Thickness (mm)": "200",
          "Gross Weight Approx": "135kg"
        }
      }
    ],
    productDisclaimer: "Specifications are based on standard models and may vary based on configuration. Contact our team for customized solutions."
  },
  {
    id: "emery-stone-dresser",
    title: "Emery Stone Dresser",
    category: "Accessories",
    subtitle: "Pneumatic engineering for precision",
    desc: "The Emery Stone Dresser is engineered to restore and maintain the cutting profile of emery stones, ensuring consistent grinding performance, improved flour quality, and longer stone life.",
    heroImage: "/emery-stone-dresser/emery_stone_dresser.png",
    showThumbnails: false,
    showDetailedModels: true,
    componentsTitle: "Select Model",
    detailedModelsTitle: "Models Available",
    modelsLayout: "zigzag",
    keyHighlights: [
      "3–4 Mins Per Groove Dressing",
      "Precision Groove Cutting",
      "Smooth & Accurate Operation",
      "3 Phase, 415V, 50Hz"
    ],
    heroStats: [
      { value: "50 / 75 / 100 mm", label: "Groove Width Options" },
      { value: "500 / 600 / 750 / 1200 mm", label: "Stone Compatibility" }
    ],
    technicalSpecs: {},
    coreCapabilities: [
      {
        title: "Energy Efficiency & Performance",
        items: [
          "Precision groove cutting for consistent grinding",
          "Smooth and accurate dressing operation",
          "Reduces stone maintenance time",
          "Supports improved milling efficiency"
        ]
      },
      {
        title: "Automation & Control",
        items: [
          "Adjustable groove depth for precise dressing",
          "Manual and pneumatic pressure options",
          "Emergency stop for enhanced safety",
          "Simple and operator-friendly controls"
        ]
      },
      {
        title: "Productivity & Reliability",
        items: [
          "Heavy-duty industrial construction",
          "Faster and more efficient dressing process",
          "Low maintenance requirements",
          "Long-lasting electrical and mechanical components"
        ]
      }
    ],
    keyComponents: [],
    models: [
      {
        name: "Emery Stone Dresser",
        image: "/emery-stone-dresser/emery_stone_dresser.png",
        description: "Manual stone holding system"
      },
      {
        name: "Emery Stone Dresser Neo",
        image: "/images/emery-stone-dresser/stone-dresser-neo.png",
        description: "Pneumatic stone holding system"
      }
    ]
    },
  {
    id: "wonder-miller",
    title: "Wonder Miller",
    showThumbnails: false,
    category: "Power Saving Components",
    parentUrl: "/power-saving",
    parentName: "Power Saving",
    subtitle: "Intelligent Control System",
    desc: "Wonder Miller is the intelligent control system that automates and monitors Wonder Mill operations. It significantly reduces dependence on skilled manpower while ensuring consistent flour quality and high production efficiency.",
    keyHighlights: [
      "Digital PLC-based control system",
      "7-inch TFT HMI touch screen",
      "Controls up to 2, 4, or 6 Wonder Mills",
      "30 preset grinding recipes"
    ],
    heroStats: [],
    keyComponents: [],
    models: [],
    heroImage: "/images/power-saving/wondermiller.png",
    coreCapabilities: [
      {
        title: "Control Panel Features",
        items: [
          "Digital PLC-based control system",
          "7-inch TFT HMI touch screen",
          "Controls up to 2, 4, or 6 Wonder Mills",
          "30 preset grinding recipes",
          "Intelligent power-saving parameters",
          "Three-step operation with alarm and automatic shutdown",
          "Real-time data logging and monitoring",
          "Easy-to-use interface for operators",
          "Reduced dependence on skilled manpower",
          "Remote monitoring support"
        ]
      }
    ],
    // Key specifications removed: the same four points are already shown in the coloured highlight tags
    technicalSpecs: {}
  },
  {
    id: "neomatic",
    title: "Neomatic",
    showThumbnails: false,
    category: "Power Saving Components",
    parentUrl: "/power-saving",
    parentName: "Power Saving",
    subtitle: "Pneumatic engineering for precision",
    desc: "Neomatic is an innovative, digitally operated pneumatic conveying system designed for efficient and power-saving transfer of flour, grains, and other dry food products.\n\nIt enables controlled material movement through enclosed pipelines while reducing conveying power, product damage, maintenance requirements, and overall operating costs.",
    keyHighlights: [
      "Significant power savings",
      "Fully automated operation",
      "Long-distance conveying",
      "Space-saving construction"
    ],
    heroStats: [],
    models: [],
    heroImage: "/images/power-saving/neomatic.png",
    coreCapabilities: [
      {
        title: "Energy Efficiency",
        items: [
          "Significant power savings",
          "High milling capacity",
          "Intelligent power control",
          "Reduced operating costs",
          "Higher production efficiency"
        ]
      },
      {
        title: "Smart Automation",
        items: [
          "Fully automated operation",
          "Digital touchscreen control",
          "Intelligent process monitoring",
          "Automated material handling",
          "Consistent milling performance"
        ]
      },
      {
        title: "High-Performance Conveying",
        items: [
          "Long-distance conveying",
          "Smaller diameter pipelines",
          "High conveying efficiency",
          "Smooth material transfer",
          "Suitable for high capacities"
        ]
      },
      {
        title: "Compact & Sustainable Design",
        items: [
          "Space-saving construction",
          "Low noise operation",
          "Optimized product layout",
          "Reliable performance",
          "Energy-conscious design"
        ]
      },
      {
        title: "Low Maintenance & Reliability",
        items: [
          "Durable components",
          "Reduced downtime",
          "Lower equipment maintenance",
          "Robust construction",
          "Long service life"
        ]
      }
    ],
    keyComponents: [
      {
        title: "Master Control Panel",
        image: "/images/neomatic-key-components/master-control-panel.png",
        description: "Centralized digital control interface."
      },
      {
        title: "Vibro-Discharge Flow Control",
        image: "/images/neomatic-key-components/vibro-discharge-flow-control.png",
        description: "Ensures smooth and consistent material flow."
      },
      {
        title: "Wi-Fi Enabled Touchscreen",
        image: "/images/neomatic-key-components/wifi-enabled-touchscreen.png",
        description: "Allows remote monitoring and easy operation."
      },
      {
        title: "Pneumatic Gates for Free Flow",
        image: "/images/neomatic-key-components/pneumatic-gates-for-free-flow.png",
        description: "Automated gates for seamless conveying."
      }
    ],
    technicalSpecs: {}
  }
];

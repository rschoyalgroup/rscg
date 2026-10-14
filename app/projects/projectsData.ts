export interface ProjectParagraph {
  type: 'paragraph' | 'heading' | 'list';
  level?: number;
  text?: string;
  items?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  capacity?: string;
  projectType?: string;
  clientLogo?: string;
  technology?: string;
  commissioned?: string;
  heroDesktop?: string;
  heroMobile?: string;
  images: string[];
  content: ProjectParagraph[];
  keyFeatures?: string[];
  scopeOfWork?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    "slug": "al-ghurair-foods",
    "title": "Al Ghurair Foods",
    "subtitle": "120 TPD Atta Plant",
    "client": "Al Ghurair Foods",
    "location": "Dubai, UAE",
    "capacity": "120 TPD Atta Plant",
    "projectType": "Flour milling plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/al-ghurair-foods/al-ghurair-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/al-ghurair-foods/al-ghurair-mobile.png",
    "images": [
      "/images/projects/case_studies/al-ghurair-foods/al-ghurair-desktop.png",
      "/images/projects/case_studies/al-ghurair-foods/gallery1.png",
      "/images/projects/case_studies/al-ghurair-foods/gallery2.png",
      "/images/projects/case_studies/al-ghurair-foods/gallery3.png",
      "/images/projects/case_studies/al-ghurair-foods/gallery4.png",
      "/images/projects/case_studies/al-ghurair-foods/gallery5.png"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Al Ghurair Foods, one of the premier food manufacturing giants in the Middle East, has further elevated its industrial milling capacity with the commissioning of a modern 14-Chakki Digital Whole Wheat Flour Mill Plant at its main production facility in Dubai, UAE."
      },
      {
        "type": "paragraph",
        "text": "Designed for high throughput and supreme flour quality, this 120 TPD (Tonnes Per Day) facility integrates Choyal\u2019s cutting-edge Wondermills Technology. The project highlights a joint commitment to innovation, process precision, and global food safety standards."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Smart Automation & Technical Features"
      },
      {
        "type": "list",
        "items": [
          "Automated Process Control: Centralized PLC/SCADA control for maximum batch consistency.",
          "Remote Mobile Management: Real-time diagnostics and plant control via secure mobile app.",
          "Advanced Cleaning & Milling: High-efficiency grain cleaning paired with Choyal\u2019s patented stone-milling for optimal flour texture.",
          "Integrated Bulk Handling: Automated material transfer that minimizes dusting and manual labor."
        ]
      }
    ]
  },
  {
    "slug": "bakhresa-group",
    "title": "Bakhresa Group",
    "subtitle": "40 TPD Atta Plant",
    "client": "Bakhresa Group",
    "location": "Tanzania, East Africa",
    "capacity": "40 TPD Atta Plant",
    "projectType": "Flour milling plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/bakhresa-group/bakhresa-desktop.png",
    "heroMobile": "/images/projects/case_studies/bakhresa-group/bakhresa-mobile.png",
    "images": [
      "/images/projects/case_studies/bakhresa-group/bakhresa-desktop.png"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Bakhresa Group is one of East Africa\u2019s largest industrial conglomerates, with a turnover exceeding USD 800 Million and operations spanning Tanzania, Kenya, Uganda, Rwanda, and beyond. Its flagship enterprise, Said Salim Bakhresa & Co Ltd (SSB), commands over 60% market share in Tanzania and stands as the region's leading producer and exporter of premium wheat and grain products."
      },
      {
        "type": "paragraph",
        "text": "To fulfill expanding market demand with consistent quality, SSB partnered with Choyal to install a modern, high-capacity Chakki milling facility at their primary hub in Dar Es Salaam, Tanzania."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Technical Highlights & Automation"
      },
      {
        "type": "paragraph",
        "text": "Engineered for reliable continuous production and superior flour quality, the plant incorporates:"
      },
      {
        "type": "list",
        "items": [
          "Capacity: 40 Tonnes Per Day (TPD) dedicated Chakki Atta production line.",
          "Core Technology: Powered by Choyal\u2019s fully automatic Wondermills stone-milling technology.",
          "Automated Operations: Complete closed-loop process automation ensuring uniform texture, minimal heat generation, and optimal nutrient retention.",
          "Hygiene & Efficiency: Designed to strict international food safety standards with reduced energy consumption and minimal manual handling."
        ]
      }
    ]
  },
  {
    "slug": "carrs-flour",
    "title": "Carr's Flour",
    "subtitle": "40 TPD Atta plant",
    "client": "Carr's Flour (UK)",
    "location": "Meldon, UK",
    "capacity": "40 TPD Atta plant",
    "projectType": "Flour milling plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/carrs-flour/carr-flour-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/carrs-flour/carr-flour-mobile.png",
    "images": [
      "/images/projects/case_studies/carrs-flour/carr-flour-desktop.png",
      "/images/projects/case_studies/carrs-flour/gallery1.png",
      "/images/projects/case_studies/carrs-flour/gallery2.png",
      "/images/projects/case_studies/carrs-flour/gallery3.png",
      "/images/projects/case_studies/carrs-flour/gallery4.png",
      "/images/projects/case_studies/carrs-flour/gallery5.png"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "With a 180-year legacy and an annual milling capacity exceeding 300,000 tonnes, Carr\u2019s Flour (UK) partnered with Choyal to meet the growing demand for authentic Chakki Atta. To achieve their high quality standards, Carr\u2019s selected Choyal\u2019s fully automated, ultra-modern, and hygienic stone-milling solution."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Smart Automation & Technical Features"
      },
      {
        "type": "list",
        "items": [
          "PLC-Based Process Automation: Centralized control system ensuring precise process management, consistent flour quality, and efficient plant operation.",
          "Intelligent Plant Monitoring: Real-time monitoring with automated alarms, diagnostics, and performance tracking for maximum uptime.",
          "Compact Turnkey Plant Design: Engineered 3D layout with optimized equipment placement for smooth material flow, space efficiency, and easy maintenance.",
          "Hygienic Production System: Food-grade construction and enclosed processing lines designed to maintain high hygiene standards throughout production."
        ]
      }
    ]
  },
  {
    "slug": "eminent-group",
    "title": "Eminent Group",
    "subtitle": "40 TPD Fully Automatic Atta & Besan Plant",
    "client": "Eminent Group",
    "location": "Australia",
    "capacity": "40 TPD Fully Automatic Atta & Besan Plant",
    "projectType": "Atta & Besan Milling Plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/eminent-group/eminent-group-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/eminent-group/eminent-group-mobile.png",
    "images": [
      "/images/projects/case_studies/eminent-group/eminent-group-desktop.png",
      "/images/projects/case_studies/eminent-group/gallery1.png",
      "/images/projects/case_studies/eminent-group/gallery2.png",
      "/images/projects/case_studies/eminent-group/gallery3.png",
      "/images/projects/case_studies/eminent-group/gallery4.png",
      "/images/projects/case_studies/eminent-group/gallery5.png"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Eminent Group, Australia commissioned a 40 TPD Fully Automatic Atta & Besan Plant to cater to the increasing demand for premium-quality stone-ground whole wheat flour and gram flour (besan) across the Australian market. Designed and supplied by Choyal Group, the plant incorporates advanced milling technology to deliver superior product quality, enhanced operational efficiency, and sustainable performance."
      },
      {
        "type": "paragraph",
        "text": "The facility combines automated process control with energy-efficient milling systems, enabling high-capacity production while reducing power consumption by approximately 30% compared to conventional milling plants. The project reflects Choyal Group's commitment to delivering innovative, digitally enabled milling solutions for international markets."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Technical Features"
      },
      {
        "type": "list",
        "items": [
          "Capacity: 40 TPD Fully Automatic Atta & Besan Plant.",
          "Fully automatic digital operation with touchscreen-based control system.",
          "Integrated cleaning, grinding, sifting, and packing sections.",
          "Choyal Wonder Mills technology with approximately 30% lower power consumption.",
          "Wi-Fi and Ethernet-enabled remote monitoring and control.",
          "Smartphone, tablet, and computer-based plant operation from any location.",
          "High-quality production of stone-ground whole wheat flour and gram flour (besan)."
        ]
      }
    ]
  },
  {
    "slug": "patanjali-ayurveda",
    "title": "Patanjali Ayurved Ltd",
    "subtitle": "200 TPD Multi-Grain Atta | 50 TPD Wheat & Multi-Grain Daliya | 30 TPD Pulse & Besan plant | 20 TPD Spice plant",
    "client": "Patanjali Ayurved Ltd",
    "location": "Haridwar, Uttarakhand, India",
    "capacity": "200 TPD Multi-Grain Atta | 50 TPD Wheat & Multi-Grain Daliya | 30 TPD Pulse & Besan plant | 20 TPD Spice plant",
    "projectType": "Flour Milling & Food Processing Plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/patanjali-ayurveda/patanjali-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/patanjali-ayurveda/patanjali-mobile.png",
    "images": [
      "/images/projects/case_studies/patanjali-ayurveda/patanjali-desktop.png",
      "/images/projects/case_studies/patanjali-ayurveda/gallery1.png",
      "/images/projects/case_studies/patanjali-ayurveda/gallery2.png",
      "/images/projects/case_studies/patanjali-ayurveda/gallery3.png",
      "/images/projects/case_studies/patanjali-ayurveda/gallery4.png"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Patanjali Ayurved Limited, one of India's leading FMCG and Ayurvedic product manufacturers, established a state-of-the-art integrated flour milling and food processing facility at its Haridwar manufacturing campus under the Mega Food Park initiative. The project was envisioned to develop a technologically advanced processing infrastructure capable of producing high-quality multi-grain flour, daliya, pulses, besan, and spices through digitally controlled operations."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Mega Food Park"
      },
      {
        "type": "paragraph",
        "text": "The project forms part of the Mega Food Park initiative, which aims to establish world-class infrastructure for food processing by creating an integrated farm-to-fork supply chain. The initiative focuses on minimizing post-harvest losses, promoting value addition, enhancing processing efficiency, and improving market access for agricultural produce."
      },
      {
        "type": "paragraph",
        "text": "The Mega Food Park provides centralized processing, storage, and logistics infrastructure, enabling efficient utilization of raw materials while supporting employment generation, rural development, and sustainable growth in the food processing sector."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "The Scope of Work"
      },
      {
        "type": "list",
        "items": [
          "Preparation of technical details of the project.",
          "Selection of Machines, Material and Man Power.",
          "Erection and Fabrication",
          "Technical know- how",
          "Final Trails"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Technical Features"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "200 TPD Multi-Grain Atta Plant"
      },
      {
        "type": "list",
        "items": [
          "World's first Digitally Operated Wonder Mills Chakki Atta Plant equipped with 20 Wonder Mills.",
          "Fully automated digital control system for process monitoring and operation.",
          "Integrated cleaning system for all nine grains.",
          "Automatic grain blending with digitally controlled recipe management.",
          "Designed for high production efficiency while maintaining consistent flour quality."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "50 TPD Wheat & Multi-Grain Daliya Plant"
      },
      {
        "type": "list",
        "items": [
          "Digitally operated processing line with automated control.",
          "Wheat Daliya produced through Wonder Mill technology.",
          "Separate cleaning, grading, and blending system for multi-grain daliya.",
          "Digital recipe control ensures uniform product quality and operational accuracy."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "30 TPD Pulse & Besan Plant"
      },
      {
        "type": "list",
        "items": [
          "Integrated chickpea cleaning and pulse processing system.",
          "High-quality pulse production through advanced cleaning and grading operations.",
          "Besan manufacturing using Wonder Mills, Pin Mills, and Pulverizers.",
          "Suitable for production of premium-quality gram flour with consistent particle size."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "20 TPD Spice Processing Plant"
      },
      {
        "type": "list",
        "items": [
          "Designed for processing over 30 varieties of spices and customized spice blends.",
          "Digitally operated weighing, batching, and mixing system.",
          "Automated recipe management for production of pre-mixed masalas.",
          "Successfully commissioned within 13 days, making it one of the fastest executed spice processing plants of its scale."
        ]
      }
    ]
  },
  {
    "slug": "prima-group",
    "title": "Prima Ceylon Limited (Prima Group)",
    "subtitle": "40 TPD Fully Automatic Chakki Atta Plant",
    "client": "Prima Ceylon Limited (Prima Group)",
    "location": "Trincomalee, Sri Lanka",
    "capacity": "40 TPD Fully Automatic Chakki Atta Plant",
    "projectType": "Flour Milling Plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/prima-group/prima-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/prima-group/prima-mobile.png",
    "images": [
      "/images/projects/case_studies/prima-group/prima-desktop.png",
      "/images/projects/case_studies/prima-group/galleryimg1.jpg",
      "/images/projects/case_studies/prima-group/galleryimg.jpg"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Prima Group is one of South Asia's leading manufacturers of wheat-based food products, with its flagship flour milling complex located at Trincomalee, Sri Lanka. The integrated facility is recognized as one of the region's most advanced flour milling operations, featuring modern port infrastructure, large-scale grain storage, and world-class logistics connectivity through road, rail, and sea."
      },
      {
        "type": "paragraph",
        "text": "The Trincomalee complex has an installed wheat milling capacity of 3,600 MT per day with storage facilities exceeding 200,000 MT. Equipped with advanced milling technologies and certified under ISO 9001:2000 and ISO 22000:2005, the facility represents international standards in food processing, quality assurance, and operational excellence."
      },
      {
        "type": "paragraph",
        "text": "As part of the plant expansion, Choyal successfully designed, supplied, and commissioned a 40 TPD Fully Automatic Chakki Atta Plant, integrating modern Indian milling technology into Prima's highly automated production environment. The project was executed following extensive technical discussions and engineering collaboration with Prima's technical team."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Technical Features"
      },
      {
        "type": "list",
        "items": [
          "Capacity: 40 TPD Fully Automatic Chakki Atta Plant.",
          "Fully automated milling process with minimal manual intervention.",
          "Integrated grain feeding, milling, and product handling system.",
          "Choyal Wonder Mills technology for consistent flour quality.",
          "Energy-efficient and reliable plant operation.",
          "Designed for seamless integration with Prima's existing automated flour milling facility.",
          "Technical training provided to Prima's operating personnel at Choyal School of Milling Technology, Ajmer."
        ]
      }
    ]
  },
  {
    "slug": "qatar-flour-mills",
    "title": "Qatar Flour Mills Co.",
    "subtitle": "40 TPD Fully Automatic Chakki Atta Plant",
    "client": "Qatar Flour Mills Co.",
    "location": "Doha, Qatar",
    "capacity": "40 TPD Fully Automatic Chakki Atta Plant",
    "projectType": "Flour Milling Plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/qatar-flour-mills/qatar-mills-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/qatar-flour-mills/qatar-mills-mobile.png",
    "images": [
      "/images/projects/case_studies/qatar-flour-mills/qatar-mills-desktop.png",
      "/images/projects/case_studies/qatar-flour-mills/galleryimg1.jpg",
      "/images/projects/case_studies/qatar-flour-mills/galleryimg.jpg"
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Qatar Flour Mills Co. is one of the leading flour milling companies in the State of Qatar, supplying high-quality wheat flour and related products to the domestic market. As part of its product diversification and capacity enhancement initiatives, the company commissioned a 40 TPD Fully Automatic Chakki Atta Plant to produce premium-quality whole wheat flour using advanced milling technology."
      },
      {
        "type": "paragraph",
        "text": "The project was designed to integrate seamlessly with the existing flour milling infrastructure, ensuring efficient operations, consistent product quality, and reliable production. The plant incorporates modern automation and process control systems to achieve high operational efficiency while maintaining stringent food quality standards."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Technical Features"
      },
      {
        "type": "list",
        "items": [
          "Capacity: 40 TPD Fully Automatic Chakki Atta Plant.",
          "Fully automated grain feeding, milling, and product handling system.",
          "Choyal Wonder Mills technology for premium-quality Chakki Atta.",
          "Energy-efficient and low-maintenance plant design.",
          "Consistent flour quality through automated process control.",
          "Designed for seamless integration with the existing flour milling facility."
        ]
      }
    ]
  },
  {
    "slug": "winnies-pure-health",
    "title": "Winnie's Pure Health",
    "subtitle": "40 TPD Atta plant",
    "client": "Winnie's Pure Health",
    "location": "Kenya, East Africa",
    "capacity": "40 TPD Atta plant",
    "projectType": "Flour Milling plant",
    "commissioned": "",
    "heroDesktop": "/images/projects/case_studies/winnies-pure-health/winnie-hero-desktop.png",
    "heroMobile": "/images/projects/case_studies/winnies-pure-health/winnie-mobile.png",
    "images": [
      "/images/projects/case_studies/winnies-pure-health/winnie-desktop.png",
      "/images/projects/case_studies/winnies-pure-health/gallery1.png",
      "/images/projects/case_studies/winnies-pure-health/gallery2.png",
      "/images/projects/case_studies/winnies-pure-health/gallery3.png",
      "/images/projects/case_studies/winnies-pure-health/gallery4.png"
    ],
    "content": [
      {
        "type": "heading",
        "level": 3,
        "text": "Overview"
      },
      {
        "type": "paragraph",
        "text": "Winnie\u2019s Pure Health is a prominent family-owned enterprise founded by a mother-daughter duo in Nairobi, Kenya. Dedicated to promoting healthy living through nutritious foods, they sought an ultra-modern, versatile turnkey solution to expand their production of health-focused flours for the East African market."
      },
      {
        "type": "paragraph",
        "text": "Their search for an advanced manufacturing setup led them to the Choyal Facility Centre in India, where they evaluated our pilot plant and collaborated with our technical team."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Tailored Solution & Recipe Development"
      },
      {
        "type": "paragraph",
        "text": "Choyal engineered a comprehensive, fully automatic, and hygienic turnkey facility custom-built for high-volume specialty milling:"
      },
      {
        "type": "list",
        "items": [
          "Multi-Product Milling Capability: Designed to process Multigrain Flour, Whole Wheat Flour, Maize Flour, and Gluten-Free Flour on a single versatile line.",
          "Custom Recipe Formulation: Development of tailored recipes specifically optimized for gluten-free products suited to the local Kenyan market.",
          "Full Process Automation: Closed-loop, hassle-free processing ensuring strict hygiene, particle size uniformity, and maximum nutrient retention."
        ]
      }
    ]
  }
];

export interface NewsParagraph {
  type: 'paragraph' | 'heading' | 'list';
  level?: number; // for headings (e.g., 2 for h2, etc.)
  text?: string;
  items?: string[]; // for lists
}

export interface NewsImage {
  original_url: string;
  local_path: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  displayDate?: string;
  images: NewsImage[];
  content: NewsParagraph[];
}

export const newsData: NewsItem[] = [
  {
    "title": "GrainEx India 2026",
    "slug": "grainex-india-2026",
    "date": "2026-02-06",
    "displayDate": "6-8 February 2026",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/grainex2026.png"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Choyal Group participated in GrainEx India 2026, held from 6–8 February 2026 in Indore, Madhya Pradesh, reaffirming its position as a leading innovator in grain processing and milling technology. The company showcased its comprehensive portfolio of advanced grinding and processing solutions, attracting mill owners, entrepreneurs, food processors, and industry professionals from across India."
      },
      {
        "type": "paragraph",
        "text": "The exhibition featured Choyal's integrated solutions for Digital Chakki Atta Plants, Pulse (Dal) Processing Plants, Spice Processing Plants, Grain Storage & Handling Systems, and complete Turnkey Milling Projects. Visitors explored the company's patented technologies, including the Wonder Mill, Wonder Miller, Automatic Stone Dresser, and Miller Lite automation platform, which deliver enhanced productivity, lower energy consumption, improved product consistency, and intelligent plant control through PLC-based automation."
      },
      {
        "type": "paragraph",
        "text": "GrainEx India 2026 also served as a strategic platform for Choyal Group to strengthen relationships with existing customers, develop new business partnerships, and demonstrate its continued commitment to innovation, research, and customer-centric engineering."
      }
    ]
  },
  {
    "title": "Graintech India 2025",
    "slug": "graintech-india-2025",
    "date": "2025-08-01",
    "displayDate": "1-3 August 2025",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/graintech-2025.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Choyal Group participated in GrainTech India 2025, held from 1–3 August 2025 at the Bangalore International Exhibition Centre (BIEC), Bengaluru. The exhibition brought together leading manufacturers, technology providers, millers, and industry professionals from across the global grain processing sector."
      },
      {
        "type": "paragraph",
        "text": "Choyal Group showcased its latest innovations in digital flour milling and turnkey grain processing solutions. A key attraction was an immersive Virtual Reality (VR) plant tour, allowing visitors to experience the company's advanced flour mill installations and visualize customized milling projects in an interactive environment."
      },
      {
        "type": "paragraph",
        "text": "The Choyal team also demonstrated its Wonder Mill technology and other smart milling solutions, engaging with mill owners, entrepreneurs, and industry professionals on topics including automation, energy-efficient milling, process optimization, and complete turnkey plant solutions. The exhibition provided a valuable platform to strengthen customer relationships, explore new business opportunities, and reinforce Choyal Group's commitment to innovation in the global milling industry."
      }
    ]
  },
  {
    "title": "3rd Annual Edition of International SME Convention, 2023",
    "slug": "3rd-annual-edition-of-international-sme-convention-2023",
    "date": "2023-03-21",
    "displayDate": "21 March 2023",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/smeconvention.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Mr. Radhey Shyam Choyal participated as a panelist at the 3rd International SME Convention 2023, held on 21 March 2023 and organized by the India SME Forum. He shared his expertise on 'Opportunities in India: Rural, Agro, Food Processing & Services'."
      },
      {
        "type": "paragraph",
        "text": "During the discussion, Mr. Choyal highlighted the role of public-private partnerships in empowering farmers through farm-level value addition, efficient rural marketing, and integrated supply chains to enhance both domestic and export opportunities."
      },
      {
        "type": "paragraph",
        "text": "He also emphasized the importance of research and development (R&D) in achieving global quality standards. Choyal Group's continued investment in innovation has resulted in six patented technologies, enabling the company to meet international quality benchmarks and serve customers in over 20 countries."
      },
      {
        "type": "paragraph",
        "text": "Addressing the growth potential of India's food processing sector, Mr. Choyal encouraged SMEs to prioritize innovation, quality, and customer satisfaction to strengthen competitiveness and drive sustainable growth."
      },
      {
        "type": "paragraph",
        "text": "As a pioneer in milling technology, Choyal Group has successfully executed more than 200 turnkey projects and developed 45+ milling innovations, earning widespread recognition for its contributions to India's food processing industry. The company's commitment to innovation and quality continues to support the advancement of the sector and contribute to the nation's economic development."
      }
    ]
  },
  {
    "title": "Graintech India Exhibition 2019",
    "slug": "graintech-india-exhibition-2019",
    "date": "2019-08-30",
    "displayDate": "30 August to 1 September 2019",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/graintech2019.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Graintech India 2019, held from 30 August to 1 September 2019 at the Bangalore International Exhibition Centre (BIEC), brought together leading manufacturers, technology providers, grain processors, and industry experts from across the globe. As one of India's premier exhibitions for grain milling, food processing, packaging machinery, and allied industries, the event provided an ideal platform to showcase the latest technologies, strengthen industry partnerships, and explore emerging market opportunities."
      },
      {
        "type": "paragraph",
        "text": "CHOYAL proudly participated in the exhibition, presenting its advanced portfolio of flour milling solutions, patented innovations, and turnkey project capabilities. The event enabled the company to connect with mill owners, entrepreneurs, distributors, and international buyers while demonstrating its expertise in delivering efficient, reliable, and future-ready milling technologies."
      },
      {
        "type": "paragraph",
        "text": "A key highlight of CHOYAL's showcase was Wonder Mill, India's pioneering fully automatic stone flour mill, along with intelligent milling automation systems, energy-efficient grinding solutions, and customized plant engineering services. Visitors appreciated the company's emphasis on precision engineering, operational efficiency, consistent flour quality, and sustainable milling practices."
      }
    ]
  },
  {
    "title": "In-Bound Trade Mission – Australia,2016",
    "slug": "in-bound-trade-mission-australia",
    "date": "2016-01-24",
    "displayDate": "24 January 2016",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/inbound-trade-mission.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Government of South Australia hosted an In-Bound Trade Mission with Government of India from 24th January, 2016. Our team went as part of the mission. They had meetings and technical discussions about organic and chakki milling with Flinders Ranges Premium Grain Pvt. Ltd. to mark new footsteps of Indian milling in South Australia including various other flour mills."
      },
      {
        "type": "paragraph",
        "text": "The Australia India Business Council SA Chapter is working with the Department of State Development in organizing an inbound India Trade Mission to South Australia. The visit was timed to coincide with the Australia-India T20 cricket match at the Adelaide Oval on 26 January 2016, which was also attended by His Excellency Mr Navdeep Suri, High Commissioner of India. The inbound mission provides an ideal opportunity for AIBC members and others interested in fostering business links between South Australia and India to take part in business matching programs which are being organised by DSD."
      }
    ]
  },
  {
    "title": "Grain Africa Congress,2014",
    "slug": "grain-africa-congress",
    "date": "2014-10-29",
    "displayDate": "29-31 October 2014",
    "images": [
      {
        "original_url": "",
        "local_path": "/images/news-page/grainafrica2014.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Mr. R.S. Choyal represented India at the Grain Africa – Africa Grain, Pulses and Technologies Congress, held from 29–31 October 2014 in Addis Ababa, Ethiopia. Organized by Parantez Group in collaboration with the Ethiopian Ministry of Agriculture and Addis Ababa University, the congress brought together government leaders, policymakers, industry experts, and global technology providers from across 54 African countries."
      },
      {
        "type": "paragraph",
        "text": "During the congress, Mr. Choyal delivered a technical presentation on Organic Milling and Emerging Technologies in Stone Ground Flour Milling. He introduced the digitally operated Wonder Mill and advanced stone dressing technology, highlighting innovations that improve milling efficiency, product quality, and sustainability. He also discussed the differences between modern and conventional milling practices, emphasizing the importance of technological advancement in the grain processing industry."
      },
      {
        "type": "paragraph",
        "text": "Mr. Choyal further addressed the significance of skill development and entrepreneurship in strengthening rural economies. As part of a cultural exchange initiative, he invited African millers, researchers, and students to the Choyal School of Milling Technology for knowledge sharing and technical training."
      },
      {
        "type": "paragraph",
        "text": "His practical and innovation-driven presentation was highly appreciated by delegates, particularly for its relevance to farmers, young entrepreneurs, and the future of Africa's grain processing sector."
      }
    ]
  }
];

export interface DownloadItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  desc: string;
  format: string;
  size: string;
  tone: string;
  image: string;
  fileUrl: string;
  driveUrl: string;
}

export interface CategoryFilter {
  id: string;
  name: string;
  iconName: string;
}

export const downloadCategories: CategoryFilter[] = [
  { id: "all", name: "All Downloads", iconName: "LayoutGrid" },
  { id: "about-company", name: "About Company", iconName: "Building2" },
  { id: "turnkey-projects", name: "Turnkey Projects", iconName: "Factory" },
  { id: "training", name: "Training and Knowledge", iconName: "GraduationCap" },
  { id: "digital-flour-mill", name: "Digital Flour Mill", iconName: "Cpu" },
  { id: "semi-automatic-flour-mill", name: "Semi Automatic Flour Mill", iconName: "Cog" },
  { id: "horizontal-flour-mill", name: "Horizontal Flour Mill", iconName: "Sliders" },
  { id: "flour-processing", name: "Flour Processing", iconName: "Layers" },
  { id: "conveying-system", name: "Conveying System", iconName: "ArrowRightLeft" },
  { id: "emery-stone-dresser", name: "Emery Stone Dresser", iconName: "Disc" },
  { id: "vending-machine", name: "Vending Machine", iconName: "Store" },
  { id: "automatic-machines", name: "Automatic Machines", iconName: "Bot" },
  { id: "semi-automatic-machines", name: "Semi Automatic Machines", iconName: "Wrench" },
];

// "All Downloads" view is grouped into these 4 sections (in this order)
export const downloadGroups = [
  "About Company",
  "Turnkey Projects",
  "Training and Knowledge",
  "Machines and Technology",
] as const;

export function getDownloadGroup(item: DownloadItem): (typeof downloadGroups)[number] {
  if (item.category === "about-company") return "About Company";
  if (item.category === "turnkey-projects") return "Turnkey Projects";
  if (item.category === "training") return "Training and Knowledge";
  return "Machines and Technology";
}

export const downloadsData: DownloadItem[] = [
  // 1. About Company
  {
    id: "company-profile",
    title: "Company Profile",
    category: "about-company",
    categoryLabel: "About Company",
    desc: "Company profile and an overview of R.S. Choyal Group.",
    format: "PDF",
    size: "2.8 MB",
    tone: "green",
    image: "/images/downloads/thumbnails_v2/company-profile.png",
    fileUrl: "/downloads/files/company-profile.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1DIpm5ReyK2p_XLT9ckQekQ5jeINGcexD",
  },

  // 2. Turnkey Projects
  {
    id: "turnkey-solution",
    title: "Turnkey Solution",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Turnkey Solution project brochure and information.",
    format: "PDF",
    size: "3.6 MB",
    tone: "sand",
    image: "/images/downloads/thumbnails_v2/turnkey-solution.png",
    fileUrl: "/downloads/files/turnkey-solution.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1WAfqCxQmqMTeM1a-eg4vlH-gRoekCtxx",
  },
  {
    id: "10-tpd-mini-chakki-atta-plant",
    title: "10 TPD Mini Chakki Atta Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure for 10 TPD Mini Chakki Atta Plant.",
    format: "PDF",
    size: "2.1 MB",
    tone: "blue",
    image: "/images/downloads/thumbnails_v2/10-tpd-mini-chakki-atta-plant.png",
    fileUrl: "/downloads/files/10-tpd-mini-chakki-atta-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1xMSXJK-xL17uOzt6F8lmRpQkWXcetYpt",
  },
  {
    id: "10-tpd-chakki-atta-plant",
    title: "10 TPD Chakki Atta Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure for 10 TPD Chakki Atta Plant.",
    format: "PDF",
    size: "3.2 MB",
    tone: "terracotta",
    image: "/images/downloads/thumbnails_v2/10-tpd-chakki-atta-plant.png",
    fileUrl: "/downloads/files/10-tpd-chakki-atta-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1SnUsBvK-paw6UWDveCdxVRT_QGXxx0tw",
  },
  {
    id: "20-tpd-chakki-atta-plant",
    title: "20 TPD Chakki Atta Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure for 20 TPD Chakki Atta Plant.",
    format: "PDF",
    size: "2.7 MB",
    tone: "pale",
    image: "/images/downloads/thumbnails_v2/20-tpd-chakki-atta-plant.png",
    fileUrl: "/downloads/files/20-tpd-chakki-atta-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1-oj8rUgK4sP6vvhrINgqp2Psu2IHsKkN",
  },
  {
    id: "40-tpd-chakki-atta-plant",
    title: "40 TPD Chakki Atta Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure for 40 TPD Chakki Atta Plant.",
    format: "PDF",
    size: "4.1 MB",
    tone: "lavender",
    image: "/images/downloads/thumbnails_v2/40-tpd-chakki-atta-plant.png",
    fileUrl: "/downloads/files/40-tpd-chakki-atta-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1hRNj0PhNhV7ghJp8dcbdr6DUDB9YXzlf",
  },
  {
    id: "60-tpd-chakki-atta-plant",
    title: "60 TPD Chakki Atta Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure for 60 TPD Chakki Atta Plant.",
    format: "PDF",
    size: "3.9 MB",
    tone: "green",
    image: "/images/downloads/thumbnails_v2/60-tpd-chakki-atta-plant.png",
    fileUrl: "/downloads/files/60-tpd-chakki-atta-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1yqkHpeibbULk4PkcBqU1GLS6v4FfP-Vf",
  },
  {
    id: "besan-plant",
    title: "Besan Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure and information for Besan Plant.",
    format: "PDF",
    size: "2.5 MB",
    tone: "sand",
    image: "/images/downloads/thumbnails_v2/besan-plant.png",
    fileUrl: "/downloads/files/besan-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/18S4In5BHtG78uPyseZqjCPxpy-jwVwR4",
  },
  {
    id: "spice-plant",
    title: "Spice Plant",
    category: "turnkey-projects",
    categoryLabel: "Turnkey Projects",
    desc: "Project brochure and information for Spice Plant.",
    format: "PDF",
    size: "3.4 MB",
    tone: "blue",
    image: "/images/downloads/thumbnails_v2/spice-plant.png",
    fileUrl: "/downloads/files/spice-plant.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1rLnHryyb-3bYn5hVeeNY6CHxLJ4M1o5D",
  },

  // 3. Training
  {
    id: "charge",
    title: "CHARGE",
    category: "training",
    categoryLabel: "Training and Knowledge",
    desc: "CHARGE training resource and programme information.",
    format: "PDF",
    size: "2.9 MB",
    tone: "terracotta",
    image: "/images/downloads/thumbnails_v2/charge.png",
    fileUrl: "/downloads/files/charge.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1XM_MVL9iRPgy-CvTBUHJeLjAJfvhk1LO",
  },

  // 4. Digital Flour Mill
  {
    id: "wondermill-with-wondermiller",
    title: "Wondermill with Wondermiller",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    desc: "Product brochure for Wondermill with Wondermiller.",
    format: "PDF",
    size: "4.3 MB",
    tone: "pale",
    image: "/images/downloads/thumbnails_v2/wondermill-with-wondermiller.png",
    fileUrl: "/downloads/files/wondermill-with-wondermiller.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1yBOtkgb-877-cF9sE73wS_D5sgvvAlg9",
  },
  {
    id: "iquadra",
    title: "iQuadra",
    category: "digital-flour-mill",
    categoryLabel: "Digital Flour Mill",
    desc: "Product brochure and information for iQuadra.",
    format: "PDF",
    size: "3.7 MB",
    tone: "lavender",
    image: "/images/downloads/thumbnails_v2/iquadra.png",
    fileUrl: "/downloads/files/iquadra.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1dUSMrDvQYE0eUghO4_NOpHqo__d01woI",
  },

  // 5. Semi Automatic Flour Mill
  {
    id: "atta-expert",
    title: "Atta Expert",
    category: "semi-automatic-flour-mill",
    categoryLabel: "Semi Automatic Flour Mill",
    desc: "Product brochure and information for Atta Expert.",
    format: "PDF",
    size: "2.6 MB",
    tone: "green",
    image: "/images/downloads/thumbnails_v2/atta-expert.png",
    fileUrl: "/downloads/files/atta-expert.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1fTtVxGlXNhU4OQ8aOP2BVQIjjJQ8YVDo",
  },

  // 6. Horizontal Flour Mill
  {
    id: "horizontal-square-type-flour-mill",
    title: "Horizontal Square Type Flour Mill",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    desc: "Product brochure for Horizontal Square Type Flour Mill.",
    format: "PDF",
    size: "3.5 MB",
    tone: "sand",
    image: "/images/downloads/thumbnails_v2/horizontal-square-type-flour-mill.png",
    fileUrl: "/downloads/files/horizontal-square-type-flour-mill.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1DpkmOeKDU1pleOkQck33WC2ijTBa8vWW",
  },
  {
    id: "horizontal-flour-mill-mini-ultra-mini",
    title: "Horizontal Flour Mill - Mini & Ultra Mini",
    category: "horizontal-flour-mill",
    categoryLabel: "Horizontal Flour Mill",
    desc: "Product brochure for Mini & Ultra Mini Horizontal Flour Mills.",
    format: "PDF",
    size: "2.4 MB",
    tone: "blue",
    image: "/images/downloads/thumbnails_v2/horizontal-flour-mill-mini-ultra-mini.png",
    fileUrl: "/downloads/files/horizontal-flour-mill-mini-ultra-mini.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1J3QKrFb_EW4rDzkFkVVHucO5cLO6w6y7",
  },

  // 7. Flour Processing
  {
    id: "plan-sifter-vibro-sifter-centrifugal",
    title: "Plan Sifter, Vibro Sifter, Centrifugal",
    category: "flour-processing",
    categoryLabel: "Flour Processing",
    desc: "Product information for sifting and flour processing equipment.",
    format: "PDF",
    size: "4.6 MB",
    tone: "terracotta",
    image: "/images/downloads/thumbnails_v2/plan-sifter-vibro-sifter-centrifugal.png",
    fileUrl: "/downloads/files/plan-sifter-vibro-sifter-centrifugal.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1PaVFJiO5SHWCpqJQymm0JK_CNK-xDoYt",
  },

  // 8. Conveying System
  {
    id: "neomatic",
    title: "Neomatic",
    category: "conveying-system",
    categoryLabel: "Conveying System",
    desc: "Product brochure and information for Neomatic conveying system.",
    format: "PDF",
    size: "3.1 MB",
    tone: "pale",
    image: "/images/downloads/thumbnails_v2/neomatic.png",
    fileUrl: "/downloads/files/neomatic.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1oUJh4e4fHMTeJzurt6b8m8y4ELofcXCu",
  },

  // 9. Emery Stone Dresser
  {
    id: "emery-stone-dresser",
    title: "Emery Stone Dresser",
    category: "emery-stone-dresser",
    categoryLabel: "Emery Stone Dresser",
    desc: "Product brochure and information for Emery Stone Dresser.",
    format: "PDF",
    size: "2.3 MB",
    tone: "lavender",
    image: "/images/downloads/thumbnails_v2/emery-stone-dresser.png",
    fileUrl: "/downloads/files/emery-stone-dresser.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1UQz-jSriiDJHyR4TGIb42LySzozQcr-P",
  },

  // 10. Vending Machine
  {
    id: "floura",
    title: "Floura",
    category: "vending-machine",
    categoryLabel: "Vending Machine",
    desc: "Product brochure and information for Floura vending machine.",
    format: "PDF",
    size: "3.8 MB",
    tone: "green",
    image: "/images/downloads/thumbnails_v2/floura.png",
    fileUrl: "/downloads/files/floura.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1hj1d16OIflOBHWwBanbLnLbNKGafUuN8",
  },

  // 11. Automatic Machines
  {
    id: "oil-extraction-machine",
    title: "Oil Extraction Machine",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    desc: "Product brochure and information for Oil Extraction Machine.",
    format: "PDF",
    size: "2.9 MB",
    tone: "sand",
    image: "/images/downloads/thumbnails_v2/oil-extraction-machine.png",
    fileUrl: "/downloads/files/oil-extraction-machine.pdf",
    driveUrl: "https://drive.google.com/drive/folders/13u5vnatkL-ThRVcvTrdkXRFRGQ83pIbB",
  },
  {
    id: "micro-powder-doser",
    title: "Micro Powder Doser",
    category: "automatic-machines",
    categoryLabel: "Automatic Machines",
    desc: "Product brochure and information for Micro Powder Doser.",
    format: "PDF",
    size: "3.3 MB",
    tone: "blue",
    image: "/images/downloads/thumbnails_v2/micro-powder-doser.png",
    fileUrl: "/downloads/files/micro-powder-doser.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1dNmz__tR0QU1bnBhS9bmzz2wScgX2_E1",
  },

  // 12. Semi Automatic Machines
  {
    id: "wonder-drop",
    title: "Wonder Drop",
    category: "semi-automatic-machines",
    categoryLabel: "Semi Automatic Machines",
    desc: "Product brochure and information for Wonder Drop.",
    format: "PDF",
    size: "2.2 MB",
    tone: "terracotta",
    image: "/images/downloads/thumbnails_v2/wonder-drop.png",
    fileUrl: "/downloads/files/wonder-drop.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1nR2zWFiZNEprnrXW8rMxGwQzx37vkCvC",
  },
  {
    id: "floura-fresh",
    title: "Floura Fresh",
    category: "semi-automatic-machines",
    categoryLabel: "Semi Automatic Machines",
    desc: "Product brochure and information for Floura Fresh.",
    format: "PDF",
    size: "4.0 MB",
    tone: "lavender",
    image: "/images/downloads/thumbnails_v2/floura-fresh.png",
    fileUrl: "/downloads/files/floura-fresh.pdf",
    driveUrl: "https://drive.google.com/drive/folders/1DaH7iGKkY1YliVA5ioXxO3vc-dj-tKY8",
  },
];

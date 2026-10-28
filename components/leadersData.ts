export interface LeaderCard {
  name: string;
  tag: string;
  description: string;
  image: string;
  link: string;
}

export interface LeaderGroup {
  heading: string;
  leaders: LeaderCard[];
}

export const leaderGroups: LeaderGroup[] = [
  {
    heading: "The Roots of Our Legacy",
    leaders: [
      {
        tag: "Co-founder & ex-chairman",
        name: "Late Mr. B. M. Choyal",
        description:
          "Laid the foundation of a visionary group that built the future of milling.",
        image: "/images/about/leadership/B.M%20Choyal.jpg",
        link: "/ex-chairman",
      },
      {
        tag: "Co-founder & ex-managing director",
        name: "Late Shri R. D. Sharma",
        description:
          "Strengthened the foundation with trust, values and long-term vision.",
        image: "/images/about/leadership/R.D%20Sharma.jpg",
        link: "/ex-md",
      },
    ],
  },
  {
    heading: "Leading the Legacy Forward",
    leaders: [
      {
        tag: "Chairman & managing director",
        name: "Mr. R. S. Choyal",
        description:
          "Steered growth with innovation, technology and a global outlook.",
        image: "/images/about/leadership/RS%20Choyal.jpg",
        link: "/leadership-ed",
      },
      {
        tag: "Executive Director",
        name: "Vibhuti Choyal",
        description:
          "Bringing fresh perspectives and a commitment to carry the legacy forward.",
        image: "/images/about/leadership/Vibhuti%20Choyal.jpg",
        link: "/vibhuti-choyal",
      },
    ],
  },
];

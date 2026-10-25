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
          "One of the founders who helped establish Choyal’s early foundation in indigenous emery stone and milling technology, setting the direction for generations of engineering.",
        image: "/images/about/leadership/B.M%20Choyal.jpg",
        link: "/ex-chairman",
      },
      {
        tag: "Co-founder & ex-managing director",
        name: "Late Shri R. D. Sharma",
        description:
          "A founding force behind the company’s growth, helping transform early manufacturing capabilities into a disciplined industrial enterprise.",
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
          "Carrying the legacy into a new era through advanced machinery, patented innovations, complete plants and digitally connected milling systems.",
        image: "/images/about/leadership/RS%20Choyal.jpg",
        link: "/leadership-ed",
      },
      {
        tag: "General Manager - Products & Services",
        name: "Vibhuti Choyal",
        description:
          "Bringing design-led thinking and global experience to connect six decades of milling expertise with modern, user-centred products and services.",
        image: "/images/about/leadership/Vibhuti%20Choyal.jpg",
        link: "/leadership-gm",
      },
    ],
  },
];

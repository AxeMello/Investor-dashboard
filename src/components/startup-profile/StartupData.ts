
export interface StartupTeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface StartupData {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  location: string;
  website: string;
  founded: string;
  employees: string;
  funding: {
    stage: string;
    raised: string;
    goal: string;
    progress: number;
    valuation: string;
  };
  industry: string;
  tags: string[];
  traction: {
    revenue: string;
    growth: string;
    customers: string;
  };
  team: StartupTeamMember[];
  matchScore: number;
}

// Sample data that can be replaced with real API data
export const getStartupData = (): StartupData => {
  return {
    name: "EcoTech Solutions",
    logo: "/placeholder.svg", // Using placeholder for now
    tagline: "Sustainable energy solutions for the modern world",
    description:
      "EcoTech Solutions is developing breakthrough solar technology for residential buildings that increases energy efficiency by 45% compared to traditional solar panels. Our patented nano-material coating enhances light absorption in low-light conditions, making solar viable in previously challenging environments.",
    location: "San Francisco, CA",
    website: "https://ecotechsolutions.example",
    founded: "2021",
    employees: "15-30",
    funding: {
      stage: "Seed",
      raised: "$750K",
      goal: "$1.5M",
      progress: 50,
      valuation: "$5M",
    },
    industry: "CleanTech",
    tags: ["Renewable Energy", "Solar Technology", "Sustainability"],
    traction: {
      revenue: "$210K (2024 YTD)",
      growth: "125% YoY",
      customers: "12 pilot installations",
    },
    team: [
      {
        name: "Sarah Johnson",
        role: "Founder & CEO",
        bio: "Former Head of R&D at SolarTech, PhD in Materials Science from MIT",
        avatar: "SJ",
      },
      {
        name: "James Chen",
        role: "CTO",
        bio: "15 years experience in solar engineering, previously at Tesla Energy",
        avatar: "JC",
      },
      {
        name: "Maria Rodriguez",
        role: "COO",
        bio: "Ex-McKinsey consultant specializing in scaling clean energy startups",
        avatar: "MR",
      },
    ],
    matchScore: 92,
  };
};


import { useState } from "react";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Briefcase,
  Building,
  LineChart,
  Rocket,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("startups");
  const [fundingRange, setFundingRange] = useState([500000]);

  // Placeholder data
  const startups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      description:
        "Developing sustainable energy solutions for residential buildings using breakthrough solar technology.",
      industry: "CleanTech",
      stage: "Seed",
      fundingGoal: "$1.5M",
      location: "San Francisco, CA",
      matchScore: 92,
      featured: true,
    },
    {
      id: 2,
      name: "FinSecure",
      description:
        "Next-generation blockchain security platform for financial institutions with AI-powered threat detection.",
      industry: "Fintech",
      stage: "Series A",
      fundingGoal: "$5M",
      location: "New York, NY",
      matchScore: 88,
      featured: true,
    },
    {
      id: 3,
      name: "HealthAI",
      description:
        "Using machine learning to improve early disease detection and personalized treatment plans.",
      industry: "HealthTech",
      stage: "Seed",
      fundingGoal: "$2M",
      location: "Boston, MA",
      matchScore: 85,
      featured: false,
    },
    {
      id: 4,
      name: "SupplyChain Pro",
      description:
        "Optimizing global supply chains through predictive analytics and real-time tracking.",
      industry: "Logistics",
      stage: "Pre-seed",
      fundingGoal: "$750K",
      location: "Chicago, IL",
      matchScore: 82,
      featured: false,
    },
    {
      id: 5,
      name: "EduLearn Platform",
      description:
        "Interactive learning platform using AI to personalize educational content for K-12 students.",
      industry: "EdTech",
      stage: "Seed",
      fundingGoal: "$1.2M",
      location: "Austin, TX",
      matchScore: 78,
      featured: false,
    },
    {
      id: 6,
      name: "RetailAI",
      description:
        "AI-powered inventory management and demand forecasting for retail businesses.",
      industry: "Retail Tech",
      stage: "Series A",
      fundingGoal: "$4M",
      location: "Seattle, WA",
      matchScore: 75,
      featured: false,
    },
  ];

  const investors = [
    {
      id: 1,
      name: "Innovation Capital",
      description:
        "Early-stage venture capital firm focusing on disruptive technologies in healthcare and sustainability.",
      industries: ["HealthTech", "CleanTech"],
      stages: ["Seed", "Series A"],
      investmentRange: "$500K - $3M",
      location: "San Francisco, CA",
      matchScore: 90,
      featured: true,
    },
    {
      id: 2,
      name: "Digital Frontier Partners",
      description:
        "VC fund specializing in early investments in AI, blockchain, and data analytics startups.",
      industries: ["AI/ML", "Blockchain", "Data Analytics"],
      stages: ["Pre-seed", "Seed"],
      investmentRange: "$250K - $2M",
      location: "New York, NY",
      matchScore: 87,
      featured: true,
    },
    {
      id: 3,
      name: "Green Growth Fund",
      description:
        "Impact investment fund focusing on sustainable technologies and green innovations.",
      industries: ["CleanTech", "AgTech", "Sustainable Materials"],
      stages: ["Seed", "Series A"],
      investmentRange: "$1M - $5M",
      location: "Portland, OR",
      matchScore: 85,
      featured: false,
    },
    {
      id: 4,
      name: "Horizon Ventures",
      description:
        "Tech-focused investment firm with expertise in fintech, SaaS, and consumer apps.",
      industries: ["Fintech", "SaaS", "Consumer Tech"],
      stages: ["Seed", "Series A", "Series B"],
      investmentRange: "$1M - $10M",
      location: "Austin, TX",
      matchScore: 82,
      featured: false,
    },
  ];

  // Filter data based on search term
  const filteredStartups = startups.filter(
    (startup) =>
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInvestors = investors.filter(
    (investor) =>
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.industries.some((industry) =>
        industry.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore <span className="gradient-text">Opportunities</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Discover promising startups and forward-thinking investors
              </p>
            </div>

            <div className="flex items-center w-full max-w-md space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, industry or keyword..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>

          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="startups">Startups</TabsTrigger>
                <TabsTrigger value="investors">Investors</TabsTrigger>
              </TabsList>

              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Industries</SelectLabel>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="healthtech">HealthTech</SelectItem>
                      <SelectItem value="cleantech">CleanTech</SelectItem>
                      <SelectItem value="ai-ml">AI/ML</SelectItem>
                      <SelectItem value="saas">SaaS</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Funding Stage</SelectLabel>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="pre-seed">Pre-seed</SelectItem>
                      <SelectItem value="seed">Seed</SelectItem>
                      <SelectItem value="series-a">Series A</SelectItem>
                      <SelectItem value="series-b">Series B</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="startups" className="space-y-6">
              {filteredStartups.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-medium">No startups found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStartups
                      .filter((startup) => startup.featured)
                      .map((startup) => (
                        <Card
                          key={startup.id}
                          className="overflow-hidden border-2 border-venture-200"
                        >
                          <CardHeader className="relative pb-2">
                            <Badge className="absolute top-4 right-4 bg-venture-600">
                              Featured
                            </Badge>
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <CardTitle>{startup.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" />
                                  {startup.location}
                                </CardDescription>
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                                <Briefcase className="h-6 w-6 text-venture-600" />
                              </div>
                            </div>
                            <div className="mt-1 flex flex-wrap gap-1">
                              <Badge variant="outline">{startup.industry}</Badge>
                              <Badge variant="outline">{startup.stage}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {startup.description}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                Funding Goal
                              </div>
                              <div className="text-sm">{startup.fundingGoal}</div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <div className="flex items-center">
                              <Sparkles className="mr-1 h-4 w-4 text-venture-500" />
                              <span className="text-sm font-medium">
                                Match: {startup.matchScore}%
                              </span>
                            </div>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-venture-600 hover:bg-venture-700"
                            >
                              View Profile
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStartups
                      .filter((startup) => !startup.featured)
                      .map((startup) => (
                        <Card key={startup.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <CardTitle>{startup.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" />
                                  {startup.location}
                                </CardDescription>
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                                <Briefcase className="h-6 w-6 text-venture-600" />
                              </div>
                            </div>
                            <div className="mt-1 flex flex-wrap gap-1">
                              <Badge variant="outline">{startup.industry}</Badge>
                              <Badge variant="outline">{startup.stage}</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {startup.description}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                              <div className="text-sm font-medium">
                                Funding Goal
                              </div>
                              <div className="text-sm">{startup.fundingGoal}</div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <div className="flex items-center">
                              <Sparkles className="mr-1 h-4 w-4 text-venture-500" />
                              <span className="text-sm font-medium">
                                Match: {startup.matchScore}%
                              </span>
                            </div>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-venture-600 hover:bg-venture-700"
                            >
                              View Profile
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value="investors" className="space-y-6">
              {filteredInvestors.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-medium">
                    No investors found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredInvestors
                      .filter((investor) => investor.featured)
                      .map((investor) => (
                        <Card
                          key={investor.id}
                          className="overflow-hidden border-2 border-investor-200"
                        >
                          <CardHeader className="relative pb-2">
                            <Badge className="absolute top-4 right-4 bg-investor-600">
                              Featured
                            </Badge>
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <CardTitle>{investor.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" />
                                  {investor.location}
                                </CardDescription>
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                                <LineChart className="h-6 w-6 text-investor-600" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {investor.description}
                            </p>
                            <div className="space-y-2">
                              <div>
                                <div className="text-sm font-medium mb-1">
                                  Investment Focus
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {investor.industries.map((industry) => (
                                    <Badge
                                      key={industry}
                                      variant="outline"
                                      className="bg-secondary"
                                    >
                                      {industry}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-sm font-medium mb-1">
                                    Stages
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {investor.stages.map((stage) => (
                                      <Badge key={stage} variant="outline">
                                        {stage}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-medium mb-1">
                                    Investment
                                  </div>
                                  <div className="text-sm">
                                    {investor.investmentRange}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <div className="flex items-center">
                              <Sparkles className="mr-1 h-4 w-4 text-investor-500" />
                              <span className="text-sm font-medium">
                                Match: {investor.matchScore}%
                              </span>
                            </div>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-investor-600 hover:bg-investor-700"
                            >
                              View Profile
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredInvestors
                      .filter((investor) => !investor.featured)
                      .map((investor) => (
                        <Card key={investor.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <CardTitle>{investor.name}</CardTitle>
                                <CardDescription className="flex items-center">
                                  <Building className="h-3 w-3 mr-1" />
                                  {investor.location}
                                </CardDescription>
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                                <LineChart className="h-6 w-6 text-investor-600" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {investor.description}
                            </p>
                            <div className="space-y-2">
                              <div>
                                <div className="text-sm font-medium mb-1">
                                  Investment Focus
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {investor.industries.map((industry) => (
                                    <Badge
                                      key={industry}
                                      variant="outline"
                                      className="bg-secondary"
                                    >
                                      {industry}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-sm font-medium mb-1">
                                    Stages
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {investor.stages.map((stage) => (
                                      <Badge key={stage} variant="outline">
                                        {stage}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm font-medium mb-1">
                                    Investment
                                  </div>
                                  <div className="text-sm">
                                    {investor.investmentRange}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between border-t pt-4">
                            <div className="flex items-center">
                              <Sparkles className="mr-1 h-4 w-4 text-investor-500" />
                              <span className="text-sm font-medium">
                                Match: {investor.matchScore}%
                              </span>
                            </div>
                            <Button
                              variant="default"
                              size="sm"
                              className="bg-investor-600 hover:bg-investor-700"
                            >
                              View Profile
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;


import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  Briefcase,
  Building,
  Calendar,
  FileText,
  Globe,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  Wallet,
} from "lucide-react";

const InvestorProfile = () => {
  // Sample data
  const investor = {
    name: "Innovation Capital",
    logo: "/placeholder.svg", // Using placeholder for now
    tagline: "Early-stage venture capital for breakthrough technologies",
    description:
      "Innovation Capital is an early-stage venture capital firm focused on investments in disruptive technologies across healthcare, sustainability, and AI. With a strong track record of supporting entrepreneurs from seed to Series A, we bring not just capital but strategic guidance, operational expertise, and access to our extensive network of industry partners.",
    location: "San Francisco, CA",
    website: "https://innovationcapital.example",
    founded: "2015",
    team: "12 investment professionals",
    fundSize: "$150M",
    industries: ["HealthTech", "CleanTech", "AI/ML", "SaaS"],
    stages: ["Pre-seed", "Seed", "Series A"],
    investmentRange: "$500K - $3M",
    portfolio: {
      companies: 42,
      exits: 8,
      notableInvestments: [
        {
          name: "MedAI Solutions",
          outcome: "Acquired by Johnson & Johnson",
          amount: "$120M",
        },
        {
          name: "GreenTech Systems",
          outcome: "Series C",
          amount: "$45M valuation",
        },
        {
          name: "DataSync",
          outcome: "IPO",
          amount: "$350M market cap",
        },
      ],
    },
    team: [
      {
        name: "Michael Chen",
        role: "Managing Partner",
        bio: "Former tech entrepreneur with 3 successful exits. 15+ years in venture capital.",
        avatar: "MC",
      },
      {
        name: "Jennifer Park",
        role: "Partner, Healthcare",
        bio: "MD/PhD with experience as Chief Medical Officer at biotech startup.",
        avatar: "JP",
      },
      {
        name: "David Rodriguez",
        role: "Partner, CleanTech",
        bio: "Former executive at Tesla Energy, engineering background from Stanford.",
        avatar: "DR",
      },
    ],
    matchScore: 88,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main profile content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={investor.logo} alt={investor.name} />
                  <AvatarFallback className="text-2xl bg-investor-100 text-investor-800">
                    {investor.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">{investor.name}</h1>
                  <p className="text-muted-foreground">{investor.tagline}</p>
                  <div className="flex flex-wrap gap-1">
                    {investor.industries.map((industry) => (
                      <Badge key={industry} variant="outline">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {investor.location}
                    <Separator orientation="vertical" className="h-4" />
                    <Globe className="h-4 w-4" />
                    <a
                      href={investor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  className="bg-gradient-to-r from-investor-600 to-venture-600 hover:bg-gradient-to-r hover:from-investor-700 hover:to-venture-700"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline">
                  <Star className="mr-2 h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline">
                  <Briefcase className="mr-2 h-4 w-4" />
                  View Portfolio
                </Button>
              </div>

              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="criteria">Investment Criteria</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{investor.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Investment Focus</CardTitle>
                      <CardDescription>Key information about investment strategy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Fund Size</div>
                          <div className="text-2xl font-semibold">{investor.fundSize}</div>
                        </div>
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Investment Range</div>
                          <div className="text-xl font-semibold">{investor.investmentRange}</div>
                        </div>
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Portfolio Companies</div>
                          <div className="text-2xl font-semibold">{investor.portfolio.companies}</div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium mb-2">Investment Stages</h3>
                        <div className="flex flex-wrap gap-2">
                          {investor.stages.map((stage) => (
                            <Badge key={stage} className="bg-investor-100 text-investor-800 hover:bg-investor-200">
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="team" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Investment Team</CardTitle>
                      <CardDescription>The key people driving investment decisions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {investor.team.map((member) => (
                        <div key={member.name} className="flex gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarFallback className="bg-secondary">
                              {member.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{member.name}</h3>
                            <div className="text-sm text-muted-foreground mb-1">{member.role}</div>
                            <p className="text-sm">{member.bio}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="portfolio" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio Performance</CardTitle>
                      <CardDescription>Notable investments and outcomes</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center mb-4">
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Portfolio Companies</span>
                            <span className="text-sm font-medium">{investor.portfolio.companies}</span>
                          </div>
                          <Progress value={(investor.portfolio.companies / 50) * 100} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">Exits</span>
                            <span className="text-sm font-medium">{investor.portfolio.exits}</span>
                          </div>
                          <Progress value={(investor.portfolio.exits / investor.portfolio.companies) * 100} className="h-2" />
                        </div>
                      </div>
                      
                      <h3 className="font-medium mb-2">Notable Investments</h3>
                      <div className="space-y-3">
                        {investor.portfolio.notableInvestments.map((investment, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="font-medium">{investment.name}</div>
                                <div className="text-sm text-muted-foreground">{investment.outcome}</div>
                              </div>
                              <Badge variant="outline" className="ml-2">
                                {investment.amount}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="criteria" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Investment Criteria</CardTitle>
                      <CardDescription>What this investor looks for in startups</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Preferred Industries</h3>
                          <div className="flex flex-wrap gap-2">
                            {investor.industries.map((industry) => (
                              <Badge key={industry} className="bg-investor-100 text-investor-800">
                                {industry}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-2">Investment Thesis</h3>
                          <div className="p-4 border rounded-lg space-y-2">
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Disruptive technologies with potential for exponential growth</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Strong technical teams with domain expertise</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Large addressable markets ($1B+ potential)</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Demonstrable competitive advantage or proprietary technology</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Business models with strong unit economics and scalability</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-2">What We Don't Invest In</h3>
                          <div className="p-4 border rounded-lg space-y-2">
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Service-based businesses with limited scalability</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Companies without technical differentiation</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Post-Series A companies (too late-stage)</p>
                            </div>
                            <div className="flex items-start">
                              <div className="mr-2 mt-0.5 flex-shrink-0">•</div>
                              <p>Real estate, restaurants, and traditional retail</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right sidebar */}
            <div className="md:w-1/3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-investor-600" />
                    Match Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{investor.matchScore}%</div>
                    <p className="text-sm text-muted-foreground">
                      Your startup aligns with this investor's criteria
                    </p>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Industry Fit</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Stage Fit</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Location Fit</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Investment Size</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">info@innovationcapital.example</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">555 Market Street, San Francisco, CA 94105</span>
                  </div>
                  <Button className="w-full mt-2">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Pitch
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Investors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>FV</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Future Ventures</div>
                      <div className="text-sm text-muted-foreground">Seed, Series A</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>TP</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Tech Partners</div>
                      <div className="text-sm text-muted-foreground">Pre-seed, Seed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>GF</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Growth Fund</div>
                      <div className="text-sm text-muted-foreground">Seed, Series A, Series B</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestorProfile;

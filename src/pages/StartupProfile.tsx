
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
  Download,
  FileText,
  Globe,
  LineChart,
  Mail,
  MapPin,
  MessageSquare,
  Star,
  TrendingUp,
  Users,
  Sparkles,
} from "lucide-react";

const StartupProfile = () => {
  // Sample data
  const startup = {
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
                  <AvatarImage src={startup.logo} alt={startup.name} />
                  <AvatarFallback className="text-2xl bg-venture-100 text-venture-800">
                    {startup.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h1 className="text-3xl font-bold">{startup.name}</h1>
                    <Badge className="w-fit bg-venture-100 text-venture-800 hover:bg-venture-200">
                      {startup.funding.stage}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{startup.tagline}</p>
                  <div className="flex flex-wrap gap-1">
                    {startup.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {startup.location}
                    <Separator orientation="vertical" className="h-4" />
                    <Globe className="h-4 w-4" />
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Website
                    </a>
                    <Separator orientation="vertical" className="h-4" />
                    <Users className="h-4 w-4" />
                    {startup.employees} employees
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  className="bg-gradient-to-r from-venture-600 to-investor-600 hover:bg-gradient-to-r hover:from-venture-700 hover:to-investor-700"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact
                </Button>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Pitch Deck
                </Button>
                <Button variant="outline">
                  <Star className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>

              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{startup.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Traction</CardTitle>
                      <CardDescription>Current business metrics and growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Revenue</div>
                          <div className="text-2xl font-semibold">{startup.traction.revenue}</div>
                        </div>
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Growth</div>
                          <div className="text-2xl font-semibold flex items-center">
                            {startup.traction.growth}
                            <TrendingUp className="ml-1 h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <div className="flex flex-col p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Customers</div>
                          <div className="text-2xl font-semibold">{startup.traction.customers}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="team" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Leadership Team</CardTitle>
                      <CardDescription>The key people behind {startup.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {startup.team.map((member) => (
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
                
                <TabsContent value="financials" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Overview</CardTitle>
                      <CardDescription>Funding and financial health</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <div className="text-sm font-medium">Fundraising Progress</div>
                          <div className="text-sm font-medium">
                            {startup.funding.raised} / {startup.funding.goal}
                          </div>
                        </div>
                        <Progress value={startup.funding.progress} />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Current Valuation</div>
                          <div className="text-2xl font-semibold">{startup.funding.valuation}</div>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <div className="text-sm text-muted-foreground">Founded</div>
                          <div className="text-2xl font-semibold flex items-center">
                            {startup.founded}
                            <Calendar className="ml-2 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg bg-muted/50 text-center">
                        <p className="text-sm text-muted-foreground">
                          Detailed financial information available after signing NDA
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download className="mr-1 h-4 w-4" />
                          Request Financial Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="documents" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Documents</CardTitle>
                      <CardDescription>Company documents and materials</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span>Pitch Deck (2024)</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span>Company Overview</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span>Product Specifications</span>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
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
                    <Sparkles className="mr-2 h-5 w-5 text-venture-600" />
                    Match Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{startup.matchScore}%</div>
                    <p className="text-sm text-muted-foreground">
                      This startup aligns with your investment criteria
                    </p>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Industry Fit</span>
                        <span>95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Stage Fit</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Location Fit</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Team Strength</span>
                        <span>96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
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
                    <span className="text-sm">contact@ecotechsolutions.example</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">123 Green Street, San Francisco, CA 94107</span>
                  </div>
                  <Button className="w-full mt-2">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Similar Startups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">SolarTech Innovations</div>
                      <div className="text-sm text-muted-foreground">CleanTech, Series A</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>GE</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Green Energy Systems</div>
                      <div className="text-sm text-muted-foreground">CleanTech, Seed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">RenewableSol</div>
                      <div className="text-sm text-muted-foreground">CleanTech, Pre-seed</div>
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

export default StartupProfile;
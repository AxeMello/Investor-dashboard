
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Bell,
  Calendar,
  FileText,
  LineChart,
  MessageSquare,
  Plus,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function EntrepreneurDashboard({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Placeholder data
  const matchScores = [
    { name: "Innovation Capital", score: 92, industry: "Technology" },
    { name: "Horizon Ventures", score: 88, industry: "Fintech" },
    { name: "Green Growth Fund", score: 85, industry: "Sustainability" },
    { name: "Digital Frontier Partners", score: 82, industry: "AI/ML" },
  ];

  const upcomingTasks = [
    { title: "Complete pitch deck", deadline: "Tomorrow, 5:00 PM", status: "urgent" },
    { title: "Investor meeting preparation", deadline: "May 15, 2:30 PM", status: "normal" },
    { title: "Financial projections review", deadline: "May 18, 10:00 AM", status: "normal" },
  ];

  const recentMessages = [
    {
      sender: "Sarah Chen",
      company: "Innovation Capital",
      message: "Thanks for sending your pitch deck. I'd like to schedule a call to discuss your venture in more detail.",
      time: "2 hours ago",
      avatar: "SC",
      read: false,
    },
    {
      sender: "Michael Rodriguez",
      company: "Horizon Ventures",
      message: "I've reviewed your financial projections and have some questions regarding your customer acquisition strategy.",
      time: "Yesterday",
      avatar: "MR",
      read: true,
    },
  ];

  const dashboardMetrics = [
    {
      title: "Profile Completion",
      value: 85,
      description: "Complete your profile to increase investor interest",
      icon: <Users className="h-4 w-4 text-venture-600" />,
    },
    {
      title: "Investor Matches",
      value: 24,
      description: "Potential investors matched to your venture",
      icon: <Sparkles className="h-4 w-4 text-venture-600" />,
    },
    {
      title: "Pitch Deck Score",
      value: 78,
      description: "AI analysis of your pitch effectiveness",
      icon: <FileText className="h-4 w-4 text-venture-600" />,
    },
    {
      title: "Messages",
      value: 12,
      description: "Active conversations with investors",
      icon: <MessageSquare className="h-4 w-4 text-venture-600" />,
    },
  ];

  return (
    <div className={cn("p-6 space-y-6", className)}>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Entrepreneur Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your startup profile, connect with investors, and track your progress
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardMetrics.map((metric, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary rounded-md">{metric.icon}</div>
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {typeof metric.value === "number" && metric.title.includes("Completion") ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                ) : (
                  metric.value
                )}
              </div>
              <p className="text-xs text-muted-foreground pt-1">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="investors">Investor Matches</TabsTrigger>
          <TabsTrigger value="pitch">Pitch Analysis</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Top Investor Matches</CardTitle>
                <CardDescription>
                  Investors that are most aligned with your startup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchScores.map((match, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-venture-200 to-investor-300 flex items-center justify-center text-foreground font-medium">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{match.name}</div>
                          <div className="text-sm text-muted-foreground">{match.industry}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium">{match.score}%</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="w-full" size="sm">
                    View All Matches
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>
                  Actions to improve your investor readiness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task, i) => (
                    <div key={i} className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="font-medium">{task.title}</div>
                          {task.status === "urgent" && (
                            <Badge variant="destructive">Urgent</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {task.deadline}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Complete
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="w-full" size="sm">
                    <Plus className="mr-1 h-4 w-4" />
                    Add Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>
                Stay on top of your investor communications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message, i) => (
                  <div key={i} className={cn("p-4 rounded-lg", message.read ? "bg-background" : "bg-secondary")}>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{message.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{message.sender}</div>
                          <div className="text-sm text-muted-foreground">{message.company}</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{message.time}</div>
                    </div>
                    <div className="mt-2 text-sm">{message.message}</div>
                    <div className="mt-3 flex justify-end">
                      <Button size="sm" variant="secondary">
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="w-full" size="sm">
                  View All Messages
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="investors">
          <Card>
            <CardHeader>
              <CardTitle>Investor Matches</CardTitle>
              <CardDescription>View and connect with your matched investors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain a comprehensive list of matched investors with filtering options.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pitch">
          <Card>
            <CardHeader>
              <CardTitle>Pitch Deck Analysis</CardTitle>
              <CardDescription>AI-powered insights to improve your pitch</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain AI analysis of your pitch deck with specific recommendations.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
              <CardDescription>Communicate with potential investors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain a messaging interface for secure communications.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function InvestorDashboard({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Placeholder data
  const recommendedStartups = [
    { name: "EcoTech Solutions", industry: "CleanTech", match: 94, stage: "Seed" },
    { name: "FinSecure", industry: "Fintech", match: 91, stage: "Series A" },
    { name: "HealthAI", industry: "HealthTech", match: 87, stage: "Seed" },
    { name: "SupplyChain Pro", industry: "Logistics", match: 84, stage: "Pre-seed" },
  ];

  const portfolioPerformance = [
    { name: "Q1", value: 30 },
    { name: "Q2", value: 45 },
    { name: "Q3", value: 52 },
    { name: "Q4", value: 80 },
  ];

  const upcomingMeetings = [
    { startup: "EcoTech Solutions", date: "Tomorrow, 2:00 PM", status: "confirmed" },
    { startup: "FinSecure", date: "May 15, 11:30 AM", status: "pending" },
  ];

  const dashboardMetrics = [
    {
      title: "Startups Reviewed",
      value: 35,
      description: "Total startups evaluated",
      icon: <FileText className="h-4 w-4 text-investor-600" />,
    },
    {
      title: "Active Deals",
      value: 8,
      description: "Deals in active discussion",
      icon: <Sparkles className="h-4 w-4 text-investor-600" />,
    },
    {
      title: "Portfolio Companies",
      value: 12,
      description: "Current investments",
      icon: <BarChart3 className="h-4 w-4 text-investor-600" />,
    },
    {
      title: "Unread Messages",
      value: 5,
      description: "From founders and co-investors",
      icon: <MessageSquare className="h-4 w-4 text-investor-600" />,
    },
  ];

  return (
    <div className={cn("p-6 space-y-6", className)}>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Investor Dashboard</h1>
        <p className="text-muted-foreground">
          Discover promising startups, manage your portfolio, and track investment opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardMetrics.map((metric, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary rounded-md">{metric.icon}</div>
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground pt-1">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="startups">Startup Matches</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recommended Startups</CardTitle>
                <CardDescription>
                  Startups that match your investment criteria
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedStartups.map((startup, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-investor-200 to-venture-200 flex items-center justify-center text-foreground font-medium">
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-medium">{startup.name}</div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{startup.industry}</span>
                            <span>•</span>
                            <Badge variant="outline">{startup.stage}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium">{startup.match}%</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="w-full" size="sm">
                    View All Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>
                  Scheduled meetings with founders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting, i) => (
                    <div key={i} className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <div className="font-medium">{meeting.startup}</div>
                          {meeting.status === "confirmed" ? (
                            <Badge className="bg-green-500">Confirmed</Badge>
                          ) : (
                            <Badge variant="outline">Pending</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          {meeting.date}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="w-full" size="sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    View Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>
                Track the performance of your investments
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              {/* Placeholder for chart */}
              <div className="text-center text-muted-foreground">
                <LineChart className="h-16 w-16 mx-auto mb-2 opacity-50" />
                <p>Performance chart visualization will be available in future versions</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="startups">
          <Card>
            <CardHeader>
              <CardTitle>Startup Matches</CardTitle>
              <CardDescription>Browse startup opportunities matching your criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain a comprehensive discovery interface for startups.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Management</CardTitle>
              <CardDescription>Track and manage your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain portfolio analytics and management tools.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meetings">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Schedule</CardTitle>
              <CardDescription>Manage your meetings with founders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground pb-4">
                This section will contain a calendar interface integrated with scheduling tools.
                (To be implemented in later phases)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

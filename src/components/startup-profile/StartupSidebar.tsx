
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Building, Mail, MessageSquare, Sparkles } from "lucide-react";

interface StartupSidebarProps {
  startup: {
    matchScore: number;
    name: string;
  };
}

export function StartupSidebar({ startup }: StartupSidebarProps) {
  return (
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
  );
}

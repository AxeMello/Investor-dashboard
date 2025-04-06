
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FileText,
  Globe,
  MapPin,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

interface StartupHeaderProps {
  startup: {
    name: string;
    logo: string;
    tagline: string;
    tags: string[];
    location: string;
    website: string;
    employees: string;
    funding: {
      stage: string;
    };
  };
}

export function StartupHeader({ startup }: StartupHeaderProps) {
  return (
    <>
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
        <Button className="bg-gradient-to-r from-venture-600 to-investor-600 hover:bg-gradient-to-r hover:from-venture-700 hover:to-investor-700">
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
    </>
  );
}

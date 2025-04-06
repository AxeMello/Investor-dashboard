
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for community events
const events = [
  {
    id: 1,
    title: "Startup Pitch Night",
    description: "Join us for an evening of inspiring pitches from early-stage startups. Network with founders, investors, and industry experts.",
    date: "April 15, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Innovation Hub, San Francisco",
    attendees: 120,
    type: "in-person",
    tags: ["networking", "pitch", "founders"],
  },
  {
    id: 2,
    title: "Venture Capital Trends Webinar",
    description: "Expert panel discussing the latest trends in venture capital funding and what startups should focus on to attract investment in today's market.",
    date: "April 22, 2025",
    time: "11:00 AM - 12:30 PM",
    location: "Online (Zoom)",
    attendees: 250,
    type: "online",
    tags: ["funding", "vc", "webinar"],
  },
  {
    id: 3,
    title: "Founders Mastermind Group",
    description: "Monthly mastermind session for founders to share challenges, get feedback, and learn from peers in a supportive environment.",
    date: "April 28, 2025",
    time: "4:00 PM - 6:00 PM",
    location: "Hybrid (WeWork Downtown & Zoom)",
    attendees: 35,
    type: "hybrid",
    tags: ["founders", "mastermind", "peer-learning"],
  },
];

export function CommunityEvents() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <Button>Submit Event</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <Badge 
                    className={
                      event.type === "online" 
                        ? "bg-green-100 text-green-800 hover:bg-green-200" 
                        : event.type === "hybrid"
                        ? "bg-purple-100 text-purple-800 hover:bg-purple-200"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    }
                  >
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                  <CardTitle className="mt-2 text-xl">{event.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{event.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Register <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button variant="outline">View All Events</Button>
      </div>
    </div>
  );
}

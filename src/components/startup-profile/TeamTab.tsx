
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TeamTabProps {
  startup: {
    name: string;
    team: TeamMember[];
  };
}

export function TeamTab({ startup }: TeamTabProps) {
  return (
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
  );
}


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface OverviewTabProps {
  startup: {
    description: string;
    traction: {
      revenue: string;
      growth: string;
      customers: string;
    };
  };
}

export function OverviewTab({ startup }: OverviewTabProps) {
  return (
    <div className="space-y-4">
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
    </div>
  );
}

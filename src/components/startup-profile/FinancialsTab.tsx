
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Download } from "lucide-react";

interface FinancialsTabProps {
  startup: {
    funding: {
      raised: string;
      goal: string;
      progress: number;
      valuation: string;
    };
    founded: string;
  };
}

export function FinancialsTab({ startup }: FinancialsTabProps) {
  return (
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
  );
}

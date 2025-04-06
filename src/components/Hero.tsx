
import { ArrowRight, BarChart2, Briefcase, LineChart, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="gradient-text">Connecting</span> Visionaries <br />
                with <span className="gradient-text">Capital</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our AI-powered platform matches entrepreneurs with their perfect investors,
                streamlining the venture capital process through smart technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-venture-600 to-investor-600 hover:bg-gradient-to-r hover:from-venture-700 hover:to-investor-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline">
                  Explore Opportunities
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 border-background",
                        i % 2 === 0 ? "bg-venture-500" : "bg-investor-500"
                      )}
                    >
                      <span className="text-xs font-medium text-white">{i + 1}</span>
                    </div>
                  ))}
              </div>
              <div className="text-muted-foreground">
                Trusted by <span className="font-medium text-foreground">2,000+</span> users
              </div>
            </div>
          </div>
          <div className="relative lg:block">
            <div className="absolute inset-0 bg-gradient-radial from-venture-100 to-transparent opacity-40 blur-3xl" />
            <div className="relative space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-lg p-4 flex flex-col gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-venture-100 rounded-full p-2 w-min">
                    <Briefcase className="h-4 w-4 text-venture-700" />
                  </div>
                  <h3 className="font-medium">For Entrepreneurs</h3>
                  <p className="text-xs text-muted-foreground">Find the right investors for your startup's vision</p>
                </div>
                <div className="glass-card rounded-lg p-4 flex flex-col gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-investor-100 rounded-full p-2 w-min">
                    <LineChart className="h-4 w-4 text-investor-700" />
                  </div>
                  <h3 className="font-medium">For Investors</h3>
                  <p className="text-xs text-muted-foreground">Discover promising startups aligned with your interests</p>
                </div>
              </div>
              <div className="glass-card rounded-lg p-6 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">AI Matching Score</h3>
                  <span className="text-sm text-muted-foreground">Example</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Tech Innovation", score: 95 },
                    { name: "Market Fit", score: 87 },
                    { name: "Team Experience", score: 92 },
                    { name: "Growth Potential", score: 89 },
                  ].map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-medium">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <div
                          className="h-2 bg-gradient-to-r from-venture-500 to-investor-500 rounded-full"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-lg p-4 flex flex-col gap-2 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-gradient-to-r from-venture-100 to-investor-100 rounded-full p-2 w-min">
                    <Rocket className="h-4 w-4 text-venture-700" />
                  </div>
                  <span className="text-xs text-venture-600 bg-venture-50 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-medium">Blockchain Smart Contracts</h3>
                <p className="text-xs text-muted-foreground">Secure and transparent investment agreements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import {
  BarChart2,
  Brain,
  FileText,
  Link2,
  MessageSquare,
  Search,
  Shield,
  Users,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI-Driven Matching",
      description:
        "Our advanced algorithms connect entrepreneurs with investors based on interests, goals, and investment history.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Pitch Deck Analysis",
      description:
        "AI-powered review of your pitch deck to highlight strengths and suggest improvements.",
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "Blockchain Agreements",
      description:
        "Secure, transparent and immutable agreements using blockchain technology.",
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Investment Insights",
      description:
        "Data-driven insights into market trends, startup valuations, and portfolio analytics.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified Profiles",
      description:
        "KYC verification ensures all platform participants are legitimate and trustworthy.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Secure Messaging",
      description:
        "End-to-end encrypted communication between entrepreneurs and investors.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Advanced Search",
      description:
        "Find the perfect match with our detailed filtering and search capabilities.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Network",
      description:
        "Connect with like-minded entrepreneurs and investors to share experiences and advice.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powered by <span className="gradient-text">AI & Blockchain</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines cutting-edge technology with expert industry knowledge
              to revolutionize how startups and investors connect.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-5 shadow transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

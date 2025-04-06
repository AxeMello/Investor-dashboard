
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart2,
  Briefcase,
  ChevronDown,
  Menu,
  MessageCircle,
  Search,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const routes = [
    {
      name: "Explore",
      href: "/explore",
      icon: <Search className="h-4 w-4 mr-2" />,
    },
    {
      name: "For Entrepreneurs",
      href: "/entrepreneurs",
      icon: <Briefcase className="h-4 w-4 mr-2" />,
    },
    {
      name: "For Investors",
      href: "/investors",
      icon: <BarChart2 className="h-4 w-4 mr-2" />,
    },
    {
      name: "Community",
      href: "/community",
      icon: <Users className="h-4 w-4 mr-2" />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="hidden sm:inline-block">
              <div className="font-bold text-xl bg-gradient-to-r from-venture-600 to-investor-600 text-transparent bg-clip-text">Ignite Venture Spark</div>
            </span>
            <span className="sm:hidden">
              <div className="font-bold text-xl bg-gradient-to-r from-venture-600 to-investor-600 text-transparent bg-clip-text">IVS</div>
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-gradient-to-r from-venture-600 to-investor-600 hover:bg-gradient-to-r hover:from-venture-700 hover:to-investor-700">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b shadow-lg",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container py-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                to={route.href}
                className="flex items-center p-2 text-sm font-medium transition-colors hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.icon}
                {route.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-venture-600 to-investor-600">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

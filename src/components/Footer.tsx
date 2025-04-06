
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-2">
          <Link to="/" className="font-bold text-xl bg-gradient-to-r from-venture-600 to-investor-600 text-transparent bg-clip-text">
            Ignite Venture Spark
          </Link>
          <p className="text-sm text-muted-foreground">
            Connecting visionary entrepreneurs with forward-thinking investors through AI-powered matchmaking.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/entrepreneurs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  For Entrepreneurs
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 border-t">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ignite Venture Spark. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}

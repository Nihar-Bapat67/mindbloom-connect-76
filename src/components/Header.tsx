import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    toast({
      title: "Login Portal",
      description: "Institutional login portal is currently being prepared. Contact us for early access!",
    });
  };

  const handleGetStarted = () => {
    toast({
      title: "Get Started with MindBridge",
      description: "Let's connect! Please fill out our contact form to begin your journey.",
    });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold gradient-text">MindBridge</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/about" className="story-link text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="/resources" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#features" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#contact" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={handleLogin}>Login</Button>
          <Button onClick={handleGetStarted}>Get Started</Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/about" className="story-link text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/resources" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#features" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#contact" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" onClick={handleLogin}>Login</Button>
              <Button onClick={handleGetStarted}>Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
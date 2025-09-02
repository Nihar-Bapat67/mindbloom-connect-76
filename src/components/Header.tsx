import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold gradient-text">MindBridge</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#implementation" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Implementation
          </a>
          <a href="#contact" className="story-link text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
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
            <a href="#features" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#implementation" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Implementation
            </a>
            <a href="#contact" className="story-link text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost">Login</Button>
              <Button>Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
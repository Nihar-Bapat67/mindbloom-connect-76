import { Button } from "@/components/ui/button";
import { Brain, Menu, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
  };

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer hover-scale" 
          onClick={handleLogoClick}
        >
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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={handleLogin}>Login</Button>
              <Button onClick={handleGetStarted}>Get Started</Button>
            </>
          )}
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
              {user ? (
                <>
                  <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" onClick={handleLogin}>Login</Button>
                  <Button onClick={handleGetStarted}>Get Started</Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Brain } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students supporting each other in mental wellness"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Mental Wellness</span>
              <br />
              for Every Student
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              A comprehensive digital platform providing AI-guided support, confidential counseling, 
              and peer connections to help college students thrive academically and emotionally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">100% Confidential</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full p-3 w-fit mx-auto mb-2">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground">Peer Support</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-3 w-fit mx-auto mb-2">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm text-muted-foreground">AI-Guided Care</p>
              </div>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 animate-float">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Quick Mental Health Check</h3>
                  <div className="space-y-3">
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      How are you feeling today?
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm">
                        A bit anxious
                      </div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-3 text-sm text-secondary">
                      I understand. Let me share some breathing exercises that might help...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
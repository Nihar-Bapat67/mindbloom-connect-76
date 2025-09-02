import { Card } from "@/components/ui/card";
import { 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  BarChart3,
  Shield,
  Heart,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI-Guided First-Aid Support",
      description: "24/7 interactive chatbot offering immediate coping strategies and professional referrals when needed.",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Confidential Booking System",
      description: "Secure appointment scheduling with on-campus counselors and mental health helplines.",
      color: "secondary"
    },
    {
      icon: BookOpen,
      title: "Psychoeducational Resources",
      description: "Comprehensive library of videos, audio guides, and wellness content in regional languages.",
      color: "accent"
    },
    {
      icon: Users,
      title: "Peer Support Platform",
      description: "Moderated community forums with trained student volunteers for peer-to-peer support.",
      color: "wellness"
    },
    {
      icon: BarChart3,
      title: "Admin Dashboard",
      description: "Anonymous analytics helping institutions recognize trends and plan effective interventions.",
      color: "support"
    }
  ];

  const trustPoints = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "End-to-end encryption with HIPAA-compliant data protection"
    },
    {
      icon: Heart,
      title: "Culturally Sensitive",
      description: "Designed for Indian college students with regional language support"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock access to mental health resources and support"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Mental Health Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform addresses the critical gaps in college mental health support with 
            evidence-based, culturally appropriate, and accessible digital interventions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
                <div className={`bg-${feature.color}/10 rounded-full p-3 w-fit mb-4`}>
                  <Icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Built for Trust & Security
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
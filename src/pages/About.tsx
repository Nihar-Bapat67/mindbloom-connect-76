import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Users, 
  Target, 
  Award,
  Shield,
  Globe,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is designed with empathy and understanding at its core."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Complete confidentiality and data protection for all users."
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Tailored for Indian college students with regional language support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge AI technology combined with human expertise."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Singh",
      role: "Chief Clinical Officer",
      expertise: "Clinical Psychology, Digital Health",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Rahul Krishnan",
      role: "CTO",
      expertise: "AI/ML, Healthcare Technology",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Head of Research",
      expertise: "Mental Health Research, Academia",
      image: "/api/placeholder/64/64"
    },
    {
      name: "Sneha Patel",
      role: "UX Director",
      expertise: "Digital Accessibility, User Experience",
      image: "/api/placeholder/64/64"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Healthcare Innovation Award 2024",
      description: "Recognized for excellence in digital mental health solutions"
    },
    {
      icon: Users,
      title: "500+ Partner Institutions",
      description: "Trusted by leading universities across India"
    },
    {
      icon: Target,
      title: "2M+ Students Supported",
      description: "Reaching students nationwide with mental health resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">About MindBridge</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bridging the Gap in 
            <span className="gradient-text"> Mental Healthcare</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to make mental health support accessible, stigma-free, 
            and culturally appropriate for every college student in India.
          </p>
        </div>

        {/* Our Story */}
        <Card className="p-8 md:p-12 mb-16 animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                MindBridge was born from a simple yet powerful observation: despite 73% of college 
                students experiencing mental health challenges, only 15% seek professional help due 
                to stigma, accessibility barriers, and cultural hesitations.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded by a team of clinical psychologists, technologists, and educators, 
                we set out to create a platform that feels safe, familiar, and effective for 
                Indian college students.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to support over 2 million students across 500+ institutions, 
                providing 24/7 AI-guided support, peer connections, and professional counseling 
                in multiple regional languages.
              </p>
              <Button className="group">
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2,000,000+</div>
                <div className="text-lg opacity-90 mb-6">Students Supported</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="opacity-80">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="opacity-80">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to student mental health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Recognition for our impact in digital mental health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 text-center bg-gradient-hero text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Mental Health at Your Institution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions that are already making a difference in their students' lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="border-background text-background hover:bg-background/10">
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Users, 
  Settings, 
  Rocket, 
  Monitor,
  BookOpen,
  Phone,
  ArrowRight
} from "lucide-react";

const Implementation = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Assessment & Planning",
      duration: "2-3 weeks",
      icon: CheckCircle,
      color: "primary",
      tasks: [
        "Institutional needs assessment",
        "Stakeholder consultation meetings", 
        "Customization requirements gathering",
        "Technical infrastructure review"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Setup & Configuration",
      duration: "3-4 weeks",
      icon: Settings,
      color: "secondary",
      tasks: [
        "Platform deployment and configuration",
        "Regional language integration",
        "Counselor portal setup",
        "Admin dashboard customization"
      ]
    },
    {
      phase: "Phase 3",
      title: "Training & Integration",
      duration: "2-3 weeks", 
      icon: Users,
      color: "accent",
      tasks: [
        "Staff and counselor training programs",
        "Student volunteer orientation",
        "Integration with existing systems",
        "Testing and quality assurance"
      ]
    },
    {
      phase: "Phase 4",
      title: "Launch & Support",
      duration: "Ongoing",
      icon: Rocket,
      color: "wellness",
      tasks: [
        "Soft launch with pilot groups",
        "Full institutional rollout",
        "24/7 technical support",
        "Continuous monitoring and optimization"
      ]
    }
  ];

  const supportServices = [
    {
      icon: Monitor,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance for technical issues and platform maintenance"
    },
    {
      icon: BookOpen,
      title: "Training & Resources",
      description: "Comprehensive training materials and ongoing educational resources"
    },
    {
      icon: Phone,
      title: "Dedicated Account Manager",
      description: "Personal support throughout implementation and beyond"
    }
  ];

  return (
    <section id="implementation" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Implementation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-phase implementation ensures smooth deployment with minimal 
            disruption to your existing operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-${phase.color}/10 rounded-full p-3 flex-shrink-0`}>
                    <Icon className={`h-6 w-6 text-${phase.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium text-${phase.color} uppercase tracking-wide`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Comprehensive Support Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="group">
              Schedule Implementation Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
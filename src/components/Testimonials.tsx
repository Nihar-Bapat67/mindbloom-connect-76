import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Director of Student Affairs, IIT Delhi",
      image: "/api/placeholder/64/64",
      content: "MindBridge has transformed how we approach student mental health. The AI-guided support provides immediate help while our counselors focus on complex cases. Student engagement has increased by 300%.",
      rating: 5,
      institution: "Indian Institute of Technology Delhi"
    },
    {
      name: "Rahul Krishnan",
      role: "Student, Final Year Engineering",
      image: "/api/placeholder/64/64",
      content: "The peer support platform helped me realize I wasn't alone in my struggles. The regional language support made it so much easier to express myself authentically.",
      rating: 5,
      institution: "NIT Trichy"
    },
    {
      name: "Prof. Anjali Mehta",
      role: "Head of Psychology Department",
      image: "/api/placeholder/64/64",
      content: "The analytics dashboard gives us unprecedented insights into student mental health trends. We can now implement preventive measures rather than just reactive support.",
      rating: 5,
      institution: "Jadavpur University"
    },
    {
      name: "Sneha Patel",
      role: "Mental Health Counselor",
      image: "/api/placeholder/64/64",
      content: "The confidential booking system has eliminated the stigma barrier. Students who would never walk into my office are now scheduling appointments regularly.",
      rating: 5,
      institution: "Mumbai University"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Educational Institutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how MindBridge is making a real difference in student mental health 
            across India's top colleges and universities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover-scale animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join 500+ Institutions Already Using MindBridge
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-sm opacity-90">Reduced Crisis Incidents</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15min</div>
              <div className="text-sm opacity-90">Average Response Time</div>
            </div>
          </div>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors pulse-glow">
            Start Your Implementation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
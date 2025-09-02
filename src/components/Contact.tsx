import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building,
  Users,
  Globe
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    studentCount: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      info: "support@mindbridge.edu",
      subInfo: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      info: "+91 1800-MENTAL-1",
      subInfo: "24/7 Crisis Support Available"
    },
    {
      icon: MapPin,
      title: "Head Office",
      info: "Bangalore, Karnataka, India",
      subInfo: "Serving institutions nationwide"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      subInfo: "Emergency support available 24/7"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started with MindBridge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform mental health support at your institution? 
            Let's discuss how MindBridge can be customized for your specific needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6">Request a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@institution.edu"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="institution">Institution Name *</Label>
                <Input
                  id="institution"
                  value={formData.institution}
                  onChange={(e) => handleInputChange("institution", e.target.value)}
                  placeholder="Your college/university name"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="director">Director/Dean</SelectItem>
                      <SelectItem value="counselor">Mental Health Counselor</SelectItem>
                      <SelectItem value="student-affairs">Student Affairs Officer</SelectItem>
                      <SelectItem value="it-admin">IT Administrator</SelectItem>
                      <SelectItem value="faculty">Faculty Member</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="studentCount">Student Population</Label>
                  <Select onValueChange={(value) => handleInputChange("studentCount", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Number of students" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1000">Less than 1,000</SelectItem>
                      <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                      <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
                      <SelectItem value="10000-25000">10,000 - 25,000</SelectItem>
                      <SelectItem value=">25000">More than 25,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your needs</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Describe your current mental health support challenges and what you're looking for..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Request Demo & Pricing
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="grid gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 hover-scale">
                      <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{contact.title}</h4>
                        <p className="text-foreground">{contact.info}</p>
                        <p className="text-sm text-muted-foreground">{contact.subInfo}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="p-6 bg-primary text-primary-foreground animate-scale-in">
              <h4 className="text-lg font-semibold mb-4">Why Choose MindBridge?</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="h-5 w-5" />
                  <span>Trusted by 500+ educational institutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>Supporting 2M+ students nationwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5" />
                  <span>Multi-language support for cultural sensitivity</span>
                </div>
              </div>
            </Card>

            <div className="bg-muted/50 rounded-xl p-6 animate-fade-in">
              <h4 className="font-semibold mb-3">What happens next?</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                  <span>We'll contact you within 24 hours to schedule a personalized demo</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                  <span>Our team will assess your specific institutional needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                  <span>We'll provide a customized implementation plan and pricing</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
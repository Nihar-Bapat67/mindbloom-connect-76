import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">MindBridge</span>
            </div>
            <p className="text-background/80 mb-4">
              Bridging the gap in college mental health support through innovative, 
              culturally-sensitive digital solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">AI Support Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Counselor Booking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resource Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Peer Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Admin Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Mental Health Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crisis Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research & Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Training Materials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@mindbridge.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 1800-MENTAL-1</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Department of Student Welfare<br />Higher Education Institutions</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 mb-4 md:mb-0">
            © 2024 MindBridge Digital Psychological Intervention System. All rights reserved.
          </p>
          <div className="flex space-x-6 text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Play, 
  Download,
  Search,
  Filter,
  Heart,
  Brain,
  Users,
  Shield,
  Clock,
  Star
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "anxiety", name: "Anxiety Management", icon: Heart },
    { id: "depression", name: "Depression Support", icon: Brain },
    { id: "stress", name: "Stress Relief", icon: Shield },
    { id: "peer", name: "Peer Support", icon: Users }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Student's Guide",
      description: "Comprehensive guide to recognizing and managing anxiety symptoms during college years.",
      type: "guide",
      category: "anxiety",
      duration: "15 min read",
      downloads: 2847,
      rating: 4.8,
      tags: ["anxiety", "self-help", "coping"],
      featured: true
    },
    {
      id: 2,
      title: "Mindful Breathing Exercise",
      description: "Guided meditation audio for stress relief and mental clarity.",
      type: "audio",
      category: "stress",
      duration: "10 min",
      downloads: 1924,
      rating: 4.9,
      tags: ["meditation", "breathing", "mindfulness"],
      featured: false
    },
    {
      id: 3,
      title: "Building Peer Support Networks",
      description: "Video workshop on creating meaningful connections and support systems.",
      type: "video",
      category: "peer",
      duration: "25 min",
      downloads: 1456,
      rating: 4.7,
      tags: ["peer support", "community", "relationships"],
      featured: true
    },
    {
      id: 4,
      title: "Depression: Myths vs Reality",
      description: "Educational content addressing common misconceptions about depression.",
      type: "article",
      category: "depression",
      duration: "8 min read",
      downloads: 3102,
      rating: 4.6,
      tags: ["depression", "education", "awareness"],
      featured: false
    },
    {
      id: 5,
      title: "Crisis Intervention Handbook",
      description: "Essential resource for recognizing and responding to mental health emergencies.",
      type: "handbook",
      category: "all",
      duration: "30 min read",
      downloads: 892,
      rating: 4.9,
      tags: ["crisis", "emergency", "intervention"],
      featured: true
    },
    {
      id: 6,
      title: "Sleep Hygiene for Students",
      description: "Practical tips for improving sleep quality and mental health.",
      type: "guide",
      category: "stress",
      duration: "12 min read",
      downloads: 2156,
      rating: 4.5,
      tags: ["sleep", "wellness", "health"],
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return Play;
      case "audio": return Play;
      case "guide": return BookOpen;
      case "article": return BookOpen;
      case "handbook": return BookOpen;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "text-red-500";
      case "audio": return "text-green-500";
      case "guide": return "text-blue-500";
      case "article": return "text-purple-500";
      case "handbook": return "text-orange-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Resource Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mental Health <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of mental health resources, guides, and tools 
            designed specifically for college students.
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources, guides, and tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Featured Resources */}
        {selectedCategory === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.filter(r => r.featured).map((resource) => {
                const TypeIcon = getTypeIcon(resource.type);
                return (
                  <Card key={resource.id} className="p-6 hover:shadow-lg transition-shadow animate-scale-in">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Featured
                      </Badge>
                      <TypeIcon className={`h-5 w-5 ${getTypeColor(resource.type)}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {resource.duration}
                        </span>
                        <span className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {resource.downloads}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full">
                      Access Resource
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "All Resources" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <span className="text-muted-foreground">
              {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card 
                  key={resource.id} 
                  className="p-6 hover:shadow-lg transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="capitalize">
                      {resource.type}
                    </Badge>
                    <TypeIcon className={`h-5 w-5 ${getTypeColor(resource.type)}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {resource.duration}
                      </span>
                      <span className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        {resource.downloads}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                      {resource.rating}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Resource
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 md:p-12 mt-16 text-center bg-gradient-hero text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Support?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            While our resources provide valuable information, sometimes you need one-on-one support. 
            Connect with our counselors for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90">
              Schedule Counseling
            </Button>
            <Button variant="outline" className="border-background text-background hover:bg-background/10">
              AI Support Chat
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resources;
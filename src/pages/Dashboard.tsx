import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Calendar, 
  Users, 
  BarChart3, 
  MessageCircle, 
  AlertCircle,
  TrendingUp,
  Clock,
  Heart
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Students",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "primary"
    },
    {
      title: "Sessions This Week",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: MessageCircle,
      color: "secondary"
    },
    {
      title: "Crisis Interventions",
      value: "3",
      change: "-25%",
      trend: "down",
      icon: AlertCircle,
      color: "wellness"
    },
    {
      title: "Wellness Score",
      value: "8.2/10",
      change: "+0.3",
      trend: "up",
      icon: Heart,
      color: "support"
    }
  ];

  const recentActivities = [
    {
      type: "session",
      message: "New counseling session scheduled",
      time: "2 minutes ago",
      priority: "normal"
    },
    {
      type: "alert",
      message: "High-risk student identified",
      time: "15 minutes ago",
      priority: "high"
    },
    {
      type: "resource",
      message: "Meditation session completed",
      time: "1 hour ago",
      priority: "low"
    },
    {
      type: "session",
      message: "Group therapy session ended",
      time: "2 hours ago",
      priority: "normal"
    }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Wellness Workshop",
      time: "Today, 3:00 PM",
      attendees: 24,
      type: "workshop"
    },
    {
      title: "Mental Health Awareness Talk",
      time: "Tomorrow, 10:00 AM",
      attendees: 156,
      type: "presentation"
    },
    {
      title: "Peer Support Group Meeting",
      time: "Friday, 2:00 PM",
      attendees: 12,
      type: "group"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">MindBridge Dashboard</h1>
          <p className="text-muted-foreground">Mental Health Analytics & Management</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-${stat.color}/10 rounded-full p-3`}>
                    <Icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"}>
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activities</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.priority === 'high' ? 'bg-destructive' :
                    activity.priority === 'normal' ? 'bg-primary' : 'bg-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Events */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{event.title}</h3>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{event.time}</p>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Wellness Insights */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Wellness Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-primary">73%</div>
              <div className="text-sm text-muted-foreground">Positive Mood</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-secondary">2.3h</div>
              <div className="text-sm text-muted-foreground">Avg Session</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-wellness">92%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-support">15%</div>
              <div className="text-sm text-muted-foreground">Improvement</div>
            </div>
          </div>
          <div className="text-center">
            <Button className="mr-2">Generate Report</Button>
            <Button variant="outline">Export Data</Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="h-20 flex flex-col space-y-2 group">
              <Brain className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>AI Chat Support</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2 group">
              <Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Schedule Session</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2 group">
              <BarChart3 className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>View Analytics</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
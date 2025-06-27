
import { useState } from 'react';
import { 
  AlertTriangle, User, Bell, Menu, MapPin, MessageCircle, 
  BarChart, Settings, ChevronRight 
} from 'lucide-react';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <section id="dashboard" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful Emergency Dashboard
          </h2>
          <p className="text-muted-foreground text-lg">
            Monitor and respond to emergencies in real-time with our intuitive dashboard
          </p>
        </div>
        
        <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-background border-b border-border p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="font-semibold text-foreground">ResQ-AI Dashboard</h3>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User size={16} className="text-muted-foreground" />
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="flex flex-col md:flex-row h-[500px]">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-background border-b md:border-b-0 md:border-r border-border p-4">
              <nav className="space-y-1">
                <button 
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeTab === 'overview' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  <BarChart size={18} />
                  <span>Overview</span>
                </button>
                <button 
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeTab === 'alerts' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setActiveTab('alerts')}
                >
                  <AlertTriangle size={18} />
                  <span>Alerts</span>
                </button>
                <button 
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeTab === 'tracking' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setActiveTab('tracking')}
                >
                  <MapPin size={18} />
                  <span>Tracking</span>
                </button>
                <button 
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    activeTab === 'messaging' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                  onClick={() => setActiveTab('messaging')}
                >
                  <MessageCircle size={18} />
                  <span>Messaging</span>
                </button>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 bg-background p-6 overflow-y-auto">
              <div className="animate-fade-in">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Dashboard Overview</h3>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="text-sm text-muted-foreground">Active Users</h4>
                        <p className="text-2xl font-semibold text-foreground">1,254</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="text-sm text-muted-foreground">Alerts Today</h4>
                        <p className="text-2xl font-semibold text-foreground">7</p>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="text-sm text-muted-foreground">Response Time</h4>
                        <p className="text-2xl font-semibold text-foreground">2.4 min</p>
                      </div>
                    </div>
                    
                    {/* Recent Activity */}
                    <div>
                      <h4 className="text-sm text-muted-foreground mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        <div className="bg-background rounded-lg p-3 border border-border">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-500/10 rounded-full">
                              <AlertTriangle size={16} className="text-yellow-500" />
                            </div>
                            <div>
                              <p className="text-sm text-foreground">Medical assistance alert triggered</p>
                              <p className="text-xs text-muted-foreground">10 minutes ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 border border-border">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-full">
                              <MapPin size={16} className="text-green-500" />
                            </div>
                            <div>
                              <p className="text-sm text-foreground">Location tracked successfully</p>
                              <p className="text-xs text-muted-foreground">25 minutes ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-background rounded-lg p-3 border border-border">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 rounded-full">
                              <MessageCircle size={16} className="text-blue-500" />
                            </div>
                            <div>
                              <p className="text-sm text-foreground">Automatic message sent to emergency contacts</p>
                              <p className="text-xs text-muted-foreground">42 minutes ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'alerts' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Recent Alerts</h3>
                    <div className="space-y-4">
                      <div className="bg-emergency/5 rounded-lg p-4 border border-emergency/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emergency/10 rounded-full">
                              <AlertTriangle size={18} className="text-emergency" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">Medical Emergency</p>
                              <p className="text-sm text-muted-foreground">10 minutes ago</p>
                            </div>
                          </div>
                          <button className="p-2 text-primary hover:text-primary/80 transition-colors">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="bg-yellow-500/5 rounded-lg p-4 border border-yellow-500/20">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-500/10 rounded-full">
                              <AlertTriangle size={18} className="text-yellow-500" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">Safety Alert</p>
                              <p className="text-sm text-muted-foreground">2 hours ago</p>
                            </div>
                          </div>
                          <button className="p-2 text-primary hover:text-primary/80 transition-colors">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-full">
                              <AlertTriangle size={18} className="text-green-500" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">Resolved Alert</p>
                              <p className="text-sm text-muted-foreground">Yesterday</p>
                            </div>
                          </div>
                          <button className="p-2 text-primary hover:text-primary/80 transition-colors">
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'tracking' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Location Tracking</h3>
                    <div className="bg-secondary/30 rounded-lg h-80 flex items-center justify-center">
                      <p className="text-muted-foreground">Interactive map will be displayed here</p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'messaging' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">Emergency Messaging</h3>
                    <div className="space-y-4">
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <h4 className="text-sm font-medium text-foreground mb-2">Connected Platforms</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                            <span>WhatsApp</span>
                            <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">Connected</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                            <span>Telegram</span>
                            <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">Connected</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                            <span>Discord</span>
                            <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full">Pending</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-background rounded-lg p-4 border border-border">
                        <h4 className="text-sm font-medium text-foreground mb-2">Pre-defined Messages</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-secondary/50 rounded-lg text-sm">
                            Medical emergency. Need assistance at my location.
                          </div>
                          <div className="p-3 bg-secondary/50 rounded-lg text-sm">
                            I'm safe, false alarm. Please disregard previous alert.
                          </div>
                          <div className="p-3 bg-secondary/50 rounded-lg text-sm">
                            Need urgent help. Please contact emergency services.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

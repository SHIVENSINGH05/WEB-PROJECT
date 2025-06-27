
import { 
  Mic, MapPin, Bell, Shield, MessageCircle, Smartphone, 
  Fingerprint, Users, Settings, Vibrate 
} from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: "Voice Recognition",
    description: "AI-powered voice recognition to detect emergency keywords and phrases"
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    description: "Real-time GPS tracking to pinpoint your exact location during emergencies"
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Immediate notifications sent to emergency contacts and services"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encryption and biometric authentication for your security"
  },
  {
    icon: MessageCircle,
    title: "Multi-Platform",
    description: "Seamless integration with WhatsApp, Telegram, Discord, Slack and more"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Lightweight, fast-loading and fully responsive on all devices"
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Secure access with fingerprint and face recognition"
  },
  {
    icon: Users,
    title: "Collaboration Dashboard",
    description: "Coordinate emergency response with team members in real-time"
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Define your own emergency phrases, commands and protocols"
  },
  {
    icon: Vibrate,
    title: "Haptic Feedback",
    description: "Tactile alerts to ensure you're notified even in noisy environments"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Intelligent Emergency Response Features
          </h2>
          <p className="text-muted-foreground text-lg">
            ResQ-AI combines cutting-edge technology with intuitive design to revolutionize emergency response
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-subtle hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import { ArrowRight, Shield, Headphones, MessageSquare } from 'lucide-react';
import { EmergencyButton } from './EmergencyButton';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              AI-Powered Emergency Response
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Respond to emergencies with <span className="text-primary">intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              ResQ-AI transforms emergency response with AI-powered voice recognition, real-time tracking, and multi-platform integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#features" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Explore Features
                <ArrowRight size={18} />
              </a>
              <a 
                href="/dashboard" 
                className="px-6 py-3 border border-input bg-background text-foreground rounded-lg hover:bg-secondary transition-colors flex items-center justify-center"
              >
                Try Demo
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-delay">
            <div className="relative w-[400px] h-[400px]">
              {/* Abstract background shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-emergency/20 rounded-full blur-xl"></div>
              
              {/* Feature highlights */}
              <div className="absolute top-8 left-0 glass p-4 rounded-xl animate-float" style={{animationDelay: '0.1s'}}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Advanced Protection</span>
                </div>
              </div>
              
              <div className="absolute bottom-16 left-4 glass p-4 rounded-xl animate-float" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Headphones size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Voice Recognition</span>
                </div>
              </div>
              
              <div className="absolute top-20 right-0 glass p-4 rounded-xl animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Multi-Platform</span>
                </div>
              </div>
              
              {/* Emergency button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <EmergencyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

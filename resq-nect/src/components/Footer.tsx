
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <h2 className="text-lg font-bold text-foreground">ResQ-AI</h2>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Platforms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="text-emergency" />
            <span>for emergency responders</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

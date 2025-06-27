
import { useState } from 'react';
import { AlertOctagon } from 'lucide-react';
import { toast } from "sonner";

export const EmergencyButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleEmergencyPress = () => {
    setIsPressed(true);
    toast.info("This is a demo - In a real app, this would trigger an emergency response", {
      duration: 5000,
    });
    
    // Reset the button after 3 seconds
    setTimeout(() => {
      setIsPressed(false);
    }, 3000);
  };
  
  return (
    <button 
      className={`emergency-btn ${isPressed ? 'scale-95' : ''}`}
      onClick={handleEmergencyPress}
      aria-label="Emergency button"
    >
      {isPressed && <div className="emergency-pulse"></div>}
      <AlertOctagon size={32} className="text-white z-10" />
    </button>
  );
};

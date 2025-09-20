import { Card } from "@/components/ui/card";
import { SafetyTip } from "@/data/disasters";

interface DisasterCardProps {
  disaster: SafetyTip;
  onClick: () => void;
}

export const DisasterCard = ({ disaster, onClick }: DisasterCardProps) => {
  const getCategoryGradient = (category: SafetyTip['category']) => {
    switch (category) {
      case 'natural':
        return 'bg-gradient-to-br from-secondary to-green-400';
      case 'manmade':
        return 'bg-gradient-to-br from-accent to-destructive';
      case 'personal':
        return 'bg-gradient-to-br from-purple-500 to-primary';
      default:
        return 'bg-gradient-to-br from-primary to-secondary';
    }
  };

  return (
    <Card
      className={`
        ${getCategoryGradient(disaster.category)}
        p-6 cursor-pointer transition-all duration-300
        hover:scale-105 hover:shadow-xl
        animate-slide-up text-white
        border-0 relative overflow-hidden
        group
      `}
      onClick={onClick}
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="text-4xl mb-3 animate-bounce-soft">
          {disaster.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">
          {disaster.title}
        </h3>
        <p className="text-sm opacity-90">
          Click to learn safety tips
        </p>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
      </div>
    </Card>
  );
};
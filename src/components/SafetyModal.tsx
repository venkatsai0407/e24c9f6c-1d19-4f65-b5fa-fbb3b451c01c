import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SafetyTip } from "@/data/disasters";
import { X, Shield, Heart } from "lucide-react";

interface SafetyModalProps {
  disaster: SafetyTip | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SafetyModal = ({ disaster, isOpen, onClose }: SafetyModalProps) => {
  if (!disaster) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <div className={`
            ${getCategoryGradient(disaster.category)}
            -mx-6 -mt-6 p-6 mb-6 text-white
          `}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{disaster.icon}</div>
                <div>
                  <DialogTitle className="text-3xl font-bold text-white">
                    {disaster.title}
                  </DialogTitle>
                  <DialogDescription className="text-white/90 text-lg">
                    Safety Guide for Students
                  </DialogDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* How to Keep Yourself Safe */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Keep Yourself Safe
              </h3>
            </div>
            
            <div className="space-y-3">
              {disaster.keepSafe.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-card rounded-lg border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Help Others */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary">
                Help Others
              </h3>
            </div>
            
            <div className="space-y-3">
              {disaster.helpOthers.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-card rounded-lg border animate-fade-in"
                  style={{ animationDelay: `${(index + 10) * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💡</span>
            <h4 className="font-bold text-accent">Did You Know?</h4>
          </div>
          <p className="text-sm text-foreground/80 italic">
            {disaster.funFact}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

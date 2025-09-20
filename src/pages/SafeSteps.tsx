import { useState } from "react";
import { disasters, disasterCategories, SafetyTip } from "@/data/disasters";
import { DisasterCard } from "@/components/DisasterCard";
import { SafetyModal } from "@/components/SafetyModal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, BookOpen, AlertTriangle } from "lucide-react";

const SafeSteps = () => {
  const [selectedDisaster, setSelectedDisaster] = useState<SafetyTip | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDisasterClick = (disaster: SafetyTip) => {
    setSelectedDisaster(disaster);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDisaster(null);
  };

  const getDisastersByCategory = (category: string) => {
    return disasters.filter(disaster => disaster.category === category);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-bounce-soft">
            <Shield className="h-20 w-20 mx-auto text-primary mb-4" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up">
            Safe<span className="text-primary">Steps</span>
          </h1>
          
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="text-lg px-6 py-2 animate-fade-in">
              Disaster Safety Pro
            </Badge>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Learn how to keep yourself and others safe during emergencies. 
            Easy guides made just for students!
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <Card className="p-6 text-center border-0 bg-primary/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <BookOpen className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Easy Learning</h3>
              <p className="text-sm text-muted-foreground">Simple steps you can remember</p>
            </Card>
            
            <Card className="p-6 text-center border-0 bg-secondary/5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Users className="h-10 w-10 mx-auto mb-4 text-secondary" />
              <h3 className="font-bold text-lg mb-2">Help Others</h3>
              <p className="text-sm text-muted-foreground">Learn to assist friends and family</p>
            </Card>
            
            <Card className="p-6 text-center border-0 bg-accent/5 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <AlertTriangle className="h-10 w-10 mx-auto mb-4 text-accent" />
              <h3 className="font-bold text-lg mb-2">Stay Prepared</h3>
              <p className="text-sm text-muted-foreground">Be ready for any emergency</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Disaster Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {disasterCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-16">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div 
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white mb-4 animate-scale-in`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="text-4xl mb-2">
                    {category.id === 'natural' && '🌍'}
                    {category.id === 'manmade' && '🏭'}
                    {category.id === 'personal' && '🏠'}
                  </div>
                </div>
                
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4 text-foreground animate-slide-up"
                  style={{ animationDelay: `${categoryIndex * 0.1 + 0.1}s` }}
                >
                  {category.title}
                </h2>
                
                <p 
                  className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.1 + 0.2}s` }}
                >
                  {category.description}
                </p>
              </div>

              {/* Disaster Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {getDisastersByCategory(category.id).map((disaster, disasterIndex) => (
                  <div
                    key={disaster.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${categoryIndex * 0.2 + disasterIndex * 0.1}s` }}
                  >
                    <DisasterCard
                      disaster={disaster}
                      onClick={() => handleDisasterClick(disaster)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Become a Safety Hero? 🦸‍♀️
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Click any disaster card above to learn life-saving safety tips. 
            Knowledge is your superpower in emergencies!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              {disasters.length} Emergency Guides
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Easy to Understand
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Student Friendly
            </span>
          </div>
        </div>
      </section>

      {/* Safety Modal */}
      <SafetyModal
        disaster={selectedDisaster}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default SafeSteps;
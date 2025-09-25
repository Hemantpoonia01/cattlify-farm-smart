import { Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cattle Recognition",
      description: "Advanced AI technology to identify and catalog different cattle breeds with precision."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Health Tracking",
      description: "Monitor vaccination schedules, health records, and medical history for optimal care."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Personal Profiles",
      description: "Create detailed profiles with personalized notes for each animal in your herd."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're revolutionizing cattle management by making it easier for farmers, veterinarians, 
            and cattle owners to identify breeds, track health records, and maintain comprehensive 
            profiles for better livestock care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift shadow-soft bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-secondary rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
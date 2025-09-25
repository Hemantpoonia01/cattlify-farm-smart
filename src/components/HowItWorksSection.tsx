import { Scan, Search, FileText } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Scan className="w-12 h-12 text-secondary-foreground" />,
      title: "Scan",
      description: "Take a photo of the cattle using your smartphone camera"
    },
    {
      number: "02", 
      icon: <Search className="w-12 h-12 text-secondary-foreground" />,
      title: "Identify Breed",
      description: "Our AI instantly analyzes and identifies the cattle breed"
    },
    {
      number: "03",
      icon: <FileText className="w-12 h-12 text-secondary-foreground" />,
      title: "Record Data",
      description: "Add health records, notes, and manage your herd profile"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get started with Cattlify in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-secondary/50 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-secondary rounded-full shadow-soft hover-lift">
                  {step.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-1/2 w-full h-px bg-border transform translate-x-1/2 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
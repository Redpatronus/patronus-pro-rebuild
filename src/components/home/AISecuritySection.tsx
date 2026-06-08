import { Link } from "react-router-dom";
import { Bot, Brain, Zap, Shield, ScanSearch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AISecuritySection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ScanSearch,
      titleKey: "ai.features.pentest.title",
      descKey: "ai.features.pentest.description",
    },
    {
      icon: Brain,
      titleKey: "ai.features.threatIntel.title",
      descKey: "ai.features.threatIntel.description",
    },
    {
      icon: Zap,
      titleKey: "ai.features.autoResponse.title",
      descKey: "ai.features.autoResponse.description",
    },
    {
      icon: Shield,
      titleKey: "ai.features.continuous.title",
      descKey: "ai.features.continuous.description",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Bot className="h-4 w-4 text-primary" />
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              {t("ai.badge")}
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("ai.title")}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t("ai.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AISecuritySection;

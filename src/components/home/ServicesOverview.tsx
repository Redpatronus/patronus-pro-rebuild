import { Link } from "react-router-dom";
import { Shield, Target, FileSearch, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/icons/CloudLogos";
import { useLanguage } from "@/contexts/LanguageContext";

const cloudPlatforms = [
  { name: "AWS", Logo: AWSLogo, bgColor: "bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border-[#FF9900]/30" },
  { name: "Azure", Logo: AzureLogo, bgColor: "bg-[#0089D6]/10 hover:bg-[#0089D6]/20 border-[#0089D6]/30" },
  { name: "GCP", Logo: GCPLogo, bgColor: "bg-[#4285F4]/10 hover:bg-[#4285F4]/20 border-[#4285F4]/30" },
];

const ServicesOverview = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Target,
      titleKey: "services.offensive.title",
      descriptionKey: "services.offensive.description",
      href: "/services/offensive",
    },
    {
      icon: Shield,
      titleKey: "services.defensive.title",
      descriptionKey: "services.defensive.description",
      href: "/services/defensive",
    },
    {
      icon: Cloud,
      titleKey: "services.cloud.title",
      descriptionKey: "services.cloud.description",
      href: "/services/cloud-security",
      hasCloudPlatforms: true,
    },
    {
      icon: FileSearch,
      titleKey: "services.compliance.title",
      descriptionKey: "services.compliance.description",
      href: "/services/compliance",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
            {t("nav.services")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("services.title")}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {t(service.descriptionKey)}
                  </p>
                  
                  {/* Cloud Platform Badges */}
                  {'hasCloudPlatforms' in service && service.hasCloudPlatforms && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cloudPlatforms.map((platform) => (
                        <div
                          key={platform.name}
                          className={`flex items-center gap-1.5 px-2 py-1 rounded border transition-colors ${platform.bgColor}`}
                        >
                          <platform.Logo className="h-3.5 w-3.5" />
                          <span className="text-xs font-semibold text-foreground">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <span className="inline-flex items-center font-body text-sm font-medium text-primary">
                    {t("services.learnMore")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              {t("services.viewAll")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

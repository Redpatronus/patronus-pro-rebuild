import { Link } from "react-router-dom";
import { Shield, Target, FileSearch, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments that simulate real-world attacks to identify vulnerabilities in your infrastructure, applications, and networks.",
    href: "/services/penetration-testing",
  },
  {
    icon: Shield,
    title: "Red Team Operations",
    description:
      "Advanced adversary simulation exercises that test your organization's detection and response capabilities against sophisticated threat actors.",
    href: "/services/red-team",
  },
  {
    icon: FileSearch,
    title: "Security Consulting",
    description:
      "Strategic security guidance including compliance assessments, policy development, and security architecture reviews for enterprise environments.",
    href: "/services/security-consulting",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Specialized security assessments for AWS, Azure, and GCP environments, ensuring your cloud infrastructure meets enterprise security standards.",
    href: "/services/cloud-security",
    platforms: ["AWS", "Azure", "GCP"],
  },
];

const platformColors: Record<string, string> = {
  AWS: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20",
  Azure: "bg-[#0089D6]/10 text-[#0089D6] border-[#0089D6]/20",
  GCP: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20",
};

const ServicesOverview = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From vulnerability assessments to advanced adversary simulations, we provide the security services enterprise organizations need to stay protected.
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
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Cloud Platform Badges */}
                  {'platforms' in service && service.platforms && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.platforms.map((platform: string) => (
                        <span
                          key={platform}
                          className={`px-2 py-1 text-xs font-semibold rounded border ${platformColors[platform]}`}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <span className="inline-flex items-center font-body text-sm font-medium text-primary">
                    Learn More
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
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

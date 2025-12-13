import { Award, Building2, Users, Shield } from "lucide-react";

const certifications = [
  { name: "ISO 27001", description: "Information Security" },
  { name: "SOC 2 Type II", description: "Security & Availability" },
  { name: "CREST", description: "Certified Provider" },
  { name: "OSCP/OSCE", description: "Team Certified" },
];

const clientLogos = [
  "Global Banking Corp",
  "Tech Enterprise Inc",
  "Healthcare Systems",
  "Financial Services Co",
  "Manufacturing Ltd",
  "Retail Solutions",
];

const TrustIndicators = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Certifications */}
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
            Certifications & Compliance
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Industry-Recognized Excellence
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
            >
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {cert.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, value: "15+", label: "Years of Excellence" },
              { icon: Building2, value: "300+", label: "Enterprise Clients" },
              { icon: Users, value: "50+", label: "Security Experts" },
              { icon: Award, value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <stat.icon className="h-8 w-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading organizations worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-4 flex items-center justify-center h-16 border border-border"
              >
                <span className="font-body text-sm font-medium text-muted-foreground text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

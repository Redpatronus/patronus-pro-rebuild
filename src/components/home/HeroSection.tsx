import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle, Cloud } from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/icons/CloudLogos";

const HeroSection = () => {
  const highlights = [
    "24/7 Security Operations",
    "Fortune 500 Trusted",
    "ISO 27001 Certified",
  ];

  const cloudPlatforms = [
    { name: "AWS", Logo: AWSLogo, bgColor: "bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border-[#FF9900]/30" },
    { name: "Azure", Logo: AzureLogo, bgColor: "bg-[#0089D6]/10 hover:bg-[#0089D6]/20 border-[#0089D6]/30" },
    { name: "GCP", Logo: GCPLogo, bgColor: "bg-[#4285F4]/10 hover:bg-[#4285F4]/20 border-[#4285F4]/30" },
  ];

  return (
    <section className="gradient-hero py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-accent-foreground">
                Enterprise Security Partner
              </span>
            </div>
            
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Protecting Your Enterprise from
              <span className="text-primary"> Evolving Threats</span>
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Red Patronus delivers comprehensive offensive security services that identify vulnerabilities before adversaries can exploit them. Trusted by leading global enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-trust-green" />
                  <span className="font-body text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Cloud Security Banner */}
            <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm font-semibold text-foreground">
                    Multi-Cloud Security Experts
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cloudPlatforms.map((platform) => (
                    <div
                      key={platform.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${platform.bgColor}`}
                    >
                      <platform.Logo className="h-4 w-4" />
                      <span className="text-xs font-semibold text-foreground">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "15+" },
                  { label: "Assessments Completed", value: "2,500+" },
                  { label: "Enterprise Clients", value: "300+" },
                  { label: "Vulnerabilities Found", value: "50K+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-card text-center"
                  >
                    <div className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

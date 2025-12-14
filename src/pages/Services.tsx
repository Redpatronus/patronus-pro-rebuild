import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileSearch, Cloud, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Penetration Testing",
    description:
      "Comprehensive security assessments that simulate real-world attacks to identify vulnerabilities in your infrastructure, applications, and networks before malicious actors can exploit them.",
    features: [
      "Web Application Testing",
      "Network Infrastructure Testing",
      "Mobile Application Security",
      "API Security Assessment",
      "Wireless Security Testing",
      "Social Engineering Tests",
    ],
    href: "/services/penetration-testing",
  },
  {
    icon: Shield,
    title: "Red Team Operations",
    description:
      "Advanced adversary simulation exercises that test your organization's detection and response capabilities against sophisticated threat actors using real-world attack techniques.",
    features: [
      "Full Adversary Simulation",
      "Physical Security Testing",
      "Detection & Response Testing",
      "Executive Reporting",
      "Purple Team Exercises",
      "Assumed Breach Scenarios",
    ],
    href: "/services/red-team",
  },
  {
    icon: FileSearch,
    title: "Security Consulting",
    description:
      "Strategic security guidance including compliance assessments, policy development, and security architecture reviews tailored for enterprise environments.",
    features: [
      "Compliance Assessment (SOC 2, ISO 27001)",
      "Security Architecture Review",
      "Policy & Procedure Development",
      "Risk Assessment & Management",
      "Security Program Development",
      "Incident Response Planning",
    ],
    href: "/services/security-consulting",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Specialized security assessments for AWS, Azure, and GCP environments, ensuring your cloud infrastructure meets enterprise security standards and best practices.",
    features: [
      "Cloud Configuration Review",
      "IAM Policy Assessment",
      "Container Security Testing",
      "Kubernetes Security Audit",
      "DevSecOps Integration",
      "Cloud Compliance Assessment",
    ],
    href: "/services/cloud-security",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Security Services | Red Patronus</title>
        <meta
          name="description"
          content="Explore Red Patronus enterprise security services including penetration testing, red team operations, security consulting, and cloud security assessments."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Enterprise Security Solutions
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              From vulnerability assessments to advanced adversary simulations, we provide the comprehensive security services that enterprise organizations need to stay protected in today's threat landscape.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 lg:space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
                >
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
                      <div className="p-3 bg-accent rounded-lg inline-block mb-4">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="font-body text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button asChild>
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <h3 className="font-display text-base font-semibold text-foreground mb-5">
                        Key Capabilities
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                          >
                            <div className="p-1 bg-primary/10 rounded-md mt-0.5">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            </div>
                            <span className="font-body text-sm text-foreground leading-tight">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can tailor our services to meet your organization's specific security requirements and compliance needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;

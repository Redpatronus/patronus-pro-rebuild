import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Shield, Radar, GraduationCap, ClipboardCheck, KeyRound, Fish, Activity, ArrowRight, CheckCircle, Cloud } from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/icons/CloudLogos";

const cloudPlatforms = [
  { name: "AWS", Logo: AWSLogo, bgColor: "bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border-[#FF9900]/30" },
  { name: "Azure", Logo: AzureLogo, bgColor: "bg-[#0089D6]/10 hover:bg-[#0089D6]/20 border-[#0089D6]/30" },
  { name: "GCP", Logo: GCPLogo, bgColor: "bg-[#4285F4]/10 hover:bg-[#4285F4]/20 border-[#4285F4]/30" },
];

const services = [
  {
    icon: Target,
    title: "Offensive Security Services",
    description:
      "From classic penetration tests & customized phishing campaigns to RedTeam engagements. Our expert team simulates real-world cyber attacks to identify vulnerabilities and test your defenses.",
    features: [
      "Web Penetration Tests (OWASP)",
      "Infrastructure Penetration Tests",
      "Red Team Engagements",
      "Attack Simulations",
      "Social Engineering Tests",
      "Post-Exploitation Analysis",
    ],
    href: "/services/offensive",
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
    hasCloudPlatforms: true,
  },
  {
    icon: Shield,
    title: "Defensive Security Services",
    description:
      "Comprehensive defensive security with continuous monitoring, DevSecOps, asset management, and proactive threat response to safeguard your organization.",
    features: [
      "Security Operations Center (SOC)",
      "Continuous Security Scanning",
      "DevSecOps Integration",
      "Business Continuity Planning",
      "Threat Detection & Response",
      "Asset Management",
    ],
    href: "/services/defensive",
  },
  {
    icon: Radar,
    title: "External Threat & Security Monitoring",
    description:
      "OSINT-powered monitoring that uncovers vulnerabilities and delivers actionable insights through continuous surveillance of publicly available data.",
    features: [
      "Comprehensive Data Analysis",
      "Proactive Threat Detection",
      "Actionable Insights",
      "OSINT Tools Integration",
      "Automated Surveillance",
      "Real-time Monitoring",
    ],
    href: "/services/etsm",
  },
  {
    icon: GraduationCap,
    title: "Cybersecurity Training",
    description:
      "Equips employees with the skills to detect, report, and respond to cyber threats, ensuring compliance and protecting company assets.",
    features: [
      "Compliance Training",
      "Threat Awareness Programs",
      "Security Best Practices",
      "Phishing Recognition",
      "Incident Response Training",
      "Customized Programs",
    ],
    href: "/services/training",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance and Regulation / Audits",
    description:
      "DORA-aligned compliance assessments, OSINT analysis, and GAP analysis following CIS, NIST, and EU regulations to ensure your organization meets all operational resilience requirements.",
    features: [
      "DORA Compliance",
      "CIS & NIST Alignment",
      "EU Regulation Compliance",
      "GAP Analysis",
      "Audit Support",
      "Risk Assessment",
    ],
    href: "/services/compliance",
  },
  {
    icon: KeyRound,
    title: "Identity Access Management",
    description:
      "IAM as a Service using Okta, managed via Terraform and CI/CD for secure, efficient identity and access management across your organization.",
    features: [
      "Okta SSO Platform",
      "Active Directory Integration",
      "Terraform Management",
      "CI/CD Pipeline Integration",
      "Access Control Management",
      "Multi-factor Authentication",
    ],
    href: "/services/iam",
  },
  {
    icon: Fish,
    title: "Phishing Simulation",
    description:
      "Test employee awareness with realistic phishing simulations to reduce risks and strengthen your cybersecurity culture.",
    features: [
      "Realistic Simulations",
      "Employee Awareness Testing",
      "Detailed Reporting",
      "Risk Reduction",
      "Compliance Support",
      "Continuous Improvement",
    ],
    href: "/services/phishing",
  },
  {
    icon: Activity,
    title: "SIEM & Audit Logging",
    description:
      "Real-time monitoring of security events with comprehensive log analysis and rapid detection and response to potential security incidents.",
    features: [
      "Real-time Monitoring",
      "Comprehensive Log Analysis",
      "Threat Identification",
      "Authentication Monitoring",
      "Audit Log Management",
      "Incident Response",
    ],
    href: "/services/siem",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>DORA-Compliant Security Services | Red Patronus</title>
        <meta
          name="description"
          content="Red Patronus DORA-compliant cybersecurity services: penetration testing, red team, cloud security, compliance audits, IAM, and security training for enterprises."
        />
        <link rel="canonical" href="https://redpatron.us/services" />
        <meta property="og:title" content="DORA-Compliant Security Services | Red Patronus" />
        <meta property="og:description" content="Enterprise cybersecurity services aligned with Digital Operational Resilience Act requirements." />
        <meta property="og:url" content="https://redpatron.us/services" />
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
              We deliver expert digital solutions by the book of DORA (Digital Operational Resilience Act) compliance. From vulnerability assessments to advanced threat monitoring, all our services are designed to meet the highest regulatory standards.
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
                      <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      
                      {/* Cloud Platform Badges */}
                      {'hasCloudPlatforms' in service && service.hasCloudPlatforms && (
                        <div className="mt-6 pt-6 border-t border-border/50">
                          <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">
                            Securing Your Cloud on
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {cloudPlatforms.map((platform) => (
                              <div
                                key={platform.name}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors ${platform.bgColor}`}
                              >
                                <platform.Logo className="h-4 w-4" />
                                <span className="text-sm font-semibold text-foreground">{platform.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
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

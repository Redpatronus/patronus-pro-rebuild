import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Award, Globe, Lock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with the highest ethical standards, ensuring client trust and confidentiality in all engagements.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Our team pursues continuous improvement, staying ahead of emerging threats and attack techniques.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, fostering partnerships that drive lasting security improvements.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Client data and findings are protected with enterprise-grade security and strict access controls.",
  },
];

const expertise = [
  { area: "Financial Services", years: "15+ years" },
  { area: "Healthcare & Life Sciences", years: "12+ years" },
  { area: "Technology & SaaS", years: "15+ years" },
  { area: "Manufacturing", years: "10+ years" },
  { area: "Retail & E-commerce", years: "12+ years" },
  { area: "Government & Defense", years: "8+ years" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Red Patronus</title>
        <meta
          name="description"
          content="Learn about Red Patronus, a leading enterprise cybersecurity firm with 15+ years of experience protecting Fortune 500 companies from cyber threats."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                About Red Patronus
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                Defenders of Digital Infrastructure
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground">
                Founded by security veterans with decades of combined experience, Red Patronus has grown into a trusted partner for enterprise organizations seeking comprehensive offensive security services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  At Red Patronus, we believe that proactive security is the cornerstone of digital resilience. Our mission is to help organizations identify and remediate security vulnerabilities before they can be exploited by malicious actors.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  We combine deep technical expertise with an adversary's mindset to deliver security assessments that provide genuine insight into your organization's security posture. Our team doesn't just find vulnerabilities—we help you understand and fix them.
                </p>
                <div className="flex items-center gap-4">
                  <Globe className="h-12 w-12 text-primary" />
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">Global Reach</div>
                    <div className="font-body text-muted-foreground">Serving clients in 40+ countries</div>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-8 lg:p-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Industry Expertise
                </h3>
                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="font-body text-foreground">{item.area}</span>
                      <span className="font-body text-sm text-primary font-medium">{item.years}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
                Principles That Guide Us
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Our core values define how we approach every engagement and relationship with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
                  <div className="p-3 bg-accent rounded-full inline-block mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  World-Class Security Team
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  Our team comprises security professionals with backgrounds in enterprise security, government agencies, and leading technology companies. Every consultant holds multiple industry certifications and brings real-world experience to every engagement.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="font-display text-3xl font-bold text-primary">50+</div>
                    <div className="font-body text-sm text-muted-foreground">Security Experts</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-primary">200+</div>
                    <div className="font-body text-sm text-muted-foreground">Certifications Held</div>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact">
                    Join Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Team Certifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["OSCP", "OSEP", "OSCE", "GPEN", "GWAPT", "CISSP", "CISM", "CEH"].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how Red Patronus can help strengthen your organization's security posture.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

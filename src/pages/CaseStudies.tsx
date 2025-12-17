import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, CheckCircle, Award, Quote } from "lucide-react";

const caseStudies = [
  {
    industry: "Financial Services",
    title: "Global Bank Security Transformation",
    challenge: "A major global bank needed comprehensive security assessment across 200+ applications before a major digital transformation initiative.",
    solution: "Conducted phased penetration testing program, red team engagement, and security architecture review over 12 months.",
    results: [
      "Identified 47 critical vulnerabilities",
      "Zero breaches during transformation",
      "Achieved SOC 2 Type II compliance",
      "40% reduction in security incidents",
    ],
  },
  {
    industry: "Healthcare",
    title: "Healthcare System HIPAA Compliance",
    challenge: "Regional healthcare provider with 15 hospitals needed to assess security posture and achieve HIPAA compliance.",
    solution: "Performed network penetration testing, application security assessment, and compliance gap analysis across all facilities.",
    results: [
      "Secured 2M+ patient records",
      "Full HIPAA compliance achieved",
      "Implemented zero-trust architecture",
      "Security awareness training for 5,000 staff",
    ],
  },
  {
    industry: "Technology",
    title: "SaaS Platform Security Hardening",
    challenge: "Enterprise SaaS company preparing for IPO required third-party security validation and SOC 2 certification.",
    solution: "Comprehensive security program including cloud security assessment, API testing, and continuous penetration testing.",
    results: [
      "SOC 2 Type II certified",
      "95% vulnerability remediation rate",
      "Successful IPO security due diligence",
      "Ongoing red team program established",
    ],
  },
];

const testimonials = [
  {
    quote: "Red Patronus transformed our security posture. Their team's expertise and professionalism exceeded our expectations at every stage.",
    author: "Chief Information Security Officer",
    company: "Leading Financial Services Company",
  },
  {
    quote: "The depth of their assessments gave us confidence that we were truly prepared for real-world threats. Exceptional work.",
    author: "VP of Engineering",
    company: "Enterprise Technology Company",
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Red Patronus - Enterprise Security Success Stories</title>
        <meta
          name="description"
          content="Explore how Red Patronus has helped 300+ enterprise organizations achieve DORA compliance and strengthen security through penetration testing and red team operations."
        />
        <link rel="canonical" href="https://redpatron.us/case-studies" />
        <meta property="og:title" content="Red Patronus Case Studies - Enterprise Security Results" />
        <meta property="og:description" content="Real results from 300+ enterprise clients. SOC 2, HIPAA, DORA compliance achieved." />
        <meta property="og:url" content="https://redpatron.us/case-studies" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              Case Studies
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Proven Results for Enterprise Clients
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped leading organizations across industries identify vulnerabilities, achieve compliance, and strengthen their security posture.
            </p>
          </div>
        </section>

        {/* Trust Stats */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "300+", label: "Enterprise Clients" },
                { value: "2,500+", label: "Assessments Completed" },
                { value: "50,000+", label: "Vulnerabilities Identified" },
                { value: "99%", label: "Client Retention" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 lg:space-y-16">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {study.title}
                  </h2>
                  
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Challenge
                      </h3>
                      <p className="font-body text-foreground leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Solution
                      </h3>
                      <p className="font-body text-foreground leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                            <span className="font-body text-sm text-foreground">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                Client Testimonials
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-body font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Industry Certifications & Partnerships
              </h2>
              <p className="font-body text-muted-foreground">
                Our team holds industry-leading certifications and maintains partnerships with major security organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "ISO 27001", desc: "Certified" },
                { name: "SOC 2 Type II", desc: "Compliant" },
                { name: "CREST", desc: "Member" },
                { name: "PCI-DSS", desc: "QSA Partner" },
              ].map((cert, index) => (
                <div key={index} className="bg-surface rounded-xl p-6 text-center border border-border">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-display text-lg font-semibold text-foreground">
                    {cert.name}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {cert.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can help strengthen your organization's security posture.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Start Your Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;

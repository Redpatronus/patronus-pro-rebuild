import { Award, Building2, Users, Shield, Quote } from "lucide-react";
import bonetLogo from "@/assets/partners/bonet-logo.svg";
import tvojKapitanLogo from "@/assets/partners/tvoj-kapitan.png";
import gentlemanSailingLogo from "@/assets/partners/gentleman-sailing.png";
import hudinyLogo from "@/assets/partners/hudiny.jpeg";
import vigLogo from "@/assets/partners/vig-logo.svg";

const certifications = [
  { name: "ISO 27001", description: "Information Security" },
  { name: "SOC 2 Type II", description: "Security & Availability" },
  { name: "CREST", description: "Certified Provider" },
  { name: "OSCP/OSCE", description: "Team Certified" },
];

const testimonials = [
  {
    quote: "Red Patronus provided exceptional security assessment services for our cloud infrastructure. Their thorough penetration testing and clear reporting helped us significantly strengthen our security posture across all our insurance operations.",
    author: "Security Director",
    company: "Vienna Insurance Group",
    logo: vigLogo,
    url: "https://vig.cz/",
  },
];

const trustedPartners = [
  { name: "Vienna Insurance Group", logo: vigLogo, url: "https://vig.cz/" },
  { name: "BONET Systems", logo: bonetLogo, url: "https://bonet.systems/" },
  { name: "Tvoj Kapitan", logo: tvojKapitanLogo, url: "https://www.tvojkapitan.sk/" },
  { name: "Gentleman Sailing", logo: gentlemanSailingLogo, url: "https://www.gentlemansailing.sk/" },
  { name: "Hudiny", logo: hudinyLogo, url: "https://hudiny.sk/" },
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

        {/* Client Testimonial */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              Client Testimonials
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3">
              What Our Clients Say
            </h2>
          </div>
          
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border max-w-4xl mx-auto"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              <blockquote className="font-body text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <a 
                    href={testimonial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {testimonial.company}
                  </a>
                </div>
                <a 
                  href={testimonial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.company} 
                    className="h-10 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-center">
          <p className="font-body text-sm text-background/70 uppercase tracking-wider mb-8">
            Our Trusted Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 border border-background/20 hover:border-primary/50 hover:bg-background/20 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
                <span className="font-body text-sm font-medium text-background">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

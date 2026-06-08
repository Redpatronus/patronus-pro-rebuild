import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, key: "integrity" },
    { icon: Target, key: "excellence" },
    { icon: Users, key: "collaboration" },
    { icon: Lock, key: "confidentiality" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Red Patronus - DORA-Compliant Cybersecurity Experts</title>
        <meta
          name="description"
          content="Learn about Red Patronus, a leading DORA-compliant cybersecurity firm with 15+ years protecting enterprise and financial organizations from cyber threats."
        />
        <link rel="canonical" href="https://redpatron.us/about" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_55%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                {t("about.title")}
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance">
                {t("about.heroTitle")}
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("about.heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission — asymmetric sticky header */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  {t("about.mission.title")}
                </h2>
                <div className="h-1 w-12 bg-primary mt-6" />
              </div>
              <div className="lg:w-2/3 space-y-8">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {t("about.mission.p1")}
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {t("about.mission.p2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              <span className="font-body text-xs font-bold tracking-[0.2em] text-primary uppercase">
                {t("about.valuesLabel")}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
                {t("about.valuesTitle")}
              </h2>
              <p className="font-body text-muted-foreground italic">
                {t("about.valuesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.key}
                  className="group bg-card p-8 border border-border rounded-md shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6 text-primary transition-transform group-hover:scale-110">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team — dark architectural panel */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-zinc-900 text-white rounded-3xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                  {t("about.teamTitle")}
                </h2>
                <p className="font-body text-zinc-400 text-lg leading-relaxed mb-10">
                  {t("about.teamDesc")}
                </p>
              </div>
              <div className="lg:w-1/2 bg-white relative min-h-[320px] lg:min-h-[420px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <img
                    src="/rp-logo.svg"
                    alt="Red Patronus logo"
                    className="max-w-[60%] max-h-[60%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              {t("about.ctaTitle")}
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              {t("about.ctaSubtitle")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link to="/contact">
                {t("about.ctaButton")}
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

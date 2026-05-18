import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Award, Globe, Lock } from "lucide-react";
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
        <meta name="description" content="Learn about Red Patronus, a leading DORA-compliant cybersecurity firm with 15+ years protecting enterprise and financial organizations from cyber threats." />
        <link rel="canonical" href="https://redpatron.us/about" />
      </Helmet>
      <Layout>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                {t("about.title")}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                {t("about.heroTitle")}
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground">
                {t("about.heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {t("about.mission.title")}
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("about.mission.p1")}
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("about.mission.p2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                {t("about.valuesLabel")}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
                {t("about.valuesTitle")}
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                {t("about.valuesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.key} className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
                  <div className="p-3 bg-accent rounded-full inline-block mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {t(`about.values.${value.key}.title`)}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {t(`about.values.${value.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {t("about.teamTitle")}
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                  {t("about.teamDesc")}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="font-display text-3xl font-bold text-primary">50+</div>
                    <div className="font-body text-sm text-muted-foreground">{t("about.securityExperts")}</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-primary">200+</div>
                    <div className="font-body text-sm text-muted-foreground">{t("about.certificationsHeld")}</div>
                  </div>
                </div>
                <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Link to="/contact">
                    {t("about.joinTeam")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  {t("about.teamCertifications")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["OSCP", "OSEP", "OSCE", "GPEN", "GWAPT", "CISSP", "CISM", "CEH"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm font-medium text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              {t("about.ctaTitle")}
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t("about.ctaSubtitle")}
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
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

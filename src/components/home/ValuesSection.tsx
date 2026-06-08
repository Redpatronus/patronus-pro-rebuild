import { Shield, Target, Users, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  { icon: Shield, key: "integrity" },
  { icon: Target, key: "excellence" },
  { icon: Users, key: "collaboration" },
  { icon: Lock, key: "confidentiality" },
];

const ValuesSection = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default ValuesSection;

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoRedpatronus from "@/assets/rp-logo-footer.svg";


const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoRedpatronus} alt="Red Patronus" className="h-10 w-auto" />
            </Link>
            <p className="font-body text-sm text-background/70 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/redpatronus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Redpatronus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/offensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.offensive.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/defensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.defensive.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-security"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.cloud.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.compliance.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/training"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.training.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("nav.caseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/60" />
                <a
                  href="mailto:info@redpatronus.com"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  info@redpatronus.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/60" />
                <a
                  href="tel:+421948446778"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  +421 948 446 778
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-background/60 mt-0.5" />
                <span className="font-body text-sm text-background/70">
                  Lenardova 1147/12<br />
                  Bratislava 851 01<br />
                  Slovakia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <p className="font-body text-sm text-background/60">
              © {new Date().getFullYear()} Red Patronus. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

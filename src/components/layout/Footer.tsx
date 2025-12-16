import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logoRedpatronus from "@/assets/logo-redpatronus.png";

const Footer = () => {
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
              Enterprise-grade cybersecurity solutions protecting global organizations from evolving threats.
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
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/offensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Offensive Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/defensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Defensive Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-security"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Compliance & Audits
                </Link>
              </li>
              <li>
                <Link
                  to="/services/training"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Cybersecurity Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/60" />
                <a
                  href="mailto:sales@redpatron.us"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  sales@redpatron.us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-background/60 mt-0.5" />
                <span className="font-body text-sm text-background/70">
                  Global Headquarters<br />
                  Serving clients worldwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-background/60">
              © {new Date().getFullYear()} Red Patronus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-body text-sm text-background/60 hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body text-sm text-background/60 hover:text-background transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

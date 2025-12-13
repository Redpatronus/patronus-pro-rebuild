import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our security experts to discuss your organization's unique challenges and discover how Red Patronus can help protect your assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

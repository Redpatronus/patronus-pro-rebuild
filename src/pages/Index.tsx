import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TrustIndicators from "@/components/home/TrustIndicators";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Red Patronus | Enterprise Cybersecurity Solutions</title>
        <meta
          name="description"
          content="Red Patronus delivers DORA-compliant cybersecurity services for enterprise and financial organizations. Penetration testing, red team operations, and security consulting aligned with Digital Operational Resilience Act requirements."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesOverview />
        <TrustIndicators />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "sk" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      caseStudies: "Case Studies",
      contact: "Contact",
      contactUs: "Contact Us",
    },
    hero: {
      highlight1: "DORA Compliant",
      highlight2: "Certified Experts",
      highlight3: "24/7 Support",
      title: "Enterprise Cybersecurity Solutions",
      subtitle: "Protecting your digital assets with cutting-edge security services, penetration testing, and DORA-compliant solutions. Your trusted partner in cybersecurity excellence.",
      cta: "Get Started",
      secondaryCta: "Our Services",
    },
    services: {
      title: "Our Security Services",
      subtitle: "Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats while ensuring DORA compliance.",
      viewAll: "View All Services",
      learnMore: "Learn More",
      offensive: {
        title: "Offensive Security",
        description: "Proactive security testing including penetration testing, red team exercises, and vulnerability assessments.",
      },
      defensive: {
        title: "Defensive Security",
        description: "24/7 security monitoring, incident response, and threat detection to protect your infrastructure.",
      },
      cloud: {
        title: "Cloud Security",
        description: "Secure your cloud infrastructure across AWS, Azure, and GCP with our expert solutions.",
      },
      compliance: {
        title: "DORA Compliance",
        description: "Ensure regulatory compliance with DORA, GDPR, ISO 27001, and other security standards.",
      },
      consulting: {
        title: "Security Consulting",
        description: "Strategic security advisory services to strengthen your organization's security posture.",
      },
      training: {
        title: "Security Training",
        description: "Empower your team with comprehensive cybersecurity awareness and technical training.",
      },
    },
    ai: {
      badge: "AI-Powered",
      title: "AI-Powered Security Solutions",
      subtitle: "Harness the power of artificial intelligence to detect threats faster, automate security testing, and stay ahead of sophisticated cyber attacks.",
      cta: "Explore AI Solutions",
      features: {
        pentest: {
          title: "AI Penetration Testing",
          description: "Automated, intelligent penetration testing that continuously probes your systems, identifying vulnerabilities with speed and precision beyond manual testing.",
        },
        threatIntel: {
          title: "AI Threat Intelligence",
          description: "Real-time threat intelligence powered by machine learning, analyzing global threat data to predict and prevent attacks before they happen.",
        },
        autoResponse: {
          title: "Automated Incident Response",
          description: "AI-driven incident response that detects, contains, and remediates security incidents in seconds, minimizing damage and downtime.",
        },
        continuous: {
          title: "Continuous Security Monitoring",
          description: "24/7 AI-powered monitoring that learns your environment's baseline behavior and instantly flags anomalies and potential threats.",
        },
      },
    },
    trust: {
      certifications: "Certifications & Standards",
      stats: {
        years: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        experts: "Security Experts",
      },
      testimonials: "What Our Clients Say",
      partners: "Trusted By",
    },
    cta: {
      title: "Ready to Secure Your Business?",
      subtitle: "Get in touch with our security experts today and discover how we can protect your organization from cyber threats.",
      button: "Schedule a Consultation",
    },
    footer: {
      description: "Enterprise cybersecurity solutions protecting organizations across Europe. DORA-compliant security services you can trust.",
      services: "Services",
      company: "Company",
      contactInfo: "Contact Info",
      aboutUs: "About Us",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our security experts",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        title: "Get in Touch",
        description: "Ready to discuss your cybersecurity needs? Our team of experts is here to help you protect your digital assets.",
        email: "Email Us",
        call: "Call Us",
        visit: "Visit Us",
      },
    },
    about: {
      title: "About Red Patronus",
      subtitle: "Your trusted partner in cybersecurity excellence",
      mission: {
        title: "Our Mission",
        description: "To provide world-class cybersecurity solutions that protect organizations from evolving threats while ensuring regulatory compliance.",
      },
      vision: {
        title: "Our Vision",
        description: "To be the leading cybersecurity partner for enterprises across Europe, setting the standard for security excellence.",
      },
    },
  },
  sk: {
    nav: {
      home: "Domov",
      services: "Služby",
      about: "O nás",
      caseStudies: "Prípadové štúdie",
      contact: "Kontakt",
      contactUs: "Kontaktujte nás",
    },
    hero: {
      highlight1: "DORA Kompatibilné",
      highlight2: "Certifikovaní experti",
      highlight3: "24/7 Podpora",
      title: "Podnikové riešenia kybernetickej bezpečnosti",
      subtitle: "Chránime vaše digitálne aktíva pomocou najmodernejších bezpečnostných služieb, penetračného testovania a riešení v súlade s DORA. Váš dôveryhodný partner v oblasti kybernetickej bezpečnosti.",
      cta: "Začať",
      secondaryCta: "Naše služby",
    },
    services: {
      title: "Naše bezpečnostné služby",
      subtitle: "Komplexné riešenia kybernetickej bezpečnosti prispôsobené na ochranu vašej organizácie pred vyvíjajúcimi sa hrozbami pri zabezpečení súladu s DORA.",
      viewAll: "Zobraziť všetky služby",
      learnMore: "Zistiť viac",
      offensive: {
        title: "Ofenzívna bezpečnosť",
        description: "Proaktívne bezpečnostné testovanie vrátane penetračného testovania, red team cvičení a hodnotenia zraniteľností.",
      },
      defensive: {
        title: "Defenzívna bezpečnosť",
        description: "24/7 bezpečnostný monitoring, reakcia na incidenty a detekcia hrozieb na ochranu vašej infraštruktúry.",
      },
      cloud: {
        title: "Cloudová bezpečnosť",
        description: "Zabezpečte svoju cloudovú infraštruktúru na AWS, Azure a GCP s našimi odbornými riešeniami.",
      },
      compliance: {
        title: "DORA Súlad",
        description: "Zabezpečte regulačný súlad s DORA, GDPR, ISO 27001 a ďalšími bezpečnostnými štandardmi.",
      },
      consulting: {
        title: "Bezpečnostné poradenstvo",
        description: "Strategické bezpečnostné poradenské služby na posilnenie bezpečnostnej pozície vašej organizácie.",
      },
      training: {
        title: "Bezpečnostné školenia",
        description: "Posilnite svoj tím komplexným školením o kybernetickej bezpečnosti a technickými školeniami.",
      },
    },
    ai: {
      badge: "AI-Powered",
      title: "Bezpečnostné riešenia poháňané AI",
      subtitle: "Využite silu umelej inteligencie na rýchlejšiu detekciu hrozieb, automatizáciu bezpečnostného testovania a udržanie náskoku pred sofistikovanými kybernetickými útokmi.",
      cta: "Preskúmať AI riešenia",
      features: {
        pentest: {
          title: "AI penetračné testovanie",
          description: "Automatizované, inteligentné penetračné testovanie, ktoré nepretržite skúma vaše systémy a identifikuje zraniteľnosti s rýchlosťou a presnosťou presahujúcou manuálne testovanie.",
        },
        threatIntel: {
          title: "AI analýza hrozieb",
          description: "Analýza hrozieb v reálnom čase poháňaná strojovým učením, analyzujúca globálne údaje o hrozbách na predpovedanie a prevenciu útokov skôr, ako nastanú.",
        },
        autoResponse: {
          title: "Automatizovaná reakcia na incidenty",
          description: "Reakcia na incidenty riadená AI, ktorá deteguje, izoluje a odstraňuje bezpečnostné incidenty v priebehu sekúnd, minimalizujúc škody a výpadky.",
        },
        continuous: {
          title: "Nepretržitý bezpečnostný monitoring",
          description: "24/7 monitoring poháňaný AI, ktorý sa učí základné správanie vášho prostredia a okamžite upozorňuje na anomálie a potenciálne hrozby.",
        },
      },
    },
    trust: {
      certifications: "Certifikácie a štandardy",
      stats: {
        years: "Rokov skúseností",
        projects: "Dokončených projektov",
        clients: "Spokojných klientov",
        experts: "Bezpečnostných expertov",
      },
      testimonials: "Čo hovoria naši klienti",
      partners: "Dôverujú nám",
    },
    cta: {
      title: "Pripravení zabezpečiť váš biznis?",
      subtitle: "Kontaktujte našich bezpečnostných expertov ešte dnes a zistite, ako môžeme chrániť vašu organizáciu pred kybernetickými hrozbami.",
      button: "Naplánovať konzultáciu",
    },
    footer: {
      description: "Podnikové riešenia kybernetickej bezpečnosti chrániace organizácie po celej Európe. Bezpečnostné služby v súlade s DORA, ktorým môžete dôverovať.",
      services: "Služby",
      company: "Spoločnosť",
      contactInfo: "Kontaktné údaje",
      aboutUs: "O nás",
      copyright: "Všetky práva vyhradené.",
      privacy: "Zásady ochrany osobných údajov",
      terms: "Podmienky služby",
    },
    contact: {
      title: "Kontaktujte nás",
      subtitle: "Spojte sa s našimi bezpečnostnými expertmi",
      form: {
        name: "Celé meno",
        email: "E-mailová adresa",
        company: "Názov spoločnosti",
        message: "Správa",
        submit: "Odoslať správu",
        sending: "Odosielanie...",
      },
      info: {
        title: "Spojte sa s nami",
        description: "Ste pripravení diskutovať o vašich potrebách kybernetickej bezpečnosti? Náš tím expertov je tu, aby vám pomohol chrániť vaše digitálne aktíva.",
        email: "Napíšte nám",
        call: "Zavolajte nám",
        visit: "Navštívte nás",
      },
    },
    about: {
      title: "O Red Patronus",
      subtitle: "Váš dôveryhodný partner v oblasti kybernetickej bezpečnosti",
      mission: {
        title: "Naša misia",
        description: "Poskytovať svetové riešenia kybernetickej bezpečnosti, ktoré chránia organizácie pred vyvíjajúcimi sa hrozbami pri zabezpečení regulačného súladu.",
      },
      vision: {
        title: "Naša vízia",
        description: "Byť vedúcim partnerom v oblasti kybernetickej bezpečnosti pre podniky po celej Európe, nastavujúc štandard pre bezpečnostnú excelentnosť.",
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      about: "Über uns",
      caseStudies: "Fallstudien",
      contact: "Kontakt",
      contactUs: "Kontaktieren Sie uns",
    },
    hero: {
      highlight1: "DORA Konform",
      highlight2: "Zertifizierte Experten",
      highlight3: "24/7 Support",
      title: "Enterprise Cybersicherheitslösungen",
      subtitle: "Schutz Ihrer digitalen Vermögenswerte mit modernsten Sicherheitsdiensten, Penetrationstests und DORA-konformen Lösungen. Ihr vertrauenswürdiger Partner für Cybersicherheit.",
      cta: "Loslegen",
      secondaryCta: "Unsere Dienste",
    },
    services: {
      title: "Unsere Sicherheitsdienste",
      subtitle: "Umfassende Cybersicherheitslösungen, die auf den Schutz Ihrer Organisation vor sich entwickelnden Bedrohungen zugeschnitten sind und DORA-Konformität gewährleisten.",
      viewAll: "Alle Dienste anzeigen",
      learnMore: "Mehr erfahren",
      offensive: {
        title: "Offensive Sicherheit",
        description: "Proaktive Sicherheitstests einschließlich Penetrationstests, Red-Team-Übungen und Schwachstellenbewertungen.",
      },
      defensive: {
        title: "Defensive Sicherheit",
        description: "24/7 Sicherheitsüberwachung, Incident Response und Bedrohungserkennung zum Schutz Ihrer Infrastruktur.",
      },
      cloud: {
        title: "Cloud-Sicherheit",
        description: "Sichern Sie Ihre Cloud-Infrastruktur auf AWS, Azure und GCP mit unseren Expertenlösungen.",
      },
      compliance: {
        title: "DORA Compliance",
        description: "Gewährleisten Sie regulatorische Konformität mit DORA, DSGVO, ISO 27001 und anderen Sicherheitsstandards.",
      },
      consulting: {
        title: "Sicherheitsberatung",
        description: "Strategische Sicherheitsberatung zur Stärkung der Sicherheitslage Ihrer Organisation.",
      },
      training: {
        title: "Sicherheitsschulungen",
        description: "Stärken Sie Ihr Team mit umfassenden Cybersicherheitsschulungen und technischen Trainings.",
      },
    },
    ai: {
      badge: "KI-gestützt",
      title: "KI-gestützte Sicherheitslösungen",
      subtitle: "Nutzen Sie die Kraft der künstlichen Intelligenz, um Bedrohungen schneller zu erkennen, Sicherheitstests zu automatisieren und raffinierten Cyberangriffen einen Schritt voraus zu sein.",
      cta: "KI-Lösungen erkunden",
      features: {
        pentest: {
          title: "KI-Penetrationstests",
          description: "Automatisierte, intelligente Penetrationstests, die Ihre Systeme kontinuierlich prüfen und Schwachstellen mit Geschwindigkeit und Präzision identifizieren, die über manuelle Tests hinausgehen.",
        },
        threatIntel: {
          title: "KI-Bedrohungsanalyse",
          description: "Echtzeit-Bedrohungsanalyse mit maschinellem Lernen, die globale Bedrohungsdaten analysiert, um Angriffe vorherzusagen und zu verhindern.",
        },
        autoResponse: {
          title: "Automatisierte Incident Response",
          description: "KI-gesteuerte Incident Response, die Sicherheitsvorfälle in Sekunden erkennt, eindämmt und behebt und so Schäden und Ausfallzeiten minimiert.",
        },
        continuous: {
          title: "Kontinuierliches Sicherheitsmonitoring",
          description: "24/7 KI-gestütztes Monitoring, das das Basisverhalten Ihrer Umgebung lernt und sofort Anomalien und potenzielle Bedrohungen meldet.",
        },
      },
    },
    trust: {
      certifications: "Zertifizierungen & Standards",
      stats: {
        years: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Zufriedene Kunden",
        experts: "Sicherheitsexperten",
      },
      testimonials: "Was unsere Kunden sagen",
      partners: "Vertraut von",
    },
    cta: {
      title: "Bereit, Ihr Unternehmen zu sichern?",
      subtitle: "Kontaktieren Sie noch heute unsere Sicherheitsexperten und erfahren Sie, wie wir Ihre Organisation vor Cyberbedrohungen schützen können.",
      button: "Beratung vereinbaren",
    },
    footer: {
      description: "Enterprise Cybersicherheitslösungen zum Schutz von Organisationen in ganz Europa. DORA-konforme Sicherheitsdienste, denen Sie vertrauen können.",
      services: "Dienstleistungen",
      company: "Unternehmen",
      contactInfo: "Kontaktinfo",
      aboutUs: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Nehmen Sie Kontakt mit unseren Sicherheitsexperten auf",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        company: "Firmenname",
        message: "Nachricht",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
      },
      info: {
        title: "Kontakt aufnehmen",
        description: "Bereit, Ihre Cybersicherheitsanforderungen zu besprechen? Unser Expertenteam ist hier, um Ihnen beim Schutz Ihrer digitalen Vermögenswerte zu helfen.",
        email: "E-Mail",
        call: "Anrufen",
        visit: "Besuchen Sie uns",
      },
    },
    about: {
      title: "Über Red Patronus",
      subtitle: "Ihr vertrauenswürdiger Partner für Cybersicherheit",
      mission: {
        title: "Unsere Mission",
        description: "Weltklasse-Cybersicherheitslösungen bereitzustellen, die Organisationen vor sich entwickelnden Bedrohungen schützen und regulatorische Konformität gewährleisten.",
      },
      vision: {
        title: "Unsere Vision",
        description: "Der führende Cybersicherheitspartner für Unternehmen in ganz Europa zu sein und den Standard für Sicherheitsexzellenz zu setzen.",
      },
    },
  },
};

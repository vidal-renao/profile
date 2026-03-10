const translations = {
  en: {
    topbar: {
      role: "IT Systems Administrator · Profile",
      status: "Open to opportunities"
    },
    hero: {
      role1: "Microsoft 365 & Identity Management",
      role2: "Infrastructure · Networking · Automation",
      summary: "IT Systems Administrator with hands-on experience in Microsoft 365, Windows Server, Active Directory, networking and Linux environments. Focused on building practical projects and lab environments that reflect real business and enterprise scenarios.",
      certLabel: "Certified",
      websiteDemos: "Website Demos"
    },
    quick: {
      focusLabel: "Current Focus",
      focusText: "Modern Workplace, Microsoft 365 automation, hybrid infrastructure and hands-on lab projects.",
      strengthsLabel: "Core Strengths",
      strengthsText: "Identity management, system administration, networking fundamentals and practical troubleshooting.",
      portfolioLabel: "Portfolio",
      liveDemos: "Live demos",
      repositories: "Repositories"
    },
    stack: {
      title: "Tech Stack",
      intro: "Main tools and technologies used across Microsoft 365, cloud-connected environments, infrastructure administration, networking and automation.",
      infrastructure: "Infrastructure",
      networking: "Networking",
      automation: "Automation"
    },
    projects: {
      title: "Featured Projects",
      intro: "Selected projects that demonstrate practical work in Microsoft 365, automation, small business solutions and enterprise-style infrastructure.",
      graph: {
        title: "Microsoft 365 Graph Dashboard",
        desc: "Web dashboard demonstrating Microsoft Graph API integration with OAuth authentication, access to Microsoft 365 data and multi-language support.",
        tag4: "Multi-language"
      },
      lifecycle: {
        title: "Employee Lifecycle Automation",
        desc: "PowerShell automation simulating enterprise onboarding and offboarding, including CSV import, secure offboarding, session revocation, logging and CI/CD.",
        tag3: "Bulk CSV",
        tag4: "Logging"
      },
      website: {
        title: "SME Website Demo Platform",
        desc: "Demo websites for local businesses and SMEs, built to show how simple digital solutions can improve visibility, trust and customer contact."
      },
      lab: {
        title: "Enterprise Infrastructure Lab",
        desc: "Hands-on lab simulating a corporate network with a Debian router and firewall, Windows Server roles, Active Directory, DNS, DHCP, GPOs and domain-joined clients."
      }
    },
    lab: {
      title: "Infrastructure Lab",
      intro: "Practical enterprise-style lab environment designed to strengthen system administration, network control and Windows infrastructure skills in a realistic setup.",
      router: {
        title: "Debian Router / Firewall",
        1: "NAT configuration for internet access",
        2: "IP forwarding enabled",
        3: "Restricted traffic with nftables",
        4: "Logging and counters for verification"
      },
      server: {
        title: "Windows Server",
        1: "AD DS deployment",
        2: "DNS and DHCP configuration",
        3: "Organizational Units and groups",
        4: "Group Policy management"
      },
      clients: {
        title: "Windows Clients",
        1: "Domain join operations",
        2: "Policy application tests",
        3: "Controlled internet access",
        4: "Client-side validation and troubleshooting"
      }
    },
    architecture: {
      title: "Architecture",
      subtitle: "Lab flow",
      diagram: `Internet
   ↓
Debian Router / Firewall
(NAT + nftables + IP forwarding)
   ↓
LAN 192.168.50.0/24
   ↓
Windows Server 2025
(AD DS + DNS + DHCP + GPO)
   ↓
Windows 11 Clients
(Domain joined + policy managed)`
    },
    focus: {
      title: "Focus & Learning",
      currentLabel: "Current Direction",
      currentText: "Building stronger skills in Microsoft 365 administration, identity management, hybrid infrastructure and enterprise-style automation.",
      learningLabel: "Learning Areas",
      learningText: "Cloud-connected infrastructure, Microsoft 365 automation, access management, security fundamentals and operational workflows for modern IT environments.",
      styleLabel: "Working Style",
      styleText: "Hands-on, practical and project-driven. I prefer building, testing and documenting solutions that reflect realistic support and infrastructure scenarios."
    },
    learning: {
      title: "Currently Learning",
      1: "Cloud infrastructure and hybrid environments",
      2: "Identity and access management",
      3: "Microsoft 365 automation",
      4: "Infrastructure security and operations"
    },
    contact: {
      title: "Contact"
    },
    note: {
      title: "Professional note",
      text: "This page is meant as a concise technical profile. It complements the GitHub profile README, project repositories and live demos, giving recruiters and employers a quick overview of my practical focus in Microsoft 365, infrastructure, networking and automation."
    },
    footer: {
      left: "Vidal Reñao · IT Systems Administrator",
      right: "Microsoft 365 · Infrastructure · Networking"
    },
    common: {
      code: "Code ↗",
      live: "Live ↗"
    }
  },

  es: {
    topbar: {
      role: "Administrador de Sistemas IT · Perfil",
      status: "Abierto a oportunidades"
    },
    hero: {
      role1: "Microsoft 365 y Gestión de Identidad",
      role2: "Infraestructura · Redes · Automatización",
      summary: "Administrador de Sistemas IT con experiencia práctica en Microsoft 365, Windows Server, Active Directory, redes y entornos Linux. Enfocado en construir proyectos prácticos y laboratorios que reflejan escenarios reales empresariales y de infraestructura.",
      certLabel: "Certificado",
      websiteDemos: "Demos Web"
    },
    quick: {
      focusLabel: "Enfoque Actual",
      focusText: "Modern Workplace, automatización de Microsoft 365, infraestructura híbrida y laboratorios prácticos.",
      strengthsLabel: "Fortalezas Principales",
      strengthsText: "Gestión de identidad, administración de sistemas, fundamentos de redes y resolución práctica de incidencias.",
      portfolioLabel: "Portfolio",
      liveDemos: "Demos en vivo",
      repositories: "Repositorios"
    },
    stack: {
      title: "Stack Tecnológico",
      intro: "Principales herramientas y tecnologías utilizadas en Microsoft 365, entornos conectados al cloud, administración de infraestructura, redes y automatización.",
      infrastructure: "Infraestructura",
      networking: "Redes",
      automation: "Automatización"
    },
    projects: {
      title: "Proyectos Destacados",
      intro: "Proyectos seleccionados que muestran trabajo práctico en Microsoft 365, automatización, soluciones para pequeñas empresas e infraestructura de estilo empresarial.",
      graph: {
        title: "Microsoft 365 Graph Dashboard",
        desc: "Dashboard web que demuestra integración con Microsoft Graph API mediante autenticación OAuth, acceso a datos de Microsoft 365 y soporte multidioma.",
        tag4: "Multidioma"
      },
      lifecycle: {
        title: "Automatización del Ciclo de Vida del Empleado",
        desc: "Automatización en PowerShell que simula procesos empresariales de onboarding y offboarding, incluyendo importación CSV, offboarding seguro, revocación de sesiones, logging y CI/CD.",
        tag3: "CSV Masivo",
        tag4: "Registro"
      },
      website: {
        title: "Plataforma Demo Web para PYMEs",
        desc: "Sitios demo para negocios locales y PYMEs, creados para mostrar cómo soluciones digitales simples pueden mejorar visibilidad, confianza y contacto con clientes."
      },
      lab: {
        title: "Laboratorio de Infraestructura Empresarial",
        desc: "Laboratorio práctico que simula una red corporativa con router y firewall Debian, roles de Windows Server, Active Directory, DNS, DHCP, GPOs y clientes unidos al dominio."
      }
    },
    lab: {
      title: "Laboratorio de Infraestructura",
      intro: "Entorno práctico de laboratorio de estilo empresarial diseñado para reforzar habilidades de administración de sistemas, control de red e infraestructura Windows en una configuración realista.",
      router: {
        title: "Router / Firewall Debian",
        1: "Configuración NAT para acceso a Internet",
        2: "IP forwarding activado",
        3: "Tráfico restringido con nftables",
        4: "Logging y contadores para verificación"
      },
      server: {
        title: "Windows Server",
        1: "Despliegue de AD DS",
        2: "Configuración de DNS y DHCP",
        3: "Unidades organizativas y grupos",
        4: "Gestión de directivas de grupo"
      },
      clients: {
        title: "Clientes Windows",
        1: "Operaciones de unión al dominio",
        2: "Pruebas de aplicación de políticas",
        3: "Acceso controlado a Internet",
        4: "Validación y troubleshooting del lado cliente"
      }
    },
    architecture: {
      title: "Arquitectura",
      subtitle: "Flujo del laboratorio",
      diagram: `Internet
   ↓
Router / Firewall Debian
(NAT + nftables + IP forwarding)
   ↓
LAN 192.168.50.0/24
   ↓
Windows Server 2025
(AD DS + DNS + DHCP + GPO)
   ↓
Clientes Windows 11
(Unidos al dominio + gestionados por políticas)`
    },
    focus: {
      title: "Enfoque y Aprendizaje",
      currentLabel: "Dirección Actual",
      currentText: "Fortaleciendo habilidades en administración de Microsoft 365, gestión de identidad, infraestructura híbrida y automatización orientada a entornos empresariales.",
      learningLabel: "Áreas de Aprendizaje",
      learningText: "Infraestructura conectada al cloud, automatización de Microsoft 365, gestión de accesos, fundamentos de seguridad y flujos operativos para entornos IT modernos.",
      styleLabel: "Forma de Trabajo",
      styleText: "Práctica, orientada a proyectos y hands-on. Prefiero construir, probar y documentar soluciones que reflejen escenarios reales de soporte e infraestructura."
    },
    learning: {
      title: "Aprendiendo Actualmente",
      1: "Infraestructura cloud y entornos híbridos",
      2: "Gestión de identidad y accesos",
      3: "Automatización de Microsoft 365",
      4: "Seguridad y operaciones de infraestructura"
    },
    contact: {
      title: "Contacto"
    },
    note: {
      title: "Nota profesional",
      text: "Esta página está pensada como un perfil técnico conciso. Complementa el README del perfil de GitHub, los repositorios de proyectos y las demos en vivo, ofreciendo a recruiters y empleadores una visión rápida de mi enfoque práctico en Microsoft 365, infraestructura, redes y automatización."
    },
    footer: {
      left: "Vidal Reñao · Administrador de Sistemas IT",
      right: "Microsoft 365 · Infraestructura · Redes"
    },
    common: {
      code: "Código ↗",
      live: "Demo ↗"
    }
  },

  de: {
    topbar: {
      role: "IT-Systemadministrator · Profil",
      status: "Offen für neue Möglichkeiten"
    },
    hero: {
      role1: "Microsoft 365 & Identity Management",
      role2: "Infrastruktur · Netzwerke · Automatisierung",
      summary: "IT-Systemadministrator mit praktischer Erfahrung in Microsoft 365, Windows Server, Active Directory, Netzwerken und Linux-Umgebungen. Fokus auf praxisnahen Projekten und Laborumgebungen, die reale Unternehmens- und Infrastrukturszenarien widerspiegeln.",
      certLabel: "Zertifiziert",
      websiteDemos: "Website-Demos"
    },
    quick: {
      focusLabel: "Aktueller Fokus",
      focusText: "Modern Workplace, Microsoft-365-Automatisierung, hybride Infrastruktur und praxisnahe Lab-Projekte.",
      strengthsLabel: "Kernkompetenzen",
      strengthsText: "Identity Management, Systemadministration, Netzwerkgrundlagen und praktische Fehleranalyse.",
      portfolioLabel: "Portfolio",
      liveDemos: "Live-Demos",
      repositories: "Repositories"
    },
    stack: {
      title: "Technologie-Stack",
      intro: "Wichtige Tools und Technologien aus Microsoft 365, cloudverbundenen Umgebungen, Infrastrukturadministration, Netzwerken und Automatisierung.",
      infrastructure: "Infrastruktur",
      networking: "Netzwerke",
      automation: "Automatisierung"
    },
    projects: {
      title: "Ausgewählte Projekte",
      intro: "Ausgewählte Projekte, die praktische Arbeit in Microsoft 365, Automatisierung, Lösungen für KMU und Unternehmensinfrastruktur zeigen.",
      graph: {
        title: "Microsoft 365 Graph Dashboard",
        desc: "Web-Dashboard zur Demonstration der Integration von Microsoft Graph API mit OAuth-Authentifizierung, Zugriff auf Microsoft-365-Daten und Mehrsprachigkeit.",
        tag4: "Mehrsprachig"
      },
      lifecycle: {
        title: "Employee Lifecycle Automation",
        desc: "PowerShell-Automatisierung zur Simulation von Onboarding- und Offboarding-Prozessen im Unternehmensumfeld, inklusive CSV-Import, sicherem Offboarding, Session-Revoke, Logging und CI/CD.",
        tag3: "CSV-Massenimport",
        tag4: "Logging"
      },
      website: {
        title: "Demo-Plattform für KMU-Websites",
        desc: "Demo-Websites für lokale Unternehmen und KMU, um zu zeigen, wie einfache digitale Lösungen Sichtbarkeit, Vertrauen und Kundenkontakt verbessern können."
      },
      lab: {
        title: "Enterprise Infrastructure Lab",
        desc: "Praxislabor zur Simulation eines Unternehmensnetzwerks mit Debian-Router und Firewall, Windows-Server-Rollen, Active Directory, DNS, DHCP, GPOs und Domänen-Clients."
      }
    },
    lab: {
      title: "Infrastruktur-Labor",
      intro: "Praxisnahes Enterprise-Lab zur Stärkung von Fähigkeiten in Systemadministration, Netzwerkkontrolle und Windows-Infrastruktur in einer realistischen Umgebung.",
      router: {
        title: "Debian Router / Firewall",
        1: "NAT-Konfiguration für Internetzugang",
        2: "IP-Forwarding aktiviert",
        3: "Eingeschränkter Traffic mit nftables",
        4: "Logging und Counter zur Überprüfung"
      },
      server: {
        title: "Windows Server",
        1: "AD-DS-Bereitstellung",
        2: "DNS- und DHCP-Konfiguration",
        3: "Organisationseinheiten und Gruppen",
        4: "Verwaltung von Gruppenrichtlinien"
      },
      clients: {
        title: "Windows-Clients",
        1: "Domänenbeitritt",
        2: "Tests zur Richtlinienanwendung",
        3: "Kontrollierter Internetzugang",
        4: "Clientseitige Validierung und Troubleshooting"
      }
    },
    architecture: {
      title: "Architektur",
      subtitle: "Lab-Ablauf",
      diagram: `Internet
   ↓
Debian Router / Firewall
(NAT + nftables + IP forwarding)
   ↓
LAN 192.168.50.0/24
   ↓
Windows Server 2025
(AD DS + DNS + DHCP + GPO)
   ↓
Windows 11 Clients
(Domänenbeitritt + Richtlinienverwaltung)`
    },
    focus: {
      title: "Fokus & Lernen",
      currentLabel: "Aktuelle Richtung",
      currentText: "Ausbau meiner Kenntnisse in Microsoft-365-Administration, Identity Management, hybrider Infrastruktur und Enterprise-Automatisierung.",
      learningLabel: "Lernbereiche",
      learningText: "Cloud-nahe Infrastruktur, Microsoft-365-Automatisierung, Zugriffsmanagement, Sicherheitsgrundlagen und operative Abläufe moderner IT-Umgebungen.",
      styleLabel: "Arbeitsweise",
      styleText: "Praxisnah, projektorientiert und hands-on. Ich bevorzuge es, Lösungen zu bauen, zu testen und zu dokumentieren, die reale Support- und Infrastrukturszenarien widerspiegeln."
    },
    learning: {
      title: "Derzeit im Fokus",
      1: "Cloud-Infrastruktur und hybride Umgebungen",
      2: "Identity und Access Management",
      3: "Microsoft-365-Automatisierung",
      4: "Infrastruktursicherheit und Betrieb"
    },
    contact: {
      title: "Kontakt"
    },
    note: {
      title: "Beruflicher Hinweis",
      text: "Diese Seite ist als kompaktes technisches Profil gedacht. Sie ergänzt das GitHub-Profil-README, die Projekt-Repositories und die Live-Demos und gibt Recruitern und Arbeitgebern einen schnellen Überblick über meinen praktischen Fokus in Microsoft 365, Infrastruktur, Netzwerken und Automatisierung."
    },
    footer: {
      left: "Vidal Reñao · IT-Systemadministrator",
      right: "Microsoft 365 · Infrastruktur · Netzwerke"
    },
    common: {
      code: "Code ↗",
      live: "Live ↗"
    }
  }
};

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(dict, key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('profile-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedLang = localStorage.getItem('profile-lang') || 'en';
setLanguage(savedLang);
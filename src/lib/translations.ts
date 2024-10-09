export type TranslationKeys =
  | 'nav.home'
  | 'nav.services'
  | 'nav.about'
  | 'nav.projects'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'services.title'
  | 'services.frontend'
  | 'services.backend'
  | 'services.saas'
  | 'services.ai'
  | 'services.chatbots'
  | 'services.blockchain'
  | 'services.frontendDesc'
  | 'services.backendDesc'
  | 'services.saasDesc'
  | 'services.aiDesc'
  | 'services.chatbotsDesc'
  | 'services.blockchainDesc'
  | 'about.title'
  | 'about.content'
  | 'projects.title'
  | 'projects.viewMore'
  | 'testimonials.title'
  | 'contact.title'
  | 'contact.description'
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'contact.send'
  | 'contact.sending'
  | 'contact.success'
  | 'contact.error'
  | 'contact.namePlaceholder'
  | 'contact.emailPlaceholder'
  | 'contact.messagePlaceholder'
  | 'contact.successTitle'
  | 'contact.successMessage'
  | 'contact.errorTitle'
  | 'contact.errorMessage'
  | 'footer.rights'
  | 'footer.terms'
  | 'footer.privacy'
  | 'footer.cookies'
  // Nuove chiavi per i Termini di Servizio
  | 'terms.title'
  | 'terms.introduction'
  | 'terms.introductionContent'
  | 'terms.useOfService'
  | 'terms.useOfServiceContent'
  | 'terms.intellectualProperty'
  | 'terms.intellectualPropertyContent'
  | 'terms.userResponsibilities'
  | 'terms.userResponsibilitiesContent'
  | 'terms.limitation'
  | 'terms.limitationContent'
  | 'terms.governing'
  | 'terms.governingContent'
  // Nuove chiavi per la Politica sulla Privacy
  | 'privacy.title'
  | 'privacy.introduction'
  | 'privacy.introductionContent'
  | 'privacy.informationCollection'
  | 'privacy.informationCollectionContent'
  | 'privacy.informationUse'
  | 'privacy.informationUseContent'
  | 'privacy.informationProtection'
  | 'privacy.informationProtectionContent'
  | 'privacy.cookiesUse'
  | 'privacy.cookiesUseContent'
  // Nuove chiavi per la Politica sui Cookie
  | 'cookies.title'
  | 'cookies.introduction'
  | 'cookies.introductionContent'
  | 'cookies.whatAreCookies'
  | 'cookies.whatAreCookiesContent'
  | 'cookies.howWeUseCookies'
  | 'cookies.howWeUseCookiesContent'
  | 'cookies.managingCookies'
  | 'cookies.managingCookiesContent';


type TranslationsType = {
  [key in TranslationKeys]: string;
};

type LanguagesType = {
  en: TranslationsType;
  it: TranslationsType;
};

export const translations: LanguagesType = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "Innovating the Future of Technology",
    "hero.subtitle": "Frontend, Backend, SaaS, AI, Chatbots, and Blockchain Solutions",
    "hero.cta": "Get Started",
    "services.title": "Our Services",
    "services.frontend": "Frontend Development",
    "services.backend": "Backend Development",
    "services.saas": "SaaS Solutions",
    "services.ai": "Artificial Intelligence",
    "services.chatbots": "Chatbot Development",
    "services.blockchain": "Blockchain Technology",
    "services.frontendDesc": "Creating responsive and intuitive user interfaces",
    "services.backendDesc": "Building robust and scalable server-side applications",
    "services.saasDesc": "Developing cloud-based software solutions",
    "services.aiDesc": "Implementing machine learning and AI algorithms",
    "services.chatbotsDesc": "Designing intelligent conversational interfaces",
    "services.blockchainDesc": "Leveraging decentralized technology for secure applications",
    "about.title": "About Afterthinking",
    "about.content": "Afterthinking srls is an Italian company at the forefront of technological innovation. We specialize in creating cutting-edge solutions across various domains of software development.",
    "projects.title": "Our Projects",
    "projects.viewMore": "View More",
    "testimonials.title": "What Our Clients Say",
    "contact.title": "Get in Touch",
    "contact.description": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "An error occurred. Please try again.",
    "contact.namePlaceholder": "Enter your name",
    "contact.emailPlaceholder": "Enter your email",
    "contact.messagePlaceholder": "Enter your message",
    "contact.successTitle": "Message Sent",
    "contact.successMessage": "Your message has been sent successfully. We'll get back to you soon.",
    "contact.errorTitle": "Error",
    "contact.errorMessage": "There was an error sending your message. Please try again.",
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
    // Nuove traduzioni per i Termini di Servizio
    "terms.title": "Terms of Service",
    "terms.introduction": "Introduction",
    "terms.introductionContent": "Welcome to Afterthinking srls. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.",
    "terms.useOfService": "Use of Service",
    "terms.useOfServiceContent": "Our services are provided 'as is'. We do not warrant that the service will be uninterrupted or error-free. We reserve the right to modify or discontinue any part of our service without notice.",
    "terms.intellectualProperty": "Intellectual Property",
    "terms.intellectualPropertyContent": "All content on this site, including but not limited to text, graphics, logos, and software, is the property of Afterthinking srls and protected by Italian and international copyright laws.",
    "terms.userResponsibilities": "User Responsibilities",
    "terms.userResponsibilitiesContent": "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    "terms.limitation": "Limitation of Liability",
    "terms.limitationContent": "Afterthinking srls shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.",
    "terms.governing": "Governing Law",
    "terms.governingContent": "These terms shall be governed by and construed in accordance with the laws of Italy, without regard to its conflict of law provisions.",
    // Nuove traduzioni per la Politica sulla Privacy
    "privacy.title": "Privacy Policy",
    "privacy.introduction": "Introduction",
    "privacy.introductionContent": "At Afterthinking srls, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.",
    "privacy.informationCollection": "Information Collection",
    "privacy.informationCollectionContent": "We collect information you provide directly to us, such as when you create an account, request a service, or contact us for support.",
    "privacy.informationUse": "Use of Information",
    "privacy.informationUseContent": "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.",
    "privacy.informationProtection": "Information Protection",
    "privacy.informationProtectionContent": "We implement a variety of security measures to maintain the safety of your personal information.",
    "privacy.cookiesUse": "Use of Cookies",
    "privacy.cookiesUseContent": "We use cookies to enhance your experience on our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.",
    // Nuove traduzioni per la Politica sui Cookie
    "cookies.title": "Cookie Policy",
    "cookies.introduction": "Introduction",
    "cookies.introductionContent": "This Cookie Policy explains how Afterthinking srls uses cookies and similar technologies to recognize you when you visit our website.",
    "cookies.whatAreCookies": "What are cookies",
    "cookies.whatAreCookiesContent": "Cookies are small data files that are placed on your computer or mobile device when you visit a website.",
    "cookies.howWeUseCookies": "How we use cookies",
    "cookies.howWeUseCookiesContent": "We use cookies to enhance your experience on our site, analyze our traffic, and for security and monitoring purposes.",
    "cookies.managingCookies": "Managing cookies",
    "cookies.managingCookiesContent": "You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly."
  },
  it: {
    "nav.home": "Home",
    "nav.services": "Servizi",
    "nav.about": "Chi Siamo",
    "nav.projects": "Progetti",
    "nav.testimonials": "Testimonianze",
    "nav.contact": "Contatti",
    "hero.title": "Innoviamo il Futuro della Tecnologia",
    "hero.subtitle": "Soluzioni Frontend, Backend, SaaS, AI, Chatbot e Blockchain",
    "hero.cta": "Inizia Ora",
    "services.title": "I Nostri Servizi",
    "services.frontend": "Sviluppo Frontend",
    "services.backend": "Sviluppo Backend",
    "services.saas": "Soluzioni SaaS",
    "services.ai": "Intelligenza Artificiale",
    "services.chatbots": "Sviluppo Chatbot",
    "services.blockchain": "Tecnologia Blockchain",
    "services.frontendDesc": "Creazione di interfacce utente responsive e intuitive",
    "services.backendDesc": "Costruzione di applicazioni server robuste e scalabili",
    "services.saasDesc": "Sviluppo di soluzioni software basate su cloud",
    "services.aiDesc": "Implementazione di algoritmi di machine learning e AI",
    "services.chatbotsDesc": "Progettazione di interfacce conversazionali intelligenti",
    "services.blockchainDesc": "Sfruttamento della tecnologia decentralizzata per applicazioni sicure",
    "about.title": "Chi è Afterthinking",
    "about.content": "Afterthinking srls è un'azienda italiana all'avanguardia nell'innovazione tecnologica. Siamo specializzati nella creazione di soluzioni all'avanguardia in vari domini dello sviluppo software.",
    "projects.title": "I Nostri Progetti",
    "projects.viewMore": "Vedi Altro",
    "testimonials.title": "Cosa Dicono i Nostri Clienti",
    "contact.title": "Contattaci",
    "contact.description": "Ci piacerebbe sentire da te. Inviaci un messaggio e ti risponderemo il prima possibile.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Messaggio",
    "contact.send": "Invia Messaggio",
    "contact.sending": "Invio in corso...",
    "contact.success": "Messaggio inviato con successo!",
    "contact.error": "Si è verificato un errore. Per favore, riprova.",
    "contact.namePlaceholder": "Inserisci il tuo nome",
    "contact.emailPlaceholder": "Inserisci la tua email",
    "contact.messagePlaceholder": "Inserisci il tuo messaggio",
    "contact.successTitle": "Messaggio Inviato",
    "contact.successMessage": "Il tuo messaggio è stato inviato con successo. Ti risponderemo presto.",
    "contact.errorTitle": "Errore",
    "contact.errorMessage": "C'è stato un errore nell'invio del messaggio. Per favore riprova.",
    "footer.rights": "Tutti i diritti riservati.",
    "footer.terms": "Termini di Servizio",
    "footer.privacy": "Politica sulla Privacy",
    "footer.cookies": "Politica sui Cookie",
    // Nuove traduzioni per i Termini di Servizio
    "terms.title": "Termini di Servizio",
    "terms.introduction": "Introduzione",
    "terms.introductionContent": "Benvenuti in Afterthinking srls. Accedendo al nostro sito web e utilizzando i nostri servizi, accetti di rispettare e essere vincolato dai seguenti termini e condizioni.",
    "terms.useOfService": "Utilizzo del Servizio",
    "terms.useOfServiceContent": "I nostri servizi sono forniti 'così come sono'. Non garantiamo che il servizio sarà ininterrotto o privo di errori. Ci riserviamo il diritto di modificare o interrompere qualsiasi parte del nostro servizio senza preavviso.",
    "terms.intellectualProperty": "Proprietà Intellettuale",
    "terms.intellectualPropertyContent": "Tutti i contenuti di questo sito, inclusi ma non limitati a testi, grafiche, loghi e software, sono di proprietà di Afterthinking srls e protetti dalle leggi sul copyright italiane e internazionali.",
    "terms.userResponsibilities": "Responsabilità dell'Utente",
    "terms.userResponsibilitiesContent": "Sei responsabile del mantenimento della riservatezza del tuo account e di tutte le attività che si verificano sotto il tuo account. Accetti di avvisarci immediatamente di qualsiasi uso non autorizzato del tuo account.",
    "terms.limitation": "Limitazione di Responsabilità",
    "terms.limitationContent": "Afterthinking srls non sarà responsabile per eventuali danni indiretti, incidentali, speciali, consequenziali o punitivi derivanti dal tuo uso o impossibilità di utilizzare il servizio.",
    "terms.governing": "Legge Applicabile",
    "terms.governingContent": "Questi termini saranno regolati e interpretati in conformità con le leggi italiane, senza riguardo alle sue disposizioni sui conflitti di legge.",
    // Nuove traduzioni per la Politica sulla Privacy
    "privacy.title": "Politica sulla Privacy",
    "privacy.introduction": "Introduzione",
    "privacy.introductionContent": "In Afterthinking srls, ci impegniamo a proteggere la tua privacy. Questa Politica sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.",
    "privacy.informationCollection": "Raccolta delle Informazioni",
    "privacy.informationCollectionContent": "Raccogliamo le informazioni che ci fornisci direttamente, ad esempio quando crei un account, richiedi un servizio o ci contatti per supporto.",
    "privacy.informationUse": "Utilizzo delle Informazioni",
    "privacy.informationUseContent": "Utilizziamo le informazioni che raccogliamo per fornire, mantenere e migliorare i nostri servizi, per comunicare con te e per rispettare gli obblighi legali.",
    "privacy.informationProtection": "Protezione delle Informazioni",
    "privacy.informationProtectionContent": "Implementiamo una varietà di misure di sicurezza per mantenere la sicurezza delle tue informazioni personali.",
    "privacy.cookiesUse": "Utilizzo dei Cookie",
    "privacy.cookiesUseContent": "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Puoi impostare il tuo browser per rifiutare tutti o alcuni cookie del browser, o per avvisarti quando i siti web impostano o accedono ai cookie.",
    // Nuove traduzioni per la Politica sui Cookie
    "cookies.title": "Politica sui Cookie",
    "cookies.introduction": "Introduzione",
    "cookies.introductionContent": "Questa Politica sui Cookie spiega come Afterthinking srls utilizza i cookie e tecnologie simili per riconoscerti quando visiti il nostro sito web.",
    "cookies.whatAreCookies": "Cosa sono i cookie",
    "cookies.whatAreCookiesContent": "I cookie sono piccoli file di dati che vengono posizionati sul tuo computer o dispositivo mobile quando visiti un sito web.",
    "cookies.howWeUseCookies": "Come utilizziamo i cookie",
    "cookies.howWeUseCookiesContent": "Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito, analizzare il nostro traffico e per scopi di sicurezza e monitoraggio.",
    "cookies.managingCookies": "Gestione dei cookie",
    "cookies.managingCookiesContent": "Puoi impostare il tuo browser per rifiutare tutti o alcuni cookie del browser, o per avvisarti quando i siti web impostano o accedono ai cookie. Se disabiliti o rifiuti i cookie, tieni presente che alcune parti di questo sito web potrebbero diventare inaccessibili o non funzionare correttamente."
  }
};

export type { TranslationsType, LanguagesType };
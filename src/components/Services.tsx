import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Code, Cpu, Globe, Layers, MessageSquare, Shield, Wifi, Palette } from 'lucide-react'

const Services: React.FC = () => {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Frontend Development",
        it: "Sviluppo Frontend"
      },
      description: {
        en: "Creating responsive and intuitive user interfaces with modern web technologies.",
        it: "Creazione di interfacce utente responsive e intuitive con tecnologie web moderne."
      }
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Backend Development",
        it: "Sviluppo Backend"
      },
      description: {
        en: "Building robust and scalable server-side applications to power your digital solutions.",
        it: "Costruzione di applicazioni lato server robuste e scalabili per alimentare le tue soluzioni digitali."
      }
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-600" />,
      title: {
        en: "SaaS Solutions",
        it: "Soluzioni SaaS"
      },
      description: {
        en: "Developing cloud-based software solutions for businesses of all sizes.",
        it: "Sviluppo di soluzioni software basate su cloud per aziende di tutte le dimensioni."
      }
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Artificial Intelligence",
        it: "Intelligenza Artificiale"
      },
      description: {
        en: "Implementing cutting-edge AI and machine learning algorithms to solve complex problems.",
        it: "Implementazione di algoritmi all'avanguardia di IA e machine learning per risolvere problemi complessi."
      }
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Chatbot Development",
        it: "Sviluppo Chatbot"
      },
      description: {
        en: "Creating intelligent conversational interfaces to enhance customer engagement.",
        it: "Creazione di interfacce conversazionali intelligenti per migliorare il coinvolgimento dei clienti."
      }
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Blockchain Solutions",
        it: "Soluzioni Blockchain"
      },
      description: {
        en: "Leveraging decentralized technology for secure and transparent applications.",
        it: "Sfruttamento della tecnologia decentralizzata per applicazioni sicure e trasparenti."
      }
    },
    {
      icon: <Wifi className="h-10 w-10 text-purple-600" />,
      title: {
        en: "IoT Development",
        it: "Sviluppo IoT"
      },
      description: {
        en: "Designing and implementing Internet of Things solutions for smart, connected devices.",
        it: "Progettazione e implementazione di soluzioni Internet of Things per dispositivi intelligenti e connessi."
      }
    },
    {
      icon: <Palette className="h-10 w-10 text-purple-600" />,
      title: {
        en: "Graphics and UI/UX Design",
        it: "Grafica e Design UI/UX"
      },
      description: {
        en: "Creating visually appealing and user-friendly interfaces to enhance user experience.",
        it: "Creazione di interfacce visivamente accattivanti e user-friendly per migliorare l'esperienza utente."
      }
    }
  ]

  return (
    <section id="services" className="w-full py-12 md:py-20 lg:py-0 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          {t('services.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title[language]}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
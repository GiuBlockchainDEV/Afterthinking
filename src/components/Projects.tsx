import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects: React.FC = () => {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 1,
      name: {
        en: "AI-Powered Customer Service Platform",
        it: "Piattaforma di Servizio Clienti Basata su IA"
      },
      description: {
        en: "An innovative AI-driven platform that revolutionizes customer service interactions, providing instant, accurate responses and improving overall customer satisfaction.",
        it: "Una piattaforma innovativa basata sull'IA che rivoluziona le interazioni del servizio clienti, fornendo risposte istantanee e accurate e migliorando la soddisfazione complessiva del cliente."
      },
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      name: {
        en: "Blockchain-Based Supply Chain Management",
        it: "Gestione della Catena di Approvvigionamento Basata su Blockchain"
      },
      description: {
        en: "A secure and transparent supply chain management system leveraging blockchain technology to ensure product authenticity and streamline logistics processes.",
        it: "Un sistema di gestione della catena di approvvigionamento sicuro e trasparente che sfrutta la tecnologia blockchain per garantire l'autenticità dei prodotti e ottimizzare i processi logistici."
      },
      image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      name: {
        en: "IoT-Enabled Smart City Solution",
        it: "Soluzione per Città Intelligente Abilitata IoT"
      },
      description: {
        en: "An integrated IoT platform that transforms urban environments into smart cities, optimizing resource management, enhancing public safety, and improving overall quality of life for citizens.",
        it: "Una piattaforma IoT integrata che trasforma gli ambienti urbani in città intelligenti, ottimizzando la gestione delle risorse, migliorando la sicurezza pubblica e la qualità della vita complessiva dei cittadini."
      },
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-0 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img
                src={project.image}
                alt={project.name[language]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.name[language]}</h3>
                <p className="text-gray-600">{project.description[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
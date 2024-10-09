import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const Testimonials: React.FC = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      text: "Afterthinking ha trasformato la nostra presenza online. Il loro approccio innovativo e l'attenzione ai dettagli hanno portato risultati eccezionali. Altamente raccomandati!",
      name: "Maria Rossi",
      company: "TechItalia Srl",
      image: "https://i.pravatar.cc/150?img=47",
      lang: "it"
    },
    {
      id: 2,
      text: "Working with Afterthinking was a game-changer for our startup. Their expertise in AI and blockchain helped us create a cutting-edge product that's now leading the market.",
      name: "John Smith",
      company: "InnovateTech Inc.",
      image: "https://i.pravatar.cc/150?img=68",
      lang: "en"
    },
    {
      id: 3,
      text: "L'équipe d'Afterthinking a dépassé toutes nos attentes. Leur approche créative et leur maîtrise technique ont donné vie à notre vision d'une manière que nous n'aurions jamais imaginée.",
      name: "Sophie Dubois",
      company: "FutureSoft SARL",
      image: "https://i.pravatar.cc/150?img=41",
      lang: "fr"
    }
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">{t('testimonials.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full mr-4 w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
              <p className="text-right text-xs text-gray-400 mt-4">{testimonial.lang === 'en' ? 'English' : testimonial.lang === 'it' ? 'Italiano' : 'Français'}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
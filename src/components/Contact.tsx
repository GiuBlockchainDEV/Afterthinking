import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

const Contact: React.FC = () => {
  const { t } = useLanguage()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    const mailtoLink = `mailto:j.neroni@afterthinking.it?subject=${encodeURIComponent(`Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-8 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t('contact.title')}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t('contact.description')}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input 
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                name="name" 
                placeholder={t('contact.namePlaceholder')} 
                required 
              />
              <input 
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="email" 
                name="email" 
                placeholder={t('contact.emailPlaceholder')} 
                required 
              />
              <textarea 
                className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                name="message" 
                placeholder={t('contact.messagePlaceholder')} 
                required 
              />
              <Button 
                className="w-full"
                type="submit"
              >
                {t('contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
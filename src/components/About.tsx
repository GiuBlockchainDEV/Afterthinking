import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('about.title')}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('about.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
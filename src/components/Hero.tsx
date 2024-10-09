import React from 'react'
import { Link } from 'react-scroll'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

const Hero: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {t('hero.title')}
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="space-x-4">
            <Link to="contact" smooth={true} duration={500}>
              <Button size="lg">{t('hero.cta')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
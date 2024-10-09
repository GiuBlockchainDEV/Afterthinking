import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Afterthinking srls. {t('footer.rights')}</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4 text-sm">
              <li>
                <Link to="/terms-of-service" className="hover:text-purple-600 transition duration-300" onClick={scrollToTop}>
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-purple-600 transition duration-300" onClick={scrollToTop}>
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-purple-600 transition duration-300" onClick={scrollToTop}>
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/afterthinking" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/afterthinking" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition duration-300">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
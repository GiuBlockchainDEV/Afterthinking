import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import viteLogo from '/vite.svg'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguage = () => setLanguage(language === 'en' ? 'it' : 'en')

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'services', label: t('nav.services') },
    { key: 'about', label: t('nav.about') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'testimonials', label: t('nav.testimonials') },
    { key: 'contact', label: t('nav.contact') },
  ]

  const NavLink: React.FC<{ to: string; onClick: () => void; children: React.ReactNode; className?: string }> = ({ to, children, onClick, className }) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          className={className}
          onClick={onClick}
        >
          {children}
        </ScrollLink>
      )
    }
    return (
      <Link
        to={`/#${to}`}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  const HomeLink: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className, onClick }) => (
    <Link to="/" className={className} onClick={() => {
      window.scrollTo(0, 0)
      onClick && onClick()
    }}>
      {children}
    </Link>
  )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <HomeLink className="flex items-center space-x-2 cursor-pointer">
            <img src={viteLogo} alt="Vite logo" className="h-8 w-8" />
            <span className="font-bold text-xl text-primary">Afterthinking</span>
          </HomeLink>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              item.key === 'home' ? (
                <HomeLink
                  key={item.key}
                  className="transition-colors hover:text-primary text-foreground/80 cursor-pointer"
                >
                  {item.label}
                </HomeLink>
              ) : (
                <NavLink
                  key={item.key}
                  to={item.key}
                  onClick={() => {}}
                  className="transition-colors hover:text-primary text-foreground/80 cursor-pointer"
                >
                  {item.label}
                </NavLink>
              )
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="cursor-pointer select-none"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'en' ? 'EN' : 'IT'}
            </Button>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden overflow-y-auto">
          <div className="flex flex-col min-h-screen">
            <div className="flex items-center justify-between p-4 border-b">
              <HomeLink className="flex items-center space-x-2" onClick={toggleMenu}>
                <img src={viteLogo} alt="Vite logo" className="h-6 w-6" />
                <span className="font-bold text-lg text-primary">Afterthinking</span>
              </HomeLink>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow py-8">
              {navItems.map((item) => (
                item.key === 'home' ? (
                  <HomeLink
                    key={item.key}
                    className="text-2xl font-semibold py-4 hover:text-primary transition-colors w-full text-center"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </HomeLink>
                ) : (
                  <NavLink
                    key={item.key}
                    to={item.key}
                    onClick={toggleMenu}
                    className="text-2xl font-semibold py-4 hover:text-primary transition-colors w-full text-center"
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
              <Button 
                variant="ghost" 
                onClick={() => {
                  toggleLanguage()
                  toggleMenu()
                }}
                className="mt-4 text-xl font-semibold"
              >
                {language === 'en' ? 'Italiano' : 'English'}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
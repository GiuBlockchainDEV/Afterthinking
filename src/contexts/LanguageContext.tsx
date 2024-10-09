import React, { createContext, useState, useContext } from 'react'
import { translations, TranslationKeys, LanguagesType } from '@/lib/translations'

type Language = keyof LanguagesType

interface LanguageContextType {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: TranslationKeys): string => {
    return translations[language][key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
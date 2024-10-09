// src/pages/CookiePolicy.tsx
import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PolicyLayout from '@/components/PolicyLayout'

export default function CookiePolicy() {
  const { t } = useLanguage()

  return (
    <PolicyLayout title={t('cookies.title')}>
      <section>
        <h2>{t('cookies.introduction')}</h2>
        <p>{t('cookies.introductionContent')}</p>
      </section>
      <section>
        <h2>{t('cookies.whatAreCookies')}</h2>
        <p>{t('cookies.whatAreCookiesContent')}</p>
      </section>
      <section>
        <h2>{t('cookies.howWeUseCookies')}</h2>
        <p>{t('cookies.howWeUseCookiesContent')}</p>
      </section>
      <section>
        <h2>{t('cookies.managingCookies')}</h2>
        <p>{t('cookies.managingCookiesContent')}</p>
      </section>
    </PolicyLayout>
  )
}
// src/pages/PrivacyPolicy.tsx
import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import PolicyLayout from '@/components/PolicyLayout'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <PolicyLayout title={t('privacy.title')}>
      <section>
        <h2>{t('privacy.introduction')}</h2>
        <p>{t('privacy.introductionContent')}</p>
      </section>
      <section>
        <h2>{t('privacy.informationCollection')}</h2>
        <p>{t('privacy.informationCollectionContent')}</p>
      </section>
      <section>
        <h2>{t('privacy.informationUse')}</h2>
        <p>{t('privacy.informationUseContent')}</p>
      </section>
      <section>
        <h2>{t('privacy.informationProtection')}</h2>
        <p>{t('privacy.informationProtectionContent')}</p>
      </section>
      <section>
        <h2>{t('privacy.cookiesUse')}</h2>
        <p>{t('privacy.cookiesUseContent')}</p>
      </section>
    </PolicyLayout>
  )
}
import { useLanguage } from '@/contexts/LanguageContext'
import PolicyLayout from '@/components/PolicyLayout'

export default function TermsOfService() {
  const { t } = useLanguage()

  return (
    <PolicyLayout title={t('terms.title')}>
      <section>
        <h2>{t('terms.introduction')}</h2>
        <p>{t('terms.introductionContent')}</p>
      </section>
      <section>
        <h2>{t('terms.useOfService')}</h2>
        <p>{t('terms.useOfServiceContent')}</p>
      </section>
      <section>
        <h2>{t('terms.intellectualProperty')}</h2>
        <p>{t('terms.intellectualPropertyContent')}</p>
      </section>
      <section>
        <h2>{t('terms.userResponsibilities')}</h2>
        <p>{t('terms.userResponsibilitiesContent')}</p>
      </section>
      <section>
        <h2>{t('terms.limitation')}</h2>
        <p>{t('terms.limitationContent')}</p>
      </section>
      <section>
        <h2>{t('terms.governing')}</h2>
        <p>{t('terms.governingContent')}</p>
      </section>
    </PolicyLayout>
  )
}
import PageHeader from '../components/Pageheader'
import { useLang } from '../context/LanguageContext'

export default function Terms() {
  const { t, isRTL } = useLang()
  const content = t('terms')

  return (
    <>
      <PageHeader
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'rtl-text' : ''}`}>
              {content.header.title}
            </h1>
            <p className={`text-sm text-gray-500 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <p className={`text-gray-600 leading-relaxed mb-8 ${isRTL ? 'rtl-text' : ''}`}>
            {content.intro}
          </p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                <h2 className={`font-display text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'rtl-text' : ''}`}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500">
              {content.contactNote}{' '}
              <a href="mailto:vaucherlife@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium">
                vaucherlife@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

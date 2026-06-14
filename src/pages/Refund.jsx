import { AlertCircle } from 'lucide-react'
import PageHeader from '../components/Pageheader'
import { useLang } from '../context/LanguageContext'

export default function Refund() {
  const { t, isRTL } = useLang()
  const content = t('refund')

  return (
    <>
      <PageHeader
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className={`text-sm text-amber-800 ${isRTL ? 'rtl-text' : ''}`}>
            <span className="font-semibold">{content.importantNotice}: </span>
            {content.noticeBody}
          </p>
        </div>

        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'rtl-text' : ''}`}>
              {content.header.title}
            </h1>
            <p className={`text-sm text-gray-500 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-10 last:border-0 last:pb-0">
                <h2 className={`font-display text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>

                {section.body && section.body.split('\n\n').map((para, i) => (
                  <p key={i} className={`text-gray-600 leading-relaxed mb-3 ${isRTL ? 'rtl-text' : ''}`}>
                    {para}
                  </p>
                ))}

                {section.subsections && (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((sub) => (
                      <div key={sub.title} className="bg-gray-50 rounded-xl p-5">
                        <h3 className={`font-semibold text-gray-900 mb-2 text-sm ${isRTL ? 'rtl-text' : ''}`}>
                          {sub.title}
                        </h3>
                        <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'rtl-text' : ''}`}>
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ol className={`mt-3 space-y-3 ${isRTL ? 'rtl-text' : ''}`}>
                    {section.list.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
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

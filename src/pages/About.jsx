import { Link } from 'react-router-dom'
import { Building2, FlaskConical, Radiation, Pill, Stethoscope, Target, Eye, Heart, Shield, ArrowRight } from 'lucide-react'
import PageHeader from '../components/Pageheader'
import SectionWrapper from '../components/Sectionwrapper'
import { useLang } from '../context/LanguageContext'

const categoryIcons = [Building2, FlaskConical, Radiation, Pill, Stethoscope]
const categoryColors = [
  'bg-blue-50 text-blue-600',
  'bg-purple-50 text-purple-600',
  'bg-orange-50 text-orange-600',
  'bg-brand-50 text-brand-600',
  'bg-teal-50 text-teal-600',
]
const valueIcons = [Target, Eye, Heart, Shield]
const valueColors = [
  'bg-brand-50 text-brand-600',
  'bg-blue-50 text-blue-600',
  'bg-rose-50 text-rose-600',
  'bg-amber-50 text-amber-600',
]

export default function About() {
  const { t } = useLang()
  const a = t('about')

  return (
    <>
      <PageHeader
        badge={a.header.badge}
        title={a.header.title}
        subtitle={a.header.subtitle}
      />

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
              {a.story.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              {a.story.heading}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{a.story.body1}</p>
              <p>{a.story.body2}</p>
              <p>{a.story.body3}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {a.story.stats.map(({ stat, label }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-brand-50 to-teal-50/50 rounded-2xl p-6 border border-brand-100/50"
              >
                <div className="font-display text-3xl font-extrabold text-gradient mb-1">{stat}</div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {a.values.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            {a.values.heading}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.items.map(({ title, desc }, i) => {
            const Icon = valueIcons[i]
            return (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${valueColors[i]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {a.services.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {a.services.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{a.services.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.services.categories.map(({ title, desc }, i) => {
            const Icon = categoryIcons[i]
            return (
              <div
                key={title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${categoryColors[i]} group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            )
          })}

          {/* CTA card */}
          <div className="bg-brand-gradient rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="font-display font-bold text-xl mb-2">{a.services.ctaCard.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">{a.services.ctaCard.body}</p>
            </div>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors self-start"
            >
              {a.services.ctaCard.button} <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Partner CTA */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">{a.partner.heading}</h2>
          <p className="text-gray-500 text-lg mb-8">{a.partner.body}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            {a.partner.button} <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
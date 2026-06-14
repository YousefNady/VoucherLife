import { Link } from 'react-router-dom'
import {
  Shield, Tag, Zap, Users, ChevronRight, CheckCircle2,
  Building2, FlaskConical, Radiation, Pill, Stethoscope, Star, ArrowRight,
} from 'lucide-react'
import SectionWrapper from '../components/Sectionwrapper'
import PhoneMockup from '../components/Phonemockup'
import { useLang } from '../context/LanguageContext'
import googlePlay from "../assets/google-play.svg";
import appleStoreBlack from "../assets/apple-store-black.svg";
import appleStoreWhite from "../assets/apple-store-white.svg";


const featureIcons = [Shield, Tag, Zap, Users]
const categoryIcons = [Building2, FlaskConical, Radiation, Pill, Stethoscope]
const featureColors = [
  'bg-blue-50 text-blue-600',
  'bg-brand-50 text-brand-600',
  'bg-amber-50 text-amber-600',
  'bg-purple-50 text-purple-600',
]
const categoryColors = [
  'text-blue-600 bg-blue-50',
  'text-purple-600 bg-purple-50',
  'text-orange-600 bg-orange-50',
  'text-brand-600 bg-brand-50',
  'text-teal-600 bg-teal-50',
]
const policyRoutes = ['/privacy', '/terms', '/refund']
const policyIcons = [Shield, CheckCircle2, Tag]

export default function Home() {
  const { t } = useLang()
  const h = t('home')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50/30 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-start">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                {h.hero.badge}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                {h.hero.heading1}{' '}
                <span className="text-gradient">{h.hero.heading2}</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                {h.hero.subheading}
              </p>

              <ul className="space-y-2.5 mb-10 text-start max-w-sm mx-auto lg:mx-0">
                {h.hero.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.voucher_life.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg"
                >
                  <img
                    src={googlePlay}
                    alt="Google Play"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="text-xs text-gray-400 leading-none">{h.hero.getItOn}</div>
                    <div className="text-sm font-bold leading-tight">{h.hero.googlePlay}</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/us/app/voucher-life/id6755738222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg"
                >
                    <img
                      src={appleStoreWhite}
                      alt="Apple Store"
                      className="w-7 h-7"
                    />
                  <div>
                    <div className="text-xs text-gray-400 leading-none">{h.hero.downloadOnThe}</div>
                    <div className="text-sm font-bold leading-tight">{h.hero.appStore}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {h.stats.map(({ value, label }) => (
              <div key={label} className="text-center text-white">
                <div className="font-display text-3xl font-extrabold mb-0.5">{value}</div>
                <div className="text-xs font-medium text-white/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {h.features.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {h.features.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{h.features.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.features.items.map(({ title, desc }, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${featureColors[i]}`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {h.howItWorks.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {h.howItWorks.heading}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-100 z-0" />
          {h.howItWorks.steps.map(({ step, title, desc }) => (
            <div key={step} className="relative text-center">
              <div className="relative z-10 w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-brand">
                <span className="font-display text-xl font-black text-white">{step}</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* About preview + categories */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
              {h.about.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              {h.about.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{h.about.body1}</p>
            <p className="text-gray-600 leading-relaxed mb-8">{h.about.body2}</p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group"
            >
              {h.about.learnMore}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-3">
            {h.about.categories.map(({ label, count }, i) => {
              const Icon = categoryIcons[i]
              return (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 hover:border-brand-100 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${categoryColors[i]}`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-gray-800 flex-1">{label}</span>
                  <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">
                    {count}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Policies */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">{h.policies.heading}</h2>
          <p className="text-gray-500">{h.policies.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {h.policies.items.map(({ title, desc }, i) => {
            const Icon = policyIcons[i]
            return (
              <Link
                key={policyRoutes[i]}
                to={policyRoutes[i]}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                  <Icon size={20} className="text-brand-600" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                  {h.policies.readMore} <ChevronRight size={14} />
                </span>
              </Link>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Trust / CTA section */}
      <SectionWrapper>
        <div className="bg-brand-gradient rounded-3xl px-8 py-12 sm:px-12 sm:py-16 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star size={28} className="text-white fill-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{h.cta.heading}</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{h.cta.subheading}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.voucher_life.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm"
            >
                <img
                src={googlePlay}
                alt="Google Play"
                className="w-8 h-8"
              />
              {h.cta.googlePlay}
            </a>
            <a
              href="https://apps.apple.com/us/app/voucher-life/id6755738222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm"
            >
                <img
                src={appleStoreBlack}
                alt="Apple Store"
                className="w-7 h-7"
              />
              {h.cta.appStore}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
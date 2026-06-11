import { Link } from 'react-router-dom'
import { Shield, Tag, Zap, Users, ChevronRight, CheckCircle2, Building2, FlaskConical, Radiation, Pill, Package, Star, ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/Sectionwrapper'
import PhoneMockup from '../components/Phonemockup'
// dummy comment

const features = [
  {
    icon: Shield,
    title: 'Trusted Network',
    desc: 'We partner with top hospitals, clinics, labs, pharmacies and specialists — all verified and accredited.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Tag,
    title: 'Real Savings',
    desc: 'Get meaningful discounts on the medical services your family needs, when you need them most.',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: Zap,
    title: 'Instant Access',
    desc: 'Activate vouchers and subscriptions instantly from your phone. No paperwork, no waiting.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Users,
    title: 'For Your Family',
    desc: 'One subscription that extends to your whole family. Better healthcare starts at home.',
    color: 'bg-purple-50 text-purple-600',
  },
]

const steps = [
  { step: '01', title: 'Download the App', desc: 'Get Voucher Life on iOS or Android in seconds.' },
  { step: '02', title: 'Choose a Plan', desc: 'Pick a subscription that fits your healthcare needs and budget.' },
  { step: '03', title: 'Find Providers', desc: 'Browse 200+ verified hospitals, labs, pharmacies, and clinics near you.' },
  { step: '04', title: 'Show & Save', desc: 'Present your digital voucher at checkout and enjoy instant discounts.' },
]

const categories = [
  { icon: Building2, label: 'Hospitals & Clinics', count: '80+', color: 'text-blue-600 bg-blue-50' },
  { icon: FlaskConical, label: 'Medical Labs', count: '45+', color: 'text-purple-600 bg-purple-50' },
  { icon: Radiation, label: 'Radiology Centers', count: '30+', color: 'text-orange-600 bg-orange-50' },
  { icon: Pill, label: 'Pharmacies', count: '60+', color: 'text-brand-600 bg-brand-50' },
  { icon: Package, label: 'Medical Supplies', count: '25+', color: 'text-teal-600 bg-teal-50' },
]

const policies = [
  { to: '/privacy', icon: Shield, title: 'Privacy Policy', desc: 'How we collect, use, and safeguard your personal information.' },
  { to: '/terms', icon: CheckCircle2, title: 'Terms of Service', desc: 'The terms and conditions for using the Voucher Life application.' },
  { to: '/refund', icon: Tag, title: 'Refund & Cancellation', desc: 'Our refund conditions, exceptions, and how to submit a request.' },
]

const stats = [
  { value: '200+', label: 'Healthcare Providers' },
  { value: '50K+', label: 'Active Subscribers' },
  { value: '4.8★', label: 'App Store Rating' },
  { value: '30%', label: 'Average Savings' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50/30 pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                Now available across Egypt
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                Better Healthcare.{' '}
                <span className="text-gradient">Smarter Savings.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Voucher Life gives you instant discounts and exclusive offers on healthcare services from the best providers across Egypt — hospitals, clinics, labs, pharmacies and more.
              </p>

              <ul className="space-y-2.5 mb-10 text-left max-w-sm mx-auto lg:mx-0">
                {[
                  'Instant discounts on medical services',
                  'Wide network of trusted healthcare providers',
                  'Save more for you and your family',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg"
                >
                  <svg className="w-7 h-7" viewBox="0 0 512 512" fill="none">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00D084"/>
                    <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.5 247.1-247.1v-5.8L47 0z" fill="#00D084"/>
                    <path d="M421.6 269.1l-66.1-37.9-74.1 74.1 74.1 74.1 66.1-38c18.9-10.7 18.9-37.3 0-48l.0.0z" fill="#FFCE00"/>
                    <path d="M354.1 231.2L106.9 511.5c1 .7 2.1 1.4 3.2 2.1 4.3 2.5 9.2 3.9 14.2 3.9 6.2 0 12.3-1.9 17.4-5.3l271.5-155.6-59.1-125.4z" fill="#FF3A44"/>
                    <path d="M354.1 231.2l59.1-33.8L141.6 41.7C136.5 38.3 130.4 36.4 124.2 36.4c-4.9 0-9.8 1.4-14.2 3.9-1.1.6-2.2 1.3-3.2 2.1L354.1 231.2z" fill="#00D084"/>
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400 leading-none">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg"
                >
                  <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div>
                    <div className="text-xs text-gray-400 leading-none">Download on the</div>
                    <div className="text-sm font-bold leading-tight">App Store</div>
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
            {stats.map(({ value, label }) => (
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
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">Why Voucher Life</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything your family's health needs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Built for Egypt's healthcare landscape — connecting you with quality providers at prices that make sense.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-100 hover:shadow-xl transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start saving in four steps
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-100 z-0" />

          {steps.map(({ step, title, desc }) => (
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
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">About Voucher Life</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Your smart way to save on healthcare
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Voucher Life is a digital healthcare discount platform built to make quality medical care affordable for Egyptian families. We provide vouchers, subscriptions, and exclusive offers across an extensive network of accredited providers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our mission is to make quality healthcare affordable and accessible for everyone in Egypt — not just the few.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group"
            >
              Learn more about us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-3">
            {categories.map(({ icon: Icon, label, count, color }) => (
              <div key={label} className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 hover:border-brand-100 hover:shadow-md transition-all duration-200">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                  <Icon size={18} />
                </div>
                <span className="font-medium text-gray-800 flex-1">{label}</span>
                <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Policies */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3">Our Policies</h2>
          <p className="text-gray-500">Transparency is core to how we operate.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {policies.map(({ to, icon: Icon, title, desc }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                <Icon size={20} className="text-brand-600" />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Trust section */}
      <SectionWrapper>
        <div className="bg-brand-gradient rounded-3xl px-8 py-12 sm:px-12 sm:py-16 text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star size={28} className="text-white fill-white" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to start saving?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Download Voucher Life now and enjoy exclusive healthcare discounts across Egypt's best medical providers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm"
            >
              <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00D084"/>
                <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.5 247.1-247.1v-5.8L47 0z" fill="#00D084"/>
                <path d="M421.6 269.1l-66.1-37.9-74.1 74.1 74.1 74.1 66.1-38c18.9-10.7 18.9-37.3 0-48l.0.0z" fill="#FFCE00"/>
                <path d="M354.1 231.2L106.9 511.5c1 .7 2.1 1.4 3.2 2.1 4.3 2.5 9.2 3.9 14.2 3.9 6.2 0 12.3-1.9 17.4-5.3l271.5-155.6-59.1-125.4z" fill="#FF3A44"/>
                <path d="M354.1 231.2l59.1-33.8L141.6 41.7C136.5 38.3 130.4 36.4 124.2 36.4c-4.9 0-9.8 1.4-14.2 3.9-1.1.6-2.2 1.3-3.2 2.1L354.1 231.2z" fill="#00D084"/>
              </svg>
              Get it on Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
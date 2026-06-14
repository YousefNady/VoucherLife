import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useLang } from '../context/LanguageContext'
import { FAQSection } from '../components/FAQAccordion'
import googlePlay from "../assets/google-play.svg";
import appleStore from "../assets/apple-store-white.svg";

const methodIcons = [Mail, Phone, MapPin, Clock]
const methodColors = [
  'bg-brand-50 text-brand-600',
  'bg-blue-50 text-blue-600',
  'bg-rose-50 text-rose-600',
  'bg-amber-50 text-amber-600',
]
const methodHrefs = [
  'mailto:vaucherlife@gmail.com',
  'tel:+201007190880',
  'https://maps.google.com/?q=Cairo,Egypt',
  null,
]

export default function Contact() {
  const { t } = useLang()
  const c = t('contact')

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("access_key", "bd908fc3-e2c0-4d23-9777-26508dbef8e3"); // 
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("subject", form.subject);
  formData.append("message", form.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData // 
    });

    const result = await response.json();
    
    if (result.success) {
      setSubmitted(true); 
    } else {
      console.error("Submission failed:", result);
    }
  } catch (error) {
    console.error("Error connecting to the service:", error);
  }
};

  return (
    <>
      <PageHeader badge={c.header.badge} title={c.header.title} subtitle={c.header.subtitle} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {c.methods.map(({ title, value, note }, i) => {
            const Icon = methodIcons[i]
            const href = methodHrefs[i]
            return (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${methodColors[i]}`}>
                  <Icon size={20} />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{title}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-semibold text-gray-900 hover:text-brand-600 transition-colors block mb-1 text-sm break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-gray-900 mb-1 text-sm">{value}</p>
                )}
                <p className="text-xs text-gray-500">{note}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                <MessageCircle size={18} className="text-brand-600" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-gray-900">{c.form.title}</h2>
                <p className="text-sm text-gray-500">{c.form.subtitle}</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{c.success.title}</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">{c.success.body}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  {c.success.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
                      {c.form.name}
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder={c.form.namePlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">
                      {c.form.email}
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder={c.form.emailPlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="subject">
                    {c.form.subject}
                  </label>
                  <select
                    id="subject" name="subject" required
                    value={form.subject} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all bg-white"
                  >
                    <option value="">{c.form.subjectPlaceholder}</option>
                    {c.form.subjects.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
                    {c.form.message}
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder={c.form.messagePlaceholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-6 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
                >
                  <Send size={16} />
                  {c.form.submit}
                </button>

                <p className="text-xs text-center text-gray-400">
                  {c.form.orEmail}{' '}
                  <a href="mailto:vaucherlife@gmail.com" className="text-brand-600 hover:underline">
                    vaucherlife@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-50 to-teal-50/50 rounded-2xl p-8 border border-brand-100/50">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{c.partner.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.partner.body}</p>
              <a
                href="mailto:vaucherlife@gmail.com?subject=Partnership%20Inquiry"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-brand hover:shadow-lg transition-all"
              >
                <Mail size={14} />
                {c.partner.button}
              </a>
            </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8">
            <FAQSection faqData={c.faq} />
          </div>

            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <h3 className="font-display text-lg font-bold mb-2">{c.download.title}</h3>
              <p className="text-gray-400 text-sm mb-5">{c.download.body}</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.voucher_life.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
                >
              <img
                src={googlePlay}
                alt="Google Play"
                className="w-8 h-8"
              />
                  {c.download.googlePlay}
                </a>
                <a
                  href="https://apps.apple.com/us/app/voucher-life/id6755738222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
                >
              <img
                src={appleStore}
                alt="App Store"
                className="w-7 h-7"
              />
                  {c.download.appStore}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
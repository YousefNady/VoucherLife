import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import PageHeader from '../components/Pageheader'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'voucherlifeapp@gmail.com',
    href: 'mailto:voucherlifeapp@gmail.com',
    note: 'We respond within 1–2 business days',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+20 123 456 7890',
    href: 'tel:+201234567890',
    note: 'Sun–Thu, 9am–5pm Cairo time',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Our Location',
    value: 'Cairo, Egypt',
    href: 'https://maps.google.com/?q=Cairo,Egypt',
    note: 'Serving all of Egypt',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    value: 'Sun – Thu',
    href: null,
    note: '9:00 AM – 5:00 PM (Cairo Time)',
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Non-functional form — shows success state
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Get in touch"
        subtitle="Have a question, technical issue, or partnership inquiry? We're here to help."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactMethods.map(({ icon: Icon, title, value, href, note, color }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
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
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                <MessageCircle size={18} className="text-brand-600" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-gray-900">Send a Message</h2>
                <p className="text-sm text-gray-500">We'll get back to you soon</p>
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
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Message received!</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">
                  Thank you for reaching out. Our support team will respond within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ahmed Mohamed"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ahmed@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="refund">Refund Request</option>
                    <option value="partnership">Provider Partnership</option>
                    <option value="feedback">General Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question in detail..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-6 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <p className="text-xs text-center text-gray-400">
                  Or email us directly at{' '}
                  <a href="mailto:voucherlifeapp@gmail.com" className="text-brand-600 hover:underline">
                    voucherlifeapp@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-brand-50 to-teal-50/50 rounded-2xl p-8 border border-brand-100/50">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Partner with us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Are you a hospital, clinic, lab, pharmacy, or radiology center? Join Egypt's fastest-growing healthcare discount network and gain exposure to thousands of active subscribers.
              </p>
              <a
                href="mailto:voucherlifeapp@gmail.com?subject=Partnership%20Inquiry"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-brand hover:shadow-lg transition-all"
              >
                <Mail size={14} />
                Start a conversation
              </a>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">Frequently asked</h3>
              <div className="space-y-4">
                {[
                  { q: 'How do I delete my account?', a: 'Go to Settings → Delete Account inside the app. All data will be permanently removed.' },
                  { q: 'How do I request a refund?', a: 'Email us at voucherlifeapp@gmail.com with your order details. See our Refund Policy for eligible cases.' },
                  { q: 'Can I use vouchers for family members?', a: 'Yes — one subscription can cover your whole family. Check your plan details in the app.' },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-950 rounded-2xl p-8 text-white">
              <h3 className="font-display text-lg font-bold mb-2">Download the App</h3>
              <p className="text-gray-400 text-sm mb-5">Manage your subscription, vouchers, and profile directly from the Voucher Life app.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 512 512" fill="none"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#00D084"/><path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l2.7 1.5 247.1-247.1v-5.8L47 0z" fill="#00D084"/><path d="M421.6 269.1l-66.1-37.9-74.1 74.1 74.1 74.1 66.1-38c18.9-10.7 18.9-37.3 0-48l.0.0z" fill="#FFCE00"/><path d="M354.1 231.2L106.9 511.5c1 .7 2.1 1.4 3.2 2.1 4.3 2.5 9.2 3.9 14.2 3.9 6.2 0 12.3-1.9 17.4-5.3l271.5-155.6-59.1-125.4z" fill="#FF3A44"/><path d="M354.1 231.2l59.1-33.8L141.6 41.7C136.5 38.3 130.4 36.4 124.2 36.4c-4.9 0-9.8 1.4-14.2 3.9-1.1.6-2.2 1.3-3.2 2.1L354.1 231.2z" fill="#00D084"/></svg>
                  Google Play
                </a>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors">
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
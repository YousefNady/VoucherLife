import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'
import Logo from './Logo'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/refund', label: 'Refund Policy' },
  { to: '/contact', label: 'Contact Us' },
]

const categories = [
  'Hospitals & Clinics',
  'Medical Labs',
  'Radiology Centers',
  'Pharmacies',
  'Medical Supplies',
  'Packages',
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo className="h-8 w-auto" />
              <span className="font-display font-bold text-lg text-white">
                Voucher <span className="text-gradient">Life</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Making quality healthcare affordable and accessible for everyone in Egypt.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-gray-500">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Mail size={15} className="text-brand-500 shrink-0" />
                <a href="mailto:voucherlifeapp@gmail.com" className="hover:text-white transition-colors break-all">
                  voucherlifeapp@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <Phone size={15} className="text-brand-500 shrink-0" />
                <a href="tel:+201234567890" className="hover:text-white transition-colors">
                  +20 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-500">
                <MapPin size={15} className="text-brand-500 shrink-0" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <div className="text-xs text-gray-400 leading-none">Download on the</div>
                  <div className="text-white text-xs font-semibold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 3l8.5 8.5M3 21l8.5-8.5M12 12l9-5.5M12 12l9 5.5" stroke="#fff" strokeWidth="1.5"/><circle cx="3" cy="3" r="1.5" fill="#60BE88"/><circle cx="3" cy="21" r="1.5" fill="#FF4444"/><circle cx="21" cy="6.5" r="1.5" fill="#FFDD55"/><circle cx="21" cy="17.5" r="1.5" fill="#4488FF"/></svg>
                <div>
                  <div className="text-xs text-gray-400 leading-none">Get it on</div>
                  <div className="text-white text-xs font-semibold leading-tight">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Voucher Life. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Made with <Heart size={13} className="text-brand-500 fill-brand-500" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  )
}
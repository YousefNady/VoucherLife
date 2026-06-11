import { Link } from 'react-router-dom'
import { Building2, FlaskConical, Radiation, Pill, Package, Target, Eye, Heart, Shield, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionWrapper from '../components/SectionWrapper'

const categories = [
  { icon: Building2, title: 'Hospitals & Clinics', desc: 'Discounts at accredited hospitals and specialist clinics across Egypt.', color: 'bg-blue-50 text-blue-600' },
  { icon: FlaskConical, title: 'Medical Labs', desc: 'Save on blood tests, cultures, PCR, and comprehensive diagnostic packages.', color: 'bg-purple-50 text-purple-600' },
  { icon: Radiation, title: 'Radiology Centers', desc: 'Reduced rates on X-rays, MRIs, CT scans, and ultrasound services.', color: 'bg-orange-50 text-orange-600' },
  { icon: Pill, title: 'Pharmacies', desc: 'Exclusive discounts on medications, vitamins, and healthcare products.', color: 'bg-brand-50 text-brand-600' },
  { icon: Package, title: 'Medical Supplies', desc: 'Lower prices on home healthcare equipment and medical consumables.', color: 'bg-teal-50 text-teal-600' },
]

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To make quality healthcare affordable and accessible for everyone in Egypt.', color: 'bg-brand-50 text-brand-600' },
  { icon: Eye, title: 'Our Vision', desc: 'A future where no Egyptian family has to choose between financial security and quality medical care.', color: 'bg-blue-50 text-blue-600' },
  { icon: Heart, title: 'Our Values', desc: 'Trust, transparency, and genuine care for every patient we serve — not just as customers, but as people.', color: 'bg-rose-50 text-rose-600' },
  { icon: Shield, title: 'Our Commitment', desc: 'Every provider in our network is verified and accredited. Your safety and wellbeing come first, always.', color: 'bg-amber-50 text-amber-600' },
]

const team = [
  { name: 'Healthcare Savings', stat: '30% avg.', label: 'across all categories' },
  { name: 'Provider Network', stat: '200+', label: 'verified providers' },
  { name: 'Happy Families', stat: '50K+', label: 'active subscribers' },
  { name: 'Cities Covered', stat: '10+', label: 'across Egypt' },
]

export default function About() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="Healthcare savings built for Egyptian families"
        subtitle="Voucher Life was founded on a simple belief: quality healthcare shouldn't be a privilege. We make it affordable for everyone."
      />

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">Our Story</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Bridging the gap between healthcare and affordability
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Voucher Life was born from a real problem: too many Egyptian families were skipping doctor visits, delaying lab tests, and going without prescriptions — not because they didn't care about their health, but because healthcare costs were simply out of reach.
              </p>
              <p>
                We built a platform that connects everyday people with Egypt's top healthcare providers, giving them access to exclusive discounts through a simple mobile app. No insurance required. No complex paperwork. Just show your voucher and save.
              </p>
              <p>
                Today, Voucher Life serves tens of thousands of subscribers across Egypt, with a growing network of hospitals, clinics, labs, pharmacies, and radiology centers — all committed to making quality care accessible.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {team.map(({ name, stat, label }) => (
              <div key={name} className="bg-gradient-to-br from-brand-50 to-teal-50/50 rounded-2xl p-6 border border-brand-100/50">
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
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">What Drives Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Mission, vision & values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">Service Categories</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive healthcare coverage
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From routine check-ups to specialized diagnostics, our network covers the full spectrum of your family's medical needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-100 hover:shadow-lg transition-all duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-brand-gradient rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <h3 className="font-display font-bold text-xl mb-2">Ready to join?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">
                Download Voucher Life and start saving on healthcare today.
              </p>
            </div>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors self-start"
            >
              Download Now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Partner CTA */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Are you a healthcare provider?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Join Egypt's fastest-growing healthcare discount network. Expand your patient base and increase visibility among thousands of active subscribers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Partner With Us <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
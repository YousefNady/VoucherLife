export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="bg-gradient-to-br from-brand-50 via-white to-teal-50/30 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
        {badge && (
          <span className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
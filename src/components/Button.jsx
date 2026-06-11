export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 text-sm'
  const variants = {
    primary: 'bg-brand-gradient text-white shadow-brand hover:shadow-lg hover:scale-[1.02] px-6 py-3',
    secondary: 'bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50 px-6 py-3',
    outline: 'border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 px-6 py-3',
    ghost: 'text-brand-600 hover:text-brand-700 hover:bg-brand-50 px-4 py-2',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>
  }
  return <button className={cls} {...props}>{children}</button>
}
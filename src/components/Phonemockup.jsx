export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-64 sm:w-72">
      {/* Glow */}
      <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl rounded-full scale-110 pointer-events-none" />
      {/* Phone frame */}
      <div className="relative bg-gray-950 rounded-[2.5rem] p-2.5 shadow-2xl">
        <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="w-20 h-5 bg-gray-950 rounded-full mx-auto" />
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
            </div>
          </div>

          {/* App content */}
          <div className="bg-white mx-2 mb-2 rounded-2xl overflow-hidden">
            {/* App header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <span className="text-xs font-bold text-gray-800">Voucher <span className="text-brand-600">Life</span></span>
              </div>
              <div className="w-6 h-6 bg-brand-50 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
            </div>

            {/* Hero card */}
            <div className="mx-3 mt-3 bg-brand-gradient rounded-xl p-4 text-white">
              <p className="text-xs font-medium opacity-80 mb-0.5">Your exclusive</p>
              <p className="text-sm font-bold leading-tight">Healthcare Discounts</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-2xl font-black">30%</span>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 14.25l1.5 1.5L15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/></svg>
                </div>
              </div>
              <p className="text-xs opacity-70 mt-1">Valid at 200+ providers</p>
            </div>

            {/* Categories */}
            <div className="px-3 py-3">
              <p className="text-xs font-semibold text-gray-500 mb-2.5">Popular Categories</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: '🏥', label: 'Hospitals' },
                  { icon: '🧪', label: 'Labs' },
                  { icon: '💊', label: 'Pharmacy' },
                  { icon: '🩻', label: 'Radiology' },
                  { icon: '🩺', label: 'Clinics' },
                  { icon: '📦', label: 'Packages' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 bg-gray-50 rounded-xl py-2.5">
                    <span className="text-lg">{icon}</span>
                    <span className="text-[9px] font-medium text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-around px-2 py-2.5 border-t border-gray-100">
              {[
                { icon: '🏠', active: true },
                { icon: '🔍', active: false },
                { icon: '🎫', active: false },
                { icon: '👤', active: false },
              ].map(({ icon, active }, i) => (
                <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${active ? 'bg-brand-50' : ''}`}>
                  <span className="text-base">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-6 top-16 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2 border border-gray-100">
        <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Verified</div>
          <div className="text-[10px] text-gray-500">200+ providers</div>
        </div>
      </div>

      <div className="absolute -right-6 bottom-20 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex items-center gap-2 border border-gray-100">
        <div className="text-lg">⭐</div>
        <div>
          <div className="text-xs font-bold text-gray-800">4.8 Rating</div>
          <div className="text-[10px] text-gray-500">10K+ reviews</div>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import { Globe } from 'lucide-react'
import PageHeader from '../components/PageHeader'

const englishContent = {
  title: 'Privacy Policy',
  effectiveDate: 'Effective Date: October 1, 2025',
  intro: 'This Privacy Policy applies to the Voucher Life application (referred to as "the App"), developed by Voucher Life for Healthcare Services and Discount Networks. This service is provided to users with the purpose of facilitating access to comprehensive healthcare discounts.',
  sections: [
    {
      heading: 'Information Collection and Use',
      body: 'The App automatically collects certain basic data when you download and use it, to ensure service delivery and improve quality. This information includes: mobile device type, operating system (Android/iOS), your device\'s IP address, and usage behavior and pages you visit within the App for interface development purposes.',
    },
    {
      heading: 'Location Services',
      body: 'With your consent, the App requests access to your device\'s approximate or precise geographic location. We use this data for one purpose only: to display nearby Voucher Life network hospitals, clinics, labs, radiology centers, and pharmacies closest to you, and to facilitate access to them.',
    },
    {
      heading: 'Third-Party Services (Privacy Policy Links)',
      body: 'The App works with trusted third-party service providers for performance analytics, login, payment processing, and push notifications. You may view their privacy policies directly via the following links:',
      links: [
        { label: 'Google Play Services', url: 'https://policies.google.com/privacy' },
        { label: 'Apple (App Store)', url: 'https://www.apple.com/legal/privacy' },
        { label: 'Facebook (Meta)', url: 'https://www.facebook.com/about/privacy' },
        { label: 'Paymob (Payment Gateway)', url: 'https://paymob.com/privacy' },
      ],
    },
    {
      heading: 'Data Retention and Account Deletion',
      body: 'The service provider retains user-provided data for as long as the account is active and the App is in use.\n\nIf you wish to completely delete your account and data from our servers, you can do so directly within the App via: Settings → Delete Account, with no need for any external steps. Alternatively, you may contact us at the official email: voucherlifeapp@gmail.com, and your request will be carried out immediately, with all your personal data deleted in full — except for what is legally required to be retained.',
    },
    {
      heading: 'Children\'s Privacy',
      body: 'The App does not intentionally direct its services at or collect data from children under the age of 13. If the service provider becomes aware that a child has provided personal information without parental consent, it will be deleted immediately from our servers upon notification at the official email.',
    },
    {
      heading: 'Security',
      body: 'At Voucher Life, we place the utmost importance on the confidentiality of your data. We are committed to applying the best standard technical and electronic means to protect your personal information and prevent unauthorized access to it — while acknowledging that no method of transmission over the Internet is 100% secure.',
    },
    {
      heading: 'Changes to This Policy',
      body: 'This Privacy Policy may be updated from time to time to keep pace with technical or legal updates. Users will be notified of any changes by publishing the new policy on this page.',
    },
  ],
}

const arabicContent = {
  title: 'سياسة الخصوصية',
  effectiveDate: 'تاريخ السريان: 2025-10-01',
  intro: 'تنطبق سياسة الخصوصية هذه على تطبيق Voucher Life (المشار إليه بـ "التطبيق")، والمطور بواسطة شركة فوتشر لايف لخدمات الرعاية الصحية وشبكات الخصم. تُقدم هذه الخدمة للمستخدمين بهدف تسهيل الوصول لخصومات الرعاية الصحية المتكاملة.',
  sections: [
    {
      heading: 'جمع المعلومات واستخدامها',
      body: 'يقوم التطبيق بجمع بعض البيانات الأساسية تلقائياً عند تنزيله واستخدامه لضمان تقديم الخدمة وتحسين جودتها، وتشمل هذه المعلومات: نوع الهاتف المحمول، ونظام التشغيل المستخدم (Android/iOS)، وعنوان بروتوكول الإنترنت الخاص بجهازك (IP Address)، وسلوك الاستخدام والصفحات التي تزورها داخل التطبيق لتطوير الواجهات.',
    },
    {
      heading: 'خدمات الموقع الجغرافي (Location Services)',
      body: 'بموافقتك، يطلب التطبيق الوصول إلى الموقع الجغرافي التقريبي أو الدقيق لجهازك. نستخدم هذه البيانات لغرض واحد فقط وهو: إظهار مستشفيات، عيادات، معامل تحاليل، مراكز أشعة، وصيدليات شبكة "فوتشر لايف" الأقرب إليك مكاناً، وتسهيل الوصول إليها.',
    },
    {
      heading: 'خدمات الطرف الثالث (روابط سياسة الخصوصية)',
      body: 'يتعامل التطبيق مع مقدمي خدمات خارجيين موثوقين لتحليل الأداء وتسجيل الدخول ومعالجة المدفوعات وإرسال الإشعارات. يمكنك الاطلاع على سياسات الخصوصية الخاصة بهم مباشرة عبر الروابط التالية:',
      links: [
        { label: 'خدمات Google Play', url: 'https://policies.google.com/privacy' },
        { label: 'خدمات Apple (App Store)', url: 'https://www.apple.com/legal/privacy' },
        { label: 'فيسبوك (Meta)', url: 'https://www.facebook.com/about/privacy' },
        { label: 'Paymob (بوابة الدفع)', url: 'https://paymob.com/privacy' },
      ],
    },
    {
      heading: 'سياسة الاحتفاظ بالبيانات وحذف الحساب',
      body: 'يحتفظ مقدم الخدمة بالبيانات المقدمة من المستخدم طالما كان الحساب نشطاً ومستمراً في استخدام التطبيق.\n\nإذا كنت ترغب في حذف حسابك وبياناتك تماماً من خوادمنا، يمكنك القيام بذلك مباشرة من داخل التطبيق عبر: الإعدادات ← حذف الحساب، دون الحاجة لأي خطوات خارجية. كما يمكنك بدلاً من ذلك مراسلتنا على البريد الإلكتروني المعتمد: voucherlifeapp@gmail.com، وسيتم تنفيذ طلبك فوراً وحذف جميع بياناتك الشخصية بشكل كامل، باستثناء ما يلزم الاحتفاظ به قانوناً.',
    },
    {
      heading: 'حماية الأطفال',
      body: 'التطبيق لا يتوجه بالخدمة ولا يجمع بيانات الأطفال دون سن 13 عاماً بشكل متعمد. في حال علم مقدم الخدمة أن طفلاً قد قدم معلومات شخصية دون موافقة ولي الأمر، يتم حذفها فوراً من خوادمنا عند إبلاغنا على الإيميل المعتمد.',
    },
    {
      heading: 'الأمان والحماية (Security)',
      body: 'نحن في Voucher Life نولي سرية بياناتك أهمية قصوى. نلتزم بتطبيق أفضل الوسائل التقنية والإلكترونية القياسية لحماية معلوماتك الشخصية ومنع الوصول غير المصرح به إليها، مع العلم أنه لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%.',
    },
    {
      heading: 'التغييرات على هذه السياسة',
      body: 'قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر لمواكبة التحديثات التقنية أو القانونية. سيتم إخطار المستخدمين بأي تغييرات عن طريق نشر السياسة الجديدة في هذه الصفحة.',
    },
  ],
}

function LegalSection({ section, isRTL }) {
  return (
    <div className="mb-8">
      <h2 className={`font-display text-xl font-bold text-gray-900 mb-3 ${isRTL ? 'rtl-text' : ''}`}>
        {section.heading}
      </h2>
      {section.body.split('\n\n').map((para, i) => (
        <p key={i} className={`text-gray-600 leading-relaxed mb-3 ${isRTL ? 'rtl-text' : ''}`}>
          {para}
        </p>
      ))}
      {section.links && (
        <ul className="mt-3 space-y-2">
          {section.links.map(({ label, url }) => (
            <li key={url} className={isRTL ? 'rtl-text' : ''}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700 underline underline-offset-2 text-sm font-medium"
              >
                {label}: {url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function Privacy() {
  const [lang, setLang] = useState('en')
  const content = lang === 'en' ? englishContent : arabicContent
  const isRTL = lang === 'ar'

  return (
    <>
      <PageHeader
        badge="Legal"
        title="Privacy Policy"
        subtitle="We take your privacy seriously. Learn how Voucher Life collects, uses, and protects your personal data."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Language toggle */}
        <div className="flex items-center gap-2 mb-10 p-1 bg-gray-100 rounded-xl w-fit">
          <button
            onClick={() => setLang('en')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${lang === 'en' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Globe size={15} /> English
          </button>
          <button
            onClick={() => setLang('ar')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${lang === 'ar' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <Globe size={15} /> العربية
          </button>
        </div>

        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'rtl-text' : ''}`}>
              {content.title}
            </h1>
            <p className={`text-sm text-gray-500 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <p className={`text-gray-600 leading-relaxed mb-8 ${isRTL ? 'rtl-text' : ''}`}>
            {content.intro}
          </p>

          <div className="space-y-0">
            {content.sections.map((section) => (
              <LegalSection key={section.heading} section={section} isRTL={isRTL} />
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500">
              {isRTL ? 'للأسئلة أو الاستفسارات، تواصل معنا على:' : 'For questions or concerns, contact us at:'}{' '}
              <a href="mailto:voucherlifeapp@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium">
                voucherlifeapp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
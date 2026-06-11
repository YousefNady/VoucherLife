import { useState } from 'react'
import { Globe } from 'lucide-react'
import PageHeader from '../components/Pageheader'
// dummy comment to trigger commit

const termsEN = {
  title: 'Terms of Service',
  effectiveDate: 'Effective Date: October 1, 2025',
  intro: 'These Terms of Service govern your use of the Voucher Life application and related services. By downloading, installing, or using the App, you agree to be bound by these terms. Please read them carefully.',
  sections: [
    {
      heading: '1. Acceptance of Terms',
      body: 'By accessing or using Voucher Life, you confirm that you are at least 18 years of age, have read and understood these Terms of Service, and agree to be bound by them. If you do not agree to these terms, you may not use the App.',
    },
    {
      heading: '2. Description of Service',
      body: 'Voucher Life is a digital healthcare discount platform that provides users with access to discounted healthcare services through a network of partner providers in Egypt. The App offers discount vouchers, subscription packages, and exclusive offers at hospitals, clinics, medical laboratories, radiology centers, and pharmacies.',
    },
    {
      heading: '3. User Accounts',
      body: 'To access most features of the App, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account at voucherlifeapp@gmail.com.',
    },
    {
      heading: '4. Subscriptions and Payments',
      body: 'Voucher Life offers subscription plans that grant access to healthcare discounts. Subscriptions are billed according to the plan selected at the time of purchase. All payments are processed securely through our payment partners. By completing a purchase, you authorize us to charge the applicable fees to your selected payment method.',
    },
    {
      heading: '5. Prohibited Conduct',
      body: 'You agree not to: misuse, reverse engineer, or attempt to access the App\'s source code; use the App for any unlawful purpose; share your vouchers or subscription benefits with unauthorized parties; engage in fraudulent or deceptive practices; or interfere with the proper functioning of the App or its infrastructure.',
    },
    {
      heading: '6. Healthcare Disclaimer',
      body: 'Voucher Life provides access to discounted healthcare services but does not itself provide medical advice, diagnosis, or treatment. The App is not a substitute for professional medical advice. Always consult a qualified healthcare professional for medical concerns. Voucher Life bears no responsibility for the quality of medical services provided by partner healthcare facilities.',
    },
    {
      heading: '7. Intellectual Property',
      body: 'All content, branding, logos, software, and intellectual property within the Voucher Life App are owned by Voucher Life for Healthcare Services and Discount Networks. You may not reproduce, distribute, or create derivative works without our express written permission.',
    },
    {
      heading: '8. Limitation of Liability',
      body: 'To the maximum extent permitted by applicable law, Voucher Life shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App. Our total liability shall not exceed the amount paid by you for the relevant subscription period.',
    },
    {
      heading: '9. Termination',
      body: 'We reserve the right to suspend or terminate your account if you violate these Terms of Service. You may also delete your account at any time via Settings → Delete Account within the App. Termination does not entitle you to a refund except as specified in our Refund and Cancellation Policy.',
    },
    {
      heading: '10. Governing Law',
      body: 'These Terms of Service are governed by the laws of the Arab Republic of Egypt. Any disputes arising under these terms shall be resolved through the competent courts of Cairo, Egypt.',
    },
    {
      heading: '11. Changes to Terms',
      body: 'We reserve the right to update these Terms of Service at any time. Changes will be posted on this page and the effective date will be updated accordingly. Continued use of the App following any changes constitutes acceptance of the updated terms.',
    },
    {
      heading: '12. Contact',
      body: 'If you have questions about these Terms of Service, please contact us at: voucherlifeapp@gmail.com',
    },
  ],
}

const termsAR = {
  title: 'شروط الخدمة',
  effectiveDate: 'تاريخ السريان: 2025-10-01',
  intro: 'تحكم شروط الخدمة هذه استخدامك لتطبيق Voucher Life والخدمات ذات الصلة. بتنزيل التطبيق أو تثبيته أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. يُرجى قراءتها بعناية.',
  sections: [
    {
      heading: '١. قبول الشروط',
      body: 'بالوصول إلى تطبيق Voucher Life أو استخدامه، فإنك تؤكد أن عمرك لا يقل عن 18 عاماً، وأنك قرأت وفهمت شروط الخدمة هذه وتوافق على الالتزام بها. إذا كنت لا توافق على هذه الشروط، فلا يجوز لك استخدام التطبيق.',
    },
    {
      heading: '٢. وصف الخدمة',
      body: 'Voucher Life هو منصة رقمية للخصومات الطبية تتيح للمستخدمين الوصول إلى خدمات رعاية صحية بأسعار مخفضة من خلال شبكة من مقدمي الخدمات الشركاء في مصر. يقدم التطبيق قسائم خصم وباقات اشتراك وعروضاً حصرية في المستشفيات والعيادات ومعامل التحاليل ومراكز الأشعة والصيدليات.',
    },
    {
      heading: '٣. حسابات المستخدمين',
      body: 'للوصول إلى معظم ميزات التطبيق، يجب عليك إنشاء حساب. أنت مسؤول عن الحفاظ على سرية بيانات حسابك وعن جميع الأنشطة التي تتم من خلاله. توافق على إخطارنا فوراً بأي استخدام غير مصرح به لحسابك على البريد الإلكتروني: voucherlifeapp@gmail.com.',
    },
    {
      heading: '٤. الاشتراكات والمدفوعات',
      body: 'يقدم Voucher Life خطط اشتراك تمنح الوصول إلى خصومات الرعاية الصحية. تُحصَّل رسوم الاشتراكات وفقاً للخطة المختارة وقت الشراء. تتم معالجة جميع المدفوعات بشكل آمن عبر شركاء الدفع لدينا. بإتمام عملية الشراء، فإنك تُفوضنا بخصم الرسوم المطبقة من طريقة الدفع المحددة.',
    },
    {
      heading: '٥. السلوك المحظور',
      body: 'توافق على عدم: إساءة استخدام التطبيق أو إجراء هندسة عكسية أو محاولة الوصول إلى الكود المصدري؛ استخدام التطبيق لأي غرض غير مشروع؛ مشاركة قسائمك أو مزايا اشتراكك مع أطراف غير مصرح لها؛ الانخراط في ممارسات احتيالية أو مضللة؛ أو التدخل في الأداء الصحيح للتطبيق أو بنيته التحتية.',
    },
    {
      heading: '٦. إخلاء المسؤولية الطبية',
      body: 'يوفر Voucher Life الوصول إلى خدمات رعاية صحية مخفضة الأسعار، لكنه لا يقدم بنفسه مشورة طبية أو تشخيصاً أو علاجاً. التطبيق ليس بديلاً عن المشورة الطبية المتخصصة. استشر دائماً متخصصاً طبياً مؤهلاً في الشؤون الطبية. لا يتحمل Voucher Life أي مسؤولية عن جودة الخدمات الطبية المقدمة من مرافق الرعاية الصحية الشريكة.',
    },
    {
      heading: '٧. الملكية الفكرية',
      body: 'جميع المحتوى والعلامات التجارية والشعارات والبرمجيات والملكية الفكرية ضمن تطبيق Voucher Life مملوكة لشركة فوتشر لايف لخدمات الرعاية الصحية وشبكات الخصم. لا يجوز لك إعادة إنتاجها أو توزيعها أو إنشاء أعمال مشتقة منها دون إذن خطي صريح منا.',
    },
    {
      heading: '٨. تحديد المسؤولية',
      body: 'إلى أقصى حد يسمح به القانون المعمول به، لن يكون Voucher Life مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو تأديبية ناشئة عن استخدامك للتطبيق. لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته لفترة الاشتراك ذات الصلة.',
    },
    {
      heading: '٩. الإنهاء',
      body: 'نحتفظ بالحق في تعليق حسابك أو إنهائه في حال انتهاكك لشروط الخدمة هذه. يمكنك أيضاً حذف حسابك في أي وقت عبر الإعدادات ← حذف الحساب داخل التطبيق. لا يمنحك الإنهاء الحق في استرداد الأموال إلا وفقاً لما هو محدد في سياسة الاسترداد والإلغاء.',
    },
    {
      heading: '١٠. القانون الحاكم',
      body: 'تخضع شروط الخدمة هذه لقوانين جمهورية مصر العربية. تُحسم أي نزاعات تنشأ بموجب هذه الشروط أمام المحاكم المختصة في القاهرة، مصر.',
    },
    {
      heading: '١١. التغييرات على الشروط',
      body: 'نحتفظ بالحق في تحديث شروط الخدمة هذه في أي وقت. سيتم نشر التغييرات على هذه الصفحة وسيتم تحديث تاريخ السريان وفقاً لذلك. استمرار استخدام التطبيق بعد أي تغييرات يُعدّ قبولاً للشروط المحدّثة.',
    },
    {
      heading: '١٢. التواصل',
      body: 'إذا كانت لديك أسئلة حول شروط الخدمة هذه، يُرجى التواصل معنا على: voucherlifeapp@gmail.com',
    },
  ],
}

export default function Terms() {
  const [lang, setLang] = useState('en')
  const content = lang === 'en' ? termsEN : termsAR
  const isRTL = lang === 'ar'

  return (
    <>
      <PageHeader
        badge="Legal"
        title="Terms of Service"
        subtitle="These terms govern your use of the Voucher Life app. Please read them carefully before using our services."
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

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                <h2 className={`font-display text-lg font-bold text-gray-900 mb-3 ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>
                <p className={`text-gray-600 leading-relaxed ${isRTL ? 'rtl-text' : ''}`}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500">
              {isRTL ? 'للأسئلة، تواصل معنا على:' : 'Questions? Contact us at:'}{' '}
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
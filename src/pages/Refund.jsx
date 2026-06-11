import { useState } from 'react'
import { Globe, AlertCircle } from 'lucide-react'
import PageHeader from '../components/Pageheader'
// dummy comment to trigger commit

const refundEN = {
  title: 'Refund & Cancellation Policy',
  effectiveDate: 'Effective Date: October 1, 2025',
  sections: [
    {
      heading: 'Nature of Service',
      body: 'As Voucher Life provides instant digital services — namely healthcare discount vouchers and medical subscription packages that are activated immediately upon purchase — all purchases and subscriptions are considered final and non-refundable once payment has been completed and the account activated, except in the cases stated below.\n\nDiscount vouchers and subscription cards provided through the App are used exclusively to receive discounts on actual medical services delivered at partner healthcare facilities (hospitals, clinics, labs, radiology centers, pharmacies). They cannot be exchanged for any goods or digital services within the App.',
    },
    {
      heading: 'Purchases via App Stores',
      body: '',
      subsections: [
        {
          title: 'Apple App Store',
          content: 'If a purchase or subscription is completed through Apple\'s In-App Purchase system, payment, billing, and refunds are managed entirely by Apple and are subject to Apple\'s terms and policies. To request a refund for a transaction made via the App Store, please submit your request directly through: https://reportaproblem.apple.com — noting that the refund decision in this case rests solely with Apple.',
        },
        {
          title: 'Google Play',
          content: 'If a purchase or subscription is completed through Google Play Billing, the refund is subject to Google Play\'s policies. To request a refund for a Google Play transaction, you may submit your request through: https://support.google.com/googleplay/answer/2479637',
        },
        {
          title: 'Paymob (Direct In-App Payments)',
          content: 'Payments made directly through the in-app payment gateway (Paymob) are governed by the provisions of this policy as outlined on this page.',
        },
      ],
    },
    {
      heading: 'Exceptional Refund Cases',
      body: 'The user is entitled to request a review of the purchase and a refund only in the following cases:',
      list: [
        'A clear technical malfunction within the App that completely prevents the user from benefiting from the service or activating the subscription, provided that technical support is notified within 24 hours of the purchase date.',
        'A duplicate or erroneous payment occurring as a result of an error in the electronic payment gateway.',
      ],
    },
    {
      heading: 'Cancellation by the Healthcare Provider (Doctors / Clinics)',
      body: 'If the doctor or clinic cancels the appointment or fails to be present at the scheduled time, the patient will be fully compensated. In this case, the user has the right to choose one of the following alternatives:',
      list: [
        'A full refund of the voucher value or service fees to their in-app Wallet or to the same electronic payment card, within official working days.',
        'Transfer of the appointment to an alternative date that suits the patient, at no additional charge.',
      ],
    },
    {
      heading: 'How to Submit a Request',
      body: 'In the event of any technical issue or clinic-side cancellation, please contact the technical support team at the official email: voucherlifeapp@gmail.com. Requests are reviewed and responded to by the relevant management within 3 to 5 working days.',
    },
  ],
}

const refundAR = {
  title: 'سياسة الاسترداد والإلغاء',
  effectiveDate: 'تاريخ السريان: 2025-10-01',
  sections: [
    {
      heading: 'طبيعة الخدمة',
      body: 'نظراً لأن تطبيق Voucher Life يقدم خدمات رقمية وفورية تتمثل في توفير قسائم خصم وباقات اشتراك طبية تُفعل مباشرة فور الشراء، فإن جميع عمليات الشراء والاشتراكات تعتبر نهائية وغير قابلة للإلغاء أو الاسترداد بمجرد إتمام عملية الدفع وتفعيل الحساب، باستثناء الحالات المذكورة أدناه.\n\nقسائم الخصم وبطاقات الاشتراك المقدمة عبر التطبيق تُستخدم حصرياً للحصول على خصومات على خدمات طبية فعلية تُقدَّم في منشآت الرعاية الصحية الشريكة (مستشفيات، عيادات، معامل تحاليل، مراكز أشعة، صيدليات)، ولا تُستبدل بأي سلع أو خدمات رقمية داخل التطبيق.',
    },
    {
      heading: 'المشتريات عبر متاجر التطبيقات',
      body: '',
      subsections: [
        {
          title: 'متجر Apple App Store',
          content: 'في حال إتمام عملية الشراء أو الاشتراك من خلال نظام الشراء داخل التطبيق (In-App Purchase) الخاص بشركة Apple، فإن عملية الدفع والفوترة والاسترداد تُدار بالكامل بواسطة Apple وتخضع لشروطها وسياساتها. ولطلب استرداد لعملية تمت عبر App Store، يرجى التقدم بالطلب مباشرة عبر: https://reportaproblem.apple.com — مع العلم أن قرار الاسترداد في هذه الحالة يعود لشركة Apple وحدها.',
        },
        {
          title: 'متجر Google Play',
          content: 'في حال إتمام عملية الشراء أو الاشتراك من خلال نظام الفوترة الخاص بـ Google Play (Google Play Billing)، فإن عملية الاسترداد تخضع لسياسات Google Play. ولطلب استرداد لعملية تمت عبر Google Play، يمكن التقدم بالطلب عبر: https://support.google.com/googleplay/answer/2479637',
        },
        {
          title: 'Paymob (المدفوعات المباشرة داخل التطبيق)',
          content: 'أما المدفوعات التي تتم مباشرة عبر بوابة الدفع المعتمدة داخل التطبيق (Paymob)، فتخضع لأحكام هذه السياسة الموضحة في هذه الصفحة.',
        },
      ],
    },
    {
      heading: 'الحالات الاستثنائية للاسترداد',
      body: 'يحق للمستخدم طلب مراجعة عملية الشراء واسترداد الأموال في الحالات التالية فقط:',
      list: [
        'وجود خلل تقني واضح في التطبيق يمنع المستخدم تماماً من الاستفادة من الخدمة أو تفعيل الاشتراك، شريطة إبلاغ الدعم الفني خلال 24 ساعة من تاريخ الشراء.',
        'حدوث عملية دفع متكررة أو خاطئة نتيجة خطأ في بوابة الدفع الإلكترونية.',
      ],
    },
    {
      heading: 'إلغاء الخدمة من طرف مقدم الرعاية (الأطباء/العيادات)',
      body: 'في حال قام الطبيب أو العيادة بإلغاء الحجز أو عدم التواجد في الموعد المحدد، يتم تعويض المريض بشكل كامل. ويحق للمستخدم في هذه الحالة اختيار أحد البدائل التالية:',
      list: [
        'استرداد قيمة القسيمة أو رسوم الخدمة كاملاً إلى محفظته داخل التطبيق (Wallet) أو إلى نفس بطاقة الدفع الإلكترونية خلال أيام العمل الرسمية.',
        'تحويل الحجز إلى موعد آخر بديل يتناسب مع المريض دون تحميله أي رسوم إضافية.',
      ],
    },
    {
      heading: 'آلية تقديم الطلب والدعم الفني',
      body: 'في حال مواجهة أي مشكلة تقنية أو إلغاء من طرف العيادة، يرجى التواصل مع فريق الدعم الفني عبر البريد الإلكتروني المعتمد: voucherlifeapp@gmail.com. يتم فحص الطلب والرد عليه من قبل الإدارة المختصة خلال فترة تتراوح بين 3 إلى 5 أيام عمل.',
    },
  ],
}

export default function Refund() {
  const [lang, setLang] = useState('en')
  const content = lang === 'en' ? refundEN : refundAR
  const isRTL = lang === 'ar'

  return (
    <>
      <PageHeader
        badge="Legal"
        title="Refund & Cancellation Policy"
        subtitle="Understand your rights and options when it comes to refunds, cancellations, and exceptions."
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

        {/* Important notice */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <p className={`text-sm text-amber-800 ${isRTL ? 'rtl-text' : ''}`}>
            {isRTL
              ? 'جميع عمليات الشراء نهائية بمجرد التفعيل. يُرجى قراءة هذه السياسة كاملاً قبل الشراء.'
              : 'All purchases are final upon activation. Please read this policy in full before making a purchase.'}
          </p>
        </div>

        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'rtl-text' : ''}`}>
              {content.title}
            </h1>
            <p className={`text-sm text-gray-500 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-10 last:border-0 last:pb-0">
                <h2 className={`font-display text-xl font-bold text-gray-900 mb-4 ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>

                {section.body && section.body.split('\n\n').map((para, i) => (
                  <p key={i} className={`text-gray-600 leading-relaxed mb-3 ${isRTL ? 'rtl-text' : ''}`}>
                    {para}
                  </p>
                ))}

                {section.subsections && (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((sub) => (
                      <div key={sub.title} className="bg-gray-50 rounded-xl p-5">
                        <h3 className={`font-semibold text-gray-900 mb-2 text-sm ${isRTL ? 'rtl-text' : ''}`}>
                          {sub.title}
                        </h3>
                        <p className={`text-sm text-gray-600 leading-relaxed ${isRTL ? 'rtl-text' : ''}`}>
                          {sub.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ol className={`mt-3 space-y-3 ${isRTL ? 'rtl-text' : ''}`}>
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500">
              {isRTL ? 'للتواصل مع الدعم الفني:' : 'To reach technical support:'}{' '}
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
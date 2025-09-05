import { Link, useParams, useLocation } from "react-router-dom";

const translations: any = {
  en: {
    breadcrumb: ["Home", "About Us"],
    title: "Our Story",
    p1: "Nivesh is an award-winning digital-first platform that enables independent mutual funds distributors to grow their AUM with state-of-the-art technology. We combine deep domain expertise with modern engineering to help distributors acquire, engage and retain their customers.",
    p2: "Our approach is to provide cutting-edge, technology-enabled solutions that empower IFAs to service their clients and scale business with ease. We marry human-first service with automation so advisors can focus on advice, not paperwork.",
    speak: "Speak with an expert",
    solutions: "See our solutions",
    stats: ["19.5cr+", "100+", "50+", "8 yrs"],
    statsLabels: ["Households", "Partners", "Awards", "Avg. experience"],
    missionTitle: "Our Mission",
    missionText: "To democratize access to financial services through technology and human support, enabling advisors to scale and clients to achieve their financial goals.",
    visionTitle: "Our Vision",
    visionText: "A future where financial planning is accessible, transparent and personalized for every household in India.",
    approachTitle: "Approach & Technology",
    approachText: "One of the reasons investors struggle to maintain a plan is the time spent managing investments. Our app simplifies tracking with clear language and intelligent automation built from years of fintech experience.",
    awardsTitle: "Awards & Recognition",
  },
  hin: {
    breadcrumb: ["होम", "हमारी कहानी"],
    title: "हमारी कहानी",
    p1: "Nivesh एक award-winning डिजिट���-फर्स्ट प्लेटफार्म है जो स्वतंत्र म्यूचुअल फंड डिस्ट्रीब्यूटर्स को उनके AUM बढ़ाने में सहायता करता है।",
    p2: "हमारा दृष्टिकोण तकनीक-सक्षम समाधानों के माध्यम से IFAs को सशक्त बनाना है।",
    speak: "एक विशेषज्ञ से बात करें",
    solutions: "हमारे समाधान देखें",
    stats: ["19.5crt+", "100+", "50+", "8 yrs"],
    statsLabels: ["घरेलू", "साझेदार", "पुरस्कार", "औसत अनुभव"],
    missionTitle: "हमारा मिशन",
    missionText: "वित्तीय सेवाओं तक पहुंच को लोकतांत्रित करना...",
    visionTitle: "हमारी दृष्टि",
    visionText: "एक भविष्य जहां वित्तीय योजना हर घर के लिए सुलभ हो।",
    approachTitle: "दृष्टिकोण और प्रौद्योगिकी",
    approachText: "हमारा ऐप निवेशों को ट्रैक करने को सरल बनाता है।",
    awardsTitle: "पुरस्कार और मान्यता",
  },
  mar: {
    breadcrumb: ["मुखपृष्ठ", "आमची कथा"],
    title: "आमची कथा",
    p1: "Nivesh हे एक पुरस्कार विजेता डिजिटल-प्रथम प्लॅटफॉर्म आहे जे स्वतंत्र म्युच्युअल फंड वितरकांना त्यांचे AUM वाढविण्यात मदत करते.",
    p2: "आमचा दृष्टिकोन IFAs साठी तंत्रज्ञान-समर्थित उपाय प्रदान करणे आहे.",
    speak: "तज्ञाशी बोला",
    solutions: "आपले सोल्यूशन्स पहा",
    stats: ["19.5क्र+", "100+", "50+", "8 yrs"],
    statsLabels: ["घर", "भागीदार", "पुरस्कार", "सरासरी अनुभव"],
    missionTitle: "आमचे ध्येय",
    missionText: "तंत्रज्ञान आणि मानवी आधाराद्वारे वित्तीय सेवा लोकांपर्यंत पोहोचवणे.",
    visionTitle: "आमची दृष्टी",
    visionText: "विदित घरागृहासाठी व्यक्तिगत वित्तीय नियोजन.",
    approachTitle: "पद्धत & तंत्रज्ञान",
    approachText: "आमचे अॅप गुंतवणुकींचे ट्रॅकिंग सुलभ करते.",
    awardsTitle: "पुरस्कार आणि मान्यता",
  },
};

export default function About() {
  const params = useParams();
  const location = useLocation();
  const lang = (params.lang as string) || (location.pathname.match(/^\/(en|hin|mar)/)?.[1] as string) || 'en';
  const t = (key: string) => translations[lang as keyof typeof translations]?.[key] ?? translations.en[key];

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-br from-[rgba(2,6,23,0.95)] to-[rgba(9,12,20,0.98)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-300/70 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link to={`/${lang}`} className="hover:underline text-slate-300/70">{t('breadcrumb')[0]}</Link>
            </li>
            <li aria-hidden className="text-slate-500">/</li>
            <li className="text-slate-200 font-semibold">{t('breadcrumb')[1]}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-gold" style={{ color: 'hsl(45 66% 72%)' }}>
              {t('title')}
            </h1>
            <p className="text-slate-200/90 max-w-3xl mb-6 leading-relaxed">{t('p1')}</p>
            <p className="text-slate-300 max-w-3xl mb-6 leading-relaxed">{t('p2')}</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="#" className="inline-flex items-center justify-center bg-gold text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl">{t('speak')}</a>
              <a href="#" className="inline-flex items-center justify-center border border-slate-600 text-slate-200 px-5 py-3 rounded-full hover:bg-slate-800/40">{t('solutions')}</a>
            </div>

            {/* key stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t('stats').map((s: string, idx: number) => (
                <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{s}</div>
                  <div className="text-sm text-slate-300">{t('statsLabels')[idx]}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ffac3605fb1b24468b70218d201be3635?format=webp&width=1200" alt="Our story" className="w-full h-[360px] object-cover" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">🏆</div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">Recognized Excellence</div>
                <div className="text-xs text-slate-400">Multiple awards for innovation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3">{t('missionTitle')}</h3>
            <p className="text-slate-200/90 leading-relaxed">{t('missionText')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{t('visionTitle')}</h3>
            <p className="text-slate-200/90 leading-relaxed">{t('visionText')}</p>
          </div>
        </section>

        {/* Team / approach */}
        <section className="mb-12">
          <h3 className="text-2xl font-extrabold mb-6">{t('approachTitle')}</h3>
          <div className="bg-white/3 rounded-lg p-6">
            <p className="text-slate-200/90 leading-relaxed">{t('approachText')}</p>
          </div>
        </section>

        {/* Awards strip */}
        <section className="mb-16">
          <h4 className="text-lg font-semibold mb-4">{t('awardsTitle')}</h4>
          <div className="flex gap-4 overflow-x-auto pb-3 hide-scroll">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fc32f6d57ceda4c518a7267e66c448826?format=webp&width=600" alt="AMFI" className="h-28 object-contain"/>
            <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F5aaf8d75897d440289633ffedd84751c?format=webp&width=600" alt="Best Performer" className="h-28 object-contain"/>
            <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F747a7d68a119469c9c4f43505331a45b?format=webp&width=600" alt="SIP Performer" className="h-28 object-contain"/>
            <img src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff952b975ed9d44e4a1f7ef60b5e0bc81?format=webp&width=600" alt="BFSI" className="h-28 object-contain"/>
          </div>
        </section>

      </div>
    </main>
  );
}

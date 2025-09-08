import { Link, useParams, useLocation } from "react-router-dom";
import TeamCard from "../components/ui/TeamCard";
import AwardsMarquee from "@/components/ui/AwardsMarquee";


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
    missionText:
      "To democratize access to financial services through technology and human support, enabling advisors to scale and clients to achieve their financial goals.",
    visionTitle: "Our Vision",
    visionText:
      "A future where financial planning is accessible, transparent and personalized for every household in India.",
    approachTitle: "Approach & Technology",
    approachText:
      "One of the reasons investors struggle to maintain a plan is the time spent managing investments. Our app simplifies tracking with clear language and intelligent automation built from years of fintech experience.",
    awardsTitle: "Awards & Recognition",
    commitmentTitle: "Our Commitment",
    commitmentText:
      "We are committed to delivering secure, compliant, and human-centred financial technology that empowers advisors and protects investors. Our product roadmap focuses on reliability, data privacy and measurable outcomes for partners.",
    teamTitle: "Our Amazing Team",
    teamText:
      "A diverse group of leaders across technology, product, operations and partner success. Together we bring decades of experience to build products that serve advisors and their clients.",
    investorsTitle: "Investors",
    investorsSubtitle:
      "We are supported by marquee investors, who believe in our vision.",
    investorsFooter:
      "And other prominent angel investors who are successful entrepreneurs, venture capitalists and fund managers",
    partnersTitle: "Our Partners",
    partnersSubtitle:
      "We collaborate with leading financial institutions and partners to expand our reach.",
  },
  hin: {
    breadcrumb: ["होम", "हमारी कहानी"],
    title: "हमारी कहानी",
    p1: "Nivesh एक award-winning डिजिट���-फर्स्ट प्लेटफार्म है जो स्वतंत्र म्यूचुअल फंड डिस्ट्रीब्यूटर्स को उनके AUM बढ़ाने मे��� सहायता करता है।",
    p2: "हमारा दृष्टिकोण तकनीक-सक्षम समाधानों के माध्यम से IFAs को सशक्त बनाना है।",
    speak: "एक विशेषज्ञ से बात करें",
    solutions: "हमारे समाध���न देखें",
    stats: ["19.5crt+", "100+", "50+", "8 yrs"],
    statsLabels: ["घरेलू", "साझेदार", "पुरस्कार", "औसत अनुभव"],
    missionTitle: "हमारा मिशन",
    missionText: "वित्तीय सेवाओं तक पहुंच को लोकतांत्रित करना...",
    visionTitle: "हमारी दृष्टि",
    visionText: "एक भविष्य जहां वित्तीय योजना हर घर के लिए सुलभ हो।",
    approachTitle: "दृष्टिकोण और प्रौद्योगिकी",
    approachText: "हमारा ऐप निवेशों को ट्रैक करने को सरल बनाता है।",
    awardsTitle: "पुरस्कार और मान्यता",
    commitmentTitle: "हमारी प्रत���बद्धता",
    commitmentText:
      "हम सुरक्षित, अनुपालन-आधारित और मानव-केंद्रित फिनटेक प्रदान करने के लिए प्रतिबद्ध हैं जो सलाहकारों को सशक्त बनाता है और निवेशकों की सुरक्षा करता है।",
    teamTitle: "हमारी टीम",
    teamText:
      "प्रौद्योगिकी, उत्पाद और संचालन में अनुभवी नेताओं का एक विविध समूह जो सलाहकारों और उनके ग्राहकों की सेवा के लिए उत्पाद बनाता है।",
    investorsTitle: "निवेशक",
    investorsSubtitle:
      "हमारे महत्वाकांक्षी निवेशक जिन्होंने हमारे विज़न में विश्वास रखा है।",
    investorsFooter:
      "और अन्य प्रमुख एंजेल निवेशक जो सफल उद्यमी, वेंचर कैपिटलिस��ट और फंड मैनेजर हैं",
    partnersTitle: "हमारे साझेदार",
    partnersSubtitle:
      "हम अपने पहुँच का विस्तार करने के लिए प्रमुख वित्तीय संस्थानों और भागीदारों के साथ सहयोग करते हैं।",
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
    missionText:
      "तंत्रज्ञान आणि मानवी आधाराद्वारे वित्तीय सेवा लोकांपर्यंत पोहोचवणे.",
    visionTitle: "आमची दृष्टी",
    visionText: "विदित घरागृहासाठी व��यक्तिगत वित्तीय नियोजन.",
    approachTitle: "पद्धत & तंत्रज्ञान",
    approachText: "आमचे अॅप गुंतवणु��ींचे ट्रॅकिंग सुलभ करते.",
    awardsTitle: "पुरस्कार आणि मान्यता",
    commitmentTitle: "आमची बांधिलकी",
    commitmentText:
      "आम्ही सुरक्षित, अनुपालन-अनुकूल आणि मानव-केंद्रित फिनटेक प्रदान करण्यात बांधील आहोत जे सल्लागारांना सशक्त करते आणि गुंतवणूकदारांचे संरक्षण करते.",
    teamTitle: "आमची टीम",
    teamText:
      "तंत्रज्ञान, उत्पादन आणि ऑपरेशन्समधील विविध नेतृत्व ज्यांनी अनेक वर्षांचा अनुभव घेऊन उत्पादने तयार केली आहेत.",
    investorsTitle: "गुंतवणूकदार",
    investorsSubtitle:
      "आमच्या व्हिजनमध्ये विश्वास असलेल्या प्रमुख गुंतवणूकदारांनी आम्हाला समर्थन केले आहे.",
    investorsFooter:
      "आणि इतर प्���मुख एंजल गुंतवणूकदार जे यशस्वी उद्योजक, व्हेंचर कॅपिटॅलिस्ट आणि फंड मॅनेजर आहेत",
    partnersTitle: "आमचे भागीदार",
    partnersSubtitle:
      "आम्ही आमच्या पोहोच वाढविण्यासाठी आघाडीच्या आर्थिक संस्थांशी आणि भागीदारांशी सहकार्य करतो.",
  },
};

export default function About() {
  const params = useParams();
  const location = useLocation();
  const lang =
    (params.lang as string) ||
    (location.pathname.match(/^\/(en|hin|mar)/)?.[1] as string) ||
    "en";
  const t = (key: string) =>
    translations[lang as keyof typeof translations]?.[key] ??
    translations.en[key];

  const teamMembers = [
    {
      name: "Anurag Garg",
      title: "Founder & Chief Executive Officer",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/anurag-garg",
    },
    {
      name: "Sridhar Srinivasan",
      title: "Co-Founder & CTO",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/sridhar-srinivasan",
    },
    {
      name: "Dr Hira Jaiswal",
      title: "Principal Officer & General Manager - Insurance",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/dr-hira-jaiswal",
    },
    {
      name: "Rajesh Kumar Ram",
      title: "VP - Engineering & Technology",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/rajesh-kumar-ram",
    },
    {
      name: "Vishal Rohta",
      title: "VP - Operations & Partner Development",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/vishal-rohta",
    },
    {
      name: "Anant Sharma",
      title: "Business Head - Product & Research",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/anant-sharma",
    },
    {
      name: "Sarika Bhadauria",
      title: "Manager - HR & Admin",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/sarika-bhadauria",
    },
    {
      name: "Kamal Kumar",
      title: "Company Secretary, Accounts and Legal",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/kamal-kumar",
    },
    {
      name: "Puneet Agarwal",
      title: "Manager - Partner Relations",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/puneet-agarwal",
    },
    {
      name: "Ankit Nibhania",
      title: "Senior Area Manager - Partner Relations",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/ankit-nibhania",
    },
    {
      name: "Devendra Singh",
      title: "Senior Area Manager - Partner Relations",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/devendra-singh",
    },
    {
      name: "Akanksha Srivastava",
      title: "Product Manager - Technology",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/akanksha-srivastava",
    },
    {
      name: "Abhijeet Awasthi",
      title: "Technical Architect - Technology",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/abhijeet-awasthi",
    },
    {
      name: "Pooja Ratudi",
      title: "Manager - Partner Support",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/pooja-ratudi",
    },
    {
      name: "Sneha Ghag",
      title: "Lead Engineer - Technology",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/sneha-ghag",
    },
    {
      name: "Shivani Shrivastav",
      title: "Manager-Team Lead, Customer Success Manager",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/shivani-shrivastav",
    },
    {
      name: "Akhilesh Chandak",
      title: "Principal Software Engineer - Technology",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/akhilesh-chandak",
    },
    {
      name: "Shivani Baghel",
      title: "Manager- Client Wealth",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F0c9b5c71e4444b1ca0d651feff25d853?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/shivani-baghel",
    },
    {
      name: "Nishant Pandey",
      title: "Senior Area Manager - Partner Relations",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F2041f127efc0466cb76d1b41809c278e?format=webp&width=800",
      linkedin: "https://www.linkedin.com/in/nishant-pandey",
    },
  ];

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-br from-[rgba(2,6,23,0.95)] to-[rgba(9,12,20,0.98)] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-300/70 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                to={`/${lang}`}
                className="hover:underline text-slate-300/70"
              >
                {t("breadcrumb")[0]}
              </Link>
            </li>
            <li aria-hidden className="text-slate-500">
              /
            </li>
            <li className="text-slate-200 font-semibold">
              {t("breadcrumb")[1]}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-7">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-gold"
              style={{ color: "hsl(45 66% 72%)" }}
            >
              {t("title")}
            </h1>
            <p className="text-slate-200/90 max-w-3xl mb-6 leading-relaxed">
              {t("p1")}
            </p>
            <p className="text-slate-300 max-w-3xl mb-6 leading-relaxed">
              {t("p2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-gold text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:shadow-xl"
              >
                {t("speak")}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-slate-600 text-slate-200 px-5 py-3 rounded-full hover:bg-slate-800/40"
              >
                {t("solutions")}
              </a>
            </div>

            {/* key stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t("stats").map((s: string, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold">{s}</div>
                  <div className="text-sm text-slate-300">
                    {t("statsLabels")[idx]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ffac3605fb1b24468b70218d201be3635?format=webp&width=1200"
                alt="Our story"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                🏆
              </div>
              <div>
                <div className="text-sm text-slate-200 font-semibold">
                  Recognized Excellence
                </div>
                <div className="text-xs text-slate-400">
                  Multiple awards for innovation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3">{t("missionTitle")}</h3>
            <p className="text-slate-200/90 leading-relaxed">
              {t("missionText")}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{t("visionTitle")}</h3>
            <p className="text-slate-200/90 leading-relaxed">
              {t("visionText")}
            </p>
          </div>
        </section>

        {/* Team / approach */}
        <section className="mb-12">
          <h3 className="text-2xl font-extrabold mb-6">{t("approachTitle")}</h3>
          <div className="bg-white/3 rounded-lg p-6">
            <p className="text-slate-200/90 leading-relaxed">
              {t("approachText")}
            </p>
          </div>
        </section>

        {/* Awards strip */}
        <section className="mb-16">
          <h4 className="text-lg font-semibold mb-4">{t("awardsTitle")}</h4>
          <div className="flex gap-4 overflow-x-auto pb-3 hide-scroll">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Fc32f6d57ceda4c518a7267e66c448826?format=webp&width=600"
              alt="AMFI"
              className="h-28 object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F5aaf8d75897d440289633ffedd84751c?format=webp&width=600"
              alt="Best Performer"
              className="h-28 object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F747a7d68a119469c9c4f43505331a45b?format=webp&width=600"
              alt="SIP Performer"
              className="h-28 object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff952b975ed9d44e4a1f7ef60b5e0bc81?format=webp&width=600"
              alt="BFSI"
              className="h-28 object-contain"
            />
          </div>
        </section>

        {/* Team showcase */}
        <section className="mb-16">
          <h3 className="text-2xl font-extrabold mb-6">{t("teamTitle")}</h3>
          <p className="text-slate-300 max-w-3xl mb-6">{t("teamText")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-stretch">
            {teamMembers.map((m) => (
              <TeamCard
                key={m.name}
                name={m.name}
                title={m.title}
                image={m.image}
                linkedin={m.linkedin}
              />
            ))}
          </div>
        </section>

        {/* Investors */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-extrabold mb-2">
              {t("investorsTitle")}
            </h3>
            <p className="text-slate-300 mb-8">{t("investorsSubtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Windrose capital",
                "Lets Venture",
                "Indian Angel Network Fund",
              ].map((name, idx) => (
                <div
                  key={name}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-md"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2Ff668d1330e1a4297a3024a099e463da8?format=webp&width=800"
                    alt={name}
                    className="h-20 object-contain mb-4"
                  />
                  <div className="font-semibold text-lg text-slate-900">
                    {name}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-8 text-sm">
              {t("investorsFooter")}
            </p>
          </div>
        </section>

        {/* Partners */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-extrabold mb-2">
              {t("partnersTitle")}
            </h3>
            <p className="text-slate-300 mb-8">{t("partnersSubtitle")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "PNB Housing Finance Ltd.",
                  desc: "Know More About PNB Housing Finance Ltd.",
                },
                { name: "HDFC Limited", desc: "Know More About HDFC Limited" },
                {
                  name: "ICICI Home Finance Company Ltd",
                  desc: "Know More About ICICI Home Finance Company Ltd",
                },
                {
                  name: "Shriram Transport Finance Limited",
                  desc: "Know More About Shriram Transport Finance Limited",
                },
                {
                  name: "Bajaj Finance Limited",
                  desc: "Know More About Bajaj Finance Limited",
                },
                {
                  name: "Mahindra Finance Limited",
                  desc: "Know More About Mahindra Finance Limited",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F94c3f01df8d44c2fa8db4cd56d1d8e35%2F4cd3e3d1c3474c0986a482320a0d725f?format=webp&width=800"
                    alt={p.name}
                    className="h-20 object-contain mb-4"
                  />
                  <div className="font-semibold text-lg text-slate-900 mb-2">
                    {p.name}
                  </div>
                  <div className="text-sm text-slate-500 mb-4">{p.desc}</div>
                  <button className="bg-sky-600 text-white px-4 py-2 rounded-md">
                    More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <AwardsMarquee />
        </section>
      </div>
    </main>
  );
}

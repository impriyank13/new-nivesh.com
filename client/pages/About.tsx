import { Link, useParams, useLocation } from "react-router-dom";
import TeamCard from "../components/ui/TeamCard";
import AwardsMarquee from "@/components/ui/AwardsMarquee";
import Testimonials from "@/components/ui/Testimonials";

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
    title: "हमारी क���ानी",
    p1: "Nivesh एक award-winning डिजिट���-फर्स्ट प्लेटफार्म है जो स्वतंत्�� म्यूचुअल फंड डिस्ट्रीब्य��टर्स को उनके AUM बढ़ाने मे��� सहायता करता है।",
    p2: "हमारा दृष्टिकोण तकनीक-सक्षम समाधानों के माध्यम से IFAs को सशक्त बनाना है।",
    speak: "एक विशेषज्ञ से बात करें",
    solutions: "हमारे समाध���न देखें",
    stats: ["19.5crt+", "100+", "50+", "8 yrs"],
    statsLabels: ["घरेलू", "साझेदार", "पुरस्कार", "औसत अनुभव"],
    missionTitle: "हमारा मिशन",
    missionText: "वित्तीय सेवाओं तक पहुंच को लोकतांत्रित करना...",
    visionTitle: "हमारी दृष्टि",
    visionText: "एक भविष्य जहां वित्तीय योजना हर घर के लिए सुलभ हो।",
    approachTitle: "दृ��्टिकोण औ��� प्रौद्योगिकी",
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
      "हमारे महत्वाकांक्षी न���वेशक जिन्होंने हमारे विज़न में विश्वास रखा है।",
    investorsFooter:
      "और ���न्य प्रमुख एंजेल निवेशक जो ��फल उद्यमी, वेंचर कैपिटलिस��ट और फंड मैनेजर हैं",
    partnersTitle: "हमारे साझेदार",
    partnersSubtitle:
      "हम अपने पहुँच का विस्तार करने के लिए प्रमुख वित्तीय संस्थानों और भागीदारों के साथ सहयोग करते हैं।",
  },
  mar: {
    breadcrumb: ["मुखपृष्ठ", "आमची कथा"],
    title: "आमची कथा",
    p1: "Nivesh हे एक पुरस्कार विजेता डिजिटल-प्रथम प्लॅटफॉर्म आहे जे स्वतंत्र म्युच्युअल फंड वितरकांना त्यांचे AUM वाढविण्यात मदत करते.",
    p2: "आमचा दृष्टिकोन IFAs साठी तंत्रज्ञान-समर्थित उपाय प���रदा��� करणे आहे.",
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
      "आम्ही सुरक्षित, अनुपालन-अनुकूल आणि मानव-केंद्रित फि��टेक प्रदान करण्यात बांधील आहोत जे सल्लागारांना सशक्त करते आणि गुंतवणूकदारांचे संरक्षण करते.",
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
      "आम्ही ���म���्या पोहोच वाढविण्यासाठी आघाडीच्या आर्थिक संस्थांशी आणि भागीद���रांशी सहकार्य करतो.",
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
      image: "https://nivesh.com/2fa2f14db2c2ee86d3af813c91b002d0.png",
      linkedin: "https://www.linkedin.com/in/anuraggarg3/",
    },
    {
      name: "Sridhar Srinivasan",
      title: "Co-Founder & CTO",
      image: "https://nivesh.com/d6dff2e15494a162fd04442d4182b0a9.png",
      linkedin: "https://www.linkedin.com/in/srisri0/",
    },
    {
      name: "Dr Hira Jaiswal",
      title: "Principal Officer & General Manager - Insurance",
      image: "https://nivesh.com/141b574157a0b78e61649a38dc9d9185.png",
      linkedin: "https://www.linkedin.com/in/dr-hira-jaiswal-6377b9249/",
    },
    {
      name: "Rajesh Kumar Ram",
      title: "VP - Engineering & Technology",
      image: "https://nivesh.com/89227cf01d59b83bce92148f3822c090.png",
      linkedin: "https://in.linkedin.com/in/rajesh-kumar-77734572",
    },
    {
      name: "Vishal Rohta",
      title: "VP - Operations & Partner Development",
      image: "https://nivesh.com/40c5bb2b4d702e4d6429b47b43e57ef1.png",
      linkedin: "https://www.linkedin.com/in/vishal-rohta-90896632/",
    },
    {
      name: "Anant Sharma",
      title: "Business Head - Product & Research",
      image: "https://nivesh.com/cb8c2656150f098bd92c8dd69611a581.png",
      linkedin: "https://www.linkedin.com/in/anant-sharma-2087a118/",
    },
    {
      name: "Sarika Bhadauria",
      title: "Manager - HR & Admin",
      image: "https://nivesh.com/09b61be855188a21908860b5bc042aa4.jpg",
      linkedin: "https://www.linkedin.com/in/sarika-bhadauria-1a738722/",
    },
    {
      name: "Kamal Kumar",
      title: "Company Secretary, Accounts and Legal",
      image: "https://nivesh.com/219e5182d8cb3078557f96c2e53a3384.jpeg",
      linkedin: "https://www.linkedin.com/in/cskamalkumar/",
    },
    {
      name: "Puneet Agarwal",
      title: "Manager - Partner Relations",
      image: "https://nivesh.com/7fb892c87b7f61c6918444b6a69aa5b1.jpg",
      linkedin: "https://www.linkedin.com/in/puneet-agarwal-10b30332/",
    },
    {
      name: "Ankit Nihania",
      title: "Senior Area Manager - Partner Relations",
      image: "https://nivesh.com/208c997e83445bc7fbeec65da212a1dc.jpg",
      linkedin: "https://www.linkedin.com/in/ankit-nihania-97aa6b153/",
    },
    {
      name: "Devendra Singh",
      title: "Senior Area Manager - Partner Relations",
      image: "https://nivesh.com/0123aae0c68f3a010135ea0ad3d20a11.jpg",
      linkedin: "https://www.linkedin.com/in/devendra-singh-rawat-67556079/",
    },
    {
      name: "Akanksha Srivastava",
      title: "Product Manager - Technology",
      image: "https://nivesh.com/852f4d7aa8e2280abc3658e61422a5b6.jpg",
      linkedin: "https://www.linkedin.com/in/akanksha8/",
    },
    {
      name: "Abhijeet Awasthi",
      title: "Technical Architect - Technology",
      image: "https://nivesh.com/66cac19c0de56fc4b4543a10cd62d7f8.jpg",
      linkedin: "https://www.linkedin.com/in/abhijeet-awasthi-63bb22143/",
    },
    {
      name: "Pooja Ratudi",
      title: "Manager - Partner Support",
      image: "https://nivesh.com/676a8d70672a45939a15d83e7062576d.jpg",
      linkedin: "https://www.linkedin.com/in/pooja-ratudi-0845a412a/",
    },
    {
      name: "Sneha Ghag",
      title: "Lead Engineer - Technology",
      image: "https://nivesh.com/2d04a8e322c15565cb73d2d36203318e.jpg",
      linkedin: "https://www.linkedin.com/in/sneha-ghag-671198bb/",
    },
    {
      name: "Shivani Shrivastav",
      title: "Manager-Team Lead, Customer Success Manager",
      image: "https://nivesh.com/dc0049358518c8070adce2fc2146dd4f.png",
      linkedin: "https://www.linkedin.com/in/i-am-shivani-shrivastav/",
    },
    {
      name: "Akhilesh Chandak",
      title: "Principal Software Engineer - Technology",
      image: "https://nivesh.com/bd8092ff7a0dcb904f3876ff73b212b2.jpg",
      linkedin: "https://www.linkedin.com/in/akhilesh-chandak-ab9059b5/",
    },
    {
      name: "Shivani Baghel",
      title: "Manager- Client Wealth",
      image: "https://nivesh.com/4dceb90d8e71aafb255b1348ca6f7e4d.jpg",
      linkedin: "https://www.linkedin.com/in/shivani-baghel-b20856125/",
    },
    {
      name: "Nishant Pandey",
      title: "Senior Area Manager - Partner Relations",
      image: "https://nivesh.com/d84fa23c55ffc41900bd9fd7b48d550d.jpg",
      linkedin: "",
    },
  ];

  return (
    <main className="min-h-screen pb-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10">
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-600 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link to={`/${lang}`} className="hover:underline text-slate-700">
                {t("breadcrumb")[0]}
              </Link>
            </li>
            <li aria-hidden className="text-slate-500">
              /
            </li>
            <li className="text-slate-900 font-semibold">
              {t("breadcrumb")[1]}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
          <div className="md:col-span-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-[#0a66c2]">
              {t("title")}
            </h1>
            <p className="text-slate-700 max-w-3xl mb-6 leading-relaxed">
              {t("p1")}
            </p>
            <p className="text-slate-700 max-w-3xl mb-6 leading-relaxed">
              {t("p2")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#0a66c2] text-white font-semibold px-5 py-3 rounded-full shadow-md hover:shadow-[#084a9e] hover:shadow-lg hover:bg-[#084a9e] transition"
              >
                {t("speak")}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-5 py-3 rounded-full hover:bg-slate-100 transition"
              >
                {t("solutions")}
              </a>
            </div>

            {/* key stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t("stats").map((s: string, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 text-center shadow-md"
                >
                  <div className="text-2xl font-bold">{s}</div>
                  <div className="text-sm text-slate-600">
                    {t("statsLabels")[idx]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://nivesh.com/77ed3b77aee16c36b46d3e0a2d3be68d.png"
                alt="Our story"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                🏆
              </div>
              <div>
                <div className="text-sm text-slate-600 font-semibold">
                  Recognized Excellence
                </div>
                <div className="text-xs text-slate-600">
                  Multiple awards for innovation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0a66c2]">
              {t("missionTitle")}
            </h3>
            <p className="text-slate-700 leading-relaxed">{t("missionText")}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#0a66c2]">
              {t("visionTitle")}
            </h3>
            <p className="text-slate-700 leading-relaxed">{t("visionText")}</p>
          </div>
        </section>

        {/* Team / approach */}
        <section className="mb-12">
          <h3 className="text-2xl font-extrabold mb-6 text-[#0a66c2]">
            {t("approachTitle")}
          </h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-slate-700 leading-relaxed">
              {t("approachText")}
            </p>
          </div>
        </section>

        {/* Team showcase */}
        <section className="mb-16">
          <h3 className="text-2xl font-extrabold mb-6 text-[#0a66c2]">
            {t("teamTitle")}
          </h3>
          <p className="text-slate-700 max-w-3xl mb-6">{t("teamText")}</p>
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
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-extrabold mb-2">
              {t("investorsTitle")}
            </h3>
            <p className="text-slate-700 mb-8">{t("investorsSubtitle")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Windrose capital",
                  img: "https://nivesh.com/e7ffb63fed9a022a2d74929a6e1acb74.svg",
                },
                {
                  name: "Lets Venture",
                  img: "https://nivesh.com/d771c6e1878e02339e9c1b5ab7e683c2.svg",
                },
                {
                  name: "Indian Angel Network Fund",
                  img: "https://nivesh.com/6a6a4ad24d58d210f67177ef350d9214.svg",
                },
              ].map((p, idx) => (
                <div
                  key={p.name}
                  className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="object-contain mb-4"
                    width="200px"
                    height="200px"
                  />
                  <div className="font-semibold text-lg text-slate-900 mb-2">
                    {p.name}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mt-8 text-sm">
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
            <p className="text-slate-700 mb-8">{t("partnersSubtitle")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  name: "PNB Housing Finance Ltd.",
                  desc: "Know More About PNB Housing Finance Ltd.",
                  img: "https://nivesh.com/ebe7fc6de268f71f0ce97b3be2183f85.svg",
                },
                {
                  name: "HDFC Limited",
                  desc: "Know More About HDFC Limited",
                  img: "https://nivesh.com/6c7572cadb0fed9a670b944b9ccf8f18.svg",
                },
                {
                  name: "ICICI Home Finance Company Ltd",
                  desc: "Know More About ICICI Home Finance Company Ltd",
                  img: "https://nivesh.com/dbcbd85c0b9470eb67bab651680ca678.svg",
                },
                {
                  name: "Shriram Transport Finance Limited",
                  desc: "Know More About Shriram Transport Finance Limited",
                  img: "https://nivesh.com/d341cd2aad4bd42d0b789729174da896.svg",
                },
                {
                  name: "Bajaj Finance Limited",
                  desc: "Know More About Bajaj Finance Limited",
                  img: "https://nivesh.com/58f15ef202551679678e8724e23c3de2.svg",
                },
                {
                  name: "Mahindra Finance Limited",
                  desc: "Know More About Mahindra Finance Limited",
                  img: "https://nivesh.com/5a4b86f02f558e0067bdbd4a79bda71a.svg",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-20 object-contain mb-4"
                  />
                  <div className="font-semibold text-lg text-slate-900 mb-2">
                    {p.name}
                  </div>
                  <div className="text-sm text-slate-600 mb-4">{p.desc}</div>
                  <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition">
                    More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Testimonials />
        </section>
        <section className="mb-20">
          <AwardsMarquee />
        </section>
      </div>
    </main>
  );
}

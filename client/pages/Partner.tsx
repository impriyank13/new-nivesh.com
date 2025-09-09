import { useParams, Link } from "react-router-dom";

const partnerTranslations: any = {
  "be-a-nivesh-partner": {
    en: {
      title: "Be A Nivesh Partner",
      subtitle: "Join our partner program to grow your distribution business with technology and support.",
      points: ["Partner dashboard", "Co-marketing support", "Dedicated partner manager"],
    },
    hin: {
      title: "Nivesh पार्टनर बनें",
      subtitle: "प्रौद्योगिकी और समर्थन के साथ अपने वितरण व्यवसाय को बढ़ाने के लिए ��मारे पार्टनर प्रोग्राम में शामिल हों।",
      points: ["पार्टनर डैशबोर्ड", "सह-मार्केटिंग समर्थन", "समर्पित पार्टनर मैनेजर"],
    },
    mar: {
      title: "Nivesh पार्टनर बना",
      subtitle: "तंत्रज्ञान व समर्थनासह तुमच्या वितरण व्यवसायाला वाढवण्यासाठी आमच्या पार्टनर प्रोग्राममध्ये सामील व्हा.",
      points: ["पार्टनर डॅशबोर्ड", "को-मार्केटिंग समर्थन", "समर्पित पार्टनर मॅनेजर"],
    },
  },
  "become-mf-distributor": {
    en: { title: "Become MF Distributor", subtitle: "Start distributing mutual funds with compliant processes and tooling.", points: ["Onboarding kits", "Compliance assistance", "Sales playbooks"] },
    hin: { title: "एमएफ वितरक बनें", subtitle: "अनुपालन प्रक्रियाओं और उपकरणों के साथ म्यूचुअ��� फंड वितरित करना शुरू करें।", points: ["ऑनबोर्डिंग किट", "अनुपालन सहायता", "सेल्स प्लेबुक्स"] },
    mar: { title: "MF वितरक बना", subtitle: "कंप्लायंट प्रोसेस व टूलिंगसह म्युच्युअल फंड वितरित करा.", points: ["ऑनबोर्डिंग किट", "कंप्लायन्स मदत", "सेल्स प्लेबुक्स"] },
  },
  "grow-mf-business": {
    en: { title: "Grow Your MF Business", subtitle: "Tools and campaigns to help you scale AUM and client engagement.", points: ["Lead generation", "Automated outreach", "Client retention programs"] },
    hin: { title: "अपना एमएफ व्यवसाय बढ़ाएँ", subtitle: "AUM और क्लाइंट एंगेजमेंट को स्केल करने के लिए टूल्स और कैंपेन।", points: ["लीड जनरेशन", "स्वचालित आउटरीच", "क्लाइंट रिटेंशन"] },
    mar: { title: "आपला MF व्यवसाय वाढवा", subtitle: "AUM व क्लायंट एंगेजमेंट वाढवण्यासाठी साधने व अभियान.", points: ["लीड जनरेशन", "ऑटोमेटेड आउटरीच", "क्लायंट रिटेन्शन"] },
  },
  "amfi-arn-code": {
    en: { title: "AMFI ARN Code", subtitle: "Support to obtain and manage your AMFI ARN code.", points: ["ARN application help", "Documentation", "Ongoing compliance"] },
    hin: { title: "AMFI ARN कोड", subtitle: "अपने AMFI ARN कोड प्राप्त करने और प्रबंधित करने में सहायता।", points: ["ARN आवेदन सहायता", "दस्तावेज़", "लगातार अनुपालन"] },
    mar: { title: "AMFI ARN कोड", subtitle: "तुमचा AMFI ARN कोड मिळवण्यास व व्यवस्थापित करण्यास सहाय्य.", points: ["ARN अर्ज मदत", "डॉक्युमेंटेशन", "निरंतर कंप्लायन्स"] },
  },
  "nism-certification": {
    en: { title: "NISM Certification", subtitle: "Get guidance and resources for NISM certification and training.", points: ["Course materials", "Exam prep", "Certification support"] },
    hin: { title: "NISM प्रमाणन", subtitle: "NISM प्रमाणन और प्रशिक्षण के लिए मार्गदर्शन और संसाधन प्राप्त करें।", points: ["कोर्स सामग्री", "परीक्षा तैयारी", "प्रमाणन समर्थन"] },
    mar: { title: "NISM प्रमाणन", subtitle: "NISM प्रमाणन व प्रशिक्षणासाठी मार्गदर्शन व संसाधने मिळवा.", points: ["कोर्स मटेरियल", "परीक्षा तयारी", "प्रमाणन समर्थन"] },
  },
};

export default function Partner() {
  const params = useParams();
  const lang = params.lang || "en";
  const partner = params.partner || "be-a-nivesh-partner";
  const content = (partnerTranslations as any)[partner] || (partnerTranslations as any)["be-a-nivesh-partner"];
  const t = (key: string) => content[lang]?.[key] ?? content["en"]?.[key] ?? "";

  return (
    <main className="py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8">
          <Link to={`/${lang}/`} className="text-sm text-slate-500 hover:underline">Back</Link>
        </div>

        <header className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h1 className="text-3xl font-extrabold mb-2 text-[#0a66c2]">{t("title")}</h1>
          <p className="text-slate-600">{t("subtitle")}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(content[lang]?.points || content["en"]?.points || []).map((f: string) => (
            <div key={f} className="bg-white rounded-lg border border-slate-200 p-6 text-center shadow-sm">
              <div className="font-semibold mb-2">{f}</div>
              <p className="text-sm text-slate-600">Learn how we support: {f.toLowerCase()}.</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Partner Onboarding</h2>
            <p className="text-slate-600 mb-4">To join as a partner and access onboarding resources, visit our partner portal.</p>
            <a href="https://app.nivesh.com/partner_onboarding" className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold">Get Started</a>
          </div>
        </section>
      </div>
    </main>
  );
}

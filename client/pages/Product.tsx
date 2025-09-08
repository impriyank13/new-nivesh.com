import { useParams, Link } from "react-router-dom";

const productTranslations: any = {
  "mutual-funds": {
    en: {
      title: "Mutual Funds",
      subtitle:
        "Discover a range of mutual fund solutions tailored to different risk profiles and goals.",
      features: [
        "Diversified portfolios",
        "Systematic Investment Plans (SIP)",
        "Tax-efficient solutions",
      ],
    },
    hin: {
      title: "म्यूचुअल फंड",
      subtitle: "विभिन्न जोखिम प्रोफाइल और लक्ष्यों के लिए म्यूचुअल फंड समाधान।",
      features: ["विविध पोर्टफोलियो", "SIP", "टैक्स-इफिशिएंसी"],
    },
    mar: {
      title: "म्युच्युअल फंड",
      subtitle: "विविध जोखीम प्रोफाइल व उद्देशांसाठी म्युच्युअल फंड उपाय।",
      features: ["विविध प��र्टफोलियो", "SIP", "कर-अनुकूल"],
    },
  },
  sif: {
    en: {
      title: "Specialized Investment Fund (SIF)",
      subtitle: "Structured funds for specialised investment strategies and qualified investors.",
      features: ["Custom structures", "Regulatory compliant", "Tailored reporting"],
    },
    hin: {
      title: "विशेषीकृत निवेश फंड (SIF)",
      subtitle: "विशेषीकृत निवेश रणनीतियों के लिए संरचित फंड।",
      features: ["कस्टम संरचनाएँ", "नियमों का पालन", "रिपोर्टिंग"],
    },
    mar: {
      title: "विशेषीकृत इन्वेस्टमेंट फंड (SIF)",
      subtitle: "विशेषीकृत गुंतवणूक धोरणांसाठी संरचित फंड।",
      features: ["सानुकूल रचना", "नियमांचे पालन", "तपशीलवार रिपोर्ट्स"],
    },
  },
  mld: {
    en: {
      title: "Market Linked Debentures (MLD)",
      subtitle: "Fixed-income instruments linked to market indices or reference assets.",
      features: ["Attractive yields", "Market-linked upside", "Defined tenor"],
    },
    hin: {
      title: "मार्केट लिंक्ड डेबेंचर (MLD)",
      subtitle: "बाजार सूचकांक या संदर्भ संपत्ति से संबंधित फिक्स्ड-इनकम उपकरण।",
      features: ["आकर्षक रिटर्न", "बाजार-लिंक्ड संभावित लाभ", "समय-सीमा"],
    },
    mar: {
      title: "मार्केट लिंक्ड डिबेंचर (MLD)",
      subtitle: "बाजार निर्देशांकांशी संबंधित फिक्स्ड-इनकम साधने।",
      features: ["उच्च परतावा", "बाजाराशी संबंधित लाभ", "निर्धारित कालावधी"],
    },
  },
  "gift-city": {
    en: {
      title: "Gift City",
      subtitle: "Investment and services tailored for India’s international financial centre.",
      features: ["Regulatory benefits", "International investors", "Competitive costs"],
    },
    hin: {
      title: "गिफ्ट सिटी",
      subtitle: "भार��� के अंतर्राष्ट्रीय वित्तीय केंद्र के लिए निवेश और सेवाएँ।",
      features: ["नियामक लाभ", "अंतरराष्ट्रीय निवेशक", "प्रतिस्पर्धी लागत"],
    },
    mar: {
      title: "गिफ्ट सिटी",
      subtitle: "इंडियाच्या आंतरराष्ट्रीय फायनान्शियल सेंटरसाठी गुंतवणूक व सेवा।",
      features: ["नियमिती फायदे", "आंतरराष्ट्रीय गुंतवणूक", "स्पर्धात्मक खर्च"],
    },
  },
  "unlisted-shares": {
    en: {
      title: "Unlisted Shares",
      subtitle: "Access to curated unlisted investment opportunities.",
      features: ["Early-stage access", "Curated deals", "Due diligence support"],
    },
    hin: {
      title: "अनलिस्टेड शेयर",
      subtitle: "क्यूरेटेड अनलिस्टेड निवेश अवसरों तक पहुंच।",
      features: ["प्रारंभिक चरण पहुंच", "क्यूरेटेड डील्स", "डिव-डिल समर्थन"],
    },
    mar: {
      title: "अनलिस्टेड शेअर्स",
      subtitle: "क्युरेटेड अनलिस्टेड गुंतवणूक संधींना प्रवेश।",
      features: ["लवकर प्रवेश", "क्युरेटेड डील्स", "ड्यू डिलिजन्स"],
    },
  },
  "fixed-deposit": {
    en: {
      title: "Fixed Deposit",
      subtitle: "Secure, short to medium term fixed returns.",
      features: ["Stable returns", "Flexible tenors", "Credit-rated options"],
    },
    hin: { title: "फिक्स्ड डिपॉजिट", subtitle: "स्थिर रिटर्न", features: ["स्थिर रिटर्न"] },
    mar: { title: "फिक्स्ड डिपॉझिट", subtitle: "स्थिर परतावा", features: ["स्थिर परतावा"] },
  },
  pms: {
    en: { title: "PMS", subtitle: "Portfolio Management Services for high net-worth investors.", features: ["Customized portfolios", "Dedicated manager"] },
    hin: { title: "PMS", subtitle: "हाई नेट-वर्थ के लिए पोर्टफोलियो प्रबंधन", features: ["कस्टम पोर्टफोलियो"] },
    mar: { title: "PMS", subtitle: "हाय नेट-वर्थसाठी पोर्टफोलिओ मॅनेजमेंट", features: ["सानुकूल पोर्टफोलिओ"] },
  },
  aif: { en: { title: "AIF", subtitle: "Alternative Investment Funds", features: ["Strategies", "Specialised managers"] }, hin: { en: { title: "AIF" } },
  nps: { en: { title: "NPS", subtitle: "National Pension System", features: ["Retirement-focused"] } },
  bond: { en: { title: "Bond", subtitle: "Fixed income securities" } },
  las: { en: { title: "Loan Against Securities (LAS)", subtitle: "Borrow against your investments" } },
};

export default function Product() {
  const params = useParams();
  const lang = params.lang || "en";
  const prod = params.product || "";
  const content = (productTranslations as any)[prod] || (productTranslations as any)["mutual-funds"];
  const t = (key: string) => content[lang]?.[key] ?? content["en"]?.[key] ?? "";

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-8">
          <Link to={`/${lang}/`} className="text-sm text-slate-500 hover:underline">
            Back
          </Link>
        </div>

        <header className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h1 className="text-3xl font-extrabold mb-2">{t("title")}</h1>
          <p className="text-slate-400">{t("subtitle")}</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(content[lang]?.features || content["en"]?.features || []).map((f: string) => (
            <div key={f} className="bg-white rounded-lg border border-slate-200 p-6 text-center shadow-sm">
              <div className="font-semibold mb-2">{f}</div>
              <p className="text-sm text-slate-500">Learn more about {f.toLowerCase()}.</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Get Started</h2>
            <p className="text-slate-600 mb-4">For onboarding and detailed product documentation, visit our partner portal.</p>
            <a href="https://app.nivesh.com/partner_onboarding" className="inline-flex items-center bg-black text-white rounded-full px-4 py-2 text-sm font-semibold">Get Started</a>
          </div>
        </section>
      </div>
    </main>
  );
}
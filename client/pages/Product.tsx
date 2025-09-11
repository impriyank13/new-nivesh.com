import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
      features: ["कस्��म संरचनाएँ", "नियमों का पालन", "रिपोर्टिंग"],
    },
    mar: {
      title: "विशेषीकृत इन्वेस्��म��ंट फंड (SIF)",
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
      title: "मार्केट लिंक्ड ड��बेंचर (MLD)",
      subtitle: "बाजार निर्देशांकांशी संबंधित फिक्स्ड-इनकम साधने।",
      features: ["���च्��� परतावा", "बाजाराशी संबंधित लाभ", "निर्धारित कालावधी"],
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
      features: ["नियामक लाभ", "अंतरराष्ट्रीय निवेशक", "प्रतिस्प��्धी लागत"],
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
    mar: { title: "फिक्स्ड डिपॉझिट", subtitle: "स्थिर परतावा", features: ["स्थि�� परतावा"] },
  },
  pms: {
    en: { title: "PMS", subtitle: "Portfolio Management Services for high net-worth investors.", features: ["Customized portfolios", "Dedicated manager"] },
    hin: { title: "PMS", subtitle: "हाई नेट-वर्थ के लिए पोर्टफोलियो प्रबंधन", features: ["कस्टम पोर्टफोलियो"] },
    mar: { title: "PMS", subtitle: "हाय नेट-वर्थ���ाठी पोर्टफोलिओ मॅनेजमेंट", features: ["सानुकूल पोर्��फोलिओ"] },
  },
  aif: {
    en: { title: "AIF", subtitle: "Alternative Investment Funds", features: ["Strategies", "Specialised managers"] },
    hin: { title: "AIF", subtitle: "वैकल्पिक निवेश फंड", features: ["रणनीतियाँ", "विशेष प्रबंधक"] },
    mar: { title: "AIF", subtitle: "अल्टरनेटिव इन्वेस्टमेंट फंड्स", features: ["स्ट्रॅटेजीज", "स्पेशालिस्ट मॅनेजर्स"] },
  },
  nps: {
    en: { title: "NPS", subtitle: "National Pension System", features: ["Retirement-focused"] },
    hin: { title: "NPS", subtitle: "नेशनल पेंशन सिस्टम", features: ["रिटायरमेंट-फोकस्ड"] },
    mar: { title: "NPS", subtitle: "नॅशनल पेन्शन सिस्टम", features: ["रिटायरमेंट-���ोकस्ड"] },
  },
  bond: {
    en: { title: "Bond", subtitle: "Fixed income securities", features: ["Steady income", "Credit-rated options"] },
    hin: { title: "बॉन्ड", subtitle: "फिक्स्ड-इनकम सिक्योरिटीज" },
    mar: { title: "बॉ���्ड", subtitle: "फिक्स्ड-इनकम सिक्योरिटीज" },
  },
  las: {
    en: { title: "Loan Against Securities (LAS)", subtitle: "Borrow against your investments", features: ["Quick credit", "Competitive rates"] },
    hin: { title: "लोन ���गेन्स्ट सिक्योरिटीज", subtitle: "अपने निवेश के खिलाफ उधार" },
    mar: { title: "लोन अगेंस्ट सिक्योरिटीज", subtitle: "तुमच्या गुंतवणुकीविरुद्ध कर्ज" },
  },
};

export default function Product() {
  const params = useParams();
  const lang = params.lang || "en";
  const prod = params.product || "";
  const content = (productTranslations as any)[prod] || (productTranslations as any)["mutual-funds"];
  const t = (key: string) => content[lang]?.[key] ?? content["en"]?.[key] ?? "";

  const [schemes, setSchemes] = useState<any[]>([]);
  const [schemesLoading, setSchemesLoading] = useState(false);
  const [schemesError, setSchemesError] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const toggleFlip = (id: string) => setFlipped((p) => ({ ...p, [id]: !p[id] }));

  useEffect(() => {
    if (prod !== "mutual-funds") return;

    const langMap: Record<string, number> = { en: 1, hin: 2, mar: 3 };
    const payload = {
      ProductCategoryId: "1",
      ClientCode: "",
      LanguageId: langMap[lang] || 1,
      device: "",
      AMCCode: "",
      SebiCategoryId: "",
      SebiSubCategoryId: "",
      DefaultProductId: "1",
    };

    let cancelled = false;

    const fetchSchemes = async () => {
      setSchemesLoading(true);
      setSchemesError(null);

      try {
        const res = await fetch("https://api.nivesh.com/API/getSchemesDataV2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        // The API puts list here:
        const list = data?.ObjectResponse?.SchemeDataList ?? [];

        if (!cancelled) {
          setSchemes(list);
          setSchemesLoading(false);
        }
      } catch (err: any) {
        if (!cancelled) {
          setSchemesError(err.message || "Failed to fetch schemes");
          setSchemesLoading(false);
        }
      }
    };

    fetchSchemes();
    return () => {
      cancelled = true;
    };
  }, [prod, lang]);

  return (
    <main className="py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-6">
          <Link to={`/${lang}/`} className="text-sm text-slate-500 hover:underline">
            Back
          </Link>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 rounded-lg shadow-sm mb-8">
          <div>
            <h1 className="text-4xl leading-tight font-extrabold mb-4">{t("title")}</h1>
            <p className="text-lg text-slate-600 mb-6">{t("subtitle")}</p>

            <ul className="space-y-3 mb-6">
              {(content[lang]?.features || content["en"]?.features || []).map((f: string) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-slate-900" />
                  <span className="text-sm text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://app.nivesh.com/partner_onboarding" className="inline-flex items-center justify-center bg-[#0a66c2] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#084a9e] transition">Get Started</a>
              <Link to={`/${lang}/`} className="inline-flex items-center justify-center border border-slate-200 text-slate-700 rounded-full px-4 py-2 text-sm">Speak to an expert</Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src="https://nivesh.com/9962f4877e535b49e6c3b9742b8387a6.jpeg" alt={t("title")} className="w-full max-w-md object-contain" />
          </div>
        </section>

        {/* Product details / benefits */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 rounded-lg border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Why choose {t("title")}</h2>
            <p className="text-slate-600 mb-4">Our platform helps distributors access diversified mutual fund solutions with best-in-class technology and support.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(content[lang]?.features || content["en"]?.features || []).map((f: string) => (
                <div key={f} className="flex items-start gap-3 bg-slate-50 p-4 rounded">
                  <div className="h-10 w-10 flex items-center justify-center rounded border">
                    <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">{f}</div>
                    <div className="text-sm text-slate-500">Learn more about how we deliver {f.toLowerCase()}.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold mb-3">Quick facts</h3>
            <dl className="text-sm text-slate-700 space-y-3">
              <div>
                <dt className="font-medium">AUM</dt>
                <dd className="text-slate-500">19.5cr+</dd>
              </div>
              <div>
                <dt className="font-medium">Partners</dt>
                <dd className="text-slate-500">100+</dd>
              </div>
              <div>
                <dt className="font-medium">Experience</dt>
                <dd className="text-slate-500">8 yrs</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Schemes (fetched from API for mutual funds) */}
        {prod === "mutual-funds" && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Top Performing Schemes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {schemesLoading && <div className="col-span-full text-center text-slate-500">Loading schemes...</div>}
              {schemesError && <div className="col-span-full text-center text-red-500">{schemesError}</div>}
              {!schemesLoading && !schemesError && schemes.length === 0 && (
                <div className="col-span-full text-center text-slate-500">No schemes found.</div>
              )}

              {schemes.map((s: any) => {
                const id = String(s.UniqueNo ?? s.SchemeCode ?? Math.random());
                const isFlipped = !!flipped[id];
                return (
                  <div key={id} className="relative" style={{ perspective: 1000 }}>
                    <div
                      className="relative w-full h-56"
                      style={{
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s",
                      }}
                    >
                      {/* Front (show icon, name, NAV, all returns, invest + details) */}
                      <div className="absolute inset-0 p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col overflow-hidden bg-[#ffffff]" style={{ backfaceVisibility: "hidden" }}>
                        <div className="flex items-start gap-3 mb-2">
                          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 flex-shrink-0">
                            {/* Simple icon: initials */}
                            <span className="font-semibold text-sm">{String(s.SchemeName || "").split(" ").slice(0,2).map(w=>w[0]).join("")}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-lg truncate">{s.SchemeName}</div>
                            <div className="text-sm text-slate-500 truncate">{s.SchemeType}</div>
                          </div>
                        </div>

                        <div className="mt-2 text-sm text-slate-700 flex-1 overflow-hidden">
                          <div className="mb-2">NAV: <span className="font-medium">{s.NAV_Value}</span></div>

                          <div className="grid grid-cols-4 gap-2 text-sm">
                            {[
                              ["OneYearReturn","1Y"],
                              ["TwoYearReturn","2Y"],
                              ["ThreeYearReturn","3Y"],
                              ["FiveYearReturn","5Y"],
                            ].map(([k, label]) => {
                              const val = s[k as string];
                              if (val === null || val === undefined) return null;
                              const num = Number(val);
                              const cls = isNaN(num) ? "text-slate-500" : num >= 0 ? "text-green-600" : "text-red-600";
                              return (
                                <div key={String(k)} className="text-center">
                                  <div className={`font-medium ${cls}`}>{isNaN(num) ? String(val) : `${num}%`}</div>
                                  <div className="text-slate-500 text-xs">{label}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between gap-2">
                          <a href={s.InvestURL} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[#0a66c2] text-white rounded-full px-3 py-2 text-sm font-semibold hover:bg-[#084a9e] transition">Invest</a>
                          <button onClick={() => toggleFlip(id)} className="text-sm text-slate-600">Details</button>
                        </div>
                      </div>

                      {/* Back (full details) */}
                      <div
                        className="absolute inset-0 p-4 rounded-lg border border-slate-200 shadow-sm overflow-auto bg-[#ffffff]"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <div className="h-full flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <div className="font-semibold truncate">{s.SchemeName}</div>
                            <div className="text-sm text-slate-500 truncate">{s.SchemeType}</div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-sm text-slate-700 mb-3">
                            {[
                              ["MinimumPurchaseAmount","Min Purchase"],
                              ["RedemptionAmountMinimum","Min Redemption"],
                              ["SIPFLAG","SIP Allowed"],
                              ["ExitLoad","Exit Load"],
                              ["StartDate","Start Date"],
                              ["EndDate","End Date"],
                            ].map(([k,label])=>{
                              const val = s[k as string];
                              if (val === null || val === undefined || val === "") return null;
                              return (
                                <div key={String(k)} className="">
                                  <div className="font-medium text-right">{String(val)}</div>
                                  <div className="text-slate-500">{label}</div>
                                </div>
                              );
                            })}
                          </div>

                          {s.SchemeDescription && <div className="text-sm text-slate-600 mb-3">{s.SchemeDescription}</div>}

                          <div className="mt-auto flex items-center gap-2">
                            <a href={s.InvestURL} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[#0a66c2] text-white rounded-full px-3 py-2 text-sm font-semibold hover:bg-[#084a9e] transition">Invest</a>
                            <button onClick={() => toggleFlip(id)} className="text-sm text-slate-600">Back</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA block */}
        <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold mb-3">Ready to onboard?</h3>
          <p className="text-slate-600 mb-4">Start the partner onboarding process and get access to product documentation, onboarding kits and support.</p>
          <a href="https://app.nivesh.com/partner_onboarding" className="inline-flex items-center bg-[#0a66c2] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#084a9e] transition">Get Started</a>
        </section>
      </div>
    </main>
  );
}

import { useState } from "react";
import { CircleCheck } from "lucide-react";

interface DescItem {
    title: string;
    subTitle: string;
}

interface StatProps {
    id: string; 
    percent: number;
    text: string;
    desc: string;
    pathName: string;
    items: DescItem[];
}

const statData: StatProps[] = [
    {
        id: "low",
        percent: 8,
        text: "For asking prices below $250k",
        desc: "Closing fee when you sell",
        pathName: "https://sso.bizscout.com/login?origin=app-bizscout&redirect_uri=https%3A%2F%2Fapp.bizscout.com%2Fauth%2Fsso%2Fcallback&state=eyJub25jZSI6Imc2ZHFhcGtxdXk1IiwicmV0dXJuVXJsIjoiL2NyZWF0ZS1idXNpbmVzcy1saXN0aW5nIn0",
        items: [
            { title: "Maximum interest", subTitle: "Attract more buyers with marketing and listing support." },
            { title: "Expert guidance", subTitle: "Sell for the highest price and best terms with our help." },
            { title: "Data room access", subTitle: "Get access to our secure data room for due diligence & transparency." }
        ]
    },
    {
        id: "mid",
        percent: 7,
        text: "For asking prices between $250k–$1M",
        desc: "Closing fee when you sell",
        pathName: "https://sso.bizscout.com/login?origin=app-bizscout&redirect_uri=https%3A%2F%2Fapp.bizscout.com%2Fauth%2Fsso%2Fcallback&state=eyJub25jZSI6Inoya2lybjgwYm4iLCJyZXR1cm5VcmwiOiIvY3JlYXRlLWJ1c2luZXNzLWxpc3RpbmcifQ",
        items: [
            { title: "Maximum interest", subTitle: "Attract more buyers with marketing and listing support." },
            { title: "Expert guidance", subTitle: "Sell for the highest price and best terms with our help." },
            { title: "Data room access", subTitle: "Get access to our secure data room for due diligence & transparency." }
        ]
    },
    {
        id: "high",
        percent: 6,
        text: "For asking prices above $1M",
        desc: "Closing fee when you sell",
        pathName: "https://sso.bizscout.com/login?origin=app-bizscout&redirect_uri=https%3A%2F%2Fapp.bizscout.com%2Fauth%2Fsso%2Fcallback&state=eyJub25jZSI6InR5cWd5MXBldHdjIiwicmV0dXJuVXJsIjoiL2NyZWF0ZS1idXNpbmVzcy1saXN0aW5nIn0",
        items: [
            { title: "Maximum interest", subTitle: "Attract more buyers with marketing and listing support." },
            { title: "Expert guidance", subTitle: "Sell for the highest price and best terms with our help." },
            { title: "Data room access", subTitle: "Get access to our secure data room for due diligence & transparency." }
        ]
    }
];

export default function SellersStats(){
    const [activeTab, setActiveTab] = useState<"low" | "mid" | "high">("mid");

    const activeIndex = statData.findIndex(item => item.id === activeTab);
    const displayCards = [
        statData[(activeIndex - 1 + 3) % 3], // Left
        statData[activeIndex],               // Center
        statData[(activeIndex + 1) % 3]      // Right
    ];

    return (
        <section className="w-full h-auto min-h-[100dvh] bg-[#FAF7F4] px-4 md:px-8 lg:px-12 py-12 lg:py-16 flex flex-col items-center justify-center">
            
            {/* Filter Toggle Buttons */}
            <div className="flex bg-[#fff] p-1.5 rounded-full mb-16 gap-1 z-10 shadow-inner border border-[#EFEBE6]">
                <button 
                    onClick={() => setActiveTab("low")}
                    className={`cursor-pointer px-5 py-2.5 text-[14px] font-inter font-medium rounded-full transition-all duration-300 ${activeTab === "low" ? "bg-[#252423] text-white shadow" : "text-[#6B6A69] hover:text-[#252423]"}`}
                >
                    &lt; $250K
                </button>
                <button 
                    onClick={() => setActiveTab("mid")}
                    className={`cursor-pointer px-5 py-2.5 text-[14px] font-inter font-medium rounded-full transition-all duration-300 ${activeTab === "mid" ? "bg-[#252423] text-white shadow" : "text-[#6B6A69] hover:text-[#252423]"}`}
                >
                    $250K - $1M
                </button>
                <button 
                    onClick={() => setActiveTab("high")}
                    className={`cursor-pointer px-5 py-2.5 text-[14px] font-inter font-medium rounded-full transition-all duration-300 ${activeTab === "high" ? "bg-[#252423] text-white shadow" : "text-[#6B6A69] hover:text-[#252423]"}`}
                >
                    $1M+
                </button>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto items-center transition-all duration-500">
                {displayCards.map((card, idx) => {
                    const isCenter = idx === 1;

                    return (
                        <div 
                            key={card.id} 
                            className={`relative flex flex-col items-center p-6 rounded-2xl bg-[#FEFDFC] border border-[#EFEBE6] transition-all duration-500 transform
                                ${isCenter 
                                    ? "scale-105 opacity-100 blur-0 shadow-lg z-10 ring-2 ring-[#c4963c]/20" 
                                    : "scale-95 opacity-85 blur-[1px] pointer-events-none md:pointer-events-auto select-none md:select-text"
                                }` // 👈 Swapped to light opacity (85) and an ultra-subtle blur value (1px)
                            }
                        >
                            {/* Percent Header */}
                            <div className="flex items-baseline gap-1 mb-1">
                                <span className="text-[60px] leading-[60px] font-medium font-lora text-[#252423]">
                                    {card.percent}%
                                </span>
                            </div>
                            
                            <h4 className="text-[#C2C0C0] text-[16px] leading-[24px] font-inter font-light mt-4 text-center">
                                {card.desc}
                            </h4>
                            
                            <p className="absolute -top-3.5 bg-[#c4963c] rounded-full py-1 px-4 text-[12px] leading-[16px] text-white font-inter font-medium tracking-wide shadow-sm">
                                {card.text}
                            </p>
                            
                            {/* Features Breakdown */}
                            <div className="flex flex-col gap-4 w-full mb-8 pt-7 border-t border-[#EFEBE6] mt-4">
                                {card.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start gap-3">
                                        <CircleCheck className="w-5 h-5 text-[#3CB7A0] shrink-0 mt-0.5" />
                                        <div className="flex flex-col gap-0.5">
                                            <h5 className="text-[14px] leading-[20px] font-semibold text-[#252423] font-inter">
                                                {item.title}
                                            </h5>
                                            <p className="text-[13px] leading-[19px] text-[#858381] font-inter font-light">
                                                {item.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Action Link Button */}
                            <a 
                                href={card.pathName}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-auto w-full text-center text-[14px] leading-[20px] font-medium font-inter py-3 px-4 rounded-full transition-all duration-200
                                    ${isCenter 
                                        ? "bg-[#252423] hover:bg-[#3D3C3A] text-white shadow-md" 
                                        : "bg-[#EFEBE6] text-[#858381] cursor-not-allowed"
                                    }`}
                            >
                                Get Started
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
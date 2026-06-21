import { useState } from 'react';
import Button from '../../../components/common/Button';

// 1. Core Interfaces & Types defined outside the component function
type ButtonProps = {
    text: string;
    onClick: () => void;
    disabled?: boolean; // Fixed invalid type reference
};

interface ServiceItem {
    list: string;
}

interface RoleData {
    header: string;
    subHeader: string;
    items: ServiceItem[];
    image: string;
    buttonText: string; // Dynamic text placeholder for your CTA action button
}

type TabRole = "Buyers" | "Sellers" | "Brokers";

// 2. Static dataset structured cleanly
const servicesData: Record<TabRole, RoleData> = {
    Buyers: {
        header: "Stop Searching. Start Owning.",
        subHeader: "20,000+ listings scored for quality, a pipeline of off-market leads, exclusive listings, and a web-wide scanner that finds deals matching your criteria. Backed by the financial modeling, industry intelligence, and owner access that serious buyers use to win.",
        items: [
            { list: "Spot a great deal in seconds, not weeks" },
            { list: "Reach owners directly" },
            { list: "Model returns with the same data PE firms use" },
            { list: "Catch new deals the moment they’re posted" }
        ],
        image: "/images/buyers-preview.png",
        buttonText: "Explore Buyer Tools" // Custom CTA text
    },
    Sellers: {
        header: "Your Business, In Front of the Right Buyers.",
        subHeader: "List in minutes, free. BizScout puts your business in front of 140,000+ active buyers searching the platform every day. Motivated entrepreneurs. Decision-makers. People who are actually ready to act. Less filtering, more closing.",
        items: [
            { list: "Free Listing, Same-Day Reach" },
            { list: "140,000+ Active Buyers" },
            { list: "Transparent Pricing" },
            { list: "Faster Sales With DealOS" }
        ],
        image: "/images/sellers-preview.png",
        buttonText: "Explore Seller Tools" // Custom CTA text
    },
    Brokers: {
        header: "Close More. Chase Less.",
        subHeader: "Unlimited listings. Full pipeline and CRM. A partner network of SBA lenders, attorneys, and accountants. All free. We built BizScout to actually help you get deals to the finish line.",
        items: [
            { list: "Maximum Listing Exposure" },
            { list: "Deal Pipeline & CRM" },
            { list: "Co-Broker Marketplace" },
            { list: "Zero Platform Fees" }
        ],
        image: "/images/brokers-preview.png",
        buttonText: "Explore Broker Tools" // Custom CTA text
    }
};

export default function FeatureTeam() {
    // 3. Track active tab layout state
    const [activeTab, setActiveTab] = useState<TabRole>("Buyers");
    const currentData = servicesData[activeTab];

    return (
        <section className='py-16 px-4 md:px-8 lg:px-12 w-full h-auto min-h-[80dvh] bg-[#fff]'>
            {/* Header Section */}
            <div className='flex flex-col items-center justify-center text-center gap-3 py-4 max-w-3xl mx-auto mb-12'>
                <h3 className='text-[36px] leading-[44px] lg:text-[60px] lg:leading-[60px] font-lora font-normal text-[#252423]'>
                    Every Role. <span className='text-[#c4963c]'>Covered.</span>
                </h3>
                <p className='text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] font-light font-inter text-[#5B5957]'>
                    Whether you're buying, selling, or brokering, BizScout works the way you do.
                </p>
            </div>

            {/* Tab Controls Navigation */}
            <div className='flex justify-center gap-2 max-w-md mx-auto mb-16 border border-[#E5E2DE] p-1.5 rounded-full bg-white'>
                {(["Buyers", "Sellers", "Brokers"] as TabRole[]).map((role) => (
                    <button
                        key={role}
                        onClick={() => setActiveTab(role)}
                        className={`flex-1 py-2.5 px-4 rounded-full text-[14px] font-inter font-medium tracking-wide transition-all duration-200 
                            ${activeTab === role
                                ? 'bg-[#252423] text-[#FAF7F4] shadow-sm'
                                : 'text-[#5B5957] hover:text-[#252423]'
                            }`}
                    >
                        {role}
                    </button>
                ))}
            </div>

            {/* Dynamic Content Grid Showcase */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
                {/* Text Side Content Frame */}
                <div className='flex flex-col items-start gap-6'>
                    <h4 className='text-[36px] leading-[40px] font-lora font-normal text-[#252423]'>
                        {currentData.header}
                    </h4>
                    <p className='text-[16px] leading-[26px] font-inter text-[#5B5957] font-light'>
                        {currentData.subHeader}
                    </p>

                    {/* Features List Mapping */}
                    <div className='w-full grid grid-cols-1 gap-4 mt-2'>
                        {currentData.items.map((item, index) => (
                            <div key={index} className='flex items-center gap-3 rounded-xl'>
                                <span className='w-2 h-2 rounded-full bg-[#c4963c] flex-shrink-0' />
                                <p className='font-inter font-medium text-[14px] text-[#252423]'>{item.list}</p>
                            </div>
                        ))}
                    </div>

                    {/* Interactive Button Rendering Dynamic Text Data */}
                    <div className='mt-4'>
                        <Button>
                            {currentData.buttonText}
                        </Button>
                    </div>
                </div>

                {/* Interface Visual Mockup Placeholder Box */}
                <div className='w-full h-[320px] lg:h-[480px] bg-white border border-[#E5E2DE] rounded-2xl p-4 shadow-sm flex items-center justify-center text-center'>
                    <p className='text-[#5B5957] font-inter italic text-[14px]'>
                        [ Interface Mockup Preview: {currentData.image} ]
                    </p>
                </div>
            </div>
        </section>
    );
}
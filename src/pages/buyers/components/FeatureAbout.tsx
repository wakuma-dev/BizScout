import { Link } from 'react-router-dom'

interface AboutProps {
    id: string;
    header: string;
    desc: string;
    link: string; // Changed LInk to lowercase link for standard convention
}

const AboutDesc: AboutProps[] = [
    {
        id: "01",
        header: "The Marketplace",
        desc: "20,000+ listings. Map-based search. AI matching. Off-market access. 100+ vetted brokers and direct sellers. This is what a real marketplace looks like.",
        link: "/forBuyersFeature" // Added missing comma and fixed casing
    },
    {
        id: "02",
        header: "DealOS",
        desc: "Your pipeline. Your documents. Your diligence. One dashboard. DealOS is the operating layer that keeps deals moving forward instead of dying in someone’s inbox.",
        link: "#chasing" // Added missing comma and fixed casing
    },
    {
        id: "03",
        header: "The Network",
        desc: "SBA lenders, M&A attorneys, accountants, co-brokers. Every partner you need to get a deal from offer to close, built into the platform. No sourcing them yourself.",
        link: "/pricing" // Added missing comma and fixed casing
    }
];

export default function FeatureAbout() {
    return (
        <section className="w-full h-auto min-h-[80vh] px-4 md:px-8 lg:px-12 py-12 bg-[#FAF7F4]">
            <div className="flex flex-col items-center justify-center text-center gap-6">
                <h3 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] text-[#252423] font-lora font-normal">
                    Deals Don't Close <span className="text-[#C4963C]">Themselves.</span>
                </h3>
                <p className="text-[18px] leading-[29px] font-light font-inter text-[#5B5957]">
                    Discover how BizScout takes you from first search to final close.
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row w-full items-start gap-8 py-16">
                {AboutDesc.map((item) => {
                    return (
                        <div key={item.id} className="flex flex-col items-start gap-2 flex-1">
                            <span className="text-[60px] lg:text-[72px] lg:leading-[72px] font-bold font-lora text-[#5B5957] hover:text-[#c3963c] transition-colors duration-150 cursor-pointer">
                                {item.id}
                            </span>
                            <h4 className="text-[24px] leading-[32px] lg:text-[30px] lg:leading-[36px] uppercase text-[#252423] font-lora font-normal">
                                {item.header}
                            </h4>
                            <p className="text-[16px] leading-[26px] font-inter font-normal text-[#5B5957]">
                                {item.desc}
                            </p>
                            {/* Next.js Link Example */}
                            <Link to={item.link} 
                            className="text-[14px] leading-[20px] font-medium font-inter text-[#252423] mt-2">
                                Learn more
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
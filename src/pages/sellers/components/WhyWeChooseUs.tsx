import { motion } from 'framer-motion';
import { DollarSign, Eye, Shield, Zap, ChartSpline, MapPinPlusInside, type LucideIcon } from "lucide-react";

interface DescProps {
    icon: LucideIcon; 
    title: string;
    desc: string;
}

const descData: DescProps[] = [
    {
        icon: DollarSign,
        title: "Free Listings",
        desc: "List your business at no cost. No upfront fees, no subscription. You only pay when a deal closes."
    },
    {
        icon: Eye,
        title: "Nationwide Visibility",
        desc: "150,000+ active buyers searching every day across 50+ industries. Your listing gets seen by people who are actually ready."
    },
    {
        icon: Shield,
        title: "Serious, Qualified Buyers",
        desc: "Thousands of buyers on BizScout are identity-verified, and our matching tools surface the most credible prospects first. Less noise, more real conversations."
    },
    {
        icon: ChartSpline,
        title: "Transparent Pricing",
        desc: "Simple, scalable pricing based on your asking price. No hidden fees, no fine print, no surprises."
    },
    {
        icon: Zap,
        title: "Faster Sales With DealOS",
        desc: "Pipeline management, document sharing, and deal tracking built right in. Deals move faster when nothing gets lost in email."
    },
    {
        icon: MapPinPlusInside,
        title: "Your Market, Your Terms",
        desc: "Control your listing, set your terms, and decide who gets access to your financials. You stay in the driver’s seat."
    }
];

export default function WhyWeChooseUs() {
    return (
        <section className="w-full h-auto lg:min-h-[100dvh] px-4 md:px-8 lg:px-12 py-6 lg:py-10">
            <div className="flex flex-col items-center justify-center text-center mx-auto gap-5">
                <h3 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] text-[#252423]
                 font-lora font-normal">Why List Your Business for Sale <span className='text-[#c4963c]'>Here?</span></h3>
                <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-inter font-normal max-w-[800px] text-[#A9A8A8]">Selling your business doesn't have to be slow or complicated. With the right platform, you can list your business for sale in just minutes and instantly reach motivated entrepreneurs who are actively searching. No endless paperwork. No long waiting periods. Just a clear, proven path to start reaching buyers today.</p>
                <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-inter font-normal max-w-[800px] text-[#A9A8A8]">Whether you're ready to sell a small business you built from the ground up or simply exploring your exit strategy, our platform gives you nationwide visibility and powerful tools to maximize your deal value. That's what makes it the fastest and most effective way to sell a business online.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-6 gap-5">
                {descData.map((desc, index) => {
                    const IconComponent = desc.icon; 
                    
                    return (
                        <motion.div 
                            key={index} 
                            className="flex flex-col items-start p-5 rounded-lg bg-[#FAF7F4] shadow-sm"
                            // 1. Start slightly lower and invisible
                            initial={{ y: 20, opacity: 0 }}
                            // 2. Animate to full visibility when it scrolls into view
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            // 3. Clean hover effect (negative Y lifts the card up)
                            whileHover={{ y: -6, 
                                 boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.08), 0px 8px 16px -6px rgba(0, 0, 0, 0.04)",
                                transition: { duration: 0.2 } }}
                            // 4. Stagger the entry slightly based on index
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <span className="mb-3 bg-[#FBEDDA] p-2 rounded-md text-[#C4963C]">
                                <IconComponent size={24} /> 
                            </span>
                            <h5 className="font-semibold text-[20px] leading-[28px] font-lora mb-2 text-[#252423]">{desc.title}</h5>
                            <p className="text-[#858381] text-[16px] leading-[24px] font-inter font-normal">{desc.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
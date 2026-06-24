import { Check, type LucideIcon } from "lucide-react";
import img from '../../../assets/b24f6f8a40671b67b98221c102cba557.jpg'
import img2 from '../../../assets/afec5fd5f1b41e103947872f46669be6.jpg'
import img4 from '../../../assets/6c2d616e7a09aab020f85fd8ba8e2680.jpg'
import img3 from '../../../assets/9e33d18e48b3a914888d577c4ccad475.jpg'
import img5 from '../../../assets/31275c2225d0bd9b63ec97d2521ad8ca.jpg'
import img6 from '../../../assets/8a046f0c5cab24376e8042391083fe47.jpg'
type BusinessProps = {
    image: string;
    user: string;
    service: string;
}
interface BenefitProps {
    icon: LucideIcon;
    desc: string;
}
const businessData: BusinessProps[] = [
    {
    image: img,
    user: "Priya S.",
    service: "searching food & beverage"
    },
    {
    image: img2,
    user: "Marcus T.",
    service: "looking for saas business"
    },
    {
    image: img3,
    user:"Sarah L.",
    service: "looking for e-commerce"
    },
    {
    image: img4,
    user: "Nadia R.",
    service: "interested in retail"
    },
    {
    image: img5,
    user: "David W.",
    service: "interested in home service"
    },
    {
    image: img6,
    user: "Kevin C.",
    service: "searching in healthcare"
    }
]
const benefitData: BenefitProps[] = [
    {
        icon: Check,
        desc: "Motivated entrepreneurs, not casual browsers"
    },
    {
        icon: Check,
        desc: "Identity-verified buyers you can trust"
    },
    {
        icon: Check,
        desc: "AI matching puts your listing in front of the right buyers"
    }
];

export default function SellersBenefit() {
    return (
        // 1. Fixed 'lg:flex-row' utility class syntax
        <section className="w-full flex flex-col lg:flex-row items-center h-auto px-4 md:px-8 lg:px-12 py-12 lg:py-20 bg-[#252423] gap-12">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
                <h5 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal text-white">
                    150,000+ Buyers Are Already <span className="text-[#FFD08B]">Looking. </span>
                </h5>
                <p className="text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] font-inter text-[#A7A7A7] max-w-xl">
                    Every day, thousands of motivated buyers log in to BizScout, actively searching for their next business. By listing here, you tap into a ready-made audience of decision-makers who are prepared to act.
                </p>
                
                {/* Benefits List Container */}
                <div className="flex flex-col items-start gap-4 mt-4">
                    {benefitData.map((ben, index) => {
                        // 2. Capitalized the component reference variable name
                        const IconComponent = ben.icon;
                        
                        return (
                            // 3. Added unique key and aligned items nicely
                            <div key={index} className="flex items-start gap-3 text-left">
                                <span className="p-0.5 mt-0.5 rounded-full bg-[#453D32] text-[#F3C785] shrink-0">
                                    {/* 4. Rendered correctly with custom props */}
                                    <IconComponent size={18} strokeWidth={2.5} />
                                </span>
                                {/* 5. Fixed text color contrast for dark mode background */}
                                <p className="text-[16px] leading-[26px] font-inter font-normal text-[#B8B7B7]">
                                    {ben.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Media Column - Perfect placeholder for a dashboard image or mockup */}
       <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {businessData.map((business, index) => {
        return (
            // 1. Added unique key, softened the border, and added overflow-hidden
            <div 
                key={index} 
                className="bg-[#302F2E] border border-[#444342] flex flex-col items-start rounded-lg overflow-hidden group hover:border-[#ffd08b]/50 transition-colors duration-200"
            >
                {/* 2. Added alt tag for accessibility */}
                <img 
                    src={business.image} 
                    alt={`${business.user}'s business listing`}
                    className="w-full object-cover object-top h-[300px] lg:h-[220px]"
                />
                
                {/* 3. Wrapped text elements in a container with consistent padding */}
                <div className="flex flex-col gap-1 p-4 w-full text-left">
                    <span className="text-[14px] leading-[20px] font-inter font-medium text-white">
                        {business.user}
                    </span>
                    <p className="text-[12px] leading-[16px] font-inter font-normal text-[#A7A7A7]">
                        {business.service}
                    </p>
                </div>
            </div>
        );
    })}
</div>

        </section>
    );
}
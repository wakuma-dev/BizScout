import { motion } from 'framer-motion';

type FeatureProps = {
    id: number;
    title: string;
    subtitle: string;
};

const features: FeatureProps[] = [
    {
        id: 1,
        title: "Stale Listings",
        subtitle: "Half the opportunities are already gone. The rest haven't been updated in months. You're searching through a graveyard."
    },
    {
        id: 2,
        title: "Unvetted Buyers",
        subtitle: "Sellers field lowballers and ghosts. No verification. No proof of funds. Just wasted time from people who were never serious."
    },
    {
        id: 3,
        title: "Inbox Chaos",
        subtitle: "Documents buried across three inboxes. A process that feels like it was designed by people who have never actually done a deal."
    }
];

export default function FeatureDesc() {
    return (
        <section className="bg-white px-4 md:px-8 lg:px-12 py-14">
            {/* Header Block */}
            <div className="flex flex-col items-start gap-2 mb-16">
                <h5 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora text-[#252423] font-normal">
                    You Know What You Want.
                </h5>
                <p className="max-w-[900px] w-[90%] text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora text-[#252423] font-normal text-[#878786]">
                    The Industry Has Been Making It <span className="text-[#CCA457]">Hard to Get There.</span>
                </p>
            </div>

            {/* Interactive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feat) => (
                    <motion.div
                        key={feat.id}
                        // 💡 1. Physics Engine properties for the upward hover lift
                        whileHover={{ 
                            y: -12,          // Moves upward by 12 pixels
                            scale: 1.02,     // Subtle crisp scale lift
                            borderColor: "#CCA457" // Elegant border-color shift
                        }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 25 
                        }}
                        className="cursor-pointer rounded-2xl bg-white p-8 border border-transparent shadow-sm hover:shadow-xl"
                    >
                        <h4 className="text-[20px] leading-[28px] text-[#252423] font-normal mb-3 font-lora">
                            {feat.title}
                        </h4> 
                        <p className="text-[14px] leading-[23px] font-normal leading-relaxed font-inter">
                            {feat.subtitle}
                        </p>
                    </motion.div>
                ))}
            
            </div>
                <div className='flex flex-col items-start gap-4 py-12 max-w-[850px] w-[90%]'>
                    <hr className="w-full border-t border-t-[#878786]" />
                    <h5 className='text-[24px] leading-[32px] lg:text-[30px] lg:leading-[36px] font-normal text-[#252423] font-lora'>Buyers chase dead ends. Sellers field ghosts. Brokers drown in busywork. The same broken system for everyone.</h5>
                    <p className='text-[24px] leading-[32px] lg:text-[30px] lg:leading-[36px] font-normal text-[#C4963C] font-lora'>Until now.</p>
                </div>
        </section>
    );
}
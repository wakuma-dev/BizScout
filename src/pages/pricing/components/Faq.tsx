import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Cleaned up import from 'motion/react'
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqProps = {
    question: string;
    answer: string;
}

const faqData: FaqProps[] = [
    {
        question: "Do I need a credit card for the Basic plan?",
        answer: "No. Basic is completely free to start. You can browse 20,000+ listings, set up deal matching, and use our calculators without entering any payment information."
    },
    {
        question: "What's the difference between Basic and Pro?",
        answer: "Basic gives you full access to our listing database, deal matching, your personal pipeline, and basic calculators so you can explore the market. Pro is built for buyers who are actively hunting. You get Radar™ alerts the moment qualifying listings hit, off-market and exclusive deals, IBISWorld industry intel on every listing, Scout AI™ search in plain English, BizScout Score and ScoutSights™ analytics, Verified Buyer status, and direct owner outreach to skip the gatekeepers."
    },
    {
        question: "Will sellers actually respond to me?",
        answer: "Verified buyers on Pro see meaningfully higher response rates. When brokers and sellers see your profile is verified, you stand out from the crowd of unqualified browsers."
    },
    {
        question: "What if I'm still learning how to buy a business?",
        answer: "Start with Basic or Pro. If you want expert guidance, mentorship, and a community, Contrarian Academy is built for buyers at every stage who want an edge."
    },
    {
        question: "Can I switch plans later?",
        answer: "Yes. You can upgrade or downgrade at any time. Your data, pipeline, and saved listings stay with you."
    },
    {
        question: "What's Private Client and who is it for?",
        answer: "Private Client is our white-glove advisory service for buyers pursuing $5M+ acquisitions. A dedicated Acquisition Advisor sources deals, runs diligence, and walks you to the closing table. Apply at privateclient.bizscout.com."
    }
];

export default function Faq() {
    // 1. Fixed state typing to accept numbers or null
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-white w-full h-auto min-h-[80dvh]">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-lg mx-auto">
                <h3 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] text-[#252423] font-lora font-normal">
                    Frequently <span className="text-[#c4963c]">Asked Questions</span>
                </h3>
                <p className="text-[18px] text-[#5C5B5A] leading-[28px] font-inter font-light">
                    Everything you need to know before you pick a plan.
                </p>
            </div>
            
            <div className='flex flex-col gap-4 w-full max-w-3xl mx-auto py-6'>
                {faqData.map((faq, index) => {
                    const isOpen = index === openIndex;
                    return (
                        // 2. Added React Fragment wrapper to enclose adjacent elements
                        <div key={index} className="border border-[#5c5b5a] rounded-lg overflow-hidden">
                            {/* Added cursor-pointer to the entire header row for better UX */}
                            <div 
                                className='flex items-center justify-between w-full p-4 cursor-pointer'
                                onClick={() => toggleFaq(index)}
                            >
                                <h5 className='text-[18px] leading-[28px] font-lora text-[#252423] font-medium'>
                                    {faq.question}
                                </h5>
                                <span className='text-[16px] leading-[24px] text-[#BABABA]'>
                                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                                </span>
                            </div>
                            
                            {/* 3. Integrated AnimatePresence for clean structural unmounting layout transitions */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p className="p-4 pt-0 text-[#5C5B5A] font-inter font-light leading-[26px]">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
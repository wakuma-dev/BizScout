import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatePresence, motion } from 'framer-motion';
interface FaqItem {
    question: string;
    answer: string;
}
const faqData: FaqItem[] = [
    {
    question: "How do I buy a small business",
    answer: "Start by browsing listings on BizScout, filtering by industry, location, price range, and cash flow. Once you find a match, submit your buyer profile, sign an NDA, and begin due diligence directly through DealOS. BizScout supports every step from search to close."
    },
    {
    question: "How much does it cost to list a business for sale",
    answer: "Listing your business for sale on BizScout is free to get started. A closing fee applies at sale, and the rate depends on the transaction amount. Your listing goes live the same day."
    },
    {
    question: "What is business valuation and how do i get one?",
    answer: "A business valuation estimates what your business is worth based on revenue, cash flow, industry multiples, and comparable sales. BizScout offers a free business valuation tool that gives you a data-backed estimate in minutes."
    },
    {
    question: "Do i need a business broker to sell my business",
    answer: "No. Many owners sell their business without a broker using BizScout. You can list directly, manage inquiries, and close through DealOS. If you prefer working with a broker, BizScout supports that too."
    },
    {
    question: "How do i find businesses for sale near me?",
    answer: "Use BizScout's search filters to find businesses for sale by location, industry, asking price, and annual revenue. We list businesses across 50+ industries in every major U.S. market."
    },
    {
    question: "What is SBA financing and can i use it to buy a business?",
    answer: "SBA loans are government-backed loans designed to help buyers acquire small businesses with as little as 10% down. BizScout's buying power calculator helps you estimate SBA eligibility and see what you can afford before you start looking."
    }
]
export default function FeatureFaq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFaq = (index: number) : void => {
    setOpenIndex(openIndex === index ? null : index)
    }
    return(
        <section className="w-full h-auto min-h-[80dvh] px-4 md:px-8 lg:px-12 py-8 lg:py-10">
            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="text-[#252423] text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px]
                 font-lora font-normal">No <span className="text-[#C4963C]">Runaround.</span></h4>
                <p className="text-[18px] leading-[28px] font-inter font-light text-[#6B6A69]">What you actually want to know.</p>
            </div>
            <div className="w-full max-w-[900px] mx-auto flex flex-col gap-3 py-8">
             {faqData.map((item: FaqItem, index: number) => {
                const isOpen = openIndex === index;
                return(
                    <div key={index}
                         className="border-b border-b-[#9C9B9A] pb-4 cursor-pointer"
                         onClick={() => toggleFaq(index)}>
                        <div className="flex items-center justify-between py-3 gap-4">
                            <h5 className="text-[18px] lg:text-[20px] leading-[28px] font-lora font-normal text-[#51504F]">{item.question}</h5>
                            <span>
                                {isOpen ? <ChevronUp className="text-[#878686]" size={20} /> : <ChevronDown className="text-[#878686]" size={20} />}
                            </span>
                        </div>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                     initial={{height: 0, opacity: 0}}
                                     animate={{height: "auto", opacity: 1}}
                                     exit={{height: 0, opacity: 0}}
                                     transition={{duration: 0.4, ease: "easeOut"}}
                                     className="overflow-hidden">
                                        <p className="text-[16px] leading-[26px] text-[#878686] font-inter font-normal ">{item.answer}</p>
                                     </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
             })}
            </div>
        </section>
    )
}
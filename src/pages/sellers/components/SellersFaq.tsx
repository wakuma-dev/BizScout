import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


interface FaqProps {
    question: string;
    answer: string
};
const faqData: FaqProps[] = [
    {
        question: "How much does it cost to list my business?",
        answer: "Nothing. Listing on BizScout is completely free. There are no upfront fees, no monthly charges, and no hidden costs. You only pay a success fee when your business actually sells"
    },
    {
        question: "How long does it take to create a listing?",
        answer: "Most sellers complete their listing in under 60 seconds. You can always come back and add more detail later. Your listing goes live as soon as you publish."
    },
    {
        question: "Who sees my listing?",
        answer: "Your listing is visible to 150,000+ active buyers on the BizScout platform. AI-powered matching also surfaces your business to buyers whose search criteria align with what you are selling."
    },
    {
        question: "Can i control who accesses my financial?",
        answer: "Yes. You decide what information is public and what requires a signed NDA. Sensitive financials stay protected until you are ready to share them with a qualified buyer."
    },
    {
        question: "Do i need a broker to sell on BizScout?",
        answer: "No. BizScout is built for direct sellers and broker-represented listings alike. If you want to sell on your own, you have every tool you need. If you already have a broker, they can manage the listing through our Brokers platform."
    },
    {
        question: "what happens after a buyer reaches out",
        answer: "You manage all communication and deal progress through DealOS. From NDA signing to document sharing to closing, everything stays organized in one place."
    }
]
export default function SellersFaq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFaq = (index: number) : void => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return(
        <section className="px-4 md:px-8 lg:px-12 w-full h-auto min-h-[90dvh] bg-[#fff]">
            <div className="flex flex-col items-center justify-center text-center gap-2.5 py-4 lg:py-6">
                <h4 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora
                 font-normal">No <span className="text-[#c4963c]">Runaround.</span></h4>
                <p className="text-[18px] leading-[28px] font-light font-inter text-[#858281]">
                    What sellers actually want to know.</p>
            </div>
            <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3 py-8 lg:py-14">
                {faqData.map((item: FaqProps, index: number) => {
                    const isOpen = openIndex === index;
                    return(
                    <div key={index}
                         onClick={() => toggleFaq(index)}
                         className='bg-white border border-[#858282] flex flex-col gap-3 p-3 rounded-lg'>
                    <div className="flex items-center justify-between">
                        <h5 className='text-[18px] leading-[28px] font-lora font-medium text-[#252423]'>{item.question}</h5>
                        <span className='cursor-pointer'>
                            {isOpen ? <ChevronUp /> : <ChevronDown />}
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
                            <p className='text-[16px] leading-[26px] font-inter font-normal text-[#5C5B5A]'>{item.answer}</p>
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
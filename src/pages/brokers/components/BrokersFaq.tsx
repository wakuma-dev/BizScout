import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';


interface FaqProps {
    question: string;
    answer: string
};
const faqData: FaqProps[] = [
    {
        question: "How much does it cost to join as a broker?",
        answer: "Partnering with BizScout is completely free. There are no listing fees, no platform fees, and no hidden costs. You keep 100% of your commissions."
    },
    {
        question: "What kind of businesses can i list?",
        answer: "BizScout supports listings across 50+ industries. Whether your client runs a restaurant, SaaS company, franchise, or service business, you can list it here."
    },
    {
        question: "How does BizScout help me find buyers?",
        answer: "Your listings are visible to 150,000+ active buyers on the platform. AI-powered matching also surfaces your listings to buyers whose search criteria align with what you are selling."
    },
    {
        question: "Can i invite my own clients to use BizScount?",
        answer: "Yes. You can invite your seller clients to BizScout and represent them directly on the platform. Their listing stays under your management through BrokerHub, so you stay in control of the deal from start to close."
    },
    {
        question: "What tools are included?",
        answer: "You get access to BrokerHub for pipeline management, secure document sharing, NDA management, deal tracking, and buyer communication. Everything you need to manage your book of business in one place."
    }
]
export default function BrokersFaq(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFaq = (index: number) : void => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return(
        <section className="px-4 md:px-8 lg:px-12 w-full h-auto min-h-[90dvh] bg-[#FAF7F4]">
            <div className="flex flex-col items-center justify-center text-center gap-2.5 py-4 lg:py-6">
                <h4 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal">Common <span className="text-[#c4963c]">Questions.</span></h4>
                <p className="text-[18px] leading-[28px] font-light font-inter text-[#858281]">What brokers want to know before getting started.</p>
            </div>
            <div className="w-full max-w-[800px] mx-auto flex flex-col gap-3 py-8 lg:py-14">
                {faqData.map((item: FaqProps, index: number) => {
                    const isOpen = openIndex === index;
                    return(
                    <div key={index}
                         onClick={() => toggleFaq(index)}
                         className='bg-white flex flex-col gap-3 p-3 rounded-lg'>
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
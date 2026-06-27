import { motion } from 'framer-motion';
import { Check, Star, type LucideIcon } from 'lucide-react'
import Button from '../../../components/common/Button';
type BuyerDescription = {
    item: string;
}

type BuyerProps = {
    icon: LucideIcon,
    header: string;
    list: BuyerDescription[]
}

const buyer: BuyerProps[] = [
    {
        icon: Check,
        header: "What's Included",
        list: [
            {item: "Dedicated Acquisition Advisor, start to close"},
            {item: "BuyerBlueprint: your search profile, buy box, and deal preferences in one place"},
            {item: "Full-Spectrum Sourcing across marketplace, off-market, and direct outreach"},
            {item: "ScoutReports on every deal that makes the cut"},
            {item: "DealPath, our vetted partner network"},
            {item: "Partner perks, including preferred rates and covered costs"}
        ]
    }
]
const newBuyer: BuyerProps[] = [
    {
        icon: Star,
        header: "Ideal For",
        list: [
            {item: "First-time acquirers who want a guide, not just a platform"},
            {item: "Professionals who cannot dedicate 20 hours a week to the search"},
            {item: "Serious buyers who want the right business, not just the next available one"}
        ]
    }
]
interface DescProps {
    id: string;
    title: string;
    subTitle: string;
}

const descData: DescProps[] = [
    {
        id: "01",
        title: "Clarify Your Buy Box",
        subTitle: "Your advisor starts with your goals, budget, and ideal search criteria so the process is focused from day one."
    },
    {
        id: "02",
        title: "Find Real Opportunities",
        subTitle: "They search BizScout and beyond, surface the right deals, and filter out the noise before it reaches your inbox."
    },
    {
        id: "03",
        title: "Pressure-Test Every Deal",
        subTitle: "You get help reviewing the numbers, understanding the risks, and deciding which opportunities are actually worth pursuing."
    },
    {
        id: "04",
        title: "Move Cleanly to Close",
        subTitle: "Once a deal looks right, your advisor helps keep the process organized and moving toward a confident close."
    }
]

export default function BuyerDesc(){
    const disabled = false;
    return(
        <section className="w-full h-auto min-h-[80dvh] px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#252423]">
            <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-4">
                <h2 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-medium text-white">
                    Introducing <span className="text-[#ffd08b]">Private Client.</span>
                </h2>
                <p className="text-[#BEBDBD] text-[18px] leading-[28px] font-inter font-light">
                    Private Client gives serious buyers a dedicated acquisition partner to guide the search, narrow the field, and keep the process moving with less friction.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 py-10 gap-5">
                {descData.map((des, index) => {
                    return(
                        <motion.div
                            key={index} 
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            whileHover={{y: -6}}
                            transition={{duration: 0.4, delay: index * 0.1, ease: "easeOut"}}
                            viewport={{once: true, margin: "-50px"}}
                            className="p-5 h-[300px] rounded-xl bg-[#302F2E] flex flex-col items-start gap-4 border border-transparent hover:border-[#ffd08b] transition-colors duration-150"
                        >
                            <span className="text-[36px] leading-[40px] font-lora font-bold text-[#6F614B]">{des.id}</span>
                            <h1 className="text-[20px] leading-[28px] font-lora text-white">{des.title}</h1>
                            <p className="text-[16px] leading-[26px] font-normal font-inter text-[#939292]">{des.subTitle}</p>
                        </motion.div>
                    )
                })}
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mx-auto">
                {buyer.map((buy, index) => {
                    const Icon = buy.icon
                    return(
                        <div key={index} className='w-full flex flex-col bg-[#302F2E] items-start p-6 rounded-xl gap-4'>
                            <span className='
                            text-white font-lora font-semibold 
                            text-[20px] leading-[28px] w-full pb-2'>{buy.header}</span>  
                            
                            {/* FIXED: Elements now list out vertically, each wrapping their own icon and text */}
                            <div className="flex flex-col items-start gap-3 w-full">
                                {buy.list.map((listItem, listIndex) => {
                                    return(
                                        <div key={listIndex} className="flex items-start gap-3 w-full">
                                            <Icon className="text-[#ffd08b] w-5 h-5 shrink-0 mt-0.5" />
                                            <p className='text-[#CBCACA] text-[16px] leading-[26px] font-inter font-normal'>{listItem.item}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                {
                    newBuyer.map((priv)=> {
                        const Icon = priv.icon;
                        return(
                            <div className='bg-[#302F2E]  flex flex-col item-start p-6 w-full rounded-lg gap-4'>
                                <span className='
                            text-white font-lora font-semibold 
                            text-[20px] leading-[28px] w-full pb-2'>{priv.header}</span>
                               <div className='flex flex-col items-start w-full gap-3'>
                                {priv.list.map((listItem, listIndex) => {
                                    return(
                                       <div key={listIndex} className="flex items-start gap-3 w-full">
                                            <Icon className="text-[#ffd08b] w-5 h-5 shrink-0 mt-0.5" />
                                            <p className='text-[#CBCACA] text-[16px] leading-[26px] font-inter font-normal'>{listItem.item}</p>
                                        </div>
                                    )
                                })}
                               </div>
                               <Button
                                 onClick={() => window.open(`${import.meta.env.BASE_URL}login`, "_blank")}
                                 disabled={disabled}
                                 text="LearnMore"
                                 className='w-fit'
                                 />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
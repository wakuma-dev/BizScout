import img from '../../../assets/46ebaa054c8e06ff1cb747b8829044b7.jpg'
import { MapPin, type LucideIcon } from 'lucide-react'

type LayoutProps = {
    icon: LucideIcon,
    header: string;
    subHeader: string;
}

const layoutData: LayoutProps[] = [
    {
        icon: MapPin,
        header: "Headquartered in",
        subHeader: "Austin, TX"
    }
]

export default function Hero(){
    return(
        <section className="w-full px-4 md:px-8 lg:px-12 py-8 bg-[#F7F3EF]">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 h-auto min-h-[80dvh]">
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 lg:gap-4">
                    <span className="text-[#9C9A99] text-[11px] uppercase leading-[17px] font-inter font-semibold tracking-wider">Careers at BizScout</span>
                    <h1 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] text-[#252423] font-lora font-medium">Come Build Something That Matters.</h1>
                    <p className="text-[18px] lg:text-[20px] leading-[28px] font-inter font-light text-[#AAA6A3]">BizScout is where Main Street deals get done. We are the fastest-growing marketplace for buying and selling small businesses, built to bring clarity to a space that has been heavy and opaque for far too long.</p>
                    <p className="text-[18px] lg:text-[20px] leading-[28px] font-inter font-light text-[#AAA6A3]">We help buyers build the life they want, and sellers find the right next owner. If you believe more people deserve a shot at ownership, you will fit right in.</p>
                    <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                        <span id="#cta" className='bg-black text-[16px]
                         leading-[24px] text-center font-inter font-medium text-white lg:w-fit w-full py-2 px-8 outline-none rounded-full'>
                            See Open Roles
                        </span>
                         <a href="mailto:support@bizscout.com"
                         className='outline-none text-[16px] text-center leading-[24px] font-inter font-medium w-full
                          lg:w-fit py-2 px-8 rounded-full border border-[#8F8D88] text-[#8F8D88]'>
                            Get in Touch
                         </a>
                    </div>
                </div>
                
                {/* Image Wrapper Container */}
                <div className="relative w-full lg:w-1/2">
                    <img src={img} className='w-full h-[350px] lg:h-[500px] object-cover object-top rounded-xl' alt="Hero display"/>
                    
                    {/* Absolute element moved inside its relative parent container */}
                    <div className='absolute -bottom-4 -left-4 bg-white p-3 flex items-center gap-3 rounded-xl shadow-sm'>
                        {
                            layoutData.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.header} className="flex items-center gap-3">
                                        {/* Fixed static dimensions (w-11 h-11) instead of syntax breaking w-[11] */}
                                        <div className="flex items-center justify-center bg-[#F6EFE2] w-11 h-11 rounded-full text-[#252423]">
                                            <Icon size={18} />
                                        </div>
                                        {/* Rendered missing header and subheader strings */}
                                        <div className="flex flex-col justify-center pr-2">
                                            <span className="text-[12px] text-[#9C9A99] font-inter leading-none mb-0.5">{item.header}</span>
                                            <span className="text-[14px] text-[#252423] font-inter font-semibold leading-none">{item.subHeader}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
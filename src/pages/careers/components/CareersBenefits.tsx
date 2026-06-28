import { HeartPulse, School, GraduationCap, DiamondPlus, type LucideIcon } from "lucide-react";

interface LayoutProps {
    icon: LucideIcon
    title: string;
    desc: string;
}
const layout: LayoutProps[] = [
    {
        icon: DiamondPlus,
        title: "Unlimited PTO",
        desc: "As long as your team is aligned, take off whatever time you need. We recommend taking at least three weeks a year."
    },
    {
        icon: GraduationCap,
        title: "Learning & Development",
        desc: "Access courses that teach you how to close deals, buy profitable businesses, and build real skills in the acquisition space."
    },
    {
        icon: School,
        title: "Austin, TX Headquarters",
        desc: "Our HQ is in Austin, Texas. Whether you are local or remote, you work alongside a team that moves fast and enjoys the ride."
    },
    {
        icon: HeartPulse,
        title: "100% Health Coverage",
        desc: "BizScout pays 100% of health, dental, and vision insurance for team members. Add spouses and dependents at your own cost."
    }
]
export default function CareersBenefits(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FAF7F4] w-full h-auto min-h-[70dvh]">
         <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto">
            <p className="text-[#9C9A99] text-[11px] uppercase leading-[17px] font-inter font-semibold tracking-wider">What you get</p>
            <h4 className="text-[30px] leading-[38px] lg:text-[56px] lg:leading-[56px] font-lora font-medium text-[#c4963c]">
                Employee Benefits <span className="text-[#252423]">at BizScout</span></h4>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto py-6">
          {layout.map((item, index) => {
            const Icon = item.icon;
            return(
                <div key={index}
                     className="bg-white p-6 rounded-lg flex flex-col items-start gap-4">
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EDE8E0]">
                        <Icon size={18}/>
                        
                     </div>
                     <h4 className="text-[26px] leading-[33px] text-[#252423] font-lora font-medium">{item.title}</h4>
                      <p className="text-[16px] leading-[23px] font-inter font-light text-[#717070]">{item.desc}</p>
                </div>
            )
          })}
         </div>
        </section>
    )
}
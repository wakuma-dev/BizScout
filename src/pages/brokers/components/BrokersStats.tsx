import Button from "../../../components/common/Button";

interface StatsProps {
    id: string;
    title: string;
    subTitle: string;
}
const statsData: StatsProps[] = [
    {
    id: "01",
    title: "Create Your Broker Profile",
    subTitle: "Set up your professional profile in minutes. Showcase your expertise, specialties, and track record to attract the right clients."
    },
      {
    id: "02",
    title: "List on the Marketplace",
    subTitle: "Add your client’s business to the BizScout marketplace in minutes and get it in front of 150,000+ active buyers."
    },
      {
    id: "03",
    title: "Manage Deals With BrokerHub",
    subTitle: "Track every inquiry, manage buyer conversations, and move deals from first contact to close with one streamlined dashboard."
    },
 
]

export default function BrokersStats(){
    
    const disabled = false;
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FFFFFF]">
            <div className="flex flex-col items-center justify-center text-center gap-2.5 py-5">
                <h4 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal">How It <span className="text-[#C4963C]">Works.</span></h4>
                <p className="text-[18px] leading-[28px] font-inter font-normal max-w-2xl text-[#A2A1A1]">From setup to close, everything you need to manage your book of business in one place.</p>
            </div>
           {statsData.map((sta) => {
            return(
                <div className="ml-0 lg:ml-40 flex flex-col items-star gap-2.5 w-full max-w-5xl p-6 border-b border-b-[#C3C2C2]">
                 <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
                    <h5 className="text-[48px] leading-[48px] font-lora font-bold text-[#F3EAD8]">{sta.id}</h5>
                 <div className="flex flex-col items-start gap-2">
                    <span className="text-[24px] leading-[32px] font-lora font-bold text-[#252423]">{sta.title}</span>
                    <p className="max-w-[700px] text-[16px] leading-[26px] font-inter font-normal text-[#a2a1a1]">{sta.subTitle}</p>
                 </div>
                 </div>

                </div>
            )
           })}
           <div className="flex items-center justify-center py-8">
              <Button
                       onClick={() => window.open(`${import.meta.env.BASE_URL}partnerWithBizScout`, "_blank")}
                       disabled={disabled}
                       text="Partner With BizScout"
                       className="w-full lg:w-fit"
                        />
           </div>
        </section>
    )
}
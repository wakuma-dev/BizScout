import { MapPin, History, type LucideIcon } from "lucide-react"
import Button from "../../../components/common/Button";

interface LayoutProps {
  primaryIcon: LucideIcon;
  title: string;
  subTitle: string;
  desc: string;  
  secondaryIcon: LucideIcon;
  pathName: string;
  address: string;
}

const layoutData: LayoutProps[] = [
    {
        primaryIcon: MapPin,
        title: "operations",
        subTitle: "Business Operations Associate",
        desc: "Keep the engine running. From vendor management to internal tooling, you make the team faster.",
        secondaryIcon: History,
        pathName: "https://contrarian-thinking.breezy.hr/p/6e58fb21c9a1-business-operations-associate",
        address: "Austin, TX"
    },
    {
        primaryIcon: MapPin,
        title: "Growth",
        subTitle: "Director of Marketing",
        desc: "Own the brand and the funner. Build a marketing engine that puts BizScout in front of every Main Street buyer.",
        secondaryIcon: History,
        pathName: "https://contrarian-thinking.breezy.hr/p/ae843d89836b-director-of-marketing-for-bizscout/",
        address: "Austin, TX"
    },
    {
        primaryIcon: MapPin,
        title: "Growth",
        subTitle: "Social Media Manager",
        desc: "Run our voice on every channel. Tell the unfiltered story of what it takes to buy and sell a small business.",
        secondaryIcon: History,
        pathName: "https://contrarian-thinking.breezy.hr/p/456ba281d1ac-social-media-manager/",
        address: "Austin, TX"
    },
    {
        primaryIcon: MapPin,
        title: "sales",
        subTitle: "Seller Outreach Representative (Private Client)",
        desc: "Connect with motivated sellers and guide them through the BizScout platform to find the right buyer.",
        secondaryIcon: History,
        pathName: "https://contrarian-thinking.breezy.hr/p/2f2ad1298913-seller-outreach-representative-private-client",
        address: "Austin, Tx"

    }
]

export default function CareersCta(){
    const disabled = false;
    
    return(
        <section className="bg-[#FAF7F4] px-4 md:px-8 lg:px-12 py-8 lg:py-10 w-full h-auto min-h-dvh">
            <div className="flex flex-col items-center justify-center text-center gap-4 lg:gap-6">
                <span className="text-[#9C9A99] text-[11px] uppercase leading-[17px] font-inter font-semibold tracking-wider">
                    We are hiring
                </span>
                <p className="text-[30px] leading-[38px] lg:text-[56px] lg:leading-[56px] font-lora font-medium text-[#252423]">
                    Open Roles at <span className="text-[#c4963c]">BizScout</span>
                </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto py-6">
                {layoutData.map((item) => {
                    const PrimaryIcon = item.primaryIcon;
                    const SecondaryIcon = item.secondaryIcon;
                    
                    return(
                        /* 1. Added explicit key prop to map item element */
                        <div key={item.pathName} className="bg-white rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 w-full">
                            <div className="flex flex-col items-start gap-2">
                                {/* 2. Added text-[#9C9A99] to give title visibility against white card backgrounds */}
                                <span className="text-[10px] text-[#9C9A99] uppercase leading-[15px] font-semibold tracking-wider">{item.title}</span>
                                <h4 className="text-[24px] leading-[32px] font-medium font-lora text-[#252423]">{item.subTitle}</h4>
                                <p className="text-[#6D6A67] text-[14px] leading-[23px] font-inter font-light">{item.desc}</p>
                            </div>
                            
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 shrink-0">
                                <div className="flex items-center gap-6">
                                    {/* 3. Re-swapped layout properties to match correct semantic icon indicators */}
                                    <div className="flex items-center gap-3 text-[#6D6A67]">
                                        <SecondaryIcon size={14} />
                                        <span className="text-[14px] leading-[20px] font-inter font-normal">Full-time</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[#6D6A67]">
                                        <PrimaryIcon size={14} />
                                        <span className="text-[14px] leading-[20px] font-inter font-normal">{item.address}</span>
                                    </div>
                                </div>
                                
                                <Button
                                   /* 4. Corrected template evaluation literal format from literal string to `${item.pathName}` */
                                   onClick={() => window.open(`${item.pathName}`, "_blank")}
                                   disabled={disabled}
                                   text="Apply"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
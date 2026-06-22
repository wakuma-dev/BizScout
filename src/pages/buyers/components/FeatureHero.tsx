import Button from "../../../components/common/Button"
import { useNavigate } from "react-router-dom"
import { Diamond, type LucideIcon } from 'lucide-react'
import { ShipWheel } from "lucide-react"
import { Shield } from "lucide-react"
import { Briefcase } from "lucide-react"

type DescProps = {
    id: number;
    icon: LucideIcon;
    title: string;
    desc: string;
}
const Desc: DescProps[] = [
    {id: 1, icon: ShipWheel, title: "Curated off-market deal flow", desc: "Pre-vetted opportunities you will not find on any public listing."},
    {id: 2, icon: Shield, title: "Full diligence & deal team", desc: "Legal, financial, and operational diligence handled end-to-end."},
    {id: 3, icon: Briefcase, title: "Direct advisor access", desc: "A senior partner on call from sourcing through close."}
]
export default function FeatureHero(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className="w-full min-h-[80dvh] px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#181614]">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex flex-col items-start  gap-6">
                    <h3 className="text-white font-lora text-[36px] leading-[38px] lg:text-[68px] lg:leading-[68px] font-medium">Acquisition <br />Done <span className="text-[#FFD08B]">  for you</span>
                  </h3>
                    <p className="text-[rgb(180,177,174)] 
                    text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] font-light font-inter w-full max-w-[700px]">A dedicated Acquisition Advisor sources off-market deals, runs diligence, and walks you to the closing table. Built for serious buyers in the $5M+ range.</p>
                    <Button 
                      onClick={() => navigate("/private")}
                      disabled={disabled}
                      text= "Explore Private Client"
                      className="w-full lg:w-fit"
                      />
                    <div className="flex items-start gap-x-10 lg:gap-x-20 ">
                        <div className="flex flex-col items-start gap-2 border-l border-zinc-700 pl-2">
                            <span className="font-lora text-[30px] leading-[36px] font-medium text-[#ffd08b]">$5M+</span>
                            <p className="text-[12px] leading-[16px] font-normal font-inter text-[#858382]">DEAL SIZE</p>
                        </div>
                           <div className="flex flex-col items-start gap-2 border-l border-zinc-700 pl-2">
                            <span className="font-lora text-[30px] leading-[36px] font-medium text-[#ffd08b]">1:1</span>
                            <p className="text-[12px] leading-[16px] font-normal font-inter text-[#858382]">Dedicated advisor</p>
                        </div>
                           <div className="flex flex-col items-start gap-2 border-l border-zinc-700 pl-2">
                            <span className="font-lora text-[30px] leading-[36px] font-medium text-[#ffd08b]">Full-Service</span>
                            <p className="text-[12px] leading-[16px] font-normal font-inter text-[#858382]">Search to close</p>
                        </div>

                    </div>
                </div>
                <div className="w-full max-w-[500px] bg-[#282623] rounded-lg flex flex-col items-start gap-5 py-4">
                    <div className="flex items-center justify-between w-full px-4">
                     <div className="flex items-center gap-x-2">
                      <Diamond color="#FFD08B" />
                      <div className="flex flex-col items-start">
                        <span className="text-[#fff] text-[16px] leading-[20px] font-inter font-semibold">Private Client</span>
                        <p className="text-[10px] leading-[15px] font-normal font-inter text-[#858382]">Acquisition Advisory</p>
                      </div>

                     </div>
                     <button className="rounded-full p-1 text-[10px] leading-[15px] text-[#ffd08b] font-inter font-bold border border-[#ffd08b]">$5M+ DEALS</button>

                    </div>
                    <hr className="bg-green-400 w-full h-[0.5] my-3 " />
                   {Desc.map((des) => {
                    return(
                        <div key={des.id} className="flex items-center gap-x-2 w-full px-3">
                         {<des.icon color="#FFD08B" />}
                         <div className="flex flex-col items-start">
                            <span className="text-[#fff] text-[16px] leading-[20px] font-inter font-semibold">{des.title}</span>
                            <p className="text-[10px] leading-[15px] font-normal font-inter text-[#858382]">
                                {des.desc}
                            </p>
                         </div>
                        </div>
                    )
                   })}
                </div>
                

            </div>
        </section>

    )
}
import FooterBottom from "./FooterBottom";
import FooterData from "./FooterData";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";

export default function Footer(){
    return(
        <footer className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#1A1918]  h-auto lg:min-h-[80dvh]">
            <div className="w-full flex flex-col lg:flex-row my-auto gap-x-24">
            <div className="flex flex-col items-start gap-4 py-6">
                <div className="flex flex-col items-start gap-4">
                    <FooterLogo />
                    <h5 className="text-[14px] leading-[23px] font-inter font-normal text-[#8E8E8D]">It's time to make your move.</h5>
                    <p className="w-full max-w-[300px] text-[14px] leading-[23px] font-inter font-normal text-[#8E8E8D]">Make life-changing business moves on your terms, without the hassle.</p>
                    <FooterLinks />
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 py-6">
                <h6 className="text-[12px] leading-[16px] font-semibold font-inter text-[#807f7f]">RESOURCES</h6>
                <FooterData />
            </div>
            <div className="flex flex-col items-start  gap-4 py-6">
                <span className="uppercase text-[12px] leading-[16px] font-semibold font-inter text-[#807F7F]">contact us</span>
                <a href="mailto:support@bizscout.com"
                   className="text-[#807f7f]">
                   support@bizscout.com
                 </a>
            </div>
            </div>
            <FooterBottom />
        </footer>
    )
}
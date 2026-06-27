import { Check, type LucideIcon } from "lucide-react";
import img from "../../../assets/12.png";

interface CtaItem {
  icon: LucideIcon;
  text: string;
}

const CTA_DATA: CtaItem[] = [
  { icon: Check, text: "Identity Verified: Quick, secure check" },
  { icon: Check, text: "Verified Badge: Stand out from day one" },
];

export default function BuyerCta() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex w-full flex-col items-start gap-6 lg:w-1/2">
          <h3 className="font-lora text-[32px] font-normal leading-[40px] text-[#252423] md:text-[44px] md:leading-[52px] lg:text-[56px] lg:leading-[64px]">
            Show Up Like You
            <span className="text-[#c4963c]"> Mean It.</span>
          </h3>
          
          <p className="font-inter text-[16px] font-normal leading-[26px] text-[#878786] md:text-[18px] md:leading-[28px]">
            In a competitive market, anonymous inquiries go to the bottom of the pile. 
            One quick verification changes that. Brokers and sellers respond faster 
            to buyers who have already proven they are real, credible, and ready to move.
          </p>
          
          {/* List Wrapper with proper semantics and gap */}
          <div className="flex w-full flex-col gap-4 mt-2" role="list">
            {CTA_DATA.map((cta, index) => {
              const Icon = cta.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start gap-4 w-full"
                  role="listitem"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black mt-0.5">
                    <Icon size={14} className="text-[#c4963c]" />
                  </div>
                  <p className="font-inter text-[16px] font-normal leading-[24px] text-[#878786]">
                    {cta.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image Container with Aspect Ratio and Polish */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
            <img 
              src={img} 
              alt="Verification preview detailing identity check badges" 
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
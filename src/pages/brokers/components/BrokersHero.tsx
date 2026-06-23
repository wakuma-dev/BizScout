import Button from "../../../components/common/Button"

import img from '../../../assets/mapbox-ZT5v0puBjZI-unsplash.jpg'
export default function BrokersHero(){
    
    const disabled = false;
    return(
        <section className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#EDE7DE] w-full h-auto
         lg:min-h-[70dvh]">
         <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
         <h1 className="text-[36px] leading-[39px] lg:text-[60px] lg:leading-[60px] font-lora font-medium">Grow Your Brokerage Business With <br /> 
         <span className="text-[#c4963c]">BizScout.</span></h1>
         <p className="text-[18px] lg:text-[20px] leading-[28px] font-light font-inter text-[#989591]">Join the leading marketplace for business acquisitions and put your listings in front of 150,000+ active buyers.</p>
         <Button
           onClick={() => window.open(`${import.meta.env.BASE_URL}partnerWithBizScout`, "_blank")}
           disabled={disabled}
           text="Partner With BizScout"
           className="w-full lg:w-fit"
            />
         </div>
         <div className="w-full lg:w-1/2">
         <img src={img} className="w-full h-[250px] lg:h-[350px] object-cover rounded-2xl"/>
         </div>
        </section>
    )
}
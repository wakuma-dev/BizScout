export default function Hero(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#F4F0EA] w-full ">
            <div className="w-full  mx-auto max-w-2xl flex flex-col items-center justify-center text-center gap-4 h-auto min-h-[50dvh]">
                <p className="text-[#75736E] text-[12px] leading-[16px] font-inter font-semibold tracking-wider uppercase">Seller Pricing</p>
                <h4 className="font-lora font-medium text-[30px] leading-[38px] 
                lg:text-[60px] lg:leading-[60px] text-[#252423]">Pricing Built for <span className="text-[#c4963c]">
                    Searches of All Sizes.</span></h4>
                <p className="text-[#75736E] text-[18px] leading-[28px] font-inter font-light">Scalable pricing based on your startup asking price.</p>
            </div>
        </section>
    )
}
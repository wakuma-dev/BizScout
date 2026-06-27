export default function Hero(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#252423] w-full">
        <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-4 h-auto min-h-[50dvh]">
        <span className="text-[12px] leading-[16px] font-semibold tracking-wider text-[#D3AD76] uppercase">Pricing</span>
        <h3 className="text-[30px] leading-[38px] lg:text-[68px] lg:leading-[68px] font-lora font-medium text-white">Compare All 
            <span className="text-[#ffd08b]"> Plans</span></h3>
        <p className="text-[18px] leading-[29px] font-inter font-light text-[#616160]">Choose the plan that’s right for you.</p>
        </div>
        </section>
    )
}
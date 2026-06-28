export default function Hero(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#F3EFE9] w-full">
            <div className="flex flex-col items-center justify-center gap-4 h-auto min-h-[50dvh]">
                <span className="text-[#9C9A99] text-[11px] uppercase leading-[17px] font-inter font-semibold tracking-wider">
                    LEGAL
                </span>
                <h3 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-medium
                text-[#252423]">Terms of 
                <span className="text-[#c4963c]"> Service</span></h3>
                <span className="text-[14px] leading-[20px] font-inter font-normal text-[#9F9A95]">Last update: <time dateTime="2026-06-28">june 28, 2026</time></span>
            </div>
        </section>
    )
}
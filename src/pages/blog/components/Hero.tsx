export default function Hero(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#F1ECE6]">
            <div className="flex flex-col items-center justify-center text-center gap-4 w-full h-auto min-h-[50dvh]">
                <span className="text-[#908C87] text-[11px] leading-[17px] uppercase tracking-wider font-semibold">BizScout Insights</span>
                <h3 className="max-w-3xl text-[30px] leading-[38px] lg:text-[60px]
                 lg:leading-[60px] font-lora font-medium text-[#252423]">Your Guide to Smarter 
                 <span className="text-[#c4963c]"> Business Growth.</span></h3>
                <p className="text-[#908C87] text-[18px] lg:text-[20px] leading-[28px] font-inter font-light">Insights for every side of the deal.</p>
            </div>
        </section>
    )
}
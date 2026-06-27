import Button from "../../../components/common/Button"
import SeButton from "../../../components/common/SeButton"
export default function BuyerFaq(){
    const disabled = false;
    return(
        <section className="w-full px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FAF7F4]">
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-4 h-auto min-h-[60dvh]">
                <h2 className="text-[30px] leading-[38px] lg:text-[72px] lg:leading-[72px]
                font-lora font-medium text-[#252423]">The Right Business Is Already Out 
                <span className="text-[#c4963c]"> There.</span></h2>
                <p className="text-[#94918C] font-inter text-[20px] leading-[28px] font-light">20,000+ listings. Verified buyers. Tools built to take you all the way to close.</p>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                    <Button
                     onClick={() => window.open(`${import.meta.env.BASE_URL}login`, "_blank")}
                     disabled={disabled}
                     text="View Listing"
                     />
                     <SeButton
                     onClick={() => window.open(`${import.meta.env.BASE_URL}bizScottPrivateClient`, "_blank")}
                     disabled={disabled}
                     text="Explore Private Client"
                      />
                    
                </div>
            </div>
        </section>
    )
}
import Button from "../../../components/common/Button"
import SeButton from "../../../components/common/SeButton"
import { useNavigate } from "react-router-dom";

export default function PriceForm(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#252423]">
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4 h-auto min-h-[50dvh]">
                <h3 className="text-[30px] leading-[38px] lg:text-[72px] lg:leading-[72px] text-white font-lora font-medium tex">It’s time to make 
                    <span className="text-[#ffd08b]"> your move.</span></h3>
                    <p className="text-[18px] leading-[28px] font-inter font-light text-[#989897]">Serious buyers don’t wait. The deal that’s right for you is already live.</p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                        <Button
                          onClick={() => window.open(`${import.meta.env.BASE_URL}login`, "_blank")}
                          disabled={disabled}
                          text="Get BizScout Pro"
                          />
                          <SeButton 
                           onClick={() => navigate("/forBuyersFeature")}
                           disabled={disabled}
                           text="Browse Listings"
                           />
                    </div>
            </div>
            
        </section>
    )
}
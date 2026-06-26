import bgImage from '../../../assets/hardik-pandya-g2BWlyejtqg-unsplash.jpg';
import Button from '../../../components/common/Button';
import SeButton from '../../../components/common/SeButton';
import { useNavigate } from 'react-router-dom';
const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
};

export default function ResourceCta(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className='px-4 md:px-8 lg:px-12 py-8 lg:py-10 w-full '
                style={bgStyle}>
                    <div className="h-auto min-h-[80vh] flex flex-col items-center justify-center text-center gap-5">
                        <h4 className='text-[36px] leading-[40px] font-lora font-semibold lg:text-[72px] lg:leading-[72px] text-white w-[95%] max-w-[900px]'>
                            Ready to Find Your<span className='text-[#FFD08B] '> Deal?</span></h4>
                        <p className='text-[20px] leading-[28px] font-inter font-light text-[#C3C2C0]'>
                           .Use the numbers. Read the guides. Then take the leap.</p>
                         <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5">
                            <Button 
                              onClick={() => navigate("/forBuyersFeature")}
                              disabled={disabled}
                              text="Browse Business"
                              />
                              <SeButton
                               onClick={() => navigate("/onBoarding")}
                               disabled={disabled}
                               text="List Your Business"
                                />
                         </div>
                    </div>
                </section>
    )
}
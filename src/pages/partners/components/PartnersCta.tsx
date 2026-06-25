import bgImage from '../../../assets/hardik-pandya-g2BWlyejtqg-unsplash.jpg';
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
};

export default function PartnersCta(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className='px-4 md:px-8 lg:px-12 py-8 lg:py-10 w-full '
                style={bgStyle}>
                    <div className="h-auto min-h-[80vh] flex flex-col items-center justify-center text-center gap-5">
                        <h4 className='text-[36px] leading-[40px] font-lora font-semibold lg:text-[72px] lg:leading-[72px] text-white w-[95%] max-w-[900px]'>
                           Ready to Get <span className='text-[#FFD08B] '>Started?</span></h4>
                        <p className='text-[20px] leading-[28px] font-inter font-light text-[#C3C2C0]'>
                         Create your free account and start leveraging our partner network today.</p>
                        <Button
                           onClick={() => navigate("/onBoarding")}
                           disabled={disabled}
                           text="Get Started Free"
                           />
                    </div>
                </section>
    )
}
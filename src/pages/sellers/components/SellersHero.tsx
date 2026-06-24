import img from '../../../assets/28df2dfcedab36e30f1e62a453f044f2.jpg'
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
export default function SellersHero(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className="w-full h-auto min-h-[80dvh] flex flex-col lg:flex-row items-start justify-between gap-6 px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#F4F0EB]">
            <div className="w-full lg:w-1/2 pt-4 flex flex-col items-start gap-5">
                <h2 className="text-[36px] leading-[39px] lg:text-[56px] lg:leading-[56px] text-[#252423]
                 font-lora font-medium">List Your Business in Minutes and Start Reaching <span className='text-[#c4963c]'>Buyers.</span></h2>
               <p className="text-[18px] text-[#A9A8A8] lg:text-[20px] leading-[28px] font-inter font-light">Fast, simple, and free. Start listing with us in just 60 seconds!</p>
                <Button
                   onClick={() => navigate("/onBoarding")}
                   disabled={disabled}
                   text="List Your Business Free"
                   className='w-full lg:w-fit'
                    />
             </div>
             <div className="w-full lg:w-1/2">
             <img src={img} alt="women planting" className='w-full h-[300px] lg:h-[450px] object-cover object-top rounded-2xl'/>
            </div>
        </section>
    )
}
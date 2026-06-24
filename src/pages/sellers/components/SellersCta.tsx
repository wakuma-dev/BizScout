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

export default function SellersCta(){
    const navigate = useNavigate();
    const disabled = false;
    return(
        <section className='px-4 md:px-8 lg:px-12 py-8 lg:py-10 flex flex-col items-center justify-center text-center gap-3 lg:gap-5 w-full h-auto min-h-[100dvh]'
                style={bgStyle}>
          <h5 className='text-[30px] leading-[36px] lg:text-[72px] lg:leading-[72px] font-lora text-white font-medium max-w-3xl'>
            You Built Something <span className="text-[#ffd08b]">Worth Owning.</span></h5>
          <p className='text-[20px] leading-[28px] font-inter font-light text-[#C5C0BB]'>List for free. Reach 150,000+ buyers. Close on your terms.</p>
          <div className='mt-4 lg:mt-6 flex flex-col lg:flex-row items-center gap-3'>
            <Button
              onClick={() => navigate("/onBoarding")}
              disabled={disabled}
              text="List Your Business Free"
              />
              <SeButton
               onClick={() => navigate("/forBuyersFeature")}
               disabled={disabled}
               text="Explore as a Buyer"
               />
          </div>
        </section>
    );
}
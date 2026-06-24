import { useState } from 'react';
import img from '../../../assets/canvas.png'; // Replace or dynamically switch if you have distinct images per step
import Button from '../../../components/common/Button';
import { useNavigate } from 'react-router-dom';
interface StatsProps {
    id: string;
    title: string;
    subTitle: string;
}

const statsData: StatsProps[] = [
    {
        id: "01",
        title: "Create Your Free Listing",
        subTitle: "In just minutes, list your business with everything buyers look for: clear details, real financials, and an honest picture of what you have built. No confusing steps. No fees."
    },
    {
        id: "02",
        title: "Reach Active Buyers",
        subTitle: "Your listing goes live to 150,000+ entrepreneurs actively searching the platform. AI-powered matching puts your business in front of the buyers most likely to act."
    },
    {
        id: "03",
        title: "Close With Confidence",
        subTitle: "Manage inquiries, share documents securely, and move through diligence with DealOS. Every step from first interest to final signature, handled in one place."
    }
];

export default function SellersStats() {
    // Tracks which step the user is currently interacting with
    const [activeStep, setActiveStep] = useState<string>("01");
    const navigate = useNavigate();
    const disabled = false;
    return (
        <section className="w-full min-h-screen h-auto px-4 md:px-8 lg:px-12 py-12 lg:py-20 bg-[#FAF7F4] flex flex-col justify-center">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center gap-4 mb-12 lg:mb-16">
                <h4 className="text-[36px] leading-[44px] lg:text-[60px] lg:leading-[70px] font-lora font-normal text-[#252423]">
                    Three Steps to <span className="text-[#c4963c] font-medium">Sold.</span>
                </h4>
                <p className="text-[#A6A3A1] text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] font-inter font-normal max-w-2xl">
                    From listing to closing, BizScout handles the complexity so you can focus on what matters.
                </p>
            </div>

            {/* Split Content Section */}
            <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* Left Side: Dynamic Graphic Display */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-full h-[350px] lg:h-[480px] bg-white rounded-2xl shadow-sm border border-[#f0ece7] p-4 flex items-center justify-center overflow-hidden transition-all duration-300">
                        {/* If you have different images for steps, you can change src dynamically based on activeStep */}
                        <img 
                            src={img} 
                            alt={`Visual for step ${activeStep}`} 
                            className="w-full h-full object-contain transform scale-102 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Right Side: Interactive Step Selectors */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
                    {statsData.map((sta) => {
                        const isActive = activeStep === sta.id;
                        
                        return (
                            <div 
                                key={sta.id}
                                onMouseEnter={() => setActiveStep(sta.id)}
                                onClick={() => setActiveStep(sta.id)}
                                className={`flex gap-5 p-4 lg:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                                    isActive 
                                    ? "bg-white shadow-md shadow-neutral-200/50 border border-neutral-100" 
                                    : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                {/* Step Number */}
                                <span className={`text-[48px] lg:text-[56px] font-lora font-bold leading-none transition-colors duration-200 ${
                                    isActive ? "text-[#c4963c]" : "text-[#9C9A99]"
                                }`}>
                                    {sta.id}
                                </span>

                                {/* Step Content */}
                                <div className="flex flex-col gap-2">
                                    <h5 className="text-[20px] lg:text-[22px] font-lora font-semibold text-[#252423] leading-snug">
                                        {sta.title}
                                    </h5>
                                    <p className="text-[14px] lg:text-[15px] leading-[24px] font-inter font-normal text-[#6b6967]">
                                        {sta.subTitle}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            
            </div>
            <div className='flex items-center justify-center py-10'>
                 <Button onClick={() => navigate("/onBoarding")}
                     disabled={disabled}
                     text="Start Your Free Listing"
                     />
            </div>
        </section>
    );
}
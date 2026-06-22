import { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        quote: "BizScout changed how we source off-market leads. We locked down our first acquisition within 45 days of signing up.",
        author: "Sarah Jenkins",
        role: "Managing Partner",
        company: "Apex Capital"
    },
    {
        id: 2,
        quote: "Listing my business was completely free and seamless. Within a week, I had verified decision-makers in my inbox.",
        author: "Marcus Chen",
        role: "Founder",
        company: "DealOS Systems"
    },
    {
        id: 3,
        quote: "The deal pipeline CRM keeps my clients organized and helps me push transactions to the finish line without extra platform fees.",
        author: "David Ross",
        role: "Senior Business Broker",
        company: "Horizon M&A"
    }
];

export default function FeatureTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Trigger the black flash overlay fade-in
            setIsTransitioning(true);

            // 2. Midway through the transition (when fully black), swap the data
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
                // 3. Fade back out to reveal the new content
                setIsTransitioning(false);
            }, 400); // Duration of the blackout dip

        }, 4000); // Set to 4 seconds for better readability of the quotes

        return () => clearInterval(interval);
    }, []);

    const current = testimonialsData[currentIndex];

    return (
        <section className="w-full h-auto min-h-[80vh] px-4 md:px-8 lg:px-12 py-12 lg:py-20 bg-white flex flex-col gap-12 items-center justify-center">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center gap-3 max-w-3xl">
                <h3 className="text-[32px] leading-[40px] lg:text-[60px] lg:leading-[68px] text-[#252423] font-normal font-lora">
                    Don't Take Our Word for It.
                </h3>
                <p className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-normal font-inter text-[#929191]">
                    Buyers, sellers, and brokers who closed real deals on BizScout, in their own words.
                </p>
            </div>

            {/* Slider Container */}
            <div className="w-full max-w-4xl bg-[#222120] rounded-2xl p-8 md:p-16 shadow-xl relative overflow-hidden min-h-[320px] flex flex-col justify-center border border-[#2D2C2A] select-none">
                
                {/* Decorative Quote Mark Icon */}
                <div className="absolute top-6 left-8 text-[#c4963c] opacity-20 text-7xl font-serif pointer-events-none">
                    “
                </div>

                {/* The Black Dynamic Flash Transition Overlay */}
                <div 
                    className={`absolute inset-0 bg-[#141312] z-10 pointer-events-none transition-opacity duration-300 ease-in-out
                        ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} 
                />

                {/* Testimonial Content Blocks */}
                <div className="relative z-0 flex flex-col gap-6">
                    <p className="text-[20px] md:text-[26px] leading-[32px] md:leading-[40px] font-lora font-normal text-[#FAF7F4] italic">
                        "{current.quote}"
                    </p>
                    
                    <div className="flex flex-col gap-1 mt-2">
                        <span className="font-inter font-semibold text-base text-[#FAF7F4]">
                            {current.author}
                        </span>
                        <span className="font-inter font-light text-xs md:text-sm text-[#A3A09C]">
                            {current.role} <span className="text-[#c4963c] mx-1">•</span> {current.company}
                        </span>
                    </div>
                </div>

                {/* Progress Indicators / Sliders dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {testimonialsData.map((_, index) => (
                        <span 
                            key={index} 
                            className={`h-1.5 rounded-full transition-all duration-300 
                                ${currentIndex === index ? 'w-6 bg-[#c4963c]' : 'w-1.5 bg-[#444240]'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
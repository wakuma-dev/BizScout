import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BannerProps {
    desc: string;
    user: string;
    member: string;
}

const bannerData: BannerProps[] = [
    {
        desc: "“It is important to leverage the Academy and listen to when people give you warnings. There is no one-size-fits-all, and you need to make sure the deal works for you.”",
        user: "Miguel G.",
        member: "contrarian academy member"
    },
    {
        desc: "“Pro is the closest thing I've found to a real acquisitions command center. The off-market leads have given me an edge with owners who don't want to blast their business everywhere.”",
        user: "Alex G",
        member: "pro member"
    },
    {
        desc: "“As someone running a company full-time, I don't have hours to waste on junk listings. Pro helps me cut straight to serious opportunities and track every conversation in one place.”",
        user: "David F.",
        member: "pro member"
    },
    {
        desc: "“The Contrarian Academy gave us the roadmap and courage to buy a boring business and begin building a legacy of our own.”",
        user: "Fernando M.",
        member: "contrarian academy member"
    }
];

export default function PriceBanner() {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const previous = () => {
        setOpenIndex((prevValue) =>
            prevValue === 0 ? bannerData.length - 1 : prevValue - 1
        );
    };

    const next = () => {
        setOpenIndex((prevValue) => (prevValue + 1) % bannerData.length);
    };

    useEffect(() => {
        if (isHovered) return;

        const intervalId = setInterval(() => {
            next();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [openIndex, isHovered]);

    const currentBanner = bannerData[openIndex];

    return (
        <section className="px-4 md:px-8 lg:px-12 py-12 lg:py-16 bg-[#252423] w-full h-auto min-h-[50dvh] flex flex-col justify-between select-none">
            {/* Header section */}
            <div className="flex flex-col items-center justify-center text-center gap-4 mx-auto mb-8">
                <h3 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal text-white">
                    What Members Are <span className="text-[#ffd08b]">Saying</span>
                </h3>
            </div>

            {/* Testimonial Content Window */}
            <div 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full max-w-4xl rounded-xl bg-[#31302F] mx-auto flex flex-col items-start gap-4 p-6 lg:p-8 min-h-[180px] justify-center mb-6 overflow-hidden group"
            >
                {/* Full-Rotation SVG Border Layout */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-xl"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Background track line */}
                    <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="12"
                        className="fill-none stroke-[#5C5B5A]/30 stroke-[1px]"
                    />
                    {/* Full Tracing Overlay Shape */}
                    <motion.rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="12"
                        className="fill-none stroke-[#ffd08b] stroke-[2px]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </svg>

                {/* Card Content - Cleaned up conflicting color classes */}
                <p className="text-[16px] leading-[24px] text-gray-200 font-inter font-normal relative z-10">
                    {currentBanner.desc}
                </p>
                <div className="flex flex-col items-start gap-1 relative z-10">
                    <span className="text-white font-inter font-normal text-[16px] leading-[24px]">
                        {currentBanner.user}
                    </span>
                    <span className="text-[#ffd08b] font-inter font-light text-[11px] leading-[16px] uppercase tracking-wider">
                        {currentBanner.member}
                    </span>
                </div>
            </div>

            {/* Unified Horizontal Control Bar */}
            <div className="w-full max-w-4xl mx-auto flex items-center justify-between gap-6 mt-4">
                <button 
                    onClick={previous}
                    className="p-2 cursor-pointer rounded-full border border-[#5C5B5A] text-[#BABABA] hover:text-white hover:border-white transition-colors duration-200 shrink-0"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex justify-center items-center gap-2">
                    {bannerData.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setOpenIndex(idx)}
                            className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                                idx === openIndex ? 'w-6 bg-[#ffd08b]' : 'w-2 bg-[#5C5B5A]'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <button 
                    onClick={next}
                    className="p-2 cursor-pointer rounded-full border border-[#5C5B5A] text-[#BABABA] hover:text-white hover:border-white transition-colors duration-200 shrink-0"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
}
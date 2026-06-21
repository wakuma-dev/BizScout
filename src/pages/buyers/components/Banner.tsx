import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../../assets/sara-kurfess-xCm3FGX8lb8-unsplash.jpg';
import img2 from '../../../assets/leonardo-cirimbelli-QZhgsjRHXPU-unsplash.jpg';
import img3 from '../../../assets/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg';
import img4 from '../../../assets/israel-andrade-YI_9SivVt_s-unsplash.jpg';
type ProductProps = {
    image: string;
    name: string;
    desc: string;
    price: number;
};

interface InfiniteMarqueeProps {
    items?: ProductProps[];
    speed?: number; // Made optional to allow default assignment
    direction?: "left" | "right";
}

// 1. Fixed the function declaration syntax
export default function Banner({
    items = [
        {image: img1,  name: "Premium Deal", desc: "SaaS Platform", price: 45000 },
        {image: img2,  name: "E-Commerce", desc: "Automated Store", price: 12000 },
        {image: img3, name: "AI Tool", desc: "Micro-SaaS Hub", price: 85000 },
        {image: img4,  name: "Agency", desc: "Marketing Firm", price: 60000 },
    ],
    speed = 20,
    direction = "left"
}: InfiniteMarqueeProps) {
    
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState<number>(0);
    const gapPixels = 24; // matches gap-6 (6 * 4px)

    useEffect(() => {
        if (trackRef.current) {
            setTrackWidth(trackRef.current.scrollWidth);
        }
    }, [items]);

    const isLeft = direction === "left";
    const xTranslation = isLeft 
        ? [0, -(trackWidth + gapPixels)] 
        : [-(trackWidth + gapPixels), 0];

    // Core reusable marquee track
    const renderTrack = (isDuplicate = false) => (
        <motion.div
            ref={isDuplicate ? null : trackRef}
            className="flex shrink-0 items-center gap-6 pr-6"
            animate={{ x: xTranslation }}
            transition={{
                ease: "linear",
                duration: speed,
                repeat: Infinity,
            }}
        >
            {items.map((item, index) => (
                <div
                    key={`${item.name}-${index}-${isDuplicate ? "dup" : "orig"}`}
                    className="w-80 shrink-0 select-none rounded-2xl border border-zinc-200 bg-zinc-50  shadow-sm"
                >
                    <div className="flex flex-col mb-2">
                        <img src={item.image} 
                        alt={item.desc} 
                        className="w-full object-cover rounded-t-2xl" />
                        <h4 className="font-semibold text-zinc-900 truncate">{item.name}</h4>
                        <span className="text-sm font-bold text-[#C4963C]">
                            ${item.price.toLocaleString()}
                        </span>
                    </div>
                    <p className="text-sm text-zinc-600 line-clamp-2">{item.desc}</p>
                </div>
            ))}
        </motion.div>
    );

    return (
        <section className="py-10 bg-white overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-2 py-4 px-4">
                <h2 className="text-4xl md:text-[60px] md:leading-[60px] font-lora text-[#252423] text-center">
                    Serious Buyers Belong
                    <span className="text-[#C4963C]"> Here.</span>
                </h2>
                <p className="text-base md:text-[18px] md:leading-[28px] max-w-3xl text-center text-zinc-600">
                    Off-market access, Radar™ alerts, Scout AI™ deal breakdowns, verified buyer status, and every tool from first search to final signature. BizScout is built for the buyer who is actually ready to own something.
                </p>
            </div>

            {/* Infinite Loop Container */}
            <div className="mt-10 flex w-full overflow-hidden mask-gradient">
                {renderTrack(false)}
                {renderTrack(true)}
            </div>
        </section>
    );
}
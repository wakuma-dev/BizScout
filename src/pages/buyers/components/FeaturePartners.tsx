import { motion } from 'framer-motion'
import img1 from '../../../assets/banner/1.png'
import img2 from '../../../assets/banner/2.png'
import img3 from '../../../assets/banner/3.png'
import img4 from '../../../assets/banner/4.png'
import img5 from '../../../assets/banner/5.png'
import img6 from '../../../assets/banner/6.png'
import img7 from '../../../assets/banner/7.png'
import img8 from '../../../assets/banner/8.png'
import img9 from '../../../assets/banner/9.png'
import img10 from '../../../assets/banner/10.png'

export default function FeaturePartners(){
    const images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    
    return(
        <div className="px-4 md:px-8 lg:px-12 py-8 lg:py-12 bg-[#252423]">
            <div className="flex items-center justify-center my-4">
                <span className="text-[14px] uppercase text-[#8B8B8A] text-center leading-[20px] font-semibold font-inter">
                    Trusted Partners & Integrations
                </span>   
            </div>
            
            <div className="relative w-full flex items-center py-6 overflow-hidden">
                {/* Edge Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#252423] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#252423] to-transparent z-10 pointer-events-none" />
                
                <motion.div
                    // Reduced gap-16 to gap-10 for tighter, cleaner spacing between elements
                    className='flex whitespace-nowrap gap-10 pr-10 will-change-transform items-center'
                    animate={{x: [0, "-50%"]}}
                    transition={{
                        ease: "linear",
                        duration: 28, // Sped up slightly since the track is now physically shorter/tighter
                        repeat: Infinity
                    }}
                >
                    {[...images, ...images].map((img: string, index: number) => (
                        <div 
                            key={`${img}-${index}`} 
                            // Removed fixed width (w-40) and set to w-auto so narrow logos don't create fake empty space
                            className="flex-shrink-0 h-18 w-48 flex items-center justify-center"
                        >
                            <img 
                               src={img}
                               alt={`Partner logo ${(index % images.length) + 1}`}
                               // Swapped back to h-full w-auto so the image scales naturally without empty side margins
                               className='h-full w-48 object-cover brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300'
                               loading='eager'
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
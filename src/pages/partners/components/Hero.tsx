import { motion } from 'framer-motion';

export default function Hero() {
  // Shared animation variants to keep the JSX clean
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-50px" },
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 lg:py-16 bg-[#F2EEE8]">
      <div className="flex flex-col items-center justify-center text-center gap-4 min-h-[40dvh]">
        
        <motion.h1 
          className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-medium text-[#252423]"
          {...fadeInUp}
          transition={{ duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }} // Clean cubic-bezier
        >
          Our <span className="text-[#c4963c]">Partners</span>
        </motion.h1>

        <motion.p 
          className="text-[18px] lg:text-[20px] leading-[28px] font-inter font-light text-[#908D89] max-w-xl"
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          Trusted partners to help you navigate every step of your acquisition journey.
        </motion.p>

      </div>
    </section>
  );
}
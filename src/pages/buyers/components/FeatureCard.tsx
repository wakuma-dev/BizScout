import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/common/Button';

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
  buttonText: string;
  path: string;
}

const cardData: CardProps[] = [
  {
    title: "Buying Power Calculator",
    subTitle: "See how far your capital goes. Factors in available cash, financing options, and SBA loan eligibility.",
    image: "abebe",
    buttonText: "Use Calculator",
    path: "/buyingPowerCalculation" // Added leading slash for safety
  },
  {
    title: "Deal Affordability Calculator",
    subTitle: "Does this deal actually work for you? Run SBA qualification and liquidity checks before you are committed.",
    image: "lema",
    buttonText: "Use Calculator",
    path: "/dealCalculation"
  },
  {
    title: "Net Working capital calculator",
    subTitle: "Understand the cash flow requirements of any business before you buy. No surprises after close.",
    image: "alemu",
    buttonText: "Use Calculation",
    path: "/capitalCalculation"
  },
  {
    title: "Exit value calculator",
    subTitle: "Project future cash flows and model your return against exit assumptions. Know what you are working towards.",
    image: "alemu",
    buttonText: "Use Calculation",
    path: "/valueCalculation"
  }
]

export default function FeatureCard() { 
  const navigate = useNavigate();
  const disabled = false;
  
  // Set default to 0 so the first item's image shows on desktop right away
  const [openIndex, setOpenIndex] = useState<number | null>(0); 
  
  const toggleOpen = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Safely find the current item data based on what's clicked
  const currentActiveItem = openIndex !== null ? cardData[openIndex] : null;

  return (
    <section className="px-4 md:px-8 lg:px-12 py-12 lg:py-16 bg-[#FAF7F4] w-full min-h-[80dvh] flex items-center">
      <style>{`
        @keyframes tabTabFadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-tab-change {
          animation: tabTabFadeInUp 450ms cubic-bezier(0.215, 0.610, 0.355, 1) both;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h4 className="text-[#252423] text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] font-lora font-normal">
            Know Before You <span className="text-[#C4963C]">Move.</span>
          </h4>
          <p className="text-[18px] leading-[28px] font-inter font-light text-[#6B6A69] max-w-2xl">
            Free tools and real market data. Because the best decisions are not guesses.
          </p>
        </div>

        {/* Responsive Content Row Split */}
        <div className='flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 w-full'>
          
          {/* Left Column: Accordion Titles & Text Content */}
          <div className='flex flex-col items-start gap-4 w-full lg:w-[50%]'>
            {cardData.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div 
                  key={index}
                  className={`w-full p-5 bg-white rounded-xl transition-all duration-300 border border-transparent ${
                    isOpen ? "opacity-100 shadow-md border-gray-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Clickable Header Title */}
                  <h5 
                    onClick={() => toggleOpen(index)}
                    className={`cursor-pointer text-[18px] leading-[28px] font-medium font-lora transition-colors duration-200 select-none ${
                      isOpen ? "text-[#C4963C]" : "text-[#252423]"
                    }`}
                  >
                    {item.title}
                  </h5>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className='overflow-hidden'
                      >
                        <div className='flex flex-col gap-4 pt-4'>
                          <p className="text-[#929191] font-inter font-normal text-[14px] leading-[23px]">
                            {item.subTitle}
                          </p>
                          
                          {/* Inline Mobile Image: Hidden on desktop, displays right beneath info panel on mobile layout */}
                          <div className="block lg:hidden w-full h-[200px] bg-[#252423]/5 rounded-lg overflow-hidden border border-dashed border-gray-300 flex items-center justify-center p-4">
                            <span className="text-xs font-mono text-gray-500">[Mobile Mockup Image: {item.image}]</span>
                          </div>

                          <div>
                            <Button 
                              text={item.buttonText}
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation(); // Avoids triggering accordion closing behavior on click
                                navigate(item.path);
                              }}
                              disabled={disabled}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Column: Global Dynamic Dashboard Preview (Desktop Only) */}
          <div className='hidden lg:flex w-full lg:w-[45%] h-[400px] lg:h-[480px] bg-[#252423] rounded-2xl items-center justify-center relative overflow-hidden shadow-sm'>
            {currentActiveItem ? (
              <div 
                key={openIndex} // Key enforces animation transition whenever selection mutates
                className='w-full h-full flex flex-col items-center justify-center p-8 animate-tab-change text-center text-white gap-4'
              >
                {/* Once your image pathways are ready, swap the placeholder structure out for an asset line: */}
                {/* <img src={`/images/${currentActiveItem.image}.png`} alt={currentActiveItem.title} className='w-full h-full object-cover' /> */}
                
                <div className="w-16 h-16 rounded-xl bg-[#C4963C]/20 border border-[#C4963C] flex items-center justify-center text-2xl">
                  📊
                </div>
                <h6 className="font-lora text-xl tracking-wide">{currentActiveItem.title}</h6>
                <p className="text-xs text-gray-400 font-mono italic">[Desktop Graphic Display: {currentActiveItem.image}]</p>
              </div>
            ) : (
              <div className="text-gray-400 font-inter text-sm">Select a calculator tool to view mockup preview</div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
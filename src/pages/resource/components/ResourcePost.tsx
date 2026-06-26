import { motion, type Variants } from "framer-motion"
import Button from "../../../components/common/Button"
import { useNavigate } from "react-router-dom"

interface PostProps {
    title: string;
    subTitle: string;
}

const postData: PostProps[] = [
    {
    title: "The Art of the Off-Market Deal: How to Find Businesses That Aren’t for Sale",
    subTitle: "Skip the bidding wars. Learn how savvy acquisition entrepreneurs use direct outreach and data tools to uncover hidden gems before they ever hit a public marketplace."
    },
    {
    title: "Decoding SBA 7(a) Loans: A First-Time Buyer’s Guide to Acquisition Financing",
    subTitle:"Navigating the paperwork doesn't have to be daunting. Here is exactly what traditional lenders look for, how to pre-qualify, and how to structure your debt safely."
    },
    {
    title: "Beyond the Multiple: 4 Critical Valuation Metrics Every Buyer Overlooks",
    subTitle: "SDE and EBITDA only tell part of the story. Discover how market density, customer concentration, and historical risk factors dictate what a business is truly worth."
    }
]

export default function ResourcePost(){
    const navigate = useNavigate();
    const disabled = false;
    
    // Staggered layout configuration for the grid wrapper
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12 // Time gap between card animations
            }
        }
    };

    // Fly-up and fade-in configuration for each single post card
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 24 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };
    
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FAF7F4] w-full h-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
             <div className="flex flex-col items-start gap-3">
                <h3 className="text-[30px] leading-[38px] lg:text-[48px] lg:leading-[48px] text-[#252423] font-lora font-medium">From the  
                    <span className="text-[#c4963c]"> Blog</span></h3>
                <p className="text-[18px] leading-[28px] font-inter font-normal text-[#B9B7B5]">Practical guides, deal breakdowns, and acquisition insights from the BizScout team.</p>
             </div>
            </div>
            
             {/* Animating the grid layout with stagger hooks */}
             <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full mt-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
             >
                {postData.map((post, index) => {
                    return(
                        <motion.div 
                            key={index} 
                            className="flex flex-col items-start bg-white rounded-xl p-6 shadow-sm"
                            variants={cardVariants}
                        >
                            <span className="text-[20px] leading-[28px] font-lora font-semibold text-[#252423] mb-2">{post.title}</span>
                            <p className="text-[15px] leading-[22px] font-inter font-normal text-[#858381]">{post.subTitle}</p>
                        </motion.div>
                    )
                })}
             </motion.div>

            {/* Added smooth viewport presence fade for the newsletter box container layout */}
            <motion.div 
                className="w-full max-w-6xl mx-auto bg-[#252423] rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 min-h-[14rem] lg:h-56 p-8 mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
                <div className="flex flex-col items-start gap-3 max-w-2xl">
                    <span className="text-[#90908F] text-[10px] leading-[15px] p-1.5 bg-[#302F2E] border border-[#90908f] rounded-full font-semibold font-inter">NEWSLETTER</span>
                    <h4 className="text-[24px] lg:text-[30px] leading-[30px] text-white font-lora font-medium">Get new deal insights in your inbox</h4>
                    <p className="text-[16px] leading-[24px] text-[#90908f] font-inter font-light">Join our newsletter for acquisition breakdowns, valuation primers, and practical guidance you can use right away.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row w-full lg:w-auto justify-end gap-3 shrink-0">
                    <input type="email"
                           placeholder="Enter your Email"
                           className="outline-none bg-white rounded-full p-3 px-5 text-sm w-full sm:w-64"
                            />
                    <Button 
                       onClick={() => navigate("/signUp")}
                       disabled={disabled}
                       text="Sign Up"
                        />
                </div>
            </motion.div>
        </section>
    )
}
import { motion } from 'framer-motion'

interface DescProps {
    title: string;
    description: string;
}

const descData: DescProps[] = [
    {
        title: "One Platform. Zero Fees.",
        description: "No subscription fees, no listing fees, no catch. We make money when you close deals through partnerships with lenders, attorneys, and service providers. When you succeed, we succeed."
    },
    {
        title: "All Your Tools in One Place",
        description: "Your CRM, document storage, task manager, and valuation tools consolidated into one platform built specifically for how brokers work. No more juggling HubSpot, spreadsheets, and Google Drive."
    },
    {
        title: "Scout AI Handles the Busywork",
        description: "Paste a messy deal description — emails, notes, whatever you’ve got. Scout AI structures it, analyzes it, and tells you what to focus on. You handle the relationships. We handle the rest."
    },
    {
        title: "Keep Every Deal in a Secure Vault",
        description: "Deals die in diligence because documents are scattered across email, Drive, and Dropbox. DealOS keeps everything in one secure vault so surprises don’t kill your deal in month six."
    },
    {
        title: "Reach 150,000+ Active Buyers",
        description: "List your client’s business on the BizScout marketplace and get it in front of 150,000+ active buyers searching across 50+ industries."
    }
]

export default function BrokersDesc(){
    return(
        <>
            {/* Why Choose Section */}
            <section className="w-full h-auto lg:min-h-[80dvh] px-4 md:px-8 lg:px-12 py-12 lg:py-16 bg-[#FAF7F4]">
                <div className="flex items-center justify-center py-6">
                    <h4 className="text-[40px] md:text-[52px] lg:text-[60px] leading-tight font-lora font-normal text-[#252423] text-center">
                        Why Brokers Choose <span className="text-[#CEA95F]">BizScout.</span>
                    </h4>
                </div>
                
                {/* Optimized grid layout handling 5 items gracefully */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 py-5 max-w-7xl mx-auto'>
                    {descData.map((desc, index) => {
                        // First 3 items take 2/6 columns (equals 1/3 grid span)
                        // Last 2 items take 3/6 columns (equals 1/2 grid span) to cleanly balance the row layout
                        const gridSpanClass = index < 3 
                            ? "lg:col-span-2" 
                            : "lg:col-span-3 md:col-span-2";

                        return (
                            <motion.div 
                                key={index}
                                className={`flex flex-col items-start gap-4 p-6 md:p-8 rounded-xl bg-white border border-[#EBE7E2] transition-shadow duration-300 ${gridSpanClass}`}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.04), 0 8px 10px -6px rgb(0 0 0 / 0.04)" }} 
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <div className='w-12 h-1 bg-[#CEA95F] rounded-full' />
                                <h5 className='text-[22px] leading-[30px] text-[#252423] font-lora font-semibold'>{desc.title}</h5>
                                <p className='text-[16px] leading-[26px] font-inter font-normal text-[#666665]'>{desc.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* NEW ADDED SECTION: Call To Action (CTA) Banner */}
            <section className="w-full px-4 md:px-8 lg:px-12 py-16 lg:py-20 bg-[#252423] text-white overflow-hidden">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[14px] tracking-[0.15em] uppercase text-[#CEA95F] font-semibold font-inter"
                    >
                        Ready to Accelerate Your Pipeline?
                    </motion.span>
                    
                    <motion.h3 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[36px] md:text-[48px] font-lora font-normal leading-tight"
                    >
                        Close deals faster. Keep 100% of your commissions.
                    </motion.h3>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8B8B8A] text-base md:text-lg max-w-2xl font-inter leading-relaxed"
                    >
                        Join thousands of business brokers managing listings, automating data structures, and securely interacting with qualified buyers on BizScout.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <button className="px-8 py-4 bg-[#CEA95F] hover:bg-[#bfa154] text-[#252423] font-inter font-semibold rounded-lg transition-colors duration-200 shadow-lg text-center">
                            Create Your Free Account
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-[#8B8B8A] hover:border-white hover:bg-white/5 text-white font-inter font-medium rounded-lg transition-all duration-200 text-center">
                            Talk with a Specialist
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
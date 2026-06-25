import { motion, type Variants } from 'framer-motion';
import img1 from '../../../assets/banner/1.png'
import img2 from '../../../assets/banner/2.png'
import img3 from '../../../assets/banner/3.png'
import img4 from '../../../assets/banner/4.png'
import img5 from '../../../assets/banner/5.png'
import img6 from '../../../assets/banner/6.png'
import img7 from '../../../assets/banner/7.png'
import img8 from '../../../assets/banner/8.png'
import img9 from '../../../assets/banner/9.png'

interface CategoriesProps {
    image: string;
    title: string;
    subTitle: string;
}

const categoriesData: CategoriesProps[] = [
    {
        image: img7,
        title: "Contrarian Academy",
        subTitle: "Contrarian Academy helps entrepreneurs build wealth through ownership, with sharp content, practical frameworks, and a community that encourages bold, informed moves. Paired with BizScout, it gives buyers both the mindset and the marketplace to find the right business and move with confidence.",
    },
    {
        image: img4,
        title: "Plaid",
        subTitle: "Plaid, formerly Assurely, provides transaction-specific insurance products built to protect buyers against post-closing risks in a deal. It pairs well with BizScout by helping buyers safeguard and stabilize the businesses they acquire."
    },
    {
        image: img2,
        title: "Grasshopper Bank",
        subTitle: "Grasshopper Bank is BizScout’s preferred lending partner, offering pre-qualification and modern banking support built for founders and small business buyers. They help BizScout users move faster with the financing and financial tools they need to close and grow."
    },
    {
        image: img6,
        title: "Gusto",
        subTitle: "Gusto helps BizScout buyers handle payroll, benefits, and people operations with less friction, making it easier to run the business well after the deal closes."
    },
    {
        image: img5,
        title: "Nexa",
        subTitle: "Nexa is the world’s largest business brokerage firm, with 1,000+ brokers across 250+ offices worldwide. All Transworld listings are featured directly on the BizScout marketplace, giving buyers access to professionally represented deals alongside BizScout’s data tools for sharper insight into valuation and market positioning."
    },
    {
        image: img1,
        title: "Carbon Law Group",
        subTitle: "Carbon Law Group brings 15 years of legal experience and the trust of 700+ businesses and entrepreneurs. They support buyers, sellers, and scaling founders with due diligence, purchase agreements, entity structuring, and contract strategy so deals are structured properly and risks stay controlled."
    },
    {
        image: img9,
        title: "Ramp",
        subTitle: "Ramp helps businesses manage spend, cards, and finance operations more efficiently, giving BizScout users a practical tool for staying organized as they grow after the deal closes."
    },
    {
        image: img8,
        title: "Apollo.io",
        subTitle: "Apollo.io gives BizScout Pro users access to verified business owner contact data so you can reach decision-makers directly, skipping gatekeepers and getting faster replies on off-market deals and direct outreach campaigns."
    },
    {
        image: img3,
        title: "Gravity",
        subTitle: "Gravity is the industry intelligence platform banks, lenders, and M&A professionals rely on. BizScout Pro surfaces IBISWorld data directly on every listing: growth rates, typical margins, financial ratios, competitive density, and risk factors. No separate subscription. No extra login."
    }
]

const PartnersCategories = () => {
  // Explicitly typing as Variants solves the generic string inference issue
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Explicitly typing as Variants locks down the 'ease' property type requirements
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
   <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 w-full h-auto min-h-[100dvh] bg-[#fff]">
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
    >
        {categoriesData.map((cate, index) => {
            return(
                <motion.div 
                  key={index}
                  className='flex flex-col items-start gap-2.5 lg:gap-4 bg-[#F2EEE8] rounded-xl p-5'
                  variants={cardVariants}
                >
                    <div className='bg-white w-full h-56 lg:h-64 rounded-xl'>
                         <img src={cate.image} className='w-full h-full object-contain lg:object-cover' alt={cate.title}/>
                    </div>
                 
                    <span className='text-[20px] leading-[28px] font-lora font-semibold text-[#252423]'>{cate.title}</span>
                    <p className='text-[16px] leading-[26px] font-inter font-normal text-[#858381]'>{cate.subTitle}</p>
                </motion.div>
            )
        })}
    </motion.div>
   </section>
  )
}

export default PartnersCategories;
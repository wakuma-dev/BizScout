import { motion } from 'framer-motion';
import img from '../../../assets/f8ffe3287d7e07ae73298809f1368c25.jpg'
import img2 from '../../../assets/9bcb6754eceef7cc22e04093a5916734.jpg'
import img3 from '../../../assets/0e518a66ead5d19821f24d38e7fa201a.jpg'
interface TestimonialsProps {
    desc: string;
    image: string;
    user: string;
    address: string;
}
const testimonialsData: TestimonialsProps[] = [
    {
        desc: "“I listed on a Friday afternoon and had three qualified inquiries by Monday. One of them closed within 60 days.”",
        image: img2,
        user: "Robert M.",
        address: "Restaurant Owner, Austin TX"
    },
    {
     desc: "“The buyer matching saved me months of back-and-forth with people who were never going to follow through.”",
     image: img,
     user: "Linda K.",
     address: "Salon Owner, Chicago IL"
    },
    {
    desc: "“DealOS made the diligence process feel organized for the first time. My buyer said it was the smoothest deal they had ever done.”",
    image: img3,
    user: "James P.",
    address: "HVAC Company, Atlanta GA"
    }
]
export default function Testimonials(){
    return(
        <section className="w-full h-auto min-h-[60dvh] px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FAF7F4]">
            <div className="flex flex-col items-center justify-center text-center gap-5 mx-auto">
                <h4 className="text-[30px] leading-[38px] lg:text-[60px] lg:leading-[60px] text-[#252423] font-lora font-normal">Sellers Who Found Their
                    <span className="text-[#c4963c]"> Buyer. </span></h4>
                <p className="text-[18px] leading-[28px] font-inter text-[#908D8C] font-normal">Real stories from business owners who listed on BizScout and closed on their terms.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
                {testimonialsData.map((tes, index) => {
                    return(
                        <motion.div
                               key={index}
                               className='p-5 bg-white rounded-lg flex flex-col items-start gap-4'
                               initial={{y: 20, opacity: 0}}
                               whileInView={{y: 0, opacity: 1}}
                               viewport={{once: true, margin: "-50px"}}
                               whileHover={{y: -6, 
                                boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.08), 0px 8px 16px -6px rgba(0, 0, 0, 0.04)",
                                transition: {duration: 0.2}}}
                               transition={{duration: 0.4, delay: index * 0.1, ease: "easeOut"}}
                               >
                            <p className='text-[#757474] text-[18px] leading-[28px] font-lora font-normal'>{tes.desc}</p>
                            <div className="flex items-center gap-2">
                                <img src={tes.image} alt={tes.image} className='w-12 h-12 object-cover object-center rounded-full'/>
                                <div className="flex flex-col items-start ">
                                    <span className='text-[#252423] text-[14px] font-inter leading-[20px] font-semibold'>{tes.user}</span>
                                    <p className='text-[#BDBCBC] text-[12px] leading-[16px] font-inter font-normal'>{tes.address}</p>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
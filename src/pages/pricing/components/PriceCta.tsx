import { Link } from 'react-router-dom';

interface CtaProps {
    status: string;
    desc: string;
    pathName: string;
    text: string;
}

const ctaData: CtaProps[] = [
    {
        status: "basic",
        desc: "You're curious about buying a business but still figuring out what you're looking for. You want to explore listings, run a few numbers, and get a feel for the market before committing to anything.",
        pathName: "/login",
        text: "Start for Free"
    },
    {
        status: "pro",
        desc: "You're actively hunting. You have a buy box, you're reaching out to sellers, and you don't want to miss a deal because you heard about it too late or got ignored because your profile wasn't credible.",
        pathName: "/login",
        text: "Get Pro"
    },
    {
        status: "Contrarian Academy",
        desc: "You want more than a platform. You want the knowledge, mentorship, and community to buy the right business confidently. You're willing to put in the work and want experts in your corner while you do.",
        pathName: "/login",
        text: "Join the Academy"
    },
    {
        status: "Private Client",
        desc: "You're pursuing a serious acquisition, typically $5M or more. You don't want to manage the process yourself. You want a dedicated advisor who sources deals, runs diligence, and walks you to close.",
        pathName: "/login",
        text: "Apply Now"
    }
];

export default function PriceCta(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-12 lg:py-16 bg-[#fff] w-full min-h-[70dvh] h-auto flex flex-col justify-center">
            {/* Header Area */}
            <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center max-w-2xl">
                <h4 className="text-[32px] leading-[40px] lg:text-[56px] lg:leading-[64px] font-lora font-medium text-[#252423]">
                    Not Sure Where to <span className="text-[#c4963c]">Start?</span>
                </h4>
                <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] font-inter font-light text-[#7A7877]">
                    {/* Updated text color from #BDBDBD to #7A7877 for text readability rules */}
                    Each plan is built around a different kind of buyer. Find yours.
                </p>
            </div>
            
            {/* Optimized Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-7xl mx-auto w-full">
                {ctaData.map((cta, idx) => {
                    return(
                        <div 
                            key={idx} 
                            className="flex flex-col items-start gap-5 p-6 rounded-xl bg-[#FAF7F4] border border-[#EFEBE6]/60 shadow-sm"
                        >
                            <h5 className='text-[#8A8887] text-[12px] leading-[16px] font-semibold font-inter uppercase tracking-wider'>
                                {cta.status}
                            </h5>
                            
                            {/* Updated gray copy color context from #9E9C9B to #5C5A59 */}
                            <p className='text-[#5C5A59] text-[14px] leading-[23px] font-inter font-normal'>
                                {cta.desc}
                            </p>
                            
                            {/* mt-auto pushes link seamlessly to the absolute card bottom */}
                            <Link 
                                to={cta.pathName} 
                                className='mt-auto inline-flex items-center text-[14px] leading-[20px] font-semibold text-[#c4963c] hover:text-[#a37a2f] transition-colors duration-200 group'
                            >
                                {cta.text}
                                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 ml-1">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
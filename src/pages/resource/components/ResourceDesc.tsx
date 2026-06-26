import { Link } from 'react-router-dom'
interface DescriptionItem {
    id: number;
    desc: string;
}
interface DescProps {
    id: string;
    title: string;
    subTitle: string;
    pathName?: string;
    text?: string;
    items: DescriptionItem[]
}

const descriptionItems: DescProps[] = [
    {
        id: "01",
        title: "Deal Affordability Calculator",
        subTitle: "Find out what you can realistically buy. Runs SBA loan qualification, required liquidity, and a full personal financial assessment.",
        pathName: "/dealCalculator",
        items: [
            {
                id: 1,
                desc: "SBA loan qualification checker"
            },
            {
                id: 2,
                desc: "Required liquidity calculator",

            },
            {
                id: 3,
                desc: "Personal financial assessment"
            }
        ]
    },
    {
       id: "02",
       title: "Net Working Capital Calculator",
       subTitle: "See exactly how much cash a business needs to operate day-to-day so you are never caught off-guard at closing.",
       pathName: "/capitalCalculator",
       items: [
        {
            id: 1,
            desc: "Reveal cash flow requirements"
        },
        {
            id: 2,
            desc: "Compare industry benchmarks"
        },
        {
            id: 3,
            desc: "Optimize for business growth"
        }
       ]
    },
    {
     id: "03",
     title: "Exit Value Calculator",
     subTitle: "Model what your investment is worth at exit. Project cash flows, stress-test growth scenarios, and calculate your IRR.",
     pathName: "/exitCalculator",
     items: [
        {
            id: 1,
            desc: "Project future cash flows"
        },
        {
            id: 2,
            desc: "Model different growth scenarios"
        },
        {
            id: 3,
            desc: "Calculate IRR based on exit assumptions"
        }
     ]
    },
    {
        id: "04",
        title: "Buying Power Calculator",
        subTitle: "Know your ceiling before you negotiate. Estimates your maximum purchase price, debt capacity, and monthly payment.",
        pathName: "/powerCalculator",
        items: [
            {id: 1, desc: "Maximum purchase price estimator"},
            {id: 2, desc: "Debt capacity analysis"},
            {id: 3, desc: "Monthly payment projections"}
        ]
    },
    {
        id: "05",
        title: "Monthly payment projections",
        subTitle: "Quickly size up the annual return on your actual cash invested so you can compare deals on an apples-to-apples basis.",
        text: "Available soon",
        items: [
            {id: 1, desc: "Annual cash-on-cash return"},
            {id: 2, desc: "Compare deals side by side"},
            {id: 3, desc: "Factor in debt service"}
        ]
    },
    {
        id: "06",
        title: "Debt Service Calculator",
        subTitle: "Model loan repayment schedules and stress-test your deal against interest rate changes before you sign anything.",
        text: "Available soon",
        items: [
            {id: 1, desc: "Loan repayment schedule"},
            {id: 2, desc: "Interest rate sensitivity"},
            {id: 3, desc: "Break-even payment analysis"}
        ]
    }
]
export default function ResourceDesc(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-12 bg-[#fff] w-full h-auto min-h-screen">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h3 className="text-[30px] leading-[38px] lg:text-[48px] lg:leading-[48px] text-[#252423] font-lora font-medium">Business 
                    <span className="text-[#C4963C]"> Calculators</span></h3>
                <p className="text-[#9F9E9E] text-[18px] leading-[28px] font-inter font-light max-w-2xl">Run the numbers before you commit. Our calculators turn financial uncertainty into clear, actionable insight.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-4">
                {descriptionItems.map((card) => {
                    return(
                        <div className="flex flex-col items-start gap-4 rounded-xl bg-[#FAF7F4] p-5">
                            <span className="text-[#858381] text-[12px] leading-[16px] font-inter font-semibold">{card.id}</span>
                            <h4 className="text-[20px] leading-[28px] font-lora font-semibold text-[#252423]">{card.title}</h4>
                            <p className="text-[#858381] text-[14px] leading-[23px] font-normal font-inter">{card.subTitle}</p>
                         <div className="flex flex-col gap-3 mt-auto w-full">
                         {card.items.map((item) => {
                            return(
                            <div key={item.id} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#c4963c]" />
                                <p className="text-[#858381] text-[14px] leading-[20px] font-inter font-normal">{item.desc}</p>
                            </div>
                            )
                         })}
                         </div>
                        {card.pathName ? (
                            <Link to={card.pathName}
                                  className='text-[14px] leading-[20px] text-[#c4963c] font-inter font-semibold'>
                                    Use calculator
                                  </Link>
                        ) : (
                            <span className='text-[14px] leading-[20px] font-inter font-semibold text-[#858381]'>{card.text}</span>
                        )
                    }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
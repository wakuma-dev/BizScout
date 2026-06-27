import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import heroImg from "../../../assets/redd-francisco-5U_28ojjgms-unsplash.jpg";

interface StatusMetric {
  id: number;
  value: string;
  label: string;
}

const STATUS_METRICS: StatusMetric[] = [
  { id: 1, value: "20k", label: "ACTIVE LISTINGS" },
  { id: 2, value: "600+", label: "VERIFIED BROKERS" }, // Fixed typo "VERFIED"
  { id: 3, value: "50K", label: "BUYER BROKER CONNECTIONS" }
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F6F3EF] px-4 py-12 md:px-8 lg:px-12 ">
      <div className="mx-auto flex flex-col gap-10 lg:min-h-[75vh] lg:flex-row lg:items-center lg:gap-12">
        
        {/* Left Column: Content & Metrics */}
        <div className="flex w-full flex-col items-start gap-8 lg:w-3/5">
          <h1 className="font-lora text-[38px] font-medium leading-[44px] tracking-tight text-[#252423] md:text-[48px] md:leading-[54px] lg:text-[56px] lg:leading-[64px]">
            The Business You Want Exists.{" "}
            <br className="hidden md:inline" />
            <span className="text-[#C4963C]">Go Find It.</span>
          </h1>

          <Button
            onClick={() => navigate("/search")}
            text="Start Your Search"
            className="w-full md:max-w-[300px]"
          />

          {/* Metrics Panel - Added subtle divider lines for layout polish */}
          <div 
            className="flex w-full max-w-[600px] items-center justify-between rounded-xl bg-white p-4 shadow-sm border border-[#EBE7E1]"
            role="region" 
            aria-label="Platform Statistics"
          >
            {STATUS_METRICS.map((metric, index) => (
              <div 
                key={metric.id} 
                className={`flex flex-col items-center justify-center gap-1 text-center flex-1
                  ${index !== STATUS_METRICS.length - 1 ? "border-r border-[#F0ECE7]" : ""}`}
              >
                <span className="font-inter text-[20px] font-semibold uppercase leading-[24px] text-[#c4963c] lg:text-[24px] lg:leading-[32px]">
                  {metric.value}
                </span>
                <p className="font-inter text-[10px] font-normal tracking-wider leading-[14px] text-[#555452] px-2 lg:text-[11px] lg:leading-[16px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Image Container */}
        <div className="w-full lg:w-2/5">
          <div className="overflow-hidden rounded-xl bg-[#EBE7E1] shadow-md transition-transform duration-500 hover:scale-[1.01]">
            <img 
              src={heroImg} 
              alt="Bright marketplace workspace representation" 
              className="aspect-[4/3] w-full h-[400px] object-cover block md:aspect-[16/10] lg:aspect-[4/5]"
              loading="eager"
              priority="true" // Optional custom prop if your framework supports it
            />
          </div>
        </div>

      </div>
    </section>
  );
}
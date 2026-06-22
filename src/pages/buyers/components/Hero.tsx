import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
interface StatusProps {
    id: number;
    text: string;
    desc: string;
}
const Status: StatusProps[] = [
    {id: 1, text: "20k", desc: "ACTIVE LISTINGS"},
    {id: 2, text: "600+", desc: "VERFIED BROKERS"},
    {id: 3, text: "50K", desc: "BUYER BROKER CONNECTIONS"}

]
export default function Hero() {
  const navigate = useNavigate();
  const disabled = false;

  return (
    <section className="w-full flex flex-col lg:flex-row gap-5 min-h-[90dvh] px-4 md:px-8 lg:px-12 bg-[#F6F3EF]">
      <div className="flex flex-col items-start my-0 mt-14 lg:my-auto gap-6 lg:gap-10 w-full lg:w-2/3">
        <h1 className="text-[36px] leading-[38px] lg:text-[56px] lg:leading-[56px] tracking-none font-medium font-lora text-[#252423]">
          The Business You Want Exists.{" "} <br />
          <span className="text-[#C4963C]">Go Find It.</span>
        </h1>
        <Button
           onClick={() => navigate("/search")}
           disabled={disabled}
           text="Start Your Search"
           className="w-full md:w-[300px]"
           />
      
        <div className="p-2 lg:p-4 w-full lg:w-[600px] rounded-lg bg-white flex items-center justify-between ">
            {Status.map((sta) => {
                return (
                <div key={sta.id} className="flex flex-col items-center justify-center gap-1">
                    <span className="text-[20px] leading-[24px] lg:text-[24px] lg:leading-[32px] font-inter uppercase font-semibold text-[#c4963c]">{sta.text}</span>
                    <p className="text-[9px] leading-[11px] lg:text-[11px] lg:leading-[17px] font-normal font-inter text-[#252423]">{sta.desc}</p>
                </div>
                    );
            })}
         
      </div>
      </div>
    </section>
  );
}
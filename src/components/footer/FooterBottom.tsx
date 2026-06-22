export default function FooterBottom() {
  // Dynamically get the current year (e.g., 2026)
  const currentYear = new Date().getFullYear();

  return (
    <>
       <hr className="border-t border-t-[#807f7f]" />
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-10 lg:gap-0  w-full py-7">
      {/* Left Side: Copyright & Credits */}
   
      <div className="flex flex-col gap-1 text-[12px] leading-[16px] font-inter font-normal">
        <span className="text-[#807f7f]">© {currentYear} BizScout LLC</span>
        <span className="text-[#807F7F]">Developed by Wakuma Hailu</span>
      </div> 
      
      {/* Right Side: TREC Legal Links */}
      <div className="flex flex-col items-start lg:items-end gap-1 text-left lg:text-right">
        <a 
          href="https://www.bizscout.com/files/IABS.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="text-[12px] leading-[16px] text-[#807f7f] hover:text-[#ffd08b] transition-colors duration-150"
        >
          Texas Real Estate Commission Information About Brokerage Services
        </a>
        <a 
          href="https://www.bizscout.com/files/CN.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="text-[12px] leading-[16px] text-[#807f7f] hover:text-[#ffd08b] transition-colors duration-150"
        >
          Texas Real Estate Commission Consumer Protection Notice
        </a>
      </div>
    </div>
    </>
  );
}
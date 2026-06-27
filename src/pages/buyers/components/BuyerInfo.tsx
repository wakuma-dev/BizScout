import img from '../../../assets/jakub-zerdzicki-9PwLeZA-RGc-unsplash.jpg'
const BuyerInfo = () => {
  return (
   <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#FAF7F4] w-full h-auto min-h-[70dvh]">
    <div className="flex flex-col items-center justify-center text-center gap-4 mx-auto ">
     <h3 className="text-[30px] leading-[30px] lg:text-[60px] lg:leading-[60px] font-lora font-normal text-[#252423]">
        Found Something Worth <span className="text-[#c4963c]">Chasing?</span></h3>
     <p className="w-full lg:max-w-3xl text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] font-inter font-normal text-[#908D8C]">Once a deal has your attention, DealOS takes over. Pipeline management, evaluation tools, and everything else you need to move fast and close clean.</p>
    </div>
    <div className="w-full max-w-7xl py-5 mx-auto">
        <img src={img} className='w-full h-auto object-cover rounded-lg' />
    </div>
   </section>
  )
}

export default BuyerInfo
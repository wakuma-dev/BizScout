import img from '../../../assets/5c7f7762a10d8d7f2d64249e6876c558.jpg'
import img2 from '../../../assets/61544cdb7afd8c7f7962c07ad426762a.jpg'
import img3 from '../../../assets/86d1a1d738e42cc0335af71fe2d431ad.jpg'
import img4 from '../../../assets/c8b6337757992b2d470611736191923c.jpg'
import img5 from '../../../assets/86dcc26f4354b807cb48258657afe8cd.jpg'
import img6 from '../../../assets/e3887ea6ed6ea175af9550ffd639564b.jpg'
export default function CareersDesc(){
    return(
        <section className="px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#F2EDE5] w-full h-auto min-h-[100dvh]">
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-4 py-3">
            <span className="text-[#9C9A99] text-[11px] uppercase leading-[17px] font-inter font-semibold tracking-wider">How we work</span>
            <h3 className="text-[30px] leading-[38px] lg:text-[56px] lg:leading-[56px] font-lora font-medium text-[#252423]">We Hire Great People Who Do Great Work.</h3>
            <p className="text-[18px] leading-[28px] font-inter font-light text-[#6D6A67]">We look for people who thrive on hard problems, take pride in their craft, and don't need to be managed into doing their best work. We are headquartered in Austin and hire from around the world. If you want to build something that matters alongside a team that moves fast and skips the nonsense, we should talk.</p>
        </div>
        <div className="w-full grid  grid-cols-1 lg:grid-cols-3 h-auto lg:h-[650px] gap-6 py-3">
            <div className="overflow-hidden lg:row-span-[40] rounded-lg">
            <img src={img} className='w-full h-[300px] lg:h-[470px] object-cover rounded-xl'/>
            </div>
            <div className="overflow-hidden  lg:row-span-[60] rounded-lg">
            <img src={img3} className='w-full h-[450px] lg:h-[600px] object-cover rounded-xl'/> 
            </div>
            <div className="overflow-hidden lg:row-span-[35] rounded-lg">
            <img src={img2} className='w-full h-[200px] lg:h-[350px] object-cover rounded-xl'/>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className='overflow-hidden rounded-lg'>
            <img src={img5} className='w-[480px] h-[280px] object-cover rounded-lg'/>
            </div>
            <div className="overflow-hidden  rounded-lg">
            <img src={img4} className='w-[480px] h-[210px] object-cover rounded-lg'/>
             </div>
            <div className="overflow-hidden rounded-lg">
                <img src={img6} className='w-[480px] h-[160px] object-top object-cover rounded-lg' />
            </div>
            
       
       </div>
        </section>
    )
}
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function SellersForm(){
    const [copied, setCopied] = useState<boolean>(false);
    const inviteUrl = "https://www.bizscout.com/brokers?invite=true";

    const handleCopied = async ()=> {
        try {
            await navigator.clipboard.writeText(inviteUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch(err) {
            console.log("failed to copy link", err)
        }
    }

    return(
        <section className="w-full h-auto px-4 md:px-8 lg:px-12 py-8 lg:py-10 bg-[#252423]">
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center gap-5 py-14">
                <h5 className="text-[30px] leading-[38px] font-lora font-normal lg:text-[60px] lg:leading-[60px] text-white">
                    Already Working With a <span className="text-[#ffd08b]">Broker?</span>
                </h5>
                <p className="text-[18px] leading-[28px] font-normal font-inter text-[#777675] max-w-[580px]">
                    Get them on BizScout. Send your broker this link to join the network and list your business on the marketplace.
                </p>
                
                {/* 1. Added 'flex' and polished padding/alignments */}
                <div className="flex flex-col lg:flex-row items-center w-full max-w-xl rounded-xl lg:rounded-full bg-[#302F2E] p-1.5 border border-[#403f3e]">
                    
                    {/* 2. Added truncation classes to keep the text from breaking layout on small screens */}
                    <div className='w-full text-left text-[#dfdedd] px-4 py-3 lg:py-0 text-sm font-mono truncate select-all'>
                        {inviteUrl}
                    </div>
                    
                    {/* 3. Inherited rounded shapes for responsive perfection */}
                    <button 
                        onClick={handleCopied}
                        className={`w-full lg:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg lg:rounded-full text-sm font-medium font-inter transition-all duration-200 shrink-0 ${
                            copied 
                            ? 'bg-[#C4963C] text-black border border-green-500/30' 
                            : 'bg-[#ffd08b] text-[#252423] hover:bg-[#e6bb7d] active:scale-[0.98]'
                        }`}
                    >
                        {copied ? (
                            <>
                                <Check size={16} />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={16} />
                                <span>Copy Link</span>
                            </>
                        )}
                    </button>
                </div>
            
            </div>
        </section>
    )
}
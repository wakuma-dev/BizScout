interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: ()=> void;
  disabled: boolean;
  className?: string;
}

export default function SeButton({text, onClick, disabled, className="", ...props}: ButtonProps){
    return(
        <button
          {...props}
          onClick={onClick}
          disabled={disabled}
          className={`cursor-pointer rounded-full bg-[#252423] border border-zinc-500 
            text-[14px] leading-[20px] font-normal font-inter px-8 py-3.5 outline-none ${className}`}
            >
            {text}
            </button>
    )
}
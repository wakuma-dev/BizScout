interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: () => void;
    disabled: boolean;
    className?: string;
}

export default function Button({ text, onClick, disabled, className = "", ...props }: ButtonProps) {
    return (
        <button 
            {...props}
            onClick={onClick}
            disabled={disabled}
            // 💡 Added ${className} to the end of the template literal string below
            className={`cursor-pointer rounded-full bg-[#F2C075] text-[#252423] 
            text-[14px] leading-[20px] font-normal font-inter px-8 py-3.5 outline-none ${className}`}
        >
            {text}
        </button>
    )
}
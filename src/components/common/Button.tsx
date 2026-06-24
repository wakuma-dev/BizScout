interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  text,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-full bg-[#F2C075] text-[#252423]
      text-[16px] leading-[20px] font-medium font-inter px-8 py-2.5 outline-none ${className}`}
    >
      {text}
    </button>
  );
}
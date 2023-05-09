import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button = ({ className = "", href = "", onClick, children }: Props) => {
  const className2 = `relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-transparent border border-blue-700 rounded-lg group ${className}`;
  return href ? (
    <Link href={href} className={className2}>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-full group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
      <span className="relative">{children}</span>
    </Link>
  ) : (
    <button onClick={onClick && onClick} className={className2}>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-full group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 "></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;

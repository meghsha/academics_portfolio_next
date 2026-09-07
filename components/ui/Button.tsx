import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-sage-dark text-ivory hover:bg-sage border border-sage-dark hover:border-sage",
  secondary:
    "bg-gold text-charcoal hover:bg-gold-muted border border-gold hover:border-gold-muted",
  outline:
    "bg-transparent text-sage-dark border border-sage hover:bg-sage/10",
  ghost: "bg-transparent text-sage-dark hover:bg-sage/10 border border-transparent",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-serif tracking-wide transition-all duration-300 rounded-sm",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

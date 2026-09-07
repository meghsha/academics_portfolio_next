import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "gold" | "sage";
  className?: string;
};

const variants = {
  default: "bg-beige text-charcoal border-beige-warm",
  gold: "bg-gold/15 text-gold-muted border-gold/30",
  sage: "bg-sage/10 text-sage-dark border-sage/25",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

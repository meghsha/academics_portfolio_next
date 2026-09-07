import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-beige bg-ivory p-6 md:p-8",
        hover &&
          "transition-all duration-300 hover:border-sage-light hover:shadow-[0_8px_30px_rgba(139,154,123,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}

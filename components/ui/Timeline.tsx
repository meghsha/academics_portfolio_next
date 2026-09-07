import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";

type TimelineItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="absolute left-0 top-0 h-full w-px bg-beige-warm md:left-[4.5rem]"
        aria-hidden="true"
      />
      <div className="space-y-10">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.1}>
            <div className="relative pl-8 md:grid md:grid-cols-[7rem_1fr] md:gap-8 md:pl-0">
              <div className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-gold bg-ivory md:left-[4.5rem]" />
              <time className="mb-2 block font-serif text-lg text-gold md:mb-0 md:text-right md:pt-0.5">
                {item.year}
              </time>
              <div>
                <h3 className="font-serif text-xl text-charcoal">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-sage-dark">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

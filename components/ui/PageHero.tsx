import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-beige bg-gradient-to-b from-beige/40 to-ivory pt-32 pb-16 md:pt-40 md:pb-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

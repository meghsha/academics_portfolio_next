import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { featuredResearch } from "@/lib/data/content";

export function FeaturedResearch() {
  return (
    <section
      className="border-y border-beige bg-gradient-to-br from-sage/5 via-ivory to-beige/20 py-20 md:py-28"
      aria-labelledby="featured-research-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <Badge variant="sage" className="mb-4">
              Featured Research
            </Badge>
            <SectionHeading title={featuredResearch.title} />
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              {featuredResearch.description}
            </p>
            <ul className="mt-6 space-y-3">
              {featuredResearch.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
            <Link
              href={featuredResearch.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-gold"
            >
              Explore Research
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="relative rounded-sm border border-beige bg-ivory p-8 md:p-10">
              <div
                className="absolute -right-3 -top-3 h-full w-full rounded-sm border border-gold/20"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                  PhD Research Focus
                </p>
                <blockquote className="mt-4 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
                  &ldquo;Validating ancient dietary wisdom through modern
                  inflammation science.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm text-text-muted">
                  — Chetna Vats, PhD Scholar
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { biography } from "@/lib/data/content";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="about-preview-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Bridging Science & Tradition"
              description={biography.intro}
            />
            <Button href="/about" variant="outline" className="mt-8">
              Read Full Biography
            </Button>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="space-y-6 border-l-2 border-gold/40 pl-8">
              {biography.paragraphs.slice(0, 2).map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-base leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-sage-dark transition-colors hover:text-gold"
              >
                Continue reading
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

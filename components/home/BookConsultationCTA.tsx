import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function BookConsultationCTA() {
  return (
    <section
      className="bg-sage-dark py-20 md:py-24"
      aria-labelledby="cta-heading"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Explore Academic Work
            </p>
            <h2
              id="cta-heading"
              className="font-serif text-3xl text-ivory md:text-4xl"
            >
              Access Research and Publications
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/75">
              Explore Vats's research, publications, and contributions to nutritional science.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/research" variant="secondary" size="lg">
                View Research
              </Button>
              <Button
                href="/publications"
                variant="ghost"
                size="lg"
                className="border-ivory/30 text-ivory hover:bg-ivory/10"
              >
                View Publications
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

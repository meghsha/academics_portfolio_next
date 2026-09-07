import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChooseReasons } from "@/lib/data/content";

export function WhyChooseMe() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="why-choose-heading">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <SectionHeading
              eyebrow="Academic Strengths"
              title="A Distinctive Approach to Nutrition Research"
              description="Combining rigorous clinical science with Ayurvedic dietary wisdom for advancing nutritional science."
            />
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-3">
            {whyChooseReasons.map((reason, index) => (
              <FadeIn key={reason.title} delay={index * 0.1}>
                <div className="group">
                  <span className="font-serif text-3xl text-gold/60 transition-colors group-hover:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {reason.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { academicAchievements } from "@/lib/data/content";

export function AcademicRecognitions() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="academic-recognitions-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Academic Recognitions"
            title="Awards and Honors"
            description="Recognitions for academic excellence and contributions to nutrition science."
            align="center"
            className="mx-auto mb-14"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {academicAchievements.map((recognition, index) => (
            <FadeIn key={recognition.title} delay={index * 0.1}>
              <Card className="flex h-full flex-col">
                <svg
                  className="mb-4 h-8 w-8 text-gold/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="flex-1 text-sm leading-relaxed text-text-muted italic">
                  &ldquo;{recognition.description}&rdquo;
                </blockquote>
                <footer className="mt-6 border-t border-beige pt-4 text-xs font-medium text-sage-dark">
                  {recognition.title}
                </footer>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
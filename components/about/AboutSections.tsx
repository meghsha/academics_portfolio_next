import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Timeline } from "@/components/ui/Timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  biography,
  educationTimeline,
  academicAchievements,
  clinicalPhilosophy,
} from "@/lib/data/content";

export function Biography() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="biography-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Biography"
            title="A Life Dedicated to Nutritional Science"
          />
        </FadeIn>
        <div className="mt-10 max-w-3xl space-y-6">
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-charcoal">{biography.intro}</p>
          </FadeIn>
          {biography.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph.slice(0, 40)} delay={0.15 + index * 0.05}>
              <p className="text-base leading-relaxed text-text-muted">{paragraph}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <section
      className="border-t border-beige bg-beige/10 py-16 md:py-20"
      aria-labelledby="education-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Education"
            title="Academic Journey"
            description="A foundation built on rigorous academic training in clinical nutrition and Ayurvedic dietetics."
          />
        </FadeIn>
        <div className="mt-12">
          <Timeline items={educationTimeline} />
        </div>
      </Container>
    </section>
  );
}

export function AcademicAchievements() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="achievements-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Achievements"
            title="Academic & Professional Milestones"
          />
        </FadeIn>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {academicAchievements.map((achievement, index) => (
            <FadeIn key={achievement.title} delay={index * 0.05}>
              <li className="flex items-start gap-3 rounded-sm border border-beige bg-ivory p-5">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span className="text-sm text-text-muted">{achievement.title}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ClinicalPhilosophy() {
  return (
    <section
      className="border-t border-beige bg-beige/10 py-16 md:py-20"
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Philosophy"
            title={clinicalPhilosophy.title}
            description="The principles that guide every clinical interaction and research endeavor."
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {clinicalPhilosophy.principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={index * 0.1}>
              <Card hover className="h-full">
                <h3 className="font-serif text-xl text-charcoal">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {principle.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

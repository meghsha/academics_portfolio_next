"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="py-16 md:py-20"
      aria-labelledby="achievements-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Achievements"
            title="Awards and Honors"
          />
        </FadeIn>

        <div className="mt-10 grid items-start gap-4 sm:grid-cols-2">
          {academicAchievements.map((achievement, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={achievement.title} delay={index * 0.05}>
                <div className="overflow-hidden rounded-sm border border-beige bg-ivory">
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="
                      flex w-full items-center gap-3
                      p-5 text-left
                      transition-colors duration-200
                      hover:bg-beige/20
                    "
                  >
                    {/* Gold dot */}
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-gold"
                      aria-hidden="true"
                    />
                    {/* Title */}
                    <span className="flex-1 text-sm text-text-muted">
                      {achievement.title}
                    </span>
                    {/* Arrow */}
                    <ChevronDown
                      size={17}
                      className={`
                        shrink-0 text-sage
                        transition-transform duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>
                  {/* Accordion Content */}
                  <div
                    className={`
                      grid transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-beige/70 px-5 py-4">
                        <p className="pl-5 text-sm leading-relaxed text-text-muted">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
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

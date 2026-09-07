import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import {
  phdResearch,
  publications,
  conferences,
  researchInterests,
} from "@/lib/data/content";

export function PhDResearch() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="phd-research-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={phdResearch.title}
            title={phdResearch.subtitle}
            description={phdResearch.overview}
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <Card>
              <h3 className="font-serif text-xl text-charcoal">
                Research Objectives
              </h3>
              <ul className="mt-4 space-y-3">
                {phdResearch.objectives.map((objective) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 text-sm text-text-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                      aria-hidden="true"
                    />
                    {objective}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card>
              <h3 className="font-serif text-xl text-charcoal">Methodology</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {phdResearch.methodology}
              </p>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function SattvikDietaryProxies() {
  return (
    <section
      className="border-y border-beige bg-gradient-to-br from-sage/5 to-beige/15 py-16 md:py-20"
      aria-labelledby="sattvik-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Badge variant="gold" className="mb-4">
              Core Research Theme
            </Badge>
            <h2
              id="sattvik-heading"
              className="font-serif text-3xl text-charcoal md:text-4xl"
            >
              Sattvik Dietary Proxies & Systemic Inflammation
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              This research explores whether the ancient Ayurvedic classification
              of Sattvik foods — those considered pure, light, and
              health-promoting — can serve as reliable dietary proxies for
              anti-inflammatory eating patterns, validated through contemporary
              biomarker analysis including CRP, IL-6, and TNF-α.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function PublicationsList() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="publications-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Publications"
            title="Peer-Reviewed Work"
            description="Selected publications contributing to the field of clinical nutrition and integrative dietetics."
          />
        </FadeIn>
        <div className="mt-10 space-y-6">
          {publications.map((pub, index) => (
            <FadeIn key={pub.title} delay={index * 0.08}>
              <Card hover>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="sage" className="mb-3">
                      {pub.type}
                    </Badge>
                    <h3 className="font-serif text-lg text-charcoal md:text-xl">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">{pub.authors}</p>
                    <p className="mt-1 text-sm italic text-sage-dark">
                      {pub.journal}, {pub.year}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ConferencesList() {
  return (
    <section
      className="border-t border-beige bg-beige/10 py-16 md:py-20"
      aria-labelledby="conferences-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Conferences"
            title="Presentations & Speaking"
            description="Contributions to national and international nutrition and integrative medicine forums."
          />
        </FadeIn>
        <div className="mt-10 space-y-4">
          {conferences.map((conf, index) => (
            <FadeIn key={conf.title} delay={index * 0.08}>
              <div className="flex flex-col gap-2 rounded-sm border border-beige bg-ivory p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif text-lg text-charcoal">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{conf.event}</p>
                  {conf.location && <p className="mt-1 text-sm text-text-muted">{conf.location}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="gold">{conf.role}</Badge>
                  <span className="text-sm font-medium text-sage-dark">
                    {conf.year}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ResearchInterests() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="interests-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Interests"
            title="Research Interests"
            align="center"
            className="mx-auto"
          />
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {researchInterests.map((interest, index) => (
            <FadeIn key={interest} delay={index * 0.05} direction="none">
              <span className="rounded-full border border-beige-warm bg-ivory px-5 py-2.5 text-sm text-sage-dark">
                {interest}
              </span>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

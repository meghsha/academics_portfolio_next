import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { credentials, siteConfig } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,154,123,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Clinical Nutritionist & PhD Scholar
            </p>
            <h1 className="font-serif text-4xl leading-[1.15] text-charcoal md:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/research" size="lg">
                Explore Research
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-sm border border-beige-warm/50" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-beige to-beige-warm/60">
                <div className="text-center p-8">
                  <img src="/photos/profile.jpg" alt="Professional photo of Chetna Vats" className="mx-auto w-115 rounded-full border-2 border-sage/30" />
                  <p className="mt-4 font-serif text-lg text-sage-dark">
                    Chetna Vats
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {siteConfig.title}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

export function CredentialsStrip() {
  return (
    <section
      className="border-y border-beige bg-beige/20 py-8"
      aria-label="Credentials"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {credentials.map((credential, index) => (
            <FadeIn key={credential} delay={index * 0.05} direction="none">
              <div className="flex items-center gap-3">
                {index > 0 && (
                  <span
                    className="hidden h-1 w-1 rounded-full bg-gold sm:block"
                    aria-hidden="true"
                  />
                )}
                <span className="text-sm tracking-wide text-sage-dark md:text-base">
                  {credential}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

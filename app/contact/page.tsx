import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/lib/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Chetna Vats — Clinical Nutritionist and PhD Scholar. Get in touch for personalized nutrition care.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a Consultation"
        description="Take the first step toward evidence-based, personalized nutrition care. Reach out to schedule your consultation."
      />
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl text-charcoal">
                  Get in Touch
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  Whether you&apos;re seeking clinical nutrition guidance,
                  research collaboration, or corporate wellness programs, I&apos;d
                  be delighted to hear from you.
                </p>
                <dl className="mt-8 space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gold">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sage-dark transition-colors hover:text-gold"
                      >
                        {siteConfig.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-gold">
                      Location
                    </dt>
                    <dd className="mt-1 text-text-muted">{siteConfig.location}</dd>
                  </div>
                </dl>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card>
                <h2 className="font-serif text-xl text-charcoal">
                  Send a Message
                </h2>
                <form className="mt-6 space-y-5" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-sm border border-beige bg-ivory px-4 py-2.5 text-sm text-charcoal transition-colors focus:border-sage focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="mt-1.5 w-full rounded-sm border border-beige bg-ivory px-4 py-2.5 text-sm text-charcoal transition-colors focus:border-sage focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1.5 w-full rounded-sm border border-beige bg-ivory px-4 py-2.5 text-sm text-charcoal transition-colors focus:border-sage focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="assessment">Initial Clinical Assessment</option>
                      <option value="therapeutic">Therapeutic Diet Planning</option>
                      <option value="ayurvedic">Ayurvedic Nutrition Consultation</option>
                      <option value="followup">Follow-Up & Monitoring</option>
                      <option value="corporate">Corporate Wellness</option>
                      <option value="research">Research Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1.5 w-full resize-y rounded-sm border border-beige bg-ivory px-4 py-2.5 text-sm text-charcoal transition-colors focus:border-sage focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-sm bg-sage-dark px-7 py-3 text-sm font-serif tracking-wide text-ivory transition-colors hover:bg-sage"
                  >
                    Send Message
                  </button>
                </form>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}

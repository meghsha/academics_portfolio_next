"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { credentials, siteConfig } from "@/lib/data/site";
import { useEffect, useState } from "react";

const imagePaths = [
  "/photos/img1.jpg",
  "/photos/img2.jpg",
  "/photos/img3.jpg",
  "/photos/img4.jpg",
  "/photos/img5.jpg",
  "/photos/img6.jpeg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Automatically change image every 3 seconds
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + imagePaths.length) % imagePaths.length
    );
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background effect */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,154,123,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <FadeIn  style={{marginTop: "-6rem"}}>
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

          {/* RIGHT SIDE */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              {/* Outer border */}
              <div className="pointer-events-none absolute -inset-4 rounded-sm border border-beige-warm/50" />

              {/* Beige photo card */}
              <div
                className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br from-beige to-beige-warm/60 px-3 py-5"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* =========================
                    FIXED OVAL CAROUSEL
                ========================== */}
                <div className="relative h-[88%] w-[88%] shrink-0 overflow-hidden rounded-full border-2 border-sage/30 bg-beige">
                  {imagePaths.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Professional photo of Chetna Vats ${index + 1}`}
                      className={`
                        absolute inset-0
                        h-full w-full object-cover object-center
                        transition-opacity duration-700 ease-in-out
                        ${
                          index === currentIndex
                            ? "opacity-100"
                            : "opacity-0"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* Previous button */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="
                    absolute left-2 top-1/2 z-20
                    flex h-9 w-9 -translate-y-1/2
                    items-center justify-center rounded-full
                    bg-white/70 text-xl text-sage-dark
                    shadow-sm backdrop-blur-sm
                    transition hover:bg-white
                  "
                >
                  ‹
                </button>

                {/* Next button */}
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="
                    absolute right-2 top-1/2 z-20
                    flex h-9 w-9 -translate-y-1/2
                    items-center justify-center rounded-full
                    bg-white/70 text-xl text-sage-dark
                    shadow-sm backdrop-blur-sm
                    transition hover:bg-white
                  "
                >
                  ›
                </button>

                {/* TITLE - KEEPING THIS */}
                <div className="mt-4 text-center">
                  <p className="font-serif text-lg text-sage-dark">
                    Chetna Vats
                  </p>

                  <p className="mt-1 text-sm text-text-muted">
                    {siteConfig.title}
                  </p>
                </div>

                {/* Carousel dots */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  {imagePaths.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Show image ${index + 1}`}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        ${
                          index === currentIndex
                            ? "w-5 bg-sage"
                            : "w-2 bg-sage/30 hover:bg-sage/50"
                        }
                      `}
                    />
                  ))}
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
            <FadeIn
              key={credential}
              delay={index * 0.05}
              direction="none"
            >
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
import { Hero, CredentialsStrip } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ExpertiseCards } from "@/components/home/ExpertiseCards";
import { FeaturedResearch } from "@/components/home/FeaturedResearch";
import { BookConsultationCTA } from "@/components/home/BookConsultationCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredentialsStrip />
      <AboutPreview />
      <ExpertiseCards />
      <FeaturedResearch />
      <BookConsultationCTA />
    </>
  );
}

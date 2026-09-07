import { PageHero } from "@/components/ui/PageHero";
import {
  Biography,
  EducationTimeline,
  AcademicAchievements,
  ClinicalPhilosophy,
} from "@/components/about/AboutSections";
import { BookConsultationCTA } from "@/components/home/BookConsultationCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about Chetna Vats — Clinical Nutritionist, PhD Scholar, and specialist in evidence-based nutrition integrated with Ayurvedic dietary principles.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Chetna Vats"
        description="Clinical Nutritionist and PhD Scholar dedicated to bridging evidence-based nutrition with Ayurvedic dietary science."
      />
      <Biography />
      <EducationTimeline />
      <AcademicAchievements />
      <ClinicalPhilosophy />
      <BookConsultationCTA />
    </>
  );
}

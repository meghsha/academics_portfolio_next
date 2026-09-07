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
    "Learn about Chetna Vats — Nutrition Researcher and Clinical Dietitian specializing in integrative nutrition, Ayurvedic dietary science, gut health, and inflammation research.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Chetna Vats"
        description="Nutrition Researcher and Clinical Dietitian dedicated to bridging integrative nutrition with Ayurvedic dietary science."
      />
      <Biography />
      <EducationTimeline />
      <AcademicAchievements />
      <ClinicalPhilosophy />
      <BookConsultationCTA />
    </>
  );
}

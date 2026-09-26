import { PageHero } from "@/components/ui/PageHero";
import {
  PhDResearch,
  SattvikDietaryProxies,
  PublicationsList,
  ConferencesList,
  ResearchInterests,
} from "@/components/research/ResearchSections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Research",
  description:
    "PhD research on Sattvic dietary proxies and systemic inflammation. Publications, conferences, and research interests of Chetna Vats.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Advancing Nutritional Science"
        description="PhD research at the intersection of Ayurvedic dietetics, dietary proxy development, and systemic inflammation biomarkers."
      />
      <PhDResearch />
      <SattvikDietaryProxies />
      <PublicationsList />
      <ConferencesList />
      <ResearchInterests />
    </>
  );
}

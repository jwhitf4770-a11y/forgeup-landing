import { StoryTemplate } from "@/components/StoryTemplate";
import { getCompetitorBySlug } from "@/lib/stories";

export const metadata = {
  title: "Lucas H. — Strongman Competition | ForgeUp",
  description:
    "Three events fail, two succeed. Milo trained events differently. All five improved.",
  openGraph: {
    title: "Lucas H. — Strongman Competition",
    description:
      "Strongman athlete. Inconsistent across events. Learned that weak events need specificity, strong events need speed.",
    type: "article",
  },
};

export default function Page() {
  const story = getCompetitorBySlug("lucas-h-strongman");
  if (!story) return null;
  return <StoryTemplate story={story} />;
}
